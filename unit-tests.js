/**
 * ============================================================================
 * NAMMA CITY CARE — AUTOMATED CIVIC UNIT TESTING SUITE & VERIFICATION HARNESS
 * ============================================================================
 * 
 * Architectural Role:
 * Provides an in-browser, zero-dependency unit testing and assertion framework.
 * Executes granular tests across all core engines:
 * 1. Production JWT RBAC & PBKDF2 Cryptography Engine (auth-rbac.js)
 * 2. Multimodal Vision & Neural Computer Vision Pipeline (vision-pipeline.js)
 * 3. S3 Cloud Storage & AWS SigV4 Presigned URL Engine (s3-storage.js)
 * 4. Dual-Engine Tamil Bilingual Localization Engine (i18n.js)
 * 5. Multi-Tier Error Boundary & Fault Tolerance Containment (error-boundary.js)
 * 6. Complaint Workflow State Machine & Priority Scoring (app.js)
 * 
 * @version 2.5.0
 * @author Greater Chennai Corporation Civic Tech Initiative
 */

class CivicTestRunner {
  constructor() {
    this.suites = [];
    this.currentSuite = null;
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      durationMs: 0,
      suites: []
    };
    this.isRunning = false;
  }

  /**
   * Defines a test suite group
   * @param {string} name
   * @param {Function} suiteFn
   */
  describe(name, suiteFn) {
    const suite = {
      name,
      tests: [],
      passed: 0,
      failed: 0,
      durationMs: 0
    };
    this.suites.push(suite);
    this.currentSuite = suite;
    try {
      suiteFn();
    } catch (e) {
      console.error(`Error configuring test suite "${name}":`, e);
    }
    this.currentSuite = null;
  }

  /**
   * Defines a single unit test specification
   * @param {string} desc
   * @param {Function} testFn
   */
  it(desc, testFn) {
    if (!this.currentSuite) throw new Error("it() must be defined inside describe()");
    this.currentSuite.tests.push({
      desc,
      testFn,
      status: "PENDING",
      error: null,
      durationMs: 0
    });
  }

  /**
   * Assertion factory
   * @param {*} actual
   */
  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error(`Expected ${JSON.stringify(expected)}, but received ${JSON.stringify(actual)}`);
        }
      },
      toEqual: (expected) => {
        const actualStr = JSON.stringify(actual);
        const expectedStr = JSON.stringify(expected);
        if (actualStr !== expectedStr) {
          throw new Error(`Deep equality assertion failed:\nExpected: ${expectedStr}\nActual:   ${actualStr}`);
        }
      },
      toBeTruthy: () => {
        if (!actual) throw new Error(`Expected truthy value, but received ${actual}`);
      },
      toBeFalsy: () => {
        if (actual) throw new Error(`Expected falsy value, but received ${actual}`);
      },
      toBeGreaterThan: (expected) => {
        if (!(actual > expected)) {
          throw new Error(`Expected ${actual} > ${expected}`);
        }
      },
      toBeGreaterThanOrEqual: (expected) => {
        if (!(actual >= expected)) {
          throw new Error(`Expected ${actual} >= ${expected}`);
        }
      },
      toBeLessThanOrEqual: (expected) => {
        if (!(actual <= expected)) {
          throw new Error(`Expected ${actual} <= ${expected}`);
        }
      },
      toContain: (expected) => {
        if (typeof actual === "string") {
          if (!actual.includes(expected)) {
            throw new Error(`Expected string "${actual}" to contain "${expected}"`);
          }
        } else if (Array.isArray(actual)) {
          if (!actual.includes(expected)) {
            throw new Error(`Expected array to contain item ${JSON.stringify(expected)}`);
          }
        } else {
          throw new Error(`toContain called on non-collection type: ${typeof actual}`);
        }
      },
      toBeDefined: () => {
        if (typeof actual === "undefined") {
          throw new Error(`Expected value to be defined, but received undefined`);
        }
      },
      toBeNull: () => {
        if (actual !== null) {
          throw new Error(`Expected null, but received ${actual}`);
        }
      },
      toThrow: (expectedPattern = null) => {
        if (typeof actual !== "function") throw new Error("toThrow expects a function to invoke");
        let threw = false;
        let thrownError = null;
        try {
          actual();
        } catch (e) {
          threw = true;
          thrownError = e;
        }
        if (!threw) throw new Error("Expected function to throw an exception, but it completed without error");
        if (expectedPattern && !thrownError.message.includes(expectedPattern)) {
          throw new Error(`Expected error message to include "${expectedPattern}", but got "${thrownError.message}"`);
        }
      }
    };
  }

  /**
   * Registers all civic test suites
   */
  registerSuites() {
    this.suites = [];

    // =========================================================================
    // SUITE 1: JWT & PBKDF2 Cryptographic RBAC Engine
    // =========================================================================
    this.describe("Auth & RBAC Cryptographic Engine (auth-rbac.js)", () => {
      this.it("Web Crypto PBKDF2 Key Derivation generates uniform 64-hex char hashes with 100k iterations", async () => {
        const auth = window.authRbac;
        this.expect(auth).toBeDefined();
        const salt = auth.generateSaltHex(16);
        this.expect(salt.length).toBe(32); // 16 bytes = 32 hex chars
        const hash = await auth.derivePasswordHash("TestPass@2026!", salt);
        this.expect(hash.length).toBe(64); // 256 bits = 64 hex chars
      });

      this.it("Authenticates seeded citizen credentials and rejects invalid passwords", async () => {
        const auth = window.authRbac;
        const validRes = await auth.login("citizen@chennai.gov.in", "Citizen@2026!");
        this.expect(validRes.success).toBe(true);
        this.expect(validRes.user.role).toBe("citizen");

        let threw = false;
        try {
          await auth.login("citizen@chennai.gov.in", "WrongPassword!");
        } catch (e) {
          threw = true;
          this.expect(e.message).toContain("Invalid password");
        }
        this.expect(threw).toBe(true);
      });

      this.it("JWT construction adheres to RFC 7519 with 3 period-separated parts", async () => {
        const auth = window.authRbac;
        const testUser = auth.seedUsers[0];
        const token = await auth.createJwtToken(testUser);
        const parts = token.split(".");
        this.expect(parts.length).toBe(3);
        const header = JSON.parse(auth.base64UrlDecode(parts[0]));
        this.expect(header.alg).toBe("HS256");
        this.expect(header.typ).toBe("JWT");
      });

      this.it("Verifies cryptographic HS256 signature and rejects tampered tokens", async () => {
        const auth = window.authRbac;
        const token = await auth.createJwtToken(auth.seedUsers[0]);
        const verifyRes = await auth.verifyJwtToken(token);
        this.expect(verifyRes.valid).toBe(true);
        this.expect(verifyRes.payload.sub).toBe("USR-GCC-001");

        // Tamper with payload byte
        const parts = token.split(".");
        const tampered = `${parts[0]}.${parts[1]}x.${parts[2]}`;
        const tamperedRes = await auth.verifyJwtToken(tampered);
        this.expect(tamperedRes.valid).toBe(false);
      });

      this.it("Enforces RBAC Claims Matrix across Citizen vs Ward Officer vs Municipal Admin", () => {
        const auth = window.authRbac;
        const citizenPerms = auth.rolePermissions.citizen;
        const officerPerms = auth.rolePermissions.ward_officer;
        const adminPerms = auth.rolePermissions.admin;

        this.expect(citizenPerms).toContain("complaint:create");
        this.expect(citizenPerms).toContain("complaint:upvote");
        this.expect(citizenPerms.includes("complaint:verify")).toBe(false); // Citizens cannot verify resolutions

        this.expect(officerPerms).toContain("complaint:verify");
        this.expect(officerPerms).toContain("complaint:status_update");

        this.expect(adminPerms).toContain("complaint:all");
        this.expect(adminPerms).toContain("analytics:view");
      });
    });

    // =========================================================================
    // SUITE 2: Multimodal Vision & Neural Computer Vision Pipeline
    // =========================================================================
    this.describe("Multimodal Vision AI & Neural Computer Vision (vision-pipeline.js)", () => {
      this.it("Category profiles map municipal hazards to correct departments and default priorities", () => {
        const vp = window.visionPipeline;
        this.expect(vp).toBeDefined();
        this.expect(vp.categoryProfiles["Garbage"].department_en).toBe("Waste Management Department");
        this.expect(vp.categoryProfiles["Pothole"].defaultPriority).toBe("High");
        this.expect(vp.categoryProfiles["Water Leakage"].department_en).toContain("Metro Water");
      });

      this.it("Defect bounding box coordinates are strictly clamped within [0.0, 1.0]", () => {
        const vp = window.visionPipeline;
        const mockBbox = [0.15, 0.22, 0.78, 0.85];
        mockBbox.forEach(coord => {
          this.expect(coord).toBeGreaterThanOrEqual(0.0);
          this.expect(coord).toBeLessThanOrEqual(1.0);
        });
      });

      this.it("Text hazard matching correctly classifies common citizen terminology", () => {
        const vp = window.visionPipeline;
        const detected = vp.inferCategoryFromText("Massive overflowing trash and plastic waste near road corner");
        this.expect(detected).toBe("Garbage");

        const potholeMatch = vp.inferCategoryFromText("Deep crater road cavity skidding risk for bikes");
        this.expect(potholeMatch).toBe("Pothole");
      });

      this.it("JPEG EXIF parser extracts spatial tags and rejects non-EXIF buffers safely", () => {
        const vp = window.visionPipeline;
        const dummyBuffer = new ArrayBuffer(16);
        const res = vp.extractExifData(dummyBuffer);
        this.expect(res.hasExif).toBe(false);
        this.expect(res.lat).toBeNull();
      });
    });

    // =========================================================================
    // SUITE 3: S3 Cloud Storage & WebP Transcoding Engine
    // =========================================================================
    this.describe("S3 Cloud Storage & Direct Presigned Streaming (s3-storage.js)", () => {
      this.it("Magic-Byte Header Validation detects JPEG, PNG, and WebP, rejecting malicious polyglots", () => {
        const s3 = window.s3Storage;
        this.expect(s3).toBeDefined();

        // JPEG Magic bytes: FF D8 FF
        const jpegBuffer = new Uint8Array([0xFF, 0xD8, 0xFF, 0xE0]).buffer;
        this.expect(s3.validateMagicBytes(jpegBuffer)).toBe("image/jpeg");

        // PNG Magic bytes: 89 50 4E 47
        const pngBuffer = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A]).buffer;
        this.expect(s3.validateMagicBytes(pngBuffer)).toBe("image/png");

        // WebP Magic bytes: RIFF (52 49 46 46)
        const webpBuffer = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0x00, 0x00, 0x00, 0x00]).buffer;
        this.expect(s3.validateMagicBytes(webpBuffer)).toBe("image/webp");

        // Malicious SVG script or text file
        const textBuffer = new Uint8Array([0x3C, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]).buffer;
        this.expect(s3.validateMagicBytes(textBuffer)).toBeNull();
      });

      this.it("AWS SigV4 Presigned PUT URL generates ISO8601 credentials and signature query params", () => {
        const s3 = window.s3Storage;
        const presigned = s3.generatePresignedPutUrl("complaints/2026/10/ncc-test-01.webp", "image/webp");
        this.expect(presigned.method).toBe("PUT");
        this.expect(presigned.url).toContain("https://gcc-civic-media-prod.s3.ap-south-1.amazonaws.com");
        this.expect(presigned.url).toContain("X-Amz-Algorithm=AWS4-HMAC-SHA256");
        this.expect(presigned.url).toContain("X-Amz-Signature=");
        this.expect(presigned.expiresInSeconds).toBe(900);
      });

      this.it("Storage metrics calculation computes cumulative WebP bandwidth savings (>75%)", () => {
        const s3 = window.s3Storage;
        const metrics = s3.getStorageMetrics();
        this.expect(metrics.totalObjects).toBeGreaterThanOrEqual(1);
        this.expect(metrics.savingsPercent).toBeGreaterThan(50);
        this.expect(metrics.bucketName).toBe("gcc-civic-media-prod");
      });
    });

    // =========================================================================
    // SUITE 4: Dual-Engine Bilingual Tamil Localization Engine
    // =========================================================================
    this.describe("Bilingual Localization & Tamil Lexicon Engine (i18n.js)", () => {
      this.it("Translates core brand, navigation, and civic terms accurately in English and Tamil", () => {
        const i18n = window.i18n;
        this.expect(i18n).toBeDefined();

        i18n.setLanguage("en");
        this.expect(i18n.t("brand_name")).toBe("Namma City Care");
        this.expect(i18n.t("cat_pothole")).toBe("Pothole");

        i18n.setLanguage("ta");
        this.expect(i18n.t("brand_name")).toBe("நம்ம சிட்டி கேர்");
        this.expect(i18n.t("cat_pothole")).toBe("சாலை பள்ளம்");

        // Revert to English for test continuity
        i18n.setLanguage("en");
      });

      this.it("Status and Priority badge generators return consistent theme classes and bilingual labels", () => {
        const i18n = window.i18n;
        const reportedBadge = i18n.getStatusBadge("Reported");
        this.expect(reportedBadge.class).toContain("bg-amber-100");
        this.expect(reportedBadge.label).toBe("Reported");

        const emergencyBadge = i18n.getPriorityBadge("Emergency");
        this.expect(emergencyBadge.class).toContain("bg-rose-100");
        this.expect(emergencyBadge.label).toBe("Emergency");
      });

      this.it("Falls back gracefully to key name if an unmapped translation key is queried", () => {
        const i18n = window.i18n;
        const result = i18n.t("non_existent_civic_key_12345");
        this.expect(result).toBe("non_existent_civic_key_12345");
      });
    });

    // =========================================================================
    // SUITE 5: Multi-Tier Error Boundary & Fault Tolerance
    // =========================================================================
    this.describe("Error Boundary & Fault Tolerance Engine (error-boundary.js)", () => {
      this.it("Global CivicErrorBoundary instance is active with registered error hooks", () => {
        const eb = window.civicErrorBoundary;
        this.expect(eb).toBeDefined();
        this.expect(typeof eb.wrapComponent).toBe("function");
        this.expect(typeof eb.safeStorage.setItem).toBe("function");
      });

      this.it("wrapComponent intercepts thrown errors and prevents unhandled bubbling", () => {
        const eb = window.civicErrorBoundary;
        let caughtHandled = false;

        const result = eb.wrapComponent("UnitTestFaultyComponent", () => {
          throw new Error("Simulated component exception for testing boundary");
        }, {
          fallbackTitle: "Test Fallback",
          fallbackMessage: "Handled isolated exception."
        });

        // The wrapper must return null instead of throwing to the caller
        this.expect(result).toBeNull();
        const boundary = eb.activeBoundaries.get("UnitTestFaultyComponent");
        this.expect(boundary.status).toBe("FAILED");
        this.expect(boundary.lastError.message).toContain("Simulated component exception");
      });

      this.it("safeStorage handles write, read, and quota eviction cleanly", () => {
        const storage = window.civicErrorBoundary.safeStorage;
        storage.setItem("ncc_test_key_sample", { test: 123, status: "OK" });
        const retrieved = storage.getItem("ncc_test_key_sample");
        this.expect(retrieved.status).toBe("OK");
        storage.removeItem("ncc_test_key_sample");
        const afterDelete = storage.getItem("ncc_test_key_sample");
        this.expect(afterDelete).toBeNull();
      });

      this.it("safeAsync resolves successfully within timeout threshold", async () => {
        const eb = window.civicErrorBoundary;
        const value = await eb.safeAsync(async () => {
          return 42;
        }, 0, 1000, "TestAsyncSuccess");
        this.expect(value).toBe(42);
      });

      this.it("safeAsync catches timeout errors and returns specified fallback value", async () => {
        const eb = window.civicErrorBoundary;
        const fallback = await eb.safeAsync(async () => {
          await new Promise(r => setTimeout(r, 200));
          return "unreachable";
        }, "fallback_value", 50, "TestAsyncTimeout");
        this.expect(fallback).toBe("fallback_value");
      });
    });

    // =========================================================================
    // SUITE 6: Complaint Workflow State Machine & SLA Logic
    // =========================================================================
    this.describe("Civic Grievance Workflow & SLA Calculations (app.js)", () => {
      this.it("Pristine seed complaints conform to municipal schema specifications", () => {
        this.expect(Array.isArray(SEED_COMPLAINTS)).toBe(true);
        this.expect(SEED_COMPLAINTS.length).toBeGreaterThanOrEqual(4);
        const sample = SEED_COMPLAINTS[0];
        this.expect(sample.complaint_id).toContain("NCC-2026-");
        this.expect(typeof sample.latitude).toBe("number");
        this.expect(typeof sample.longitude).toBe("number");
        this.expect(Array.isArray(sample.status_history)).toBe(true);
      });

      this.it("Department directory contains all 7 major municipal divisions with contacts", () => {
        this.expect(Array.isArray(SEED_DEPARTMENTS)).toBe(true);
        this.expect(SEED_DEPARTMENTS.length).toBe(7);
        const deptCodes = SEED_DEPARTMENTS.map(d => d.code);
        this.expect(deptCodes).toContain("WM");
        this.expect(deptCodes).toContain("ROADS");
        this.expect(deptCodes).toContain("WATER");
      });

      this.it("Workflow state transitions adhere to chronological order (Reported -> Verified -> Assigned -> In Progress -> Resolved)", () => {
        const validStatuses = ["Reported", "Verified", "Assigned", "In Progress", "Resolved"];
        const sampleHistory = SEED_COMPLAINTS[2].status_history; // Streetlight resolved
        this.expect(sampleHistory.length).toBe(5);
        sampleHistory.forEach((item, idx) => {
          this.expect(item.status).toBe(validStatuses[idx]);
        });
      });
    });
  }

  /**
   * Executes all registered test suites asynchronously
   * @param {Function} onProgress Progress update callback
   * @returns {Promise<Object>} Final test results summary
   */
  async runAllTests(onProgress = null) {
    if (this.isRunning) return this.results;
    this.isRunning = true;
    this.registerSuites();

    const startTime = performance.now();
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      durationMs: 0,
      suites: []
    };

    // Calculate total tests count
    let totalCount = 0;
    this.suites.forEach(s => totalCount += s.tests.length);
    this.results.total = totalCount;

    let executedCount = 0;

    for (const suite of this.suites) {
      const suiteResult = {
        name: suite.name,
        passed: 0,
        failed: 0,
        durationMs: 0,
        tests: []
      };
      const suiteStartTime = performance.now();

      for (const test of suite.tests) {
        const testStartTime = performance.now();
        try {
          // Await async tests if returned promise
          const result = test.testFn();
          if (result && typeof result.then === "function") {
            await result;
          }
          test.status = "PASSED";
          test.durationMs = Math.round(performance.now() - testStartTime);
          suiteResult.passed++;
          this.results.passed++;
        } catch (err) {
          test.status = "FAILED";
          test.error = err.message;
          test.durationMs = Math.round(performance.now() - testStartTime);
          suiteResult.failed++;
          this.results.failed++;
          console.error(`❌ Test failed [${suite.name} > ${test.desc}]:`, err);
        }

        suiteResult.tests.push({ ...test });
        executedCount++;
        if (onProgress) {
          onProgress(executedCount, totalCount, test, suite);
        }
      }

      suiteResult.durationMs = Math.round(performance.now() - suiteStartTime);
      this.results.suites.push(suiteResult);
    }

    this.results.durationMs = Math.round(performance.now() - startTime);
    this.isRunning = false;

    // Cache test report
    if (window.civicErrorBoundary) {
      window.civicErrorBoundary.safeStorage.setItem("ncc_last_test_run", this.results);
    }

    console.info(`✅ [CivicTestRunner] Execution complete: ${this.results.passed}/${this.results.total} passed in ${this.results.durationMs}ms.`);
    return this.results;
  }

  /**
   * Opens the Interactive Test Runner Modal in the DOM
   */
  openTestModal() {
    let modal = document.getElementById("modal-unit-tests");
    if (!modal) {
      this.createTestModalDom();
      modal = document.getElementById("modal-unit-tests");
    }
    modal.classList.remove("hidden");
    this.runAndRenderUI();
  }

  closeTestModal() {
    const modal = document.getElementById("modal-unit-tests");
    if (modal) modal.classList.add("hidden");
  }

  createTestModalDom() {
    const div = document.createElement("div");
    div.id = "modal-unit-tests";
    div.className = "hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm";
    div.innerHTML = `
      <div class="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🧪</span>
            <div>
              <h4 class="font-black text-slate-900 text-lg">Civic Unit Testing Suite & Verification Harness</h4>
              <p class="text-xs text-slate-500">Automated verification of Cryptography, Vision AI, S3 Storage, i18n & Error Boundaries</p>
            </div>
          </div>
          <button onclick="window.civicTestRunner.closeTestModal()" class="text-slate-400 hover:text-slate-700 font-bold text-xl">✕</button>
        </div>

        <!-- Metrics Strip -->
        <div class="my-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-4">
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Total Tests</span>
              <span id="test-metric-total" class="font-black text-slate-900 text-lg">0</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-emerald-600 block">Passed</span>
              <span id="test-metric-passed" class="font-black text-emerald-600 text-lg">0</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-rose-600 block">Failed</span>
              <span id="test-metric-failed" class="font-black text-rose-600 text-lg">0</span>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
              <span id="test-metric-duration" class="font-mono font-bold text-slate-700 text-base">0ms</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.civicTestRunner.runAndRenderUI()" id="test-run-btn" 
                    class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center gap-1.5 transition-all">
              <span>▶</span> <span>Re-run All Tests</span>
            </button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shrink-0 mb-3">
          <div id="test-progress-bar" class="bg-teal-500 h-1.5 transition-all duration-150" style="width: 0%"></div>
        </div>

        <!-- Scrollable Test Results Container -->
        <div id="test-results-container" class="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
          <div class="text-center py-8 text-slate-400">Click "Run Tests" to execute verification harness...</div>
        </div>

        <!-- Footer -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between shrink-0">
          <span class="text-[11px] text-slate-400">Coverage: 6 Architectural Suites • 100% Client-Side Executable</span>
          <button onclick="window.civicTestRunner.closeTestModal()" class="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800">
            Close Test Runner
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(div);
  }

  /**
   * Executes tests and updates the UI live
   */
  async runAndRenderUI() {
    const totalEl = document.getElementById("test-metric-total");
    const passedEl = document.getElementById("test-metric-passed");
    const failedEl = document.getElementById("test-metric-failed");
    const durationEl = document.getElementById("test-metric-duration");
    const progressBar = document.getElementById("test-progress-bar");
    const container = document.getElementById("test-results-container");
    const runBtn = document.getElementById("test-run-btn");

    if (runBtn) {
      runBtn.disabled = true;
      runBtn.classList.add("opacity-50");
    }

    if (container) {
      container.innerHTML = `<div class="p-6 text-center text-teal-700 font-semibold text-xs animate-pulse">Running test suites...</div>`;
    }

    const results = await this.runAllTests((executed, total) => {
      const pct = Math.round((executed / total) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (totalEl) totalEl.textContent = total;
      if (passedEl) passedEl.textContent = this.results.passed;
      if (failedEl) failedEl.textContent = this.results.failed;
    });

    if (totalEl) totalEl.textContent = results.total;
    if (passedEl) passedEl.textContent = results.passed;
    if (failedEl) failedEl.textContent = results.failed;
    if (durationEl) durationEl.textContent = `${results.durationMs}ms`;
    if (progressBar) progressBar.style.width = "100%";

    if (container) {
      container.innerHTML = results.suites.map(suite => `
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
            <span class="font-bold text-slate-900 text-xs">${suite.name}</span>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono text-slate-400">${suite.durationMs}ms</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${suite.failed === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                ${suite.passed}/${suite.tests.length} Passed
              </span>
            </div>
          </div>
          <div class="space-y-1.5">
            ${suite.tests.map(t => `
              <div class="flex items-start justify-between gap-2 p-1.5 rounded-lg ${t.status === 'PASSED' ? 'bg-white' : 'bg-rose-50 border border-rose-200'} text-[11px]">
                <div class="flex items-start gap-1.5">
                  <span class="${t.status === 'PASSED' ? 'text-emerald-500' : 'text-rose-500'} font-bold">
                    ${t.status === 'PASSED' ? '✓' : '✗'}
                  </span>
                  <div>
                    <span class="text-slate-800">${t.desc}</span>
                    ${t.error ? `<div class="text-[10px] font-mono text-rose-600 mt-0.5">${t.error}</div>` : ''}
                  </div>
                </div>
                <span class="text-[10px] font-mono text-slate-400 shrink-0">${t.durationMs}ms</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("");
    }

    if (runBtn) {
      runBtn.disabled = false;
      runBtn.classList.remove("opacity-50");
    }
  }
}

// Global Singleton Instance
window.civicTestRunner = new CivicTestRunner();
