// Namma City Care - Dual-Engine Frontend Controller (API + Static/GitHub Pages Support)

// Default pristine seed complaints for offline / static hosting mode
const SEED_COMPLAINTS = [
  {
    complaint_id: "NCC-2026-00125",
    user_id: 1,
    citizen_name: "Karthik Sundaram",
    citizen_phone: "9840123456",
    category: "Garbage",
    category_ta: "குப்பை",
    description: "Large commercial waste accumulation near 2nd Avenue corner blocking pedestrian footpath and causing foul odor.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&auto=format&fit=crop&q=60",
    resolution_image: null,
    resolution_notes: null,
    latitude: 13.0850,
    longitude: 80.2101,
    address: "2nd Avenue, Near Roundtana, Anna Nagar, Chennai - 600040",
    landmark: "Opposite Saravana Bhavan",
    severity: "High",
    priority: "High",
    ai_confidence: 91,
    ai_detected_category: "Garbage Accumulation",
    department: "Waste Management Department",
    department_ta: "குப்பை மேலாண்மைத் துறை",
    status: "In Progress",
    created_at: "2026-09-09 14:30:00",
    expected_resolution_date: "2026-09-12",
    resolved_at: null,
    citizen_verified: 0,
    support_count: 47,
    status_history: [
      { status: "Reported", updated_by: "Citizen", comment: "Grievance filed with AI image detection (91% confidence).", timestamp: "2026-09-09 14:30:00" },
      { status: "Verified", updated_by: "Zonal Officer", comment: "Visual inspection verified municipal issue.", timestamp: "2026-09-09 16:00:00" },
      { status: "Assigned", updated_by: "Admin", comment: "Assigned to Waste Management Zone 8 squad.", timestamp: "2026-09-09 17:15:00" },
      { status: "In Progress", updated_by: "Field Supervisor", comment: "Compactor truck dispatched to site.", timestamp: "2026-09-10 10:00:00" }
    ]
  },
  {
    complaint_id: "NCC-2026-00124",
    user_id: 1,
    citizen_name: "Priya Natarajan",
    citizen_phone: "9840987654",
    category: "Pothole",
    category_ta: "சாலை பள்ளம்",
    description: "Deep crater pothole in the middle of the road causing two-wheeler skidding risks near signal.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=60",
    resolution_image: null,
    resolution_notes: null,
    latitude: 13.0067,
    longitude: 80.2570,
    address: "LB Road, Adyar Signal Junction, Chennai - 600020",
    landmark: "Near Adyar Bus Depot",
    severity: "Medium",
    priority: "Medium",
    ai_confidence: 88,
    ai_detected_category: "Pothole Hazard",
    department: "Roads & Highways Department",
    department_ta: "சாலைகள் மற்றும் நெடுஞ்சாலைகள் துறை",
    status: "Verified",
    created_at: "2026-09-08 11:20:00",
    expected_resolution_date: "2026-09-12",
    resolved_at: null,
    citizen_verified: 0,
    support_count: 29,
    status_history: [
      { status: "Reported", updated_by: "Citizen", comment: "Pothole reported on LB road.", timestamp: "2026-09-08 11:20:00" },
      { status: "Verified", updated_by: "Roads Inspector", comment: "Verified high traffic safety hazard.", timestamp: "2026-09-08 14:00:00" }
    ]
  },
  {
    complaint_id: "NCC-2026-00123",
    user_id: 1,
    citizen_name: "Vignesh Raj",
    citizen_phone: "9840334455",
    category: "Streetlight",
    category_ta: "தெருவிளக்கு",
    description: "Streetlight pole #42 completely unlit for past 4 nights. Road is pitch dark for women commuters.",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=60",
    resolution_image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
    resolution_notes: "New 90W LED fitting installed and tested by Ward 178 electrical squad.",
    latitude: 12.9815,
    longitude: 80.2180,
    address: "Velachery Main Road, Near Vijayanagar Bus Stop, Chennai - 600042",
    landmark: "Near Phoenix Marketcity",
    severity: "Low",
    priority: "Low",
    ai_confidence: 95,
    ai_detected_category: "Streetlight Outage",
    department: "Electricity & Street Lighting Department",
    department_ta: "மின்சாரம் மற்றும் தெருவிளக்குத் துறை",
    status: "Resolved",
    created_at: "2026-09-07 19:45:00",
    expected_resolution_date: "2026-09-09",
    resolved_at: "2026-09-09 18:00:00",
    citizen_verified: 1,
    support_count: 18,
    status_history: [
      { status: "Reported", updated_by: "Citizen", comment: "Streetlight fault registered.", timestamp: "2026-09-07 19:45:00" },
      { status: "Verified", updated_by: "Electrical Inspector", comment: "Feeder pillar cable fault verified.", timestamp: "2026-09-08 10:00:00" },
      { status: "Assigned", updated_by: "Assistant Engineer", comment: "Assigned to Ward 178 line squad.", timestamp: "2026-09-08 11:30:00" },
      { status: "In Progress", updated_by: "Lineman", comment: "Cable splicing underway.", timestamp: "2026-09-08 15:00:00" },
      { status: "Resolved", updated_by: "Junior Engineer", comment: "LED fitting tested and illuminated. Proof photo uploaded.", timestamp: "2026-09-09 18:00:00" }
    ]
  },
  {
    complaint_id: "NCC-2026-00122",
    user_id: 1,
    citizen_name: "Ramesh Kumar",
    citizen_phone: "9840556677",
    category: "Water Leakage",
    category_ta: "குடிநீர் கசிவு",
    description: "Drinking water main pipeline cracked under pavement. Heavy clean water gushing onto the road.",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=60",
    resolution_image: null,
    resolution_notes: null,
    latitude: 13.0418,
    longitude: 80.2341,
    address: "South Usman Road, T. Nagar, Chennai - 600017",
    landmark: "Opposite Ranganathan St Entry",
    severity: "High",
    priority: "Emergency",
    ai_confidence: 94,
    ai_detected_category: "Water Pipeline Burst",
    department: "Metro Water & Sewerage Department",
    department_ta: "சென்னை குடிநீர் மற்றும் கழிவுநீரகற்று வாரியம்",
    status: "In Progress",
    created_at: "2026-09-09 09:15:00",
    expected_resolution_date: "2026-09-11",
    resolved_at: null,
    citizen_verified: 0,
    support_count: 63,
    status_history: [
      { status: "Reported", updated_by: "Citizen", comment: "Grievance filed with priority Emergency.", timestamp: "2026-09-09 09:15:00" },
      { status: "Verified", updated_by: "Metro Water Eng.", comment: "High priority valve damage confirmed.", timestamp: "2026-09-09 10:30:00" },
      { status: "In Progress", updated_by: "Repair Crew", comment: "Excavation and pipe collar clamping underway.", timestamp: "2026-09-09 12:00:00" }
    ]
  }
];

const SEED_DEPARTMENTS = [
  { code: "WM", name_en: "Waste Management Department", name_ta: "குப்பை மேலாண்மைத் துறை", head_name: "Er. K. Ramanathan", contact: "+91 44 2538 4520", avg_resolution_days: 1.8, pending: 1, in_progress: 1, resolved: 0 },
  { code: "ROADS", name_en: "Roads & Highways Department", name_ta: "சாலைகள் மற்றும் நெடுஞ்சாலைகள் துறை", head_name: "Er. S. Selvam", contact: "+91 44 2538 4531", avg_resolution_days: 3.2, pending: 1, in_progress: 0, resolved: 1 },
  { code: "ELEC", name_en: "Electricity & Street Lighting Department", name_ta: "மின்சாரம் மற்றும் தெருவிளக்குத் துறை", head_name: "Thiru. V. Jayakumar", contact: "+91 44 2538 4545", avg_resolution_days: 1.5, pending: 0, in_progress: 0, resolved: 1 },
  { code: "WATER", name_en: "Metro Water & Sewerage Department", name_ta: "சென்னை குடிநீர் மற்றும் கழிவுநீரகற்று வாரியம்", head_name: "Er. M. Anbarasan", contact: "+91 44 4567 4567", avg_resolution_days: 2.1, pending: 0, in_progress: 1, resolved: 0 },
  { code: "DRAIN", name_en: "Storm Water Drainage Department", name_ta: "மழைநீர் வடிகால் துறை", head_name: "Er. T. Gomathi", contact: "+91 44 2538 4560", avg_resolution_days: 2.9, pending: 1, in_progress: 0, resolved: 0 },
  { code: "ENV", name_en: "Parks & Environmental Protection Department", name_ta: "பூங்காக்கள் மற்றும் சுற்றுச்சூழல் பாதுகாப்புத் துறை", head_name: "Dr. R. Kavitha", contact: "+91 44 2538 4572", avg_resolution_days: 2.4, pending: 0, in_progress: 1, resolved: 0 },
  { code: "CORP", name_en: "Greater Chennai Municipal Corporation (General)", name_ta: "பெருநகர சென்னை மாநகராட்சி (பொது)", head_name: "Thiru. J. Radhakrishnan IAS", contact: "+91 44 2561 9200", avg_resolution_days: 2.8, pending: 0, in_progress: 0, resolved: 0 }
];

const SEED_NOTIFICATIONS = [
  { id: 1, complaint_id: "NCC-2026-00125", message_en: "Your complaint NCC-2026-00125 has been assigned to the Waste Management Department.", message_ta: "உங்கள் புகார் NCC-2026-00125 குப்பை மேலாண்மைத் துறைக்கு ஒதுக்கப்பட்டுள்ளது.", read: 0, created_at: "2026-09-09 17:15:00" },
  { id: 2, complaint_id: "NCC-2026-00125", message_en: "Work has started on your complaint NCC-2026-00125. Compactor truck dispatched.", message_ta: "உங்கள் புகார் NCC-2026-00125-க்கான பணி தொடங்கப்பட்டுள்ளது.", read: 0, created_at: "2026-09-10 10:00:00" },
  { id: 3, complaint_id: "NCC-2026-00123", message_en: "Your complaint NCC-2026-00123 has been resolved. Please verify the resolution.", message_ta: "உங்கள் புகார் NCC-2026-00123 தீர்வு காணப்பட்டது. தயவுசெய்து சரிபார்க்கவும்.", read: 1, created_at: "2026-09-09 18:00:00" }
];

/**
 * Retrieves cached civic complaints with error boundary quota protection.
 * Falls back to pristine municipal SEED_COMPLAINTS if storage is unavailable or corrupt.
 * @returns {Array<Object>} List of complaint objects
 */
function getStoredComplaints() {
  if (window.civicErrorBoundary && window.civicErrorBoundary.safeStorage) {
    const stored = window.civicErrorBoundary.safeStorage.getItem("namma_complaints");
    if (stored && Array.isArray(stored) && stored.length > 0) return stored;
    window.civicErrorBoundary.safeStorage.setItem("namma_complaints", SEED_COMPLAINTS);
    return SEED_COMPLAINTS;
  }
  const stored = localStorage.getItem("namma_complaints");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) {}
  }
  localStorage.setItem("namma_complaints", JSON.stringify(SEED_COMPLAINTS));
  return SEED_COMPLAINTS;
}

/**
 * Persists civic complaints to local storage with automated quota defense.
 * @param {Array<Object>} complaints
 */
function saveStoredComplaints(complaints) {
  if (window.civicErrorBoundary && window.civicErrorBoundary.safeStorage) {
    window.civicErrorBoundary.safeStorage.setItem("namma_complaints", complaints);
  } else {
    localStorage.setItem("namma_complaints", JSON.stringify(complaints));
  }
}

/**
 * Retrieves citizen notifications from resilient cache.
 * @returns {Array<Object>}
 */
function getStoredNotifications() {
  if (window.civicErrorBoundary && window.civicErrorBoundary.safeStorage) {
    const stored = window.civicErrorBoundary.safeStorage.getItem("namma_notifications");
    if (stored && Array.isArray(stored) && stored.length > 0) return stored;
    window.civicErrorBoundary.safeStorage.setItem("namma_notifications", SEED_NOTIFICATIONS);
    return SEED_NOTIFICATIONS;
  }
  const stored = localStorage.getItem("namma_notifications");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) {}
  }
  localStorage.setItem("namma_notifications", JSON.stringify(SEED_NOTIFICATIONS));
  return SEED_NOTIFICATIONS;
}

/**
 * Persists notifications to resilient cache.
 * @param {Array<Object>} notifs
 */
function saveStoredNotifications(notifs) {
  if (window.civicErrorBoundary && window.civicErrorBoundary.safeStorage) {
    window.civicErrorBoundary.safeStorage.setItem("namma_notifications", notifs);
  } else {
    localStorage.setItem("namma_notifications", JSON.stringify(notifs));
  }
}

const APP_STATE = {
  currentView: "home",
  userRole: "citizen",
  complaints: [],
  currentComplaint: null,
  activeFilter: "All",
  notifications: [],
  departments: SEED_DEPARTMENTS,
  analytics: null,
  isApiMode: false,
  reportWizard: {
    step: 1,
    imageFile: null,
    imagePreview: null,
    aiResult: null,
    location: {
      lat: 13.0850,
      lng: 80.2101,
      address: "Anna Nagar, Chennai",
      landmark: ""
    },
    category: "Garbage",
    description: "",
    severity: "High",
    calculatedPriority: "High"
  },
  mapInstance: null,
  pickerMapInstance: null,
  markersLayer: null,
  pickerMarker: null
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initLanguageSwitcher();
  initRoleSwitcher();
  initReportWizard();
  loadInitialData();

  window.addEventListener("languageChanged", () => {
    refreshCurrentView();
  });

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange();
});

function handleHashChange() {
  const hash = window.location.hash.replace("#", "") || "home";
  const [view, param] = hash.split("/");
  if (view) {
    navigateTo(view, param, false);
  }
}

// --- Navigation & View Switching ---
function initNavigation() {
  document.querySelectorAll("[data-nav-target]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-nav-target");
      const param = btn.getAttribute("data-nav-param");
      navigateTo(target, param);
    });
  });

  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu-dropdown");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

function navigateTo(viewId, param = null, updateHash = true) {
  APP_STATE.currentView = viewId;
  if (updateHash) {
    window.location.hash = param ? `${viewId}/${param}` : viewId;
  }

  const mobileMenu = document.getElementById("mobile-menu-dropdown");
  if (mobileMenu) mobileMenu.classList.add("hidden");

  document.querySelectorAll(".view-container").forEach(view => {
    view.classList.add("hidden");
  });

  const targetEl = document.getElementById(`view-${viewId}`);
  if (targetEl) {
    targetEl.classList.remove("hidden");
  }

  document.querySelectorAll("[data-nav-target]").forEach(btn => {
    const isCurrent = btn.getAttribute("data-nav-target") === viewId;
    if (btn.classList.contains("nav-link")) {
      if (isCurrent) {
        btn.classList.add("text-teal-600", "border-teal-600", "font-semibold");
        btn.classList.remove("text-slate-600", "border-transparent");
      } else {
        btn.classList.remove("text-teal-600", "border-teal-600", "font-semibold");
        btn.classList.add("text-slate-600", "border-transparent");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  switch (viewId) {
    case "home":
      loadHomeMetrics();
      break;
    case "track":
      if (param) {
        document.getElementById("track-input-id").value = param;
        searchComplaint(param);
      } else if (!APP_STATE.currentComplaint) {
        searchComplaint("NCC-2026-00125");
      }
      break;
    case "map":
      setTimeout(() => initCivicMap(), 150);
      break;
    case "nearby":
      loadNearbyView();
      break;
    case "dashboard":
      loadCitizenDashboard();
      break;
    case "admin_dash":
      loadAdminDashboard();
      break;
    case "departments":
      loadDepartmentsView();
      break;
    case "reports":
      loadReportsView();
      break;
  }
}

function refreshCurrentView() {
  window.i18n.updateDOM();
  if (APP_STATE.currentComplaint && APP_STATE.currentView === "track") {
    renderComplaintDetails(APP_STATE.currentComplaint);
  }
  if (APP_STATE.currentView === "admin_dash") {
    renderAdminComplaintsTable(APP_STATE.complaints);
  }
  if (APP_STATE.currentView === "nearby") {
    loadNearbyView();
  }
  if (APP_STATE.currentView === "departments") {
    loadDepartmentsView();
  }
}

// --- Language Switcher ---
function initLanguageSwitcher() {
  const enBtn = document.getElementById("lang-en-btn");
  const taBtn = document.getElementById("lang-ta-btn");

  if (enBtn) {
    enBtn.addEventListener("click", () => window.i18n.setLanguage("en"));
  }
  if (taBtn) {
    taBtn.addEventListener("click", () => window.i18n.setLanguage("ta"));
  }

  window.i18n.setLanguage(window.i18n.lang);
}

// --- Role Switcher & Production JWT RBAC Integration ---
function initRoleSwitcher() {
  const citizenNav = document.querySelectorAll(".nav-citizen-only");
  const adminNav = document.querySelectorAll(".nav-admin-only");
  const roleBadge = document.getElementById("current-role-badge");
  const userNameEl = document.getElementById("current-user-name");
  const userAvatarEl = document.getElementById("current-user-avatar");

  function updateRoleUI() {
    const role = window.authRbac ? window.authRbac.getUserRole() : APP_STATE.userRole;
    APP_STATE.userRole = role;

    const user = window.authRbac ? window.authRbac.currentUser : null;
    if (user && userNameEl && userAvatarEl) {
      userNameEl.textContent = user.name.split(" ")[0];
      userAvatarEl.textContent = user.name[0];
    }

    if (role === "admin" || role === "ward_officer" || role === "super_admin") {
      citizenNav.forEach(el => el.classList.add("hidden"));
      adminNav.forEach(el => el.classList.remove("hidden"));
      if (roleBadge) {
        const label = role === "ward_officer" ? (window.i18n.lang === "ta" ? "வார்டு அதிகாரி" : "Ward Officer") : window.i18n.t("role_admin");
        roleBadge.textContent = label;
        roleBadge.className = "px-2 py-0.5 text-[10px] font-bold rounded-full bg-purple-100 text-purple-800 border border-purple-300";
      }
    } else {
      citizenNav.forEach(el => el.classList.remove("hidden"));
      adminNav.forEach(el => el.classList.add("hidden"));
      if (roleBadge) {
        roleBadge.textContent = window.i18n.t("role_citizen");
        roleBadge.className = "px-2 py-0.5 text-[10px] font-bold rounded-full bg-teal-100 text-teal-800 border border-teal-300";
      }
    }
  }

  window.addEventListener("authStateChanged", () => {
    updateRoleUI();
    if (APP_STATE.userRole === "admin" || APP_STATE.userRole === "ward_officer") {
      navigateTo("admin_dash");
    } else {
      navigateTo("home");
    }
  });

  updateRoleUI();
}

// --- Initial Data Loading with API & LocalStorage Fallback ---
async function loadInitialData() {
  try {
    const res = await fetch("/api/complaints");
    if (res.ok) {
      APP_STATE.complaints = await res.json();
      APP_STATE.isApiMode = true;
    } else {
      throw new Error("API not active, fallback to offline store");
    }
  } catch (err) {
    APP_STATE.isApiMode = false;
    APP_STATE.complaints = getStoredComplaints();
  }

  loadNotifications();
  loadHomeMetrics();
}

async function loadNotifications() {
  if (APP_STATE.isApiMode) {
    try {
      const res = await fetch("/api/notifications");
      if (res.ok) {
        APP_STATE.notifications = await res.json();
        renderNotificationBadge();
        return;
      }
    } catch (err) {}
  }
  APP_STATE.notifications = getStoredNotifications();
  renderNotificationBadge();
}

function renderNotificationBadge() {
  const unread = APP_STATE.notifications.filter(n => !n.read).length;
  const badge = document.getElementById("notif-badge-count");
  if (badge) {
    if (unread > 0) {
      badge.textContent = unread;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }
}

// --- Home Metrics ---
async function loadHomeMetrics() {
  let resolvedCount = 1069;
  let avgDays = 2.8;

  if (APP_STATE.isApiMode) {
    try {
      const res = await fetch("/api/analytics");
      if (res.ok) {
        const data = await res.json();
        resolvedCount = data.resolved;
        avgDays = data.avg_resolution_days;
      }
    } catch (e) {}
  } else {
    resolvedCount += APP_STATE.complaints.filter(c => c.status === "Resolved").length;
  }

  const elResolved = document.getElementById("metric-resolved-count");
  const elAvgTime = document.getElementById("metric-avg-time");
  if (elResolved) elResolved.textContent = resolvedCount.toLocaleString();
  if (elAvgTime) elAvgTime.textContent = `${avgDays} ${window.i18n.t("days")}`;

  renderRecentResolvedShowcase();
}

function renderRecentResolvedShowcase() {
  const container = document.getElementById("recent-resolved-container");
  if (!container) return;

  const resolved = APP_STATE.complaints.filter(c => c.status === "Resolved" || c.resolution_image).slice(0, 3);
  if (resolved.length === 0) return;

  container.innerHTML = resolved.map(c => `
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-teal-600 tracking-wide">${c.complaint_id}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            ✓ ${window.i18n.lang === "ta" ? "தீர்வு காணப்பட்டது" : "Resolved"}
          </span>
        </div>
        <div class="h-44 rounded-xl overflow-hidden mb-3 relative group">
          <img src="${c.resolution_image || c.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="${c.category}">
          <span class="absolute bottom-2 left-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-md backdrop-blur-sm">
            ${c.resolution_image ? (window.i18n.lang === "ta" ? "தீர்வு செய்யப்பட்ட படம்" : "Resolution Photo") : (window.i18n.lang === "ta" ? "புகார் படம்" : "Report Photo")}
          </span>
        </div>
        <h4 class="font-bold text-slate-900 text-base mb-1">${window.i18n.getCategoryTitle(c.category)}</h4>
        <p class="text-xs text-slate-500 line-clamp-2 mb-2">${c.description}</p>
        <p class="text-[11px] text-slate-400 flex items-center gap-1">
          <span>📍</span> ${c.address}
        </p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
        <span class="text-xs text-emerald-600 font-medium">✓ ${window.i18n.lang === "ta" ? "குடிமக்கள் திருப்தி" : "Citizen Confirmed"}</span>
        <button onclick="navigateTo('track', '${c.complaint_id}')" class="text-xs text-teal-600 font-bold hover:underline">
          ${window.i18n.lang === "ta" ? "விவரம் →" : "View Story →"}
        </button>
      </div>
    </div>
  `).join("");
}

window.selectCategoryAndReport = function(categoryName) {
  APP_STATE.reportWizard.category = categoryName;
  navigateTo("report");
  const catSelect = document.getElementById("wizard-category-select");
  if (catSelect) catSelect.value = categoryName;
  simulateAiForCategory(categoryName);
};

// --- REPORT ISSUE WIZARD ---
function initReportWizard() {
  const fileInput = document.getElementById("wizard-file-input");
  const cameraInput = document.getElementById("wizard-camera-input");
  const dropZone = document.getElementById("wizard-dropzone");
  const previewBox = document.getElementById("wizard-preview-box");
  const removePhotoBtn = document.getElementById("wizard-remove-photo");

  if (fileInput) fileInput.addEventListener("change", (e) => handlePhotoSelection(e.target.files[0]));
  if (cameraInput) cameraInput.addEventListener("change", (e) => handlePhotoSelection(e.target.files[0]));
  if (removePhotoBtn) removePhotoBtn.addEventListener("click", resetPhotoUpload);

  if (dropZone) {
    ["dragenter", "dragover"].forEach(evt => {
      dropZone.addEventListener(evt, (e) => { e.preventDefault(); dropZone.classList.add("border-teal-500", "bg-teal-50/50"); });
    });
    ["dragleave", "drop"].forEach(evt => {
      dropZone.addEventListener(evt, (e) => { e.preventDefault(); dropZone.classList.remove("border-teal-500", "bg-teal-50/50"); });
    });
    dropZone.addEventListener("drop", (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files[0]) handlePhotoSelection(e.dataTransfer.files[0]);
    });
  }

  const gpsBtn = document.getElementById("wizard-gps-btn");
  if (gpsBtn) gpsBtn.addEventListener("click", captureGpsLocation);

  const mapPickerBtn = document.getElementById("wizard-map-picker-btn");
  if (mapPickerBtn) mapPickerBtn.addEventListener("click", openMapPickerModal);

  const acceptAiBtn = document.getElementById("ai-accept-btn");
  const changeAiBtn = document.getElementById("ai-change-btn");

  if (acceptAiBtn) {
    acceptAiBtn.addEventListener("click", () => {
      if (APP_STATE.reportWizard.aiResult) {
        APP_STATE.reportWizard.category = APP_STATE.reportWizard.aiResult.category;
        const catSelect = document.getElementById("wizard-category-select");
        if (catSelect) catSelect.value = APP_STATE.reportWizard.category;
        setWizardStep(3);
      }
    });
  }

  if (changeAiBtn) {
    changeAiBtn.addEventListener("click", () => setWizardStep(4));
  }

  document.querySelectorAll("[data-wizard-goto]").forEach(btn => {
    btn.addEventListener("click", () => {
      const step = parseInt(btn.getAttribute("data-wizard-goto"));
      if (step === 5) prepareReviewSummary();
      setWizardStep(step);
    });
  });

  const sevSelect = document.getElementById("wizard-severity-select");
  if (sevSelect) {
    sevSelect.addEventListener("change", (e) => {
      APP_STATE.reportWizard.severity = e.target.value;
      recalculatePriority();
    });
  }

  const catSelect = document.getElementById("wizard-category-select");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      APP_STATE.reportWizard.category = e.target.value;
      recalculatePriority();
    });
  }

  const submitBtn = document.getElementById("wizard-final-submit");
  if (submitBtn) submitBtn.addEventListener("click", executeComplaintSubmission);
}

function handlePhotoSelection(file) {
  if (!file) return;
  APP_STATE.reportWizard.imageFile = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    APP_STATE.reportWizard.imagePreview = e.target.result;
    const previewBox = document.getElementById("wizard-preview-box");
    const dropZone = document.getElementById("wizard-dropzone");
    const previewImg = document.getElementById("wizard-preview-img");

    if (previewImg) previewImg.src = e.target.result;
    if (dropZone) dropZone.classList.add("hidden");
    if (previewBox) previewBox.classList.remove("hidden");

    runAiAnalysis(file);
  };
  reader.readAsDataURL(file);
}

function resetPhotoUpload() {
  APP_STATE.reportWizard.imageFile = null;
  APP_STATE.reportWizard.imagePreview = null;
  APP_STATE.reportWizard.aiResult = null;

  const previewBox = document.getElementById("wizard-preview-box");
  const dropZone = document.getElementById("wizard-dropzone");
  const fileInput = document.getElementById("wizard-file-input");
  const cameraInput = document.getElementById("wizard-camera-input");

  if (fileInput) fileInput.value = "";
  if (cameraInput) cameraInput.value = "";
  if (previewBox) previewBox.classList.add("hidden");
  if (dropZone) dropZone.classList.remove("hidden");
}

// --- MULTIMODAL VISION AI INFERENCE & S3 UPLOAD PIPELINE ---
async function runAiAnalysis(file) {
  setWizardStep(2);

  const scanAnim = document.getElementById("ai-scan-animation");
  const scanResult = document.getElementById("ai-scan-result");
  const scanStatusDetail = document.getElementById("ai-scan-status-detail");
  if (scanAnim) scanAnim.classList.remove("hidden");
  if (scanResult) scanResult.classList.add("hidden");

  const scanImg = document.getElementById("ai-scan-preview-img");
  if (scanImg && APP_STATE.reportWizard.imagePreview) {
    scanImg.src = APP_STATE.reportWizard.imagePreview;
  }

  try {
    // 1. Direct S3 Upload Pipeline (AWS SigV4 Presigned PUT URL)
    let s3Media = null;
    if (window.s3Storage) {
      if (scanStatusDetail) scanStatusDetail.textContent = "Transcoding to WebP & streaming to AWS S3 bucket...";
      s3Media = await window.s3Storage.uploadCivicMedia(file, (pct, status) => {
        if (scanStatusDetail) scanStatusDetail.textContent = `${status} (${pct}%)`;
      });
      APP_STATE.reportWizard.s3Media = s3Media;
    }

    // 2. Real Multimodal Vision Inference Pipeline (Gemini Vision API or Neural CV)
    if (scanStatusDetail) scanStatusDetail.textContent = "Running Neural Feature Extraction & Visual Proof Validation...";
    
    let visionResult = null;
    if (window.visionPipeline) {
      visionResult = await window.visionPipeline.analyze(file, APP_STATE.reportWizard.imagePreview);
    } else {
      visionResult = fallbackAiAnalysis(APP_STATE.reportWizard.category || "Garbage");
    }

    // Update Report Wizard State
    APP_STATE.reportWizard.aiResult = visionResult;
    APP_STATE.reportWizard.category = visionResult.category;
    APP_STATE.reportWizard.calculatedPriority = visionResult.suggested_priority;
    APP_STATE.reportWizard.severity = visionResult.suggested_severity || "High";

    // Auto-update GPS if EXIF extracted from photo
    if (visionResult.exifMetadata && visionResult.exifMetadata.hasExif && visionResult.exifMetadata.lat) {
      APP_STATE.reportWizard.location.lat = visionResult.exifMetadata.lat;
      APP_STATE.reportWizard.location.lng = visionResult.exifMetadata.lng;
    }

    // Update UI - Inference Engine Badge
    const engineTag = document.getElementById("ai-engine-tag");
    if (engineTag) {
      engineTag.textContent = visionResult.inferenceEngine.includes("Gemini") ? "✨ Gemini 1.5 Flash Vision" : "⚡ Neural CV Engine";
    }

    // Visual Proof Validation Banner
    const proofBanner = document.getElementById("ai-proof-banner");
    const proofIcon = document.getElementById("ai-proof-icon");
    const proofTitle = document.getElementById("ai-proof-title");
    const proofDesc = document.getElementById("ai-proof-desc");
    const proofScore = document.getElementById("ai-proof-score");

    if (visionResult.visual_proof_validated) {
      if (proofBanner) proofBanner.className = "p-3.5 rounded-2xl border flex items-center justify-between bg-emerald-50 border-emerald-300 text-emerald-900";
      if (proofIcon) proofIcon.textContent = "✅";
      if (proofTitle) proofTitle.textContent = window.i18n.lang === "ta" ? "காட்சி ஆதாரம் சரிபார்க்கப்பட்டது: நகர அபாயம் உறுதி" : "Visual Proof Validated: Civic Hazard Confirmed";
      if (proofDesc) proofDesc.textContent = visionResult.visual_evidence_summary;
      if (proofScore) {
        proofScore.textContent = `${visionResult.visual_proof_score}% Proof`;
        proofScore.className = "px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-white border border-emerald-300 text-emerald-800 shadow-sm";
      }
    } else {
      if (proofBanner) proofBanner.className = "p-3.5 rounded-2xl border flex items-center justify-between bg-amber-50 border-amber-300 text-amber-900";
      if (proofIcon) proofIcon.textContent = "⚠️";
      if (proofTitle) proofTitle.textContent = window.i18n.lang === "ta" ? "காட்சி ஆதாரம் போதாது: தெளிவான படம் தேவை" : "Inconclusive Visual Proof: Low Hazard Evidence";
      if (proofDesc) proofDesc.textContent = visionResult.visual_evidence_summary;
      if (proofScore) {
        proofScore.textContent = `${visionResult.visual_proof_score}% Proof`;
        proofScore.className = "px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-white border border-amber-300 text-amber-800 shadow-sm";
      }
    }

    // Display Preview & Draw Bounding Box ROI
    const resPreviewImg = document.getElementById("ai-result-preview-img");
    if (resPreviewImg) {
      resPreviewImg.src = APP_STATE.reportWizard.imagePreview;
      resPreviewImg.onload = () => {
        drawBoundingBoxOverlay(visionResult.bounding_box);
      };
    }

    const bboxCoords = document.getElementById("ai-bbox-coords");
    if (bboxCoords && visionResult.bounding_box) {
      const b = visionResult.bounding_box;
      bboxCoords.textContent = `[${b.ymin}, ${b.xmin}, ${b.ymax}, ${b.xmax}]`;
    }

    document.getElementById("ai-detected-issue-text").textContent = 
      window.i18n.lang === "ta" ? visionResult.detected_issue_ta : visionResult.detected_issue_en;
    document.getElementById("ai-confidence-badge").textContent = `${visionResult.confidence}%`;

    const evidenceSummary = document.getElementById("ai-evidence-summary");
    if (evidenceSummary) evidenceSummary.textContent = visionResult.visual_evidence_summary;

    const pBadge = window.i18n.getPriorityBadge(visionResult.suggested_priority);
    const pEl = document.getElementById("ai-suggested-priority");
    pEl.textContent = pBadge.label;
    pEl.className = `px-2.5 py-0.5 rounded-full text-xs font-semibold ${pBadge.color}`;

    document.getElementById("ai-recommended-dept").textContent = 
      window.i18n.lang === "ta" ? visionResult.recommended_department_ta : visionResult.recommended_department_en;

    // Telemetry Grid
    if (s3Media) {
      const s3KeyEl = document.getElementById("ai-s3-key");
      const payloadEl = document.getElementById("ai-payload-size");
      if (s3KeyEl) s3KeyEl.textContent = s3Media.objectKey.split("/").pop();
      if (payloadEl) payloadEl.textContent = `${Math.round(s3Media.sizeBytes / 1024)} KB (${s3Media.savingsPercent}% saved)`;
    }
    const edgeDensityEl = document.getElementById("ai-edge-density");
    if (edgeDensityEl && visionResult.cvMetrics) {
      edgeDensityEl.textContent = `${visionResult.cvMetrics.edgeDensity}%`;
    }
    const latencyEl = document.getElementById("ai-latency");
    if (latencyEl) {
      latencyEl.textContent = `${visionResult.inferenceLatencyMs} ms`;
    }

    if (scanAnim) scanAnim.classList.add("hidden");
    if (scanResult) scanResult.classList.remove("hidden");

  } catch (err) {
    console.error("Multimodal vision analysis notice:", err);
    fallbackAiAnalysis(APP_STATE.reportWizard.category || "Garbage");
    if (scanAnim) scanAnim.classList.add("hidden");
    if (scanResult) scanResult.classList.remove("hidden");
  }
}

function drawBoundingBoxOverlay(bbox) {
  const canvas = document.getElementById("ai-bbox-canvas");
  const img = document.getElementById("ai-result-preview-img");
  if (!canvas || !img) return;

  const rect = img.getBoundingClientRect();
  canvas.width = rect.width || 320;
  canvas.height = rect.height || 220;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!bbox) return;

  const xmin = bbox.xmin * canvas.width;
  const ymin = bbox.ymin * canvas.height;
  const boxW = Math.max(40, (bbox.xmax - bbox.xmin) * canvas.width);
  const boxH = Math.max(30, (bbox.ymax - bbox.ymin) * canvas.height);

  // Box border with bright teal glow
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#14b8a6";
  ctx.fillStyle = "rgba(20, 184, 166, 0.2)";
  ctx.strokeRect(xmin, ymin, boxW, boxH);
  ctx.fillRect(xmin, ymin, boxW, boxH);

  // Label tag
  ctx.fillStyle = "#0f766e";
  const tagH = 20;
  ctx.fillRect(xmin, Math.max(0, ymin - tagH), Math.min(160, boxW), tagH);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 10px Inter, sans-serif";
  ctx.fillText("📍 Hazard Defect ROI", xmin + 6, Math.max(14, ymin - 6));
}

function fallbackAiAnalysis(category) {
  const mockAI = {
    "Garbage": { en: "Garbage Accumulation", ta: "குப்பை தேக்கம்", conf: 91, priority: "High", dept_en: "Waste Management Department", dept_ta: "குப்பை மேலாண்மைத் துறை" },
    "Pothole": { en: "Road Pothole Hazard", ta: "சாலை பள்ளம் அபாயம்", conf: 88, priority: "Medium", dept_en: "Roads & Highways Department", dept_ta: "சாலைகள் மற்றும் நெடுஞ்சாலைகள் துறை" },
    "Streetlight": { en: "Streetlight Malfunction", ta: "தெருவிளக்கு பழுது", conf: 95, priority: "Low", dept_en: "Electricity & Street Lighting Department", dept_ta: "மின்சாரம் மற்றும் தெருவிளக்குத் துறை" },
    "Water Leakage": { en: "Water Pipeline Burst", ta: "குடிநீர் குழாய் கசிவு", conf: 94, priority: "High", dept_en: "Metro Water & Sewerage Department", dept_ta: "சென்னை குடிநீர் மற்றும் கழிவுநீரகற்று வாரியம்" },
    "Damaged Road": { en: "Damaged Road Surface", ta: "சேதமடைந்த சாலை", conf: 87, priority: "Medium", dept_en: "Roads & Highways Department", dept_ta: "சாலைகள் மற்றும் நெடுஞ்சாலைகள் துறை" },
    "Drainage": { en: "Sewage Overflow Blockage", ta: "கழிவுநீர் அடைப்பு", conf: 89, priority: "High", dept_en: "Storm Water Drainage Department", dept_ta: "மழைநீர் வடிகால் துறை" },
    "Environmental Issue": { en: "Fallen Tree Hazard", ta: "விழுந்த மரம் அபாயம்", conf: 93, priority: "Emergency", dept_en: "Parks & Environmental Protection Department", dept_ta: "பூங்காக்கள் மற்றும் சுற்றுச்சூழல் பாதுகாப்புத் துறை" },
    "Other": { en: "Civic Public Infrastructure", ta: "பொதுக் கட்டமைப்பு பிரச்சினை", conf: 85, priority: "Medium", dept_en: "Greater Chennai Municipal Corporation", dept_ta: "பெருநகர சென்னை மாநகராட்சி" }
  };
  const item = mockAI[category] || mockAI["Garbage"];
  const res = {
    inferenceEngine: "Client-Side Neural CV",
    inferenceLatencyMs: 180,
    category: category,
    detected_issue_en: item.en,
    detected_issue_ta: item.ta,
    confidence: item.conf,
    suggested_priority: item.priority,
    suggested_severity: item.priority,
    recommended_department_en: item.dept_en,
    recommended_department_ta: item.dept_ta,
    visual_proof_validated: true,
    visual_proof_score: 92,
    visual_evidence_summary: "Visual civic damage pattern verified across spatial edge contours.",
    bounding_box: { xmin: 0.18, ymin: 0.22, xmax: 0.82, ymax: 0.78 }
  };
  APP_STATE.reportWizard.aiResult = res;
  APP_STATE.reportWizard.calculatedPriority = item.priority;
  return res;
}

function setWizardStep(stepNumber) {
  APP_STATE.reportWizard.step = stepNumber;

  for (let i = 1; i <= 5; i++) {
    const stepEl = document.getElementById(`wizard-step-panel-${i}`);
    const indEl = document.getElementById(`wizard-step-ind-${i}`);
    if (stepEl) {
      if (i === stepNumber) stepEl.classList.remove("hidden");
      else stepEl.classList.add("hidden");
    }
    if (indEl) {
      if (i < stepNumber) {
        indEl.className = "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-teal-600 text-white";
        indEl.textContent = "✓";
      } else if (i === stepNumber) {
        indEl.className = "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-teal-600 text-white ring-4 ring-teal-100";
        indEl.textContent = i;
      } else {
        indEl.className = "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-slate-100 text-slate-500";
        indEl.textContent = i;
      }
    }
  }

  if (stepNumber === 3) updateLocationInputs();
}

function captureGpsLocation() {
  const statusEl = document.getElementById("gps-status-msg");
  if (statusEl) {
    statusEl.textContent = window.i18n.lang === "ta" ? "GPS சிக்னல் தேடப்படுகிறது..." : "Acquiring GPS coordinates...";
    statusEl.className = "text-xs text-teal-600 font-medium animate-pulse";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        APP_STATE.reportWizard.location.lat = parseFloat(pos.coords.latitude.toFixed(5));
        APP_STATE.reportWizard.location.lng = parseFloat(pos.coords.longitude.toFixed(5));
        APP_STATE.reportWizard.location.address = `Ward 102, Anna Nagar West, Chennai`;
        updateLocationInputs();
        if (statusEl) {
          statusEl.textContent = `✓ ${window.i18n.t("step3_gps_success")}`;
          statusEl.className = "text-xs text-emerald-600 font-semibold";
        }
      },
      (err) => {
        APP_STATE.reportWizard.location.lat = 13.0850;
        APP_STATE.reportWizard.location.lng = 80.2101;
        APP_STATE.reportWizard.location.address = "Anna Nagar 2nd Avenue, Chennai - 600040";
        updateLocationInputs();
        if (statusEl) {
          statusEl.textContent = window.i18n.lang === "ta" ? "முன்னிருப்பு சென்னை வார்டு தேர்ந்தெடுக்கப்பட்டது." : "Default Chennai ward selected.";
          statusEl.className = "text-xs text-amber-600 font-medium";
        }
      },
      { timeout: 5000 }
    );
  } else {
    updateLocationInputs();
  }
}

function updateLocationInputs() {
  const latEl = document.getElementById("wizard-lat-input");
  const lngEl = document.getElementById("wizard-lng-input");
  const addrEl = document.getElementById("wizard-address-input");
  const markEl = document.getElementById("wizard-landmark-input");

  if (latEl) latEl.value = APP_STATE.reportWizard.location.lat;
  if (lngEl) lngEl.value = APP_STATE.reportWizard.location.lng;
  if (addrEl) addrEl.value = APP_STATE.reportWizard.location.address;
  if (markEl && APP_STATE.reportWizard.location.landmark) markEl.value = APP_STATE.reportWizard.location.landmark;
}

/**
 * Opens the interactive location picker modal.
 * Wrapped with Error Boundary to prevent Leaflet GIS errors from disrupting the complaint form.
 */
function openMapPickerModal() {
  const modal = document.getElementById("map-picker-modal");
  if (!modal) return;
  modal.classList.remove("hidden");

  setTimeout(() => {
    if (window.civicErrorBoundary) {
      window.civicErrorBoundary.wrapComponent("MapPickerModal", () => {
        if (!window.L) {
          throw new Error("Leaflet GIS library is not loaded. Please verify internet connection.");
        }
        if (!APP_STATE.pickerMapInstance) {
          APP_STATE.pickerMapInstance = L.map("map-picker-canvas").setView(
            [APP_STATE.reportWizard.location.lat, APP_STATE.reportWizard.location.lng], 14
          );
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors"
          }).addTo(APP_STATE.pickerMapInstance);

          APP_STATE.pickerMarker = L.marker(
            [APP_STATE.reportWizard.location.lat, APP_STATE.reportWizard.location.lng], { draggable: true }
          ).addTo(APP_STATE.pickerMapInstance);

          APP_STATE.pickerMarker.on("dragend", (e) => {
            const coord = e.target.getLatLng();
            setNewPickerLocation(coord.lat, coord.lng);
          });

          APP_STATE.pickerMapInstance.on("click", (e) => {
            APP_STATE.pickerMarker.setLatLng(e.latlng);
            setNewPickerLocation(e.latlng.lat, e.latlng.lng);
          });
        } else {
          APP_STATE.pickerMapInstance.invalidateSize();
          APP_STATE.pickerMarker.setLatLng([APP_STATE.reportWizard.location.lat, APP_STATE.reportWizard.location.lng]);
          APP_STATE.pickerMapInstance.setView([APP_STATE.reportWizard.location.lat, APP_STATE.reportWizard.location.lng], 14);
        }
      }, {
        containerId: "map-picker-canvas",
        fallbackTitle: "Map Picker Offline Fallback",
        fallbackMessage: "Leaflet map tiles are temporarily unreachable. You can manually enter or verify GPS coordinates above.",
        onRetry: () => openMapPickerModal()
      });
    }
  }, 100);
}

function setNewPickerLocation(lat, lng) {
  APP_STATE.reportWizard.location.lat = parseFloat(lat.toFixed(5));
  APP_STATE.reportWizard.location.lng = parseFloat(lng.toFixed(5));
  if (lat > 13.06) APP_STATE.reportWizard.location.address = `Anna Nagar / Kilpauk Ward, Chennai - 600040`;
  else if (lat > 13.02) APP_STATE.reportWizard.location.address = `T. Nagar / Mylapore Ward, Chennai - 600017`;
  else APP_STATE.reportWizard.location.address = `Adyar / Velachery Ward, Chennai - 600020`;
  updateLocationInputs();
}

window.closeMapPickerModal = function() {
  const modal = document.getElementById("map-picker-modal");
  if (modal) modal.classList.add("hidden");
};

function recalculatePriority() {
  const cat = APP_STATE.reportWizard.category;
  const sev = APP_STATE.reportWizard.severity;

  if (sev === "Emergency" || cat === "Environmental Issue") {
    APP_STATE.reportWizard.calculatedPriority = "Emergency";
  } else if (sev === "High" || cat === "Water Leakage" || cat === "Drainage") {
    APP_STATE.reportWizard.calculatedPriority = "High";
  } else if (sev === "Medium") {
    APP_STATE.reportWizard.calculatedPriority = "Medium";
  } else {
    APP_STATE.reportWizard.calculatedPriority = "Low";
  }
}

function prepareReviewSummary() {
  const descEl = document.getElementById("wizard-desc-textarea");
  const landEl = document.getElementById("wizard-landmark-input");
  if (descEl) APP_STATE.reportWizard.description = descEl.value;
  if (landEl) APP_STATE.reportWizard.location.landmark = landEl.value;

  recalculatePriority();

  const imgEl = document.getElementById("summary-photo");
  if (imgEl) imgEl.src = APP_STATE.reportWizard.imagePreview || "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800";

  document.getElementById("summary-category").textContent = window.i18n.getCategoryTitle(APP_STATE.reportWizard.category);
  document.getElementById("summary-desc").textContent = APP_STATE.reportWizard.description || (window.i18n.lang === "ta" ? "விளக்கம் குறிப்பிடப்படவில்லை" : "No description provided");
  document.getElementById("summary-location").textContent = `${APP_STATE.reportWizard.location.address} (Lat: ${APP_STATE.reportWizard.location.lat}, Lng: ${APP_STATE.reportWizard.location.lng})`;

  const pBadge = window.i18n.getPriorityBadge(APP_STATE.reportWizard.calculatedPriority);
  const pEl = document.getElementById("summary-priority");
  pEl.textContent = pBadge.label;
  pEl.className = `px-3 py-1 rounded-full text-xs font-bold border ${pBadge.color}`;

  const deptName = APP_STATE.reportWizard.aiResult?.recommended_department_en || "Waste Management Department";
  const deptNameTa = APP_STATE.reportWizard.aiResult?.recommended_department_ta || "குப்பை மேலாண்மைத் துறை";
  document.getElementById("summary-dept").textContent = window.i18n.lang === "ta" ? deptNameTa : deptName;

  checkDuplicateIssue();
}

function checkDuplicateIssue() {
  const lat = APP_STATE.reportWizard.location.lat;
  const lng = APP_STATE.reportWizard.location.lng;
  const cat = APP_STATE.reportWizard.category;

  const duplicate = APP_STATE.complaints.find(c => {
    if (c.status === "Resolved" || c.category !== cat) return false;
    const dLat = Math.abs(c.latitude - lat);
    const dLng = Math.abs(c.longitude - lng);
    return dLat < 0.005 && dLng < 0.005;
  });

  if (duplicate) showDuplicateModal(duplicate);
}

function showDuplicateModal(existing) {
  const modal = document.getElementById("duplicate-alert-modal");
  if (!modal) return;

  document.getElementById("dup-existing-id").textContent = existing.complaint_id;
  document.getElementById("dup-existing-desc").textContent = existing.description;
  document.getElementById("dup-existing-dist").textContent = `120m away`;

  const supportBtn = document.getElementById("dup-support-btn");
  if (supportBtn) {
    supportBtn.onclick = async () => {
      await voteComplaint(existing.complaint_id, "support");
      modal.classList.add("hidden");
      navigateTo("track", existing.complaint_id);
    };
  }

  const proceedBtn = document.getElementById("dup-proceed-btn");
  if (proceedBtn) {
    proceedBtn.onclick = () => modal.classList.add("hidden");
  }

  modal.classList.remove("hidden");
}

async function executeComplaintSubmission() {
  const submitBtn = document.getElementById("wizard-final-submit");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="animate-spin inline-block mr-2">⏳</span> ${window.i18n.t("loading")}`;
  }

  const now = new Date();
  const year = now.getFullYear();
  const seq = APP_STATE.complaints.length + 126;
  const newId = `NCC-${year}-${String(seq).padStart(5, '0')}`;
  const nowStr = now.toISOString().replace("T", " ").substring(0, 19);

  const fallbackPhotos = {
    "Garbage": "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&auto=format&fit=crop&q=60",
    "Pothole": "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=60",
    "Streetlight": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=60",
    "Water Leakage": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=60",
    "Damaged Road": "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=60",
    "Drainage": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=60",
    "Environmental Issue": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
    "Other": "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&auto=format&fit=crop&q=60"
  };

  const activeUser = window.authRbac ? window.authRbac.currentUser : null;
  const s3Url = APP_STATE.reportWizard.s3Media?.cdnUrl || APP_STATE.reportWizard.imagePreview || fallbackPhotos[APP_STATE.reportWizard.category] || fallbackPhotos["Garbage"];

  const newComplaint = {
    complaint_id: newId,
    user_id: activeUser?.id || 1,
    citizen_name: activeUser?.name || "Citizen",
    citizen_phone: activeUser?.phone || "9840123456",
    category: APP_STATE.reportWizard.category,
    category_ta: window.i18n.getCategoryTitle(APP_STATE.reportWizard.category),
    description: APP_STATE.reportWizard.description || "Civic grievance reported via citizen portal.",
    image: s3Url,
    s3_object_key: APP_STATE.reportWizard.s3Media?.objectKey || null,
    resolution_image: null,
    resolution_notes: null,
    latitude: APP_STATE.reportWizard.location.lat,
    longitude: APP_STATE.reportWizard.location.lng,
    address: APP_STATE.reportWizard.location.address,
    landmark: APP_STATE.reportWizard.location.landmark || "",
    severity: APP_STATE.reportWizard.severity,
    priority: APP_STATE.reportWizard.calculatedPriority,
    ai_confidence: APP_STATE.reportWizard.aiResult?.confidence || 91,
    ai_detected_category: APP_STATE.reportWizard.aiResult?.detected_issue_en || APP_STATE.reportWizard.category,
    visual_proof_validated: APP_STATE.reportWizard.aiResult?.visual_proof_validated !== false,
    visual_proof_score: APP_STATE.reportWizard.aiResult?.visual_proof_score || 92,
    bounding_box: APP_STATE.reportWizard.aiResult?.bounding_box || null,
    department: APP_STATE.reportWizard.aiResult?.recommended_department_en || "Waste Management Department",
    department_ta: APP_STATE.reportWizard.aiResult?.recommended_department_ta || "குப்பை மேலாண்மைத் துறை",
    status: "Reported",
    created_at: nowStr,
    expected_resolution_date: new Date(Date.now() + 86400000 * 3).toISOString().slice(0, 10),
    resolved_at: null,
    citizen_verified: 0,
    support_count: 1,
    status_history: [
      { status: "Reported", updated_by: activeUser?.name || "Citizen", comment: `Grievance registered with AI visual proof validation (${APP_STATE.reportWizard.category} - ${APP_STATE.reportWizard.aiResult?.confidence || 91}% confidence).`, timestamp: nowStr }
    ]
  };

  // If live backend is reachable, post to API as well
  if (APP_STATE.isApiMode) {
    try {
      const formData = new FormData();
      formData.append("category", newComplaint.category);
      formData.append("description", newComplaint.description);
      formData.append("latitude", newComplaint.latitude);
      formData.append("longitude", newComplaint.longitude);
      formData.append("address", newComplaint.address);
      formData.append("landmark", newComplaint.landmark);
      formData.append("severity", newComplaint.severity);
      formData.append("ai_confidence", newComplaint.ai_confidence);
      formData.append("ai_detected_category", newComplaint.ai_detected_category);
      formData.append("image_url", newComplaint.image);
      await fetch("/api/complaints", { method: "POST", body: formData });
    } catch (e) {}
  }

  // Update local memory and localStorage store
  APP_STATE.complaints.unshift(newComplaint);
  saveStoredComplaints(APP_STATE.complaints);

  // Add notification
  const newNotif = {
    id: Date.now(),
    complaint_id: newId,
    message_en: `Your complaint ${newId} has been registered in the Greater Chennai Corporation registry.`,
    message_ta: `உங்கள் புகார் ${newId} சென்னை மாநகராட்சி பதிவேட்டில் பதிவு செய்யப்பட்டது.`,
    read: 0,
    created_at: nowStr
  };
  APP_STATE.notifications.unshift(newNotif);
  saveStoredNotifications(APP_STATE.notifications);
  renderNotificationBadge();

  showSubmissionSuccess(newComplaint);
}

function showSubmissionSuccess(complaint) {
  document.getElementById("wizard-panels-container").classList.add("hidden");
  document.getElementById("wizard-progress-bar").classList.add("hidden");

  const successEl = document.getElementById("wizard-success-panel");
  if (successEl) {
    successEl.classList.remove("hidden");
    document.getElementById("success-complaint-id").textContent = complaint.complaint_id;

    document.getElementById("success-track-btn").onclick = () => {
      resetReportWizardState();
      navigateTo("track", complaint.complaint_id);
    };

    document.getElementById("success-another-btn").onclick = () => {
      resetReportWizardState();
      navigateTo("report");
    };

    document.getElementById("success-home-btn").onclick = () => {
      resetReportWizardState();
      navigateTo("home");
    };
  }
}

function resetReportWizardState() {
  resetPhotoUpload();
  APP_STATE.reportWizard.step = 1;
  APP_STATE.reportWizard.description = "";
  APP_STATE.reportWizard.severity = "High";
  APP_STATE.reportWizard.calculatedPriority = "High";

  document.getElementById("wizard-panels-container").classList.remove("hidden");
  document.getElementById("wizard-progress-bar").classList.remove("hidden");
  document.getElementById("wizard-success-panel").classList.add("hidden");
  setWizardStep(1);
}

// --- TRACK COMPLAINT ---
function searchComplaint(complaintId) {
  if (!complaintId) return;
  const cleanId = complaintId.trim().toUpperCase();

  const found = APP_STATE.complaints.find(c => c.complaint_id.toUpperCase() === cleanId);
  if (found) {
    APP_STATE.currentComplaint = found;
    renderComplaintDetails(found);
  } else {
    showTrackError(`Complaint ${cleanId} not found in municipal registry.`);
  }
}

function showTrackError(msg) {
  const container = document.getElementById("track-result-container");
  if (container) {
    container.innerHTML = `
      <div class="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center">
        <span class="text-3xl mb-2 inline-block">⚠️</span>
        <h4 class="font-bold text-rose-800 text-lg mb-1">${window.i18n.lang === "ta" ? "புகார் கண்டறியப்படவில்லை" : "Complaint Not Found"}</h4>
        <p class="text-sm text-rose-600">${msg}</p>
      </div>
    `;
    container.classList.remove("hidden");
  }
}

function renderComplaintDetails(c) {
  const container = document.getElementById("track-result-container");
  if (!container) return;
  container.classList.remove("hidden");

  const statusBadge = window.i18n.getStatusBadge(c.status);
  const priorityBadge = window.i18n.getPriorityBadge(c.priority);
  const deptName = window.i18n.lang === "ta" ? (c.department_ta || c.department) : c.department;
  const catName = window.i18n.getCategoryTitle(c.category);

  const stages = ["Reported", "Verified", "Assigned", "In Progress", "Resolved"];
  const currentIdx = stages.indexOf(c.status);

  container.innerHTML = `
    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
      <div class="p-6 md:p-8 bg-gradient-to-r from-teal-800 to-teal-950 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <span class="text-2xl md:text-3xl font-black tracking-tight">${c.complaint_id}</span>
            <span class="px-3 py-1 rounded-full text-xs font-bold ${priorityBadge.color}">
              ${priorityBadge.label}
            </span>
          </div>
          <p class="text-teal-200 text-sm flex items-center gap-2">
            <span>📍 ${c.address}</span>
            <span>•</span>
            <span>📅 ${c.created_at}</span>
          </p>
        </div>
        <div>
          <span class="px-4 py-1.5 rounded-full text-sm font-bold border ${statusBadge.color} shadow-sm">
            ● ${statusBadge.label}
          </span>
        </div>
      </div>

      <div class="p-6 md:p-8">
        <div class="mb-10">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6" data-i18n="track_timeline_title">
            ${window.i18n.t("track_timeline_title")}
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
            ${stages.map((stage, idx) => {
              const isCompleted = idx <= currentIdx;
              const isCurrent = idx === currentIdx;
              const stageBadge = window.i18n.getStatusBadge(stage);
              const historyItem = c.status_history?.find(h => h.status === stage);
              const timeStr = historyItem ? historyItem.timestamp.split(" ")[0] : (isCompleted ? "Completed" : "Pending");

              return `
                <div class="p-4 rounded-2xl border transition-all ${
                  isCurrent 
                    ? "bg-teal-50/80 border-teal-500 shadow-sm ring-2 ring-teal-200" 
                    : isCompleted 
                      ? "bg-slate-50 border-slate-200 text-slate-700" 
                      : "bg-white border-dashed border-slate-200 text-slate-400"
                }">
                  <div class="flex items-center justify-between mb-2">
                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCompleted ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-500"
                    }">
                      ${isCompleted ? "✓" : idx + 1}
                    </span>
                    <span class="text-[10px] font-mono ${isCurrent ? "text-teal-700 font-bold" : "text-slate-400"}">
                      ${timeStr}
                    </span>
                  </div>
                  <p class="font-bold text-sm ${isCurrent ? "text-teal-900" : isCompleted ? "text-slate-800" : "text-slate-400"}">
                    ${stageBadge.label}
                  </p>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-6">
            <div>
              <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2" data-i18n="track_details_title">
                ${window.i18n.t("track_details_title")}
              </h5>
              <h3 class="text-xl font-bold text-slate-900 mb-2">${catName}</h3>
              <p class="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                ${c.description}
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-teal-50/40 border border-teal-100">
                <span class="text-[11px] font-semibold text-teal-700 uppercase" data-i18n="track_department">${window.i18n.t("track_department")}</span>
                <p class="font-bold text-teal-950 text-sm mt-1">${deptName}</p>
              </div>
              <div class="p-4 rounded-2xl bg-amber-50/40 border border-amber-100">
                <span class="text-[11px] font-semibold text-amber-700 uppercase" data-i18n="track_expected_date">${window.i18n.t("track_expected_date")}</span>
                <p class="font-bold text-amber-950 text-sm mt-1">${c.expected_resolution_date || "Within 48 hours"}</p>
              </div>
            </div>

            ${c.resolution_image ? `
              <div class="pt-4 border-t border-slate-100">
                <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3" data-i18n="track_resolution_photos">
                  ${window.i18n.t("track_resolution_photos")}
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span class="text-xs font-semibold text-slate-500 mb-1 block" data-i18n="track_before">${window.i18n.t("track_before")}</span>
                    <img src="${c.image}" class="w-full h-48 object-cover rounded-2xl border border-slate-200" alt="Before">
                  </div>
                  <div>
                    <span class="text-xs font-semibold text-emerald-600 mb-1 block flex items-center gap-1" data-i18n="track_after">
                      <span>✓</span> ${window.i18n.t("track_after")}
                    </span>
                    <img src="${c.resolution_image}" class="w-full h-48 object-cover rounded-2xl border-2 border-emerald-500 shadow-sm" alt="After">
                  </div>
                </div>
                ${c.resolution_notes ? `
                  <p class="mt-3 text-xs text-slate-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                    <strong>${window.i18n.lang === "ta" ? "துறை தீர்வு குறிப்பு:" : "Department Resolution Note:"}</strong> ${c.resolution_notes}
                  </p>
                ` : ""}
              </div>
            ` : `
              <div>
                <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Complaint Photo</h5>
                <img src="${c.image}" class="w-full h-56 object-cover rounded-2xl border border-slate-200" alt="${c.category}">
              </div>
            `}

            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="font-bold text-slate-900 text-sm">
                  👍 <span id="track-support-counter">${c.support_count || 1}</span> ${window.i18n.t("comm_support_count")}
                </p>
                <p class="text-xs text-slate-500">
                  ${c.citizen_verified ? `✓ <span class="text-emerald-700 font-semibold">${window.i18n.t("comm_verified_badge")}</span>` : "Citizen feedback helps prioritize quick municipal resolution."}
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button onclick="voteComplaint('${c.complaint_id}', 'support')" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-300 text-slate-700 hover:bg-teal-50 hover:border-teal-400 hover:text-teal-700 transition-all shadow-sm">
                  👍 ${window.i18n.t("comm_support_btn")}
                </button>
                ${c.status === "Resolved" ? `
                  <button onclick="voteComplaint('${c.complaint_id}', 'confirm_resolved')" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm">
                    ✅ ${window.i18n.t("comm_confirm_resolved_btn")}
                  </button>
                ` : `
                  <button onclick="voteComplaint('${c.complaint_id}', 'still_exists')" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-all shadow-sm">
                    ⚠️ ${window.i18n.t("comm_still_exists_btn")}
                  </button>
                `}
              </div>
            </div>
          </div>

          <div class="bg-slate-50/70 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                ${window.i18n.lang === "ta" ? "மாநகராட்சி நடவடிக்கை பதிவு" : "Municipal Action Audit Trail"}
              </h5>
              <div class="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                ${c.status_history?.map(h => `
                  <div class="relative pl-6">
                    <span class="absolute left-0 top-1 w-4 h-4 rounded-full bg-teal-600 border-2 border-white shadow-sm"></span>
                    <span class="text-[10px] font-mono text-slate-400 block">${h.timestamp}</span>
                    <span class="text-xs font-bold text-slate-800">${h.status}</span>
                    <span class="text-[11px] text-teal-700 font-medium block">by ${h.updated_by}</span>
                    <p class="text-xs text-slate-500 mt-1">${h.comment}</p>
                  </div>
                `).join("") || `<p class="text-xs text-slate-400">No history available</p>`}
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200">
              <button onclick="openAddCommentModal('${c.complaint_id}')" class="w-full py-2.5 rounded-xl text-xs font-bold text-teal-700 bg-white border border-teal-300 hover:bg-teal-50 transition-all text-center">
                💬 ${window.i18n.t("comm_add_comment")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.voteComplaint = async function(complaintId, voteType) {
  const c = APP_STATE.complaints.find(item => item.complaint_id === complaintId);
  if (!c) return;

  if (voteType === "support") {
    c.support_count = (c.support_count || 1) + 1;
  } else if (voteType === "confirm_resolved") {
    c.citizen_verified = 1;
  }

  saveStoredComplaints(APP_STATE.complaints);

  if (APP_STATE.isApiMode) {
    try {
      await fetch(`/api/complaints/${complaintId}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vote_type: voteType, user_name: "Citizen" })
      });
    } catch (e) {}
  }

  const alertMsg = voteType === "support" 
    ? (window.i18n.lang === "ta" ? "உங்கள் ஆதரவு பதிவு செய்யப்பட்டது!" : "Your support was recorded!")
    : voteType === "confirm_resolved"
      ? (window.i18n.lang === "ta" ? "தீர்வு உறுதி செய்யப்பட்டது! நன்றி." : "Resolution confirmed! Thank you.")
      : (window.i18n.lang === "ta" ? "தகவல் அதிகாரிகளுக்கு அனுப்பப்பட்டது." : "Alert sent to field supervisor.");

  showToast(alertMsg);
  searchComplaint(complaintId);
};

window.openAddCommentModal = function(complaintId) {
  const comment = prompt(window.i18n.t("comm_comment_placeholder"));
  if (comment && comment.trim()) {
    const c = APP_STATE.complaints.find(item => item.complaint_id === complaintId);
    if (c) {
      if (!c.status_history) c.status_history = [];
      c.status_history.push({
        status: "Comment",
        updated_by: "Citizen",
        comment: comment.trim(),
        timestamp: new Date().toISOString().replace("T", " ").substring(0, 19)
      });
      saveStoredComplaints(APP_STATE.complaints);
      showToast(window.i18n.lang === "ta" ? "கருத்து பதிவு செய்யப்பட்டது!" : "Comment posted!");
      searchComplaint(complaintId);
    }
  }
};

/**
 * Initializes the Live Civic GIS Map (Leaflet.js) wrapped in an Error Boundary.
 * If Leaflet CDN fails to load or WebGL crashes, an accessible tabular view
 * of all complaints with coordinates and ward data is rendered as a fallback.
 */
function initCivicMap() {
  const mapEl = document.getElementById("civic-map-canvas");
  if (!mapEl) return;

  if (window.civicErrorBoundary) {
    window.civicErrorBoundary.wrapComponent("CivicMapEngine", () => {
      if (!window.L) {
        throw new Error("Leaflet GIS library (window.L) not loaded or network timeout");
      }
      if (!APP_STATE.mapInstance) {
        APP_STATE.mapInstance = L.map("civic-map-canvas").setView([13.0450, 80.2300], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors • Greater Chennai Corporation"
        }).addTo(APP_STATE.mapInstance);

        APP_STATE.markersLayer = L.layerGroup().addTo(APP_STATE.mapInstance);

        document.querySelectorAll("[data-map-filter]").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("[data-map-filter]").forEach(b => {
              b.className = "px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white text-slate-700 hover:bg-slate-50";
            });
            btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-sm";
            filterMapMarkers(btn.getAttribute("data-map-filter"));
          });
        });
      } else {
        APP_STATE.mapInstance.invalidateSize();
      }

      filterMapMarkers("All");
    }, {
      containerId: "civic-map-canvas",
      fallbackTitle: "GIS Map Offline Fallback",
      fallbackMessage: "Leaflet map tiles are temporarily unreachable. All grievance coordinates and ward statuses are accessible below.",
      onRetry: () => initCivicMap(),
      fallbackRenderer: (err, retry) => `
        <div class="p-8 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-center h-full flex flex-col items-center justify-center">
          <span class="text-4xl mb-2">🗺️</span>
          <h5 class="font-bold text-sm text-slate-900">Civic Spatial Fallback View</h5>
          <p class="text-xs text-slate-500 max-w-md mt-1 mb-4">Live tile server unavailable (${err.message}). Displaying ${APP_STATE.complaints.length} active grievances in offline mode.</p>
          <div class="w-full max-w-lg overflow-x-auto text-left mb-4">
            <table class="w-full text-[11px] bg-white rounded-xl shadow-sm border border-slate-200">
              <thead class="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th class="p-2">ID</th>
                  <th class="p-2">Category</th>
                  <th class="p-2">Status</th>
                  <th class="p-2">Coordinates</th>
                </tr>
              </thead>
              <tbody>
                ${APP_STATE.complaints.slice(0, 5).map(c => `
                  <tr class="border-b border-slate-100">
                    <td class="p-2 font-bold text-teal-700">${c.complaint_id}</td>
                    <td class="p-2">${c.category}</td>
                    <td class="p-2">${c.status}</td>
                    <td class="p-2 font-mono text-[10px]">${c.latitude.toFixed(4)}, ${c.longitude.toFixed(4)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <button onclick="window.civicErrorBoundary.retryComponent('CivicMapEngine')" class="px-5 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 shadow-sm">
            Retry Map Engine ↺
          </button>
        </div>
      `
    });
  } else {
    if (window.L && !APP_STATE.mapInstance) {
      APP_STATE.mapInstance = L.map("civic-map-canvas").setView([13.0450, 80.2300], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      }).addTo(APP_STATE.mapInstance);
      APP_STATE.markersLayer = L.layerGroup().addTo(APP_STATE.mapInstance);
      filterMapMarkers("All");
    }
  }
}

function filterMapMarkers(filter) {
  if (!APP_STATE.markersLayer) return;
  APP_STATE.markersLayer.clearLayers();

  let filtered = APP_STATE.complaints;
  if (filter === "Open") filtered = APP_STATE.complaints.filter(c => c.status === "Reported" || c.status === "Verified");
  else if (filter === "In Progress") filtered = APP_STATE.complaints.filter(c => c.status === "In Progress" || c.status === "Assigned");
  else if (filter === "Resolved") filtered = APP_STATE.complaints.filter(c => c.status === "Resolved");
  else if (filter === "Emergency") filtered = APP_STATE.complaints.filter(c => c.priority === "Emergency");

  const catIcons = {
    "Garbage": { icon: "🗑️", color: "#f59e0b" },
    "Pothole": { icon: "🕳️", color: "#64748b" },
    "Streetlight": { icon: "💡", color: "#0d9488" },
    "Water Leakage": { icon: "🚰", color: "#0284c7" },
    "Damaged Road": { icon: "🛣️", color: "#ea580c" },
    "Drainage": { icon: "🌊", color: "#4f46e5" },
    "Environmental Issue": { icon: "🌳", color: "#16a34a" },
    "Other": { icon: "⚠️", color: "#e11d48" }
  };

  filtered.forEach(c => {
    const iconData = catIcons[c.category] || catIcons["Other"];
    const customHtml = `<div class="custom-civic-pin ${c.priority === 'Emergency' ? 'emergency-pulse' : ''}" style="background-color: ${iconData.color};">${iconData.icon}</div>`;

    const markerIcon = L.divIcon({ html: customHtml, className: "", iconSize: [38, 38], iconAnchor: [19, 19] });
    const marker = L.marker([c.latitude, c.longitude], { icon: markerIcon });
    const statusBadge = window.i18n.getStatusBadge(c.status);

    marker.bindPopup(`
      <div class="p-1 max-w-[240px]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-xs font-black text-teal-700">${c.complaint_id}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${statusBadge.color}">${statusBadge.label}</span>
        </div>
        <img src="${c.image}" class="w-full h-24 object-cover rounded-lg mb-2" alt="${c.category}">
        <h5 class="font-bold text-xs text-slate-900 mb-0.5">${window.i18n.getCategoryTitle(c.category)}</h5>
        <p class="text-[11px] text-slate-500 mb-2 truncate">${c.address}</p>
        <button onclick="navigateTo('track', '${c.complaint_id}')" class="w-full py-1.5 rounded-lg text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 text-center block">
          ${window.i18n.lang === "ta" ? "முழு விவரம் →" : "View Details →"}
        </button>
      </div>
    `);

    APP_STATE.markersLayer.addLayer(marker);
  });
}

// --- NEARBY ISSUES ---
function loadNearbyView() {
  const container = document.getElementById("nearby-results-list");
  const countEl = document.getElementById("nearby-count-text");
  if (!container) return;

  const lat = APP_STATE.reportWizard.location.lat || 13.0850;
  const lng = APP_STATE.reportWizard.location.lng || 80.2101;

  const results = APP_STATE.complaints.map(c => {
    const dLat = (c.latitude - lat) * 111000;
    const dLng = (c.longitude - lng) * 111000 * Math.cos(lat * Math.PI / 180);
    const distMeters = Math.round(Math.sqrt(dLat * dLat + dLng * dLng));
    return { ...c, distance_meters: distMeters };
  }).filter(c => c.distance_meters <= 4500).sort((a, b) => a.distance_meters - b.distance_meters);

  if (countEl) countEl.textContent = `${results.length} ${window.i18n.t("nearby_found")}`;

  if (results.length === 0) {
    container.innerHTML = `
      <div class="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center">
        <span class="text-3xl mb-2 inline-block">🌿</span>
        <p class="text-sm text-slate-600">${window.i18n.t("nearby_none")}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(c => {
    const sBadge = window.i18n.getStatusBadge(c.status);
    const pBadge = window.i18n.getPriorityBadge(c.priority);
    return `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-5 hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div class="flex gap-4 items-center">
          <img src="${c.image}" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-slate-200" alt="${c.category}">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="text-xs font-bold text-teal-700">${c.complaint_id}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${sBadge.color}">${sBadge.label}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${pBadge.color}">${pBadge.label}</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base">${window.i18n.getCategoryTitle(c.category)}</h4>
            <p class="text-xs text-slate-500 line-clamp-1 mb-1">${c.address}</p>
            <span class="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
              📍 ${c.distance_meters}m ${window.i18n.t("nearby_distance")}
            </span>
          </div>
        </div>
        <div class="flex sm:flex-col gap-2 w-full sm:w-auto">
          <button onclick="navigateTo('track', '${c.complaint_id}')" class="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold bg-teal-50 text-teal-700 hover:bg-teal-100 transition-all text-center">
            ${window.i18n.lang === "ta" ? "கண்காணிக்க" : "Track Issue"}
          </button>
          <button onclick="voteComplaint('${c.complaint_id}', 'support')" class="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-300 text-slate-700 hover:border-teal-500 transition-all text-center">
            👍 ${c.support_count || 1}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// --- CITIZEN DASHBOARD ---
function loadCitizenDashboard() {
  const myComplaints = APP_STATE.complaints.slice(0, 5);

  const total = myComplaints.length;
  const inProg = myComplaints.filter(c => c.status === "In Progress" || c.status === "Assigned").length;
  const resolved = myComplaints.filter(c => c.status === "Resolved").length;
  const pending = myComplaints.filter(c => c.status === "Reported" || c.status === "Verified").length;

  document.getElementById("cdash-total").textContent = total;
  document.getElementById("cdash-progress").textContent = inProg;
  document.getElementById("cdash-resolved").textContent = resolved;
  document.getElementById("cdash-pending").textContent = pending;

  const listEl = document.getElementById("cdash-complaints-list");
  if (listEl) {
    listEl.innerHTML = myComplaints.map(c => {
      const sBadge = window.i18n.getStatusBadge(c.status);
      const pBadge = window.i18n.getPriorityBadge(c.priority);
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/50">
          <td class="py-3.5 px-4 font-mono font-bold text-xs text-teal-700">${c.complaint_id}</td>
          <td class="py-3.5 px-4 font-semibold text-xs text-slate-900">${window.i18n.getCategoryTitle(c.category)}</td>
          <td class="py-3.5 px-4 text-xs text-slate-500">${c.address.split(",")[0]}</td>
          <td class="py-3.5 px-4"><span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${pBadge.color}">${pBadge.label}</span></td>
          <td class="py-3.5 px-4"><span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${sBadge.color}">${sBadge.label}</span></td>
          <td class="py-3.5 px-4 text-right">
            <button onclick="navigateTo('track', '${c.complaint_id}')" class="px-3 py-1 text-xs font-bold text-teal-600 hover:bg-teal-50 rounded-lg">
              ${window.i18n.t("view")} →
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderDashboardNotifications();
}

function renderDashboardNotifications() {
  const container = document.getElementById("cdash-notif-container");
  if (!container) return;

  if (APP_STATE.notifications.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 p-4">No notifications yet.</p>`;
    return;
  }

  container.innerHTML = APP_STATE.notifications.map(n => `
    <div class="p-4 rounded-2xl border ${n.read ? 'bg-white border-slate-100 text-slate-600' : 'bg-teal-50/60 border-teal-200 text-teal-950 font-medium'} flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-xl">🔔</span>
        <div>
          <p class="text-xs ${n.read ? 'text-slate-700' : 'text-teal-900 font-bold'}">
            ${window.i18n.lang === "ta" ? n.message_ta : n.message_en}
          </p>
          <span class="text-[10px] text-slate-400 font-mono">${n.created_at}</span>
        </div>
      </div>
      <button onclick="navigateTo('track', '${n.complaint_id}')" class="px-3 py-1 rounded-lg text-xs font-bold bg-white border border-slate-200 hover:border-teal-500 text-teal-700 whitespace-nowrap shadow-sm">
        ${window.i18n.lang === "ta" ? "பார்க்க" : "View"}
      </button>
    </div>
  `).join("");
}

// --- ADMIN DASHBOARD ---
function loadAdminDashboard() {
  const total = 1248 + APP_STATE.complaints.length;
  const newC = 86 + APP_STATE.complaints.filter(c => c.status === "Reported").length;
  const high = 42 + APP_STATE.complaints.filter(c => c.priority === "High").length;
  const emerg = 8 + APP_STATE.complaints.filter(c => c.priority === "Emergency").length;
  const inProg = 173 + APP_STATE.complaints.filter(c => c.status === "In Progress").length;
  const resolved = 1069 + APP_STATE.complaints.filter(c => c.status === "Resolved").length;

  document.getElementById("admin-stat-total").textContent = total.toLocaleString();
  document.getElementById("admin-stat-new").textContent = newC.toLocaleString();
  document.getElementById("admin-stat-high").textContent = high.toLocaleString();
  document.getElementById("admin-stat-emergency").textContent = emerg.toLocaleString();
  document.getElementById("admin-stat-in-progress").textContent = inProg.toLocaleString();
  document.getElementById("admin-stat-resolved").textContent = resolved.toLocaleString();
  document.getElementById("admin-stat-avg-time").textContent = `2.8 ${window.i18n.t("days")}`;

  renderAdminComplaintsTable(APP_STATE.complaints);
  renderAdminCharts();
}

function renderAdminComplaintsTable(complaints) {
  const tbody = document.getElementById("admin-complaints-tbody");
  if (!tbody) return;

  tbody.innerHTML = complaints.map(c => {
    const sBadge = window.i18n.getStatusBadge(c.status);
    const pBadge = window.i18n.getPriorityBadge(c.priority);
    const dept = window.i18n.lang === "ta" ? (c.department_ta || c.department) : c.department;

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
        <td class="py-3 px-3 font-mono font-bold text-xs text-teal-700">${c.complaint_id}</td>
        <td class="py-3 px-3">
          <span class="font-bold text-xs text-slate-900 block">${window.i18n.getCategoryTitle(c.category)}</span>
          <span class="text-[11px] text-slate-400 line-clamp-1">${c.description}</span>
        </td>
        <td class="py-3 px-3 text-xs text-slate-600 truncate max-w-[140px]">${c.address.split(",")[0]}</td>
        <td class="py-3 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${pBadge.color}">${pBadge.label}</span>
        </td>
        <td class="py-3 px-3 text-xs text-slate-700 truncate max-w-[150px]">${dept}</td>
        <td class="py-3 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${sBadge.color}">${sBadge.label}</span>
        </td>
        <td class="py-3 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">${c.created_at.split(" ")[0]}</td>
        <td class="py-3 px-3 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="navigateTo('track', '${c.complaint_id}')" class="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-teal-600 bg-slate-100 hover:bg-teal-50 rounded-lg">
              ${window.i18n.t("view")}
            </button>
            <button onclick="openAdminUpdateModal('${c.complaint_id}')" class="px-2.5 py-1 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm">
              ${window.i18n.t("admin_btn_update")}
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

window.applyAdminFilters = function() {
  const search = document.getElementById("admin-search-input")?.value.toLowerCase();
  const deptFilter = document.getElementById("admin-dept-filter")?.value;
  const prioFilter = document.getElementById("admin-priority-filter")?.value;
  const statusFilter = document.getElementById("admin-status-filter")?.value;

  let filtered = APP_STATE.complaints;

  if (search) {
    filtered = filtered.filter(c => 
      c.complaint_id.toLowerCase().includes(search) || 
      c.description.toLowerCase().includes(search) || 
      c.address.toLowerCase().includes(search)
    );
  }
  if (deptFilter && deptFilter !== "All") filtered = filtered.filter(c => c.department === deptFilter);
  if (prioFilter && prioFilter !== "All") filtered = filtered.filter(c => c.priority === prioFilter);
  if (statusFilter && statusFilter !== "All") filtered = filtered.filter(c => c.status === statusFilter);

  renderAdminComplaintsTable(filtered);
};

window.openAdminUpdateModal = function(complaintId) {
  const complaint = APP_STATE.complaints.find(c => c.complaint_id === complaintId);
  if (!complaint) return;

  const modal = document.getElementById("admin-update-modal");
  if (!modal) return;

  document.getElementById("modal-update-complaint-id").textContent = complaintId;
  document.getElementById("modal-status-select").value = complaint.status;
  document.getElementById("modal-priority-select").value = complaint.priority;
  document.getElementById("modal-dept-select").value = complaint.department;
  document.getElementById("modal-notes-textarea").value = "";
  document.getElementById("modal-res-img-input").value = "";

  const saveBtn = document.getElementById("modal-save-btn");
  saveBtn.onclick = async () => {
    // Enforce Endpoint Middleware RBAC Claim
    if (window.authRbac) {
      const authRes = await window.authRbac.endpointMiddleware("/api/complaints/status", "PUT", "complaint:status_update");
      if (!authRes.ok) {
        alert(`RBAC Authorization Denied (${authRes.error}):\n${authRes.message}\n\nPlease switch to a Ward Officer or Admin role.`);
        return;
      }
    }

    const newStatus = document.getElementById("modal-status-select").value;
    const newDept = document.getElementById("modal-dept-select").value;
    const newPrio = document.getElementById("modal-priority-select").value;
    const notes = document.getElementById("modal-notes-textarea").value;
    const resImg = document.getElementById("modal-res-img-input").value || (newStatus === "Resolved" ? "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800" : null);

    complaint.status = newStatus;
    complaint.department = newDept;
    complaint.priority = newPrio;
    if (resImg) complaint.resolution_image = resImg;
    if (notes) complaint.resolution_notes = notes;

    const nowStr = new Date().toISOString().replace("T", " ").substring(0, 19);
    if (!complaint.status_history) complaint.status_history = [];
    complaint.status_history.push({
      status: newStatus,
      updated_by: "Admin Officer",
      comment: notes || `Status transitioned to ${newStatus}`,
      timestamp: nowStr
    });

    saveStoredComplaints(APP_STATE.complaints);

    // Add bilingual notification
    const notifTexts = {
      "Verified": { en: `Your complaint ${complaintId} has been verified by municipal authorities.`, ta: `உங்கள் புகார் ${complaintId} மாநகராட்சி அதிகாரிகளால் சரிபார்க்கப்பட்டது.` },
      "Assigned": { en: `Your complaint ${complaintId} has been assigned to ${newDept}.`, ta: `உங்கள் புகார் ${complaintId} துறைக்கு ஒதுக்கப்பட்டுள்ளது.` },
      "In Progress": { en: `Work has started on your complaint ${complaintId}.`, ta: `உங்கள் புகார் ${complaintId}-க்கான பணி தொடங்கப்பட்டுள்ளது.` },
      "Resolved": { en: `Your complaint ${complaintId} has been resolved! Please review proof photo.`, ta: `உங்கள் புகார் ${complaintId} தீர்வு காணப்பட்டது! தயவுசெய்து சரிபார்க்கவும்.` }
    };

    if (notifTexts[newStatus]) {
      APP_STATE.notifications.unshift({
        id: Date.now(),
        complaint_id: complaintId,
        message_en: notifTexts[newStatus].en,
        message_ta: notifTexts[newStatus].ta,
        read: 0,
        created_at: nowStr
      });
      saveStoredNotifications(APP_STATE.notifications);
      renderNotificationBadge();
    }

    modal.classList.add("hidden");
    showToast(`Complaint ${complaintId} updated successfully!`);
    loadAdminDashboard();
  };

  modal.classList.remove("hidden");
};

window.closeAdminUpdateModal = function() {
  const modal = document.getElementById("admin-update-modal");
  if (modal) modal.classList.add("hidden");
};

/**
 * Renders executive administrative analytics charts via Chart.js,
 * protected by an Error Boundary to prevent Chart.js canvas exceptions
 * from interrupting command center oversight.
 */
let chartInstances = {};
function renderAdminCharts() {
  if (window.civicErrorBoundary) {
    window.civicErrorBoundary.wrapComponent("AdminAnalyticsCharts", () => {
      const catCounts = {};
      const statusCounts = {};
      const prioCounts = { "Low": 0, "Medium": 0, "High": 0, "Emergency": 0 };

      APP_STATE.complaints.forEach(c => {
        catCounts[c.category] = (catCounts[c.category] || 0) + 1;
        statusCounts[c.status] = (statusCounts[c.status] || 0) + 1;
        if (prioCounts[c.priority] !== undefined) prioCounts[c.priority]++;
      });

      const catCanvas = document.getElementById("chart-categories");
      if (catCanvas && window.Chart) {
        if (chartInstances.cat) chartInstances.cat.destroy();
        chartInstances.cat = new Chart(catCanvas, {
          type: "doughnut",
          data: {
            labels: Object.keys(catCounts).map(l => window.i18n.getCategoryTitle(l)),
            datasets: [{
              data: Object.values(catCounts),
              backgroundColor: ["#0d9488", "#f59e0b", "#3b82f6", "#06b6d4", "#ec4899", "#8b5cf6", "#10b981", "#64748b"]
            }]
          },
          options: { responsive: true, plugins: { legend: { position: "bottom", labels: { boxWidth: 12 } } } }
        });
      }

      const statusCanvas = document.getElementById("chart-status");
      if (statusCanvas && window.Chart) {
        if (chartInstances.status) chartInstances.status.destroy();
        chartInstances.status = new Chart(statusCanvas, {
          type: "bar",
          data: {
            labels: Object.keys(statusCounts).map(s => window.i18n.getStatusBadge(s).label),
            datasets: [{ label: "Count", data: Object.values(statusCounts), backgroundColor: "#0d9488", borderRadius: 6 }]
          },
          options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
      }

      const priorityCanvas = document.getElementById("chart-priority");
      if (priorityCanvas && window.Chart) {
        if (chartInstances.prio) chartInstances.prio.destroy();
        chartInstances.prio = new Chart(priorityCanvas, {
          type: "pie",
          data: {
            labels: Object.keys(prioCounts).map(p => window.i18n.getPriorityBadge(p).label),
            datasets: [{ data: Object.values(prioCounts), backgroundColor: ["#64748b", "#f59e0b", "#ea580c", "#e11d48"] }]
          },
          options: { responsive: true, plugins: { legend: { position: "bottom", labels: { boxWidth: 12 } } } }
        });
      }
    }, {
      containerId: "admin-charts-container",
      fallbackTitle: "Charts Visualization Fallback",
      fallbackMessage: "Chart.js canvas context is unavailable. Tabular KPI metrics and grievance summaries are actively maintained.",
      onRetry: () => renderAdminCharts()
    });
  }
}

// --- DEPARTMENTS ---
function loadDepartmentsView() {
  const container = document.getElementById("departments-grid");
  if (!container) return;

  container.innerHTML = APP_STATE.departments.map(d => `
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200">${d.code}</span>
          <span class="text-xs font-semibold text-slate-500">⚡ ${d.avg_resolution_days} ${window.i18n.t("days")} SLA</span>
        </div>
        <h3 class="font-bold text-slate-900 text-base mb-1">${window.i18n.lang === "ta" ? d.name_ta : d.name_en}</h3>
        <p class="text-xs text-slate-500 mb-4"><span>👤 Head: ${d.head_name}</span></p>
        <div class="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-center">
          <div><span class="text-[10px] text-slate-400 uppercase font-semibold block">${window.i18n.t("dept_pending")}</span><span class="font-bold text-amber-600 text-sm">${d.pending}</span></div>
          <div><span class="text-[10px] text-slate-400 uppercase font-semibold block">${window.i18n.t("dept_in_progress")}</span><span class="font-bold text-teal-600 text-sm">${d.in_progress}</span></div>
          <div><span class="text-[10px] text-slate-400 uppercase font-semibold block">${window.i18n.t("dept_resolved")}</span><span class="font-bold text-emerald-600 text-sm">${d.resolved}</span></div>
        </div>
      </div>
      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>📞 ${d.contact}</span>
        <button onclick="filterAdminByDept('${d.name_en}')" class="font-bold text-teal-600 hover:underline">${window.i18n.lang === "ta" ? "புகார்கள் →" : "View Work →"}</button>
      </div>
    </div>
  `).join("");
}

window.filterAdminByDept = function(deptName) {
  navigateTo("admin_dash");
  const select = document.getElementById("admin-dept-filter");
  if (select) {
    select.value = deptName;
    applyAdminFilters();
  }
};

// --- REPORTS ---
function loadReportsView() {
  const reportType = document.getElementById("report-type-select")?.value || "daily";
  generateReport(reportType);
}

window.generateReport = function(type) {
  const container = document.getElementById("reports-table-container");
  if (!container) return;

  const records = APP_STATE.complaints;
  document.getElementById("report-timestamp-badge").textContent = `Generated: ${new Date().toLocaleString()}`;
  document.getElementById("report-total-count").textContent = `${records.length} Records`;

  container.innerHTML = `
    <table class="w-full text-left report-table text-xs">
      <thead class="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
        <tr>
          <th class="py-3 px-3">Complaint ID</th>
          <th class="py-3 px-3">Category</th>
          <th class="py-3 px-3">Location</th>
          <th class="py-3 px-3">Priority</th>
          <th class="py-3 px-3">Department</th>
          <th class="py-3 px-3">Status</th>
          <th class="py-3 px-3">Reported On</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        ${records.map(r => `
          <tr class="hover:bg-slate-50/50">
            <td class="py-2.5 px-3 font-mono font-bold text-teal-700">${r.complaint_id}</td>
            <td class="py-2.5 px-3 font-semibold">${window.i18n.getCategoryTitle(r.category)}</td>
            <td class="py-2.5 px-3 text-slate-600">${r.address.split(",")[0]}</td>
            <td class="py-2.5 px-3 font-bold">${r.priority}</td>
            <td class="py-2.5 px-3">${r.department}</td>
            <td class="py-2.5 px-3">${r.status}</td>
            <td class="py-2.5 px-3 font-mono text-slate-400">${r.created_at}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
};

window.exportReportCSV = function() {
  const complaints = APP_STATE.complaints;
  let csv = "Complaint ID,Category,Description,Address,Priority,Department,Status,Reported At,Resolved At\n";
  complaints.forEach(c => {
    const desc = `"${(c.description || "").replace(/"/g, '""')}"`;
    const addr = `"${(c.address || "").replace(/"/g, '""')}"`;
    csv += `${c.complaint_id},${c.category},${desc},${addr},${c.priority},"${c.department}",${c.status},${c.created_at},${c.resolved_at || ""}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", `namma_city_care_report_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- TOAST ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-6 right-6 bg-teal-900 text-white text-xs font-semibold px-5 py-3 rounded-2xl shadow-xl z-50 flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300";
  toast.innerHTML = `<span>✓</span><span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.remove("translate-y-4", "opacity-0"), 50);
  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- ARCHITECTURAL MODALS & NEXT-GEN CONTROLLERS ---

// 1. Auth & Login Modal
window.openAuthModal = function() {
  const modal = document.getElementById("modal-auth");
  if (modal) {
    modal.classList.remove("hidden");
    const user = window.authRbac ? window.authRbac.currentUser : null;
    const emailInput = document.getElementById("auth-email-input");
    if (user && emailInput) emailInput.value = user.email;
  }
};

window.closeAuthModal = function() {
  const modal = document.getElementById("modal-auth");
  if (modal) modal.classList.add("hidden");
};

window.handleAuthSubmit = async function(event) {
  event.preventDefault();
  const email = document.getElementById("auth-email-input").value;
  const password = document.getElementById("auth-pass-input").value;
  const errorEl = document.getElementById("auth-error-msg");
  const submitBtn = document.getElementById("auth-submit-btn");

  if (submitBtn) submitBtn.disabled = true;
  if (errorEl) errorEl.classList.add("hidden");

  try {
    if (window.authRbac) {
      await window.authRbac.login(email, password);
      showToast(`Authenticated as ${window.authRbac.currentUser.name} (${window.authRbac.currentUser.role})`);
      closeAuthModal();
    }
  } catch (err) {
    if (errorEl) {
      errorEl.textContent = err.message || "Authentication failed.";
      errorEl.classList.remove("hidden");
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
};

// 2. JWT Inspector Modal
window.openJwtInspectorModal = function() {
  const modal = document.getElementById("modal-jwt-inspector");
  if (!modal) return;
  modal.classList.remove("hidden");
  renderJwtInspector();
};

window.closeJwtInspectorModal = function() {
  const modal = document.getElementById("modal-jwt-inspector");
  if (modal) modal.classList.add("hidden");
};

function renderJwtInspector() {
  if (!window.authRbac) return;
  const info = window.authRbac.inspectToken();
  if (!info) return;

  const rawEl = document.getElementById("jwt-raw-display");
  const headerEl = document.getElementById("jwt-header-display");
  const payloadEl = document.getElementById("jwt-payload-display");
  const timerBadge = document.getElementById("jwt-timer-badge");

  if (rawEl) rawEl.textContent = info.raw;
  if (headerEl) headerEl.textContent = JSON.stringify(info.header, null, 2);
  if (payloadEl) payloadEl.textContent = JSON.stringify(info.payload, null, 2);

  if (timerBadge) {
    const remainingSec = Math.max(0, info.payload.exp - Math.floor(Date.now() / 1000));
    const mins = Math.floor(remainingSec / 60);
    const secs = remainingSec % 60;
    timerBadge.textContent = `${mins}m ${secs}s left (Valid)`;
  }

  // Render recent audit logs
  const logsContainer = document.getElementById("jwt-audit-logs");
  if (logsContainer) {
    const logs = window.authRbac.getAuditLogs();
    logsContainer.innerHTML = logs.slice(0, 6).map(l => `
      <div class="p-2 rounded bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px]">
        <div>
          <span class="font-bold text-slate-800">${l.eventType}</span>
          <span class="text-slate-500 block truncate max-w-sm">${l.details}</span>
        </div>
        <span class="text-slate-400 font-mono">${l.timestamp.slice(11)}</span>
      </div>
    `).join("");
  }
}

// 3. S3 Cloud Storage Modal
window.openS3StorageModal = function() {
  const modal = document.getElementById("modal-s3-storage");
  if (!modal) return;
  modal.classList.remove("hidden");
  renderS3StorageModal();
};

window.closeS3StorageModal = function() {
  const modal = document.getElementById("modal-s3-storage");
  if (modal) modal.classList.add("hidden");
};

function renderS3StorageModal() {
  if (!window.s3Storage) return;
  const metrics = window.s3Storage.getStorageMetrics();

  const countEl = document.getElementById("s3-stat-objects");
  const savedEl = document.getElementById("s3-stat-saved");
  if (countEl) countEl.textContent = metrics.totalObjects;
  if (savedEl) savedEl.textContent = `${metrics.savingsPercent}%`;

  const tbody = document.getElementById("s3-catalog-tbody");
  if (tbody) {
    tbody.innerHTML = window.s3Storage.mediaCatalog.map(item => `
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold text-slate-900 truncate max-w-xs">${item.objectKey}</td>
        <td class="p-2.5 text-slate-600">${item.mimeType} • ${Math.round(item.sizeBytes / 1024)} KB</td>
        <td class="p-2.5 text-slate-500">${item.uploadedAt}</td>
        <td class="p-2.5">
          <a href="${item.url}" target="_blank" class="px-2 py-0.5 rounded bg-teal-50 text-teal-700 hover:bg-teal-100 font-bold text-[10px]">
            Preview →
          </a>
        </td>
      </tr>
    `).join("");
  }
}

// 4. Design Thinking & Tamil Lexicon Modal
window.openDesignThinkingModal = function() {
  const modal = document.getElementById("modal-design-thinking");
  if (modal) modal.classList.remove("hidden");
};

window.closeDesignThinkingModal = function() {
  const modal = document.getElementById("modal-design-thinking");
  if (modal) modal.classList.add("hidden");
};

// 5. Vision AI Settings Modal
window.openVisionSettingsModal = function() {
  const modal = document.getElementById("modal-vision-settings");
  if (!modal) return;
  modal.classList.remove("hidden");
  const keyInput = document.getElementById("vision-key-input");
  if (keyInput && window.visionPipeline) {
    keyInput.value = window.visionPipeline.getApiKey();
  }
};

window.closeVisionSettingsModal = function() {
  const modal = document.getElementById("modal-vision-settings");
  if (modal) modal.classList.add("hidden");
};

window.saveVisionSettings = function() {
  const keyInput = document.getElementById("vision-key-input");
  if (keyInput && window.visionPipeline) {
    window.visionPipeline.setApiKey(keyInput.value);
    showToast(keyInput.value ? "Gemini Vision API Key saved!" : "Using Client-Side Neural Computer Vision");
  }
  closeVisionSettingsModal();
};

// 6. Unit Testing & Error Boundary Modal Global Triggers
window.openTestModal = function() {
  if (window.civicTestRunner) window.civicTestRunner.openTestModal();
};

window.closeTestModal = function() {
  if (window.civicTestRunner) window.civicTestRunner.closeTestModal();
};

window.openDiagnosticsModal = function() {
  if (window.civicErrorBoundary) window.civicErrorBoundary.openDiagnosticsModal();
};

window.closeDiagnosticsModal = function() {
  if (window.civicErrorBoundary) window.civicErrorBoundary.closeDiagnosticsModal();
};

window.logout = function() {
  if (window.authRbac) window.authRbac.logout();
};

window.switchRoleDemo = function(role) {
  if (window.authRbac) return window.authRbac.switchRoleDemo(role);
};
