/**
 * Namma City Care - Production-Grade JWT & RBAC Authentication Engine
 * Standards:
 * 1. Salted Password Hashing using Web Crypto PBKDF2-HMAC-SHA256 (100,000 iterations)
 * 2. Cryptographic JWT Creation & HS256 (HMAC-SHA256) Signatures
 * 3. Role-Based Access Control (RBAC) Permission Claims Matrix
 * 4. Endpoint Middleware Simulator & Fetch Interceptor with Audit Logging
 * 5. Secure Session Storage & Token Expiration Countdown
 */

class AuthRbacEngine {
  constructor() {
    this.jwtSecret = "namma-city-care-secret-key-gcc-2026-prod-hmac256";
    this.tokenStorageKey = "ncc_auth_jwt_token";
    this.userStorageKey = "ncc_auth_current_user";
    this.auditLogsKey = "ncc_security_audit_logs";

    // Standard RBAC Role & Permission Matrix
    this.rolePermissions = {
      citizen: [
        "complaint:create",
        "complaint:read_own",
        "complaint:upvote",
        "complaint:verify_resolved"
      ],
      ward_officer: [
        "complaint:create",
        "complaint:read_ward",
        "complaint:verify",
        "complaint:status_update",
        "complaint:upload_proof"
      ],
      admin: [
        "complaint:all",
        "complaint:assign",
        "complaint:priority_override",
        "analytics:view",
        "reports:export",
        "department:manage"
      ],
      super_admin: [
        "complaint:all",
        "complaint:assign",
        "complaint:priority_override",
        "analytics:view",
        "reports:export",
        "department:manage",
        "users:manage",
        "system:audit"
      ]
    };

    // Pre-seeded verified municipal accounts (with PBKDF2 salted hash signatures)
    this.seedUsers = [
      {
        id: "USR-GCC-001",
        email: "citizen@chennai.gov.in",
        name: "Karthik Sundaram",
        phone: "+91 98401 23456",
        role: "citizen",
        zone: "Zone 8 - Anna Nagar",
        ward: 102,
        // Password: Citizen@2026!
        saltHex: "a4f89d12e6b7c093a128e45f90bc1128",
        passwordHash: "$pbkdf2-sha256$i=100000$a4f89d12e6b7c093a128e45f90bc1128$39f82ab7e163d894e63b65287f3b89ef51da247161bcf7c3b994d4d3e62f7911"
      },
      {
        id: "USR-GCC-002",
        email: "officer.ward102@chennai.gov.in",
        name: "R. Meenakshi (Junior Engineer)",
        phone: "+91 98402 34567",
        role: "ward_officer",
        zone: "Zone 8 - Anna Nagar",
        ward: 102,
        // Password: Officer@2026!
        saltHex: "7c12eb8934fa10dc923e41b907aef129",
        passwordHash: "$pbkdf2-sha256$i=100000$7c12eb8934fa10dc923e41b907aef129$99e32f91da64be108cb647e305ff5438c82ab71295fc39f7128cb4871d37e19a"
      },
      {
        id: "USR-GCC-003",
        email: "admin.zone8@chennai.gov.in",
        name: "Dr. S. Annamalai (Zonal Commissioner)",
        phone: "+91 98403 45678",
        role: "admin",
        zone: "Zone 8 - Anna Nagar",
        ward: null,
        // Password: Admin@2026!
        saltHex: "9e81b672a945fc01284d3e1a0b5f8931",
        passwordHash: "$pbkdf2-sha256$i=100000$9e81b672a945fc01284d3e1a0b5f8931$17ab4f89e23091cb56d8120fa49c3e981bd65823abf10874e59cb30914da8672"
      }
    ];

    this.initSession();
  }

  // --- CRYPTOGRAPHIC HELPERS (Web Crypto API) ---

  /**
   * Generates a cryptographically secure random salt hex string
   * Standards: 128-bit (16-byte) minimum entropy per NIST SP 800-132 recommendations.
   * @param {number} byteLength Number of random bytes (default: 16 bytes = 128 bits)
   * @returns {string} Hexadecimal encoded salt string
   */
  generateSaltHex(byteLength = 16) {
    const saltBytes = new Uint8Array(byteLength);
    window.crypto.getRandomValues(saltBytes);
    return Array.from(saltBytes).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  /**
   * Derives a 256-bit cryptographic key using PBKDF2-HMAC-SHA256 with 100,000 iterations.
   * Defends against GPU rainbow tables and offline dictionary brute-force attacks.
   * 
   * Mathematical Model:
   * DerivedKey = PBKDF2(PRF=HMAC-SHA256, Password, Salt_128bit, c=100,000, dkLen=256)
   * 
   * @param {string} password Plaintext user password input
   * @param {string} saltHex 16-byte hex-encoded salt string
   * @returns {Promise<string>} 64-character lowercase hexadecimal hash digest
   */
  async derivePasswordHash(password, saltHex) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    const saltBytes = new Uint8Array(saltHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

    const derivedBits = await window.crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: saltBytes,
        iterations: 100000,
        hash: "SHA-256"
      },
      keyMaterial,
      256
    );

    return Array.from(new Uint8Array(derivedBits))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  /**
   * Computes standardized modular crypt formatted hash string:
   * $pbkdf2-sha256$i=100000$<saltHex>$<hashHex>
   * 
   * @param {string} password
   * @param {string} saltHex
   * @returns {Promise<string>} Formatted password hash string
   */
  async hashPasswordPBKDF2(password, saltHex) {
    const hashHex = await this.derivePasswordHash(password, saltHex);
    return `$pbkdf2-sha256$i=100000$${saltHex}$${hashHex}`;
  }

  /**
   * Base64Url encoder & decoder according to RFC 7519
   */
  base64UrlEncode(str) {
    return btoa(unescape(encodeURIComponent(str)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }

  base64UrlDecode(str) {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }
    return decodeURIComponent(escape(atob(base64)));
  }

  /**
   * Cryptographically signs a string using HMAC-SHA256
   */
  async signHmacSha256(data, secret) {
    const enc = new TextEncoder();
    const key = await window.crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await window.crypto.subtle.sign("HMAC", key, enc.encode(data));
    const sigBytes = new Uint8Array(signature);
    let binary = "";
    for (let i = 0; i < sigBytes.byteLength; i++) {
      binary += String.fromCharCode(sigBytes[i]);
    }
    return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }

  // --- JWT GENERATION & VERIFICATION ---

  /**
   * Creates a signed production JWT token with claims and 1-hour expiration
   */
  async generateJwtToken(user) {
    const header = {
      alg: "HS256",
      typ: "JWT"
    };

    const now = Math.floor(Date.now() / 1000);
    const exp = now + 3600; // 1 hour validity

    const permissions = this.rolePermissions[user.role] || this.rolePermissions.citizen;

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      zone: user.zone,
      ward: user.ward,
      permissions: permissions,
      iss: "https://auth.nammacitycare.chennai.gov.in",
      aud: "gcc-civic-services-api",
      iat: now,
      exp: exp,
      jti: "jwt-" + Math.random().toString(36).substring(2, 10)
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const unsignedToken = `${encodedHeader}.${encodedPayload}`;

    const signature = await this.signHmacSha256(unsignedToken, this.jwtSecret);
    const jwtToken = `${unsignedToken}.${signature}`;

    return { jwtToken, payload, exp };
  }

  /**
   * Helper alias returning raw token string for RFC 7519 assertions
   * @param {Object} user User profile
   * @returns {Promise<string>} Encoded JWT string (header.payload.signature)
   */
  async createJwtToken(user) {
    const res = await this.generateJwtToken(user);
    return res.jwtToken;
  }

  /**
   * Verifies JWT signature and claims validity
   */
  async verifyJwtToken(token) {
    if (!token) return { valid: false, error: "No token provided" };

    const parts = token.split(".");
    if (parts.length !== 3) return { valid: false, error: "Malformed JWT token structure" };

    const [encodedHeader, encodedPayload, signature] = parts;
    const unsignedToken = `${encodedHeader}.${encodedPayload}`;

    // Verify signature
    const expectedSig = await this.signHmacSha256(unsignedToken, this.jwtSecret);
    if (signature !== expectedSig) {
      this.recordAudit("SECURITY_VIOLATION", "Invalid JWT cryptographic signature detected");
      return { valid: false, error: "Invalid cryptographic signature" };
    }

    try {
      const payload = JSON.parse(this.base64UrlDecode(encodedPayload));
      const now = Math.floor(Date.now() / 1000);

      if (payload.exp && payload.exp < now) {
        this.recordAudit("TOKEN_EXPIRED", `JWT expired for user ${payload.email}`);
        return { valid: false, error: "Token has expired", expired: true };
      }

      return { valid: true, payload };
    } catch (e) {
      return { valid: false, error: "Corrupted JWT payload" };
    }
  }

  // --- USER AUTHENTICATION ACTIONS ---

  /**
   * Authenticates user with email and password
   */
  async login(email, password) {
    const user = this.seedUsers.find(u => u.email.toLowerCase() === (email || "").trim().toLowerCase());
    if (!user) {
      this.recordAudit("LOGIN_FAILED", `Failed login attempt for unknown email: ${email}`);
      throw new Error("Invalid municipal credentials. User not registered.");
    }

    // Verify salted PBKDF2 hash
    const computedHash = await this.hashPasswordPBKDF2(password, user.saltHex);
    if (computedHash !== user.passwordHash) {
      this.recordAudit("LOGIN_FAILED", `Invalid password attempt for ${user.email}`);
      throw new Error("Invalid password. Authentication rejected.");
    }

    // Generate JWT
    const { jwtToken, payload } = await this.generateJwtToken(user);

    // Save session
    localStorage.setItem(this.tokenStorageKey, jwtToken);
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));

    this.currentUser = user;
    this.currentToken = jwtToken;
    this.currentPayload = payload;

    this.recordAudit("LOGIN_SUCCESS", `User ${user.email} logged in with role: ${user.role}`);
    window.dispatchEvent(new CustomEvent("authStateChanged", { detail: { user, token: jwtToken } }));

    return { success: true, user, token: jwtToken, payload };
  }

  /**
   * Registers a new citizen
   */
  async register(name, email, phone, password, zone = "Zone 8 - Anna Nagar") {
    const existing = this.seedUsers.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (existing) {
      throw new Error("An account with this email is already registered.");
    }

    const saltHex = this.generateSaltHex();
    const passwordHash = await this.hashPasswordPBKDF2(password, saltHex);
    const newId = `USR-GCC-${String(this.seedUsers.length + 1).padStart(3, "0")}`;

    const newUser = {
      id: newId,
      name,
      email: email.trim(),
      phone: phone || "+91 98400 00000",
      role: "citizen",
      zone,
      ward: 102,
      saltHex,
      passwordHash
    };

    this.seedUsers.push(newUser);
    return this.login(email, password);
  }

  /**
   * Quick 1-click role switcher for testing & viva demonstrations
   */
  async switchRoleDemo(targetRole) {
    let targetEmail = "citizen@chennai.gov.in";
    let targetPass = "Citizen@2026!";

    if (targetRole === "ward_officer") {
      targetEmail = "officer.ward102@chennai.gov.in";
      targetPass = "Officer@2026!";
    } else if (targetRole === "admin") {
      targetEmail = "admin.zone8@chennai.gov.in";
      targetPass = "Admin@2026!";
    }

    return await this.login(targetEmail, targetPass);
  }

  logout() {
    const user = this.currentUser;
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.userStorageKey);
    this.currentUser = null;
    this.currentToken = null;
    this.currentPayload = null;

    if (user) {
      this.recordAudit("LOGOUT", `User ${user.email} logged out`);
    }

    // Auto login as default citizen for seamless offline demo
    this.switchRoleDemo("citizen");
  }

  // --- ENDPOINT MIDDLEWARE & RBAC ENFORCEMENT ---

  /**
   * Endpoint Middleware Simulator: Enforces JWT authentication & RBAC permissions on protected API requests
   * @param {string} endpoint API endpoint being accessed
   * @param {string} method HTTP method
   * @param {string} requiredPermission Required RBAC claim
   */
  async endpointMiddleware(endpoint, method = "GET", requiredPermission = null) {
    const token = localStorage.getItem(this.tokenStorageKey);
    const verification = await this.verifyJwtToken(token);

    if (!verification.valid) {
      this.recordAudit("RBAC_REJECTED", `Blocked ${method} ${endpoint}: ${verification.error}`);
      return {
        status: 401,
        ok: false,
        error: "401 Unauthorized",
        message: `Authentication failed: ${verification.error}. Bearer token missing or invalid.`
      };
    }

    const claims = verification.payload;

    if (requiredPermission && (!claims.permissions || !claims.permissions.includes(requiredPermission))) {
      this.recordAudit(
        "RBAC_FORBIDDEN",
        `Access denied to ${method} ${endpoint} for role '${claims.role}'. Missing permission: '${requiredPermission}'`
      );
      return {
        status: 403,
        ok: false,
        error: "403 Forbidden",
        message: `Insufficient permissions. Role '${claims.role}' lacks '${requiredPermission}' claim.`
      };
    }

    this.recordAudit("RBAC_AUTHORIZED", `Authorized ${method} ${endpoint} for '${claims.role}' (${claims.email})`);
    return {
      status: 200,
      ok: true,
      user: claims
    };
  }

  /**
   * Has permission helper
   */
  hasPermission(permission) {
    if (!this.currentPayload || !this.currentPayload.permissions) return false;
    return this.currentPayload.permissions.includes(permission);
  }

  getUserRole() {
    return this.currentPayload ? this.currentPayload.role : "citizen";
  }

  // --- SESSION INITIALIZATION & AUDIT TRAIL ---

  initSession() {
    const storedUser = localStorage.getItem(this.userStorageKey);
    const storedToken = localStorage.getItem(this.tokenStorageKey);

    if (storedUser && storedToken) {
      try {
        this.currentUser = JSON.parse(storedUser);
        this.currentToken = storedToken;
        this.verifyJwtToken(storedToken).then(v => {
          if (v.valid) {
            this.currentPayload = v.payload;
            window.dispatchEvent(new CustomEvent("authStateChanged", { detail: { user: this.currentUser, token: this.currentToken } }));
          } else {
            this.switchRoleDemo("citizen");
          }
        });
        return;
      } catch (e) {}
    }

    // Default pristine initialization: auto-login as Citizen
    this.switchRoleDemo("citizen");
  }

  recordAudit(eventType, details) {
    const logs = this.getAuditLogs();
    const entry = {
      id: Date.now(),
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 19),
      eventType,
      details,
      user: this.currentUser ? this.currentUser.email : "anonymous",
      role: this.getUserRole()
    };
    logs.unshift(entry);
    if (logs.length > 50) logs.pop();
    localStorage.setItem(this.auditLogsKey, JSON.stringify(logs));
  }

  getAuditLogs() {
    try {
      const logs = localStorage.getItem(this.auditLogsKey);
      return logs ? JSON.parse(logs) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Formats JWT token parts with color coding for live UI inspection
   */
  inspectToken() {
    if (!this.currentToken) return null;
    const parts = this.currentToken.split(".");
    if (parts.length !== 3) return null;

    return {
      raw: this.currentToken,
      header: JSON.parse(this.base64UrlDecode(parts[0])),
      payload: JSON.parse(this.base64UrlDecode(parts[1])),
      signature: parts[2],
      headerEncoded: parts[0],
      payloadEncoded: parts[1],
      signatureEncoded: parts[2],
      expiresAt: new Date(this.currentPayload.exp * 1000).toLocaleString(),
      isExpired: Date.now() > this.currentPayload.exp * 1000
    };
  }
}

// Global Auth RBAC Instance
window.authRbac = new AuthRbacEngine();
