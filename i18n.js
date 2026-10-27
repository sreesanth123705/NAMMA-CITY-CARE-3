// Namma City Care - Bilingual Localization Engine (English 🇬🇧 & தமிழ் 🇮🇳)

const translations = {
  en: {
    // Brand
    brand_name: "Namma City Care",
    brand_tagline: "Report. Track. Improve Our City.",
    govt_tag: "Civic Portal • Greater Chennai Corporation",
    
    // Navigation
    nav_home: "Home",
    nav_report: "Report Issue",
    nav_track: "Track Complaint",
    nav_nearby: "Nearby Issues",
    nav_map: "Live Map",
    nav_emergency: "Emergency Help",
    nav_about: "About",
    nav_citizen_dash: "Citizen Dashboard",
    nav_my_complaints: "My Complaints",
    nav_notifications: "Notifications",
    nav_admin: "Admin Portal",
    nav_admin_dash: "Admin Dashboard",
    nav_admin_complaints: "Manage Complaints",
    nav_admin_departments: "Departments",
    nav_admin_analytics: "Analytics",
    nav_admin_reports: "Reports",
    role_citizen: "Citizen View",
    role_admin: "Municipal Admin",
    
    // Hero
    hero_title: "Your City. Your Voice. Your Responsibility.",
    hero_subtitle: "Report civic problems with photos and location, let AI identify the issue, and track its resolution from verification to completion.",
    cta_report: "Report a Civic Issue",
    cta_track: "Track Complaint",
    stat_resolved: "Issues Resolved",
    stat_avg_time: "Avg Resolution Time",
    stat_satisfaction: "Citizen Satisfaction",
    stat_wards: "Wards Covered",

    // Categories Section
    cat_section_title: "Civic Issue Categories",
    cat_section_desc: "Select a category below to quickly file an issue or let our AI auto-detect from your photo.",
    cat_garbage: "Garbage",
    cat_garbage_desc: "Commercial or residential waste piles, overflowing bins",
    cat_pothole: "Pothole",
    cat_pothole_desc: "Dangerous craters, road surface damage, skidding hazard",
    cat_streetlight: "Streetlight",
    cat_streetlight_desc: "Unlit dark streets, damaged poles, flickering lamps",
    cat_water: "Water Leakage",
    cat_water_desc: "Pipeline burst, drinking water loss, valve leak",
    cat_road: "Damaged Road",
    cat_road_desc: "Broken pavement, road dividers, cave-ins, gravel spills",
    cat_drainage: "Drainage",
    cat_drainage_desc: "Sewage overflow, clogged storm drains, open manholes",
    cat_environment: "Environmental Issue",
    cat_environment_desc: "Fallen trees, toxic smoke, lake pollution, illegal cutting",
    cat_other: "Other",
    cat_other_desc: "Encroachments, public signs, stray hazards, municipal infra",

    // Report Issue Wizard
    report_header: "File a Civic Complaint",
    report_sub: "Complete these easy steps to submit an official municipal grievance.",
    step1_title: "Step 1: Upload / Take Photo",
    step1_desc: "Capture or upload a clear photo of the civic problem.",
    step1_btn_upload: "Choose Photo",
    step1_btn_camera: "Take Photo",
    step1_drag: "or drag & drop image here (JPG, PNG, WebP up to 10MB)",
    step1_remove: "Remove Photo",
    step1_replace: "Replace Photo",

    step2_title: "Step 2: AI Civic Analysis",
    step2_analyzing: "AI is analyzing image features & civic hazards...",
    step2_detected_label: "Detected Issue",
    step2_confidence_label: "AI Confidence",
    step2_priority_label: "Suggested Priority",
    step2_dept_label: "Recommended Department",
    step2_accept_btn: "Accept Suggestion",
    step2_change_btn: "Change Category",

    step3_title: "Step 3: Location Details",
    step3_gps_btn: "Use My Current Location (GPS)",
    step3_map_btn: "Select Location on Map",
    step3_lat: "Latitude",
    step3_lng: "Longitude",
    step3_address_label: "Address / Ward",
    step3_landmark_label: "Nearest Landmark",
    step3_landmark_placeholder: "e.g., Near Roundtana, Opposite Bus Stand",
    step3_gps_success: "GPS Location captured accurately!",

    step4_title: "Step 4: Problem Description",
    step4_category_label: "Civic Category",
    step4_desc_label: "Describe the Problem in Detail",
    step4_desc_placeholder: "Explain the issue, impact on public or traffic, how long it has been occurring...",
    step4_severity_label: "Severity Level",
    step4_sev_low: "Low — Minor issue, no immediate hazard",
    step4_sev_med: "Medium — Inconvenience to residents/commuters",
    step4_sev_high: "High — Potential hazard or significant public disruption",
    step4_sev_emergency: "Emergency — Immediate danger to life, safety, or public health",

    step5_title: "Step 5: Review & Submit",
    step5_summary_title: "Complaint Dossier Summary",
    step5_calc_priority: "Calculated Municipal Priority",
    step5_dept: "Assigned Authority",
    step5_submit_btn: "Submit Official Complaint",

    // Success Screen
    submit_success_title: "Complaint Submitted Successfully!",
    submit_success_id_label: "Your Unique Complaint ID:",
    submit_success_msg: "Your grievance has been logged in the Greater Chennai Corporation Civic Registry. Department teams have been alerted.",
    btn_track_this: "Track This Complaint",
    btn_back_home: "Back to Home",
    btn_report_another: "File Another Issue",

    // Duplicate Modal
    dup_title: "Similar Issue Detected Nearby",
    dup_msg: "A similar issue has already been reported near this location.",
    dup_existing_id: "Existing Complaint ID:",
    dup_btn_support: "👍 Support Existing Complaint",
    dup_btn_proceed: "Submit New Complaint Anyway",

    // Track Page
    track_title: "Track Complaint Status",
    track_subtitle: "Enter your unique Complaint ID to check real-time progress and departmental updates.",
    track_input_placeholder: "Enter Complaint ID (e.g., NCC-2026-00125)",
    track_btn: "Track Progress",
    track_quick_demo: "Try Demo IDs:",
    track_details_title: "Complaint Details",
    track_expected_date: "Target Resolution Date:",
    track_reported_on: "Date Reported:",
    track_department: "Assigned Department:",
    track_priority: "Priority Level:",
    track_status: "Current Status:",
    track_timeline_title: "Resolution Timeline",
    track_resolution_photos: "Resolution Inspection Photos",
    track_before: "Before (Citizen Report)",
    track_after: "After (Department Rectification)",

    // Timeline Steps
    timeline_reported: "Reported",
    timeline_verified: "Verified",
    timeline_assigned: "Assigned",
    timeline_in_progress: "In Progress",
    timeline_resolved: "Resolved",

    // Community Verification
    comm_support_btn: "👍 Support this complaint",
    comm_support_count: "citizens support this complaint",
    comm_still_exists_btn: "⚠️ Confirm issue still exists",
    comm_confirm_resolved_btn: "✅ Confirm issue is resolved",
    comm_verified_badge: "Citizen Verified Resolution",
    comm_add_comment: "Add Public Comment",
    comm_comment_placeholder: "Share an update or note about this issue...",
    comm_submit_comment: "Post Comment",

    // Live Map
    map_title: "Live Municipal Civic Map",
    map_subtitle: "Explore reported issues, ongoing works, and resolved problems across Chennai wards.",
    map_filter_all: "All Issues",
    map_filter_open: "Open",
    map_filter_in_progress: "In Progress",
    map_filter_resolved: "Resolved",
    map_filter_emergency: "Emergency",
    map_click_hint: "Click on any marker to view complaint details and quick actions.",

    // Nearby Issues
    nearby_title: "Problems Near Me",
    nearby_subtitle: "Civic issues reported within your immediate neighborhood (2 km radius).",
    nearby_detecting: "Detecting your location...",
    nearby_found: "civic issues found within 2 km.",
    nearby_distance: "away",
    nearby_none: "No active civic issues reported in this immediate 2 km radius. Great job keeping the neighborhood clean!",

    // Citizen Dashboard
    cdash_title: "Citizen Dashboard",
    cdash_welcome: "Welcome back, Karthik Sundaram",
    cdash_stat_total: "Total Reports",
    cdash_stat_progress: "In Progress",
    cdash_stat_resolved: "Resolved",
    cdash_stat_pending: "Pending Verification",
    cdash_tab_my_complaints: "My Complaints",
    cdash_tab_notifications: "Notifications",
    cdash_tab_community: "Community Activity",

    // Admin Dashboard
    admin_title: "Municipal Administrator Command Center",
    admin_subtitle: "Greater Chennai Corporation • Integrated Grievance Redressal Portal",
    admin_stat_total: "Total Complaints",
    admin_stat_new: "New Complaints",
    admin_stat_high: "High Priority",
    admin_stat_emergency: "Emergency",
    admin_stat_in_progress: "In Progress",
    admin_stat_resolved: "Resolved",
    admin_stat_avg_time: "Avg Resolution Time",
    admin_manage_title: "All Municipal Complaints",
    admin_filter_dept: "All Departments",
    admin_filter_priority: "All Priorities",
    admin_filter_status: "All Statuses",
    admin_search_placeholder: "Search by ID, keyword, address...",
    admin_col_id: "Complaint ID",
    admin_col_issue: "Issue & Category",
    admin_col_location: "Location",
    admin_col_priority: "Priority",
    admin_col_department: "Department",
    admin_col_status: "Status",
    admin_col_date: "Date",
    admin_col_actions: "Actions",
    admin_btn_view: "View Dossier",
    admin_btn_update: "Update Status",

    // Admin Update Modal
    modal_update_title: "Update Complaint Status & Assignment",
    modal_label_status: "New Status",
    modal_label_dept: "Reassign Department",
    modal_label_priority: "Override Priority",
    modal_label_notes: "Officer Progress Notes",
    modal_label_res_img: "Resolution Photo URL / File",
    modal_btn_save: "Save & Notify Citizen",
    modal_btn_cancel: "Cancel",

    // Departments Management
    dept_page_title: "Municipal Departments & Workload",
    dept_assigned: "Total Assigned",
    dept_pending: "Pending",
    dept_in_progress: "In Progress",
    dept_resolved: "Resolved",
    dept_sla: "Average Resolution Time",

    // Reports Page
    reports_title: "Municipal Reports & Analytics Export",
    reports_subtitle: "Generate official civic performance and compliance audits for Chennai Corporation.",
    reports_type_daily: "Daily Grievance Report",
    reports_type_weekly: "Weekly Resolution Audit",
    reports_type_monthly: "Monthly Department Performance",
    reports_type_category: "Category Incident Analysis",
    reports_type_location: "Ward & Zonal Density Report",
    reports_type_emergency: "Emergency Response Audit",
    reports_btn_generate: "Generate Report",
    reports_btn_export_csv: "Export CSV Data",
    reports_btn_print: "Print / Save PDF",

    // Emergency Help
    emerg_title: "Emergency Civic Services Directory",
    emerg_warning_title: "Important Safety Advisory",
    emerg_warning_text: "This website is not a replacement for official emergency services. For immediate danger to life, fire, crime, or medical emergencies, contact the appropriate official emergency service directly.",
    emerg_police: "Police Control Room",
    emerg_police_desc: "Law & order, traffic accidents, immediate security",
    emerg_ambulance: "Medical Ambulance",
    emerg_ambulance_desc: "Immediate medical trauma, critical health emergencies",
    emerg_fire: "Fire & Rescue Services",
    emerg_fire_desc: "Fire incidents, building collapse, hazardous chemical spills",
    emerg_disaster: "State Disaster Management",
    emerg_disaster_desc: "Flood alerts, cyclones, storm water inundation",
    emerg_women: "Women Helpline",
    emerg_child: "Childline Support",
    emerg_corp_tollfree: "Chennai Corporation 24/7 Helpline",
    emerg_btn_call: "Call Helpline",

    // Auth & RBAC
    nav_login: "Sign In",
    nav_logout: "Sign Out",
    role_ward_officer: "Ward Officer (Zone 8)",
    role_super_admin: "Super Admin (GCC HQ)",
    auth_jwt_inspector: "JWT Inspector",
    auth_login_title: "Municipal Access Portal",
    auth_login_desc: "Production-grade JWT RBAC with PBKDF2 salted password hashing.",
    auth_btn_login: "Authenticate with JWT",
    auth_email_label: "Official GCC Email",
    auth_pass_label: "Password (PBKDF2 Hashed)",
    auth_demo_title: "One-Click Demo Credentials",
    auth_demo_citizen: "Citizen (Karthik)",
    auth_demo_officer: "Ward Officer (Meenakshi)",
    auth_demo_admin: "Municipal Admin (Annamalai)",

    // Vision Pipeline & Visual Proof
    vision_engine_label: "Multimodal Vision Inference Pipeline",
    vision_proof_valid: "Visual Proof Validated",
    vision_proof_inconclusive: "Inconclusive Visual Proof",
    vision_bbox_label: "Detected Hazard ROI",
    vision_api_config: "Vision AI Settings",
    vision_api_key_prompt: "Configure Google Gemini Vision API Key for cloud multimodal inference, or use native Neural CV.",
    
    // S3 Cloud Storage
    s3_storage_btn: "S3 Object Store",
    s3_title: "S3-Compatible Cloud Media Store",
    s3_desc: "Direct-to-bucket upload pipeline via AWS SigV4 Presigned PUT URLs.",
    s3_bucket_label: "Active Bucket",
    s3_savings_label: "Bandwidth & Storage Saved",
    s3_uploading: "Streaming WebP payload to S3...",

    // Design Thinking & Tamil Lexicon
    dt_lexicon_btn: "Design Thinking & Tamil Lexicon",
    dt_title: "Design Thinking Empathy & Tamil Lexicon Validation",
    dt_subtitle: "Field user testing across GCC Zone 8 & Zone 13 validating conversational civic Tamil.",

    // Common
    loading: "Loading...",
    close: "Close",
    actions: "Actions",
    view: "View",
    days: "days",
    hours: "hours"
  },

  ta: {
    // Brand
    brand_name: "நம்ம சிட்டி கேர்",
    brand_tagline: "புகாரளிப்போம். கண்காணிப்போம். நகரத்தை மேம்படுத்துவோம்.",
    govt_tag: "குடிமக்கள் சேவை இணையதளம் • பெருநகர சென்னை மாநகராட்சி",
    
    // Navigation
    nav_home: "முகப்பு",
    nav_report: "பிரச்சினையைப் புகாரளிக்கவும்",
    nav_track: "புகாரைக் கண்காணிக்கவும்",
    nav_nearby: "அருகிலுள்ள பிரச்சினைகள்",
    nav_map: "நேரலை வரைபடம்",
    nav_emergency: "அவசர உதவி",
    nav_about: "பற்றி",
    nav_citizen_dash: "டாஷ்போர்டு",
    nav_my_complaints: "எனது புகார்கள்",
    nav_notifications: "அறிவிப்புகள்",
    nav_admin: "நிர்வாக தளம்",
    nav_admin_dash: "நிர்வாக டாஷ்போர்டு",
    nav_admin_complaints: "புகார்கள் மேலாண்மை",
    nav_admin_departments: "துறைகள்",
    nav_admin_analytics: "பகுப்பாய்வு",
    nav_admin_reports: "அறிக்கைகள்",
    role_citizen: "குடிமக்கள் பார்வை",
    role_admin: "மாநகராட்சி நிர்வாகி",

    // Hero
    hero_title: "உங்கள் நகரம். உங்கள் குரல். உங்கள் பொறுப்பு.",
    hero_subtitle: "புகைப்படம் மற்றும் இருப்பிடத்துடன் நகரப் பிரச்சினைகளைப் புகாரளித்து, AI மூலம் பிரச்சினையை கண்டறிந்து, சரிபார்ப்பிலிருந்து தீர்வு வரை கண்காணிக்கவும்.",
    cta_report: "குடிமக்கள் பிரச்சினையைப் புகாரளிக்கவும்",
    cta_track: "புகாரைக் கண்காணிக்கவும்",
    stat_resolved: "தீர்க்கப்பட்ட புகார்கள்",
    stat_avg_time: "சராசரி தீர்வு நேரம்",
    stat_satisfaction: "குடிமக்கள் திருப்தி",
    stat_wards: "கண்காணிக்கப்படும் வார்டுகள்",

    // Categories Section
    cat_section_title: "நகரப் பிரச்சினை வகைகள்",
    cat_section_desc: "கீழே உள்ள வகையைத் தேர்வுசெய்து உடனடியாகப் புகாரளிக்கவும் அல்லது உங்கள் புகைப்படத்திலிருந்து AI கண்டறிய அனுமதிக்கவும்.",
    cat_garbage: "குப்பை",
    cat_garbage_desc: "வணிக அல்லது குடியிருப்பு குப்பைக் குவியல்கள், நிரம்பி வழியும் தொட்டிகள்",
    cat_pothole: "சாலை பள்ளம்",
    cat_pothole_desc: "அபாயகரமான பள்ளங்கள், சாலை சேதம், வாகனங்கள் சறுக்கும் அபாயம்",
    cat_streetlight: "தெருவிளக்கு",
    cat_streetlight_desc: "எரியாத தெருவிளக்குகள், சாய்ந்த மின்கம்பங்கள், இருண்ட வீதிகள்",
    cat_water: "குடிநீர் கசிவு",
    cat_water_desc: "குழாய் உடைப்பு, குடிநீர் வீணாதல், வால்வு கசிவு",
    cat_road: "சேதமடைந்த சாலை",
    cat_road_desc: "உடைந்த நடைபாதை, சாலை தடுப்புகள், ஜல்லி கற்கள் சிதறல்",
    cat_drainage: "வடிகால்",
    cat_drainage_desc: "கழிவுநீர் நிரம்பி வழிதல், அடைபட்ட மழைநீர் வடிகால்கள்",
    cat_environment: "சுற்றுச்சூழல் பிரச்சினை",
    cat_environment_desc: "விழுந்த மரங்கள், நச்சுப் புகை, ஏரி மாசுபாடு",
    cat_other: "பிற பிரச்சினைகள்",
    cat_other_desc: "ஆக்கிரமிப்புகள், பொது அறிவிப்பு பலகைகள், நகராட்சி கட்டமைப்பு",

    // Report Issue Wizard
    report_header: "குடிமக்கள் புகாரைப் பதிவு செய்யவும்",
    report_sub: "மாநகராட்சி அதிகாரிகளுக்கு அதிகாரப்பூர்வ புகாரை அனுப்ப எளிய படிகளைப் பின்பற்றவும்.",
    step1_title: "படி 1: புகைப்படத்தை பதிவேற்றவும் / எடுக்கவும்",
    step1_desc: "பிரச்சினையைத் தெளிவாகக் காட்டும் புகைப்படத்தை எடுக்கவும் அல்லது பதிவேற்றவும்.",
    step1_btn_upload: "புகைப்படத்தை தேர்வு செய்",
    step1_btn_camera: "புகைப்படம் எடு",
    step1_drag: "அல்லது புகைப்படத்தை இங்கே இழுத்து விடவும் (JPG, PNG, WebP அதிகபட்சம் 10MB)",
    step1_remove: "புகைப்படத்தை நீக்கு",
    step1_replace: "புகைப்படத்தை மாற்று",

    step2_title: "படி 2: AI பகுப்பாய்வு",
    step2_analyzing: "AI புகைப்படத்தையும் நகர அபாயங்களையும் பகுப்பாய்வு செய்கிறது...",
    step2_detected_label: "கண்டறியப்பட்ட பிரச்சினை",
    step2_confidence_label: "நம்பகத்தன்மை",
    step2_priority_label: "பரிந்துரைக்கப்பட்ட முன்னுரிமை",
    step2_dept_label: "பரிந்துரைக்கப்பட்ட துறை",
    step2_accept_btn: "பரிந்துரையை ஏற்கவும்",
    step2_change_btn: "வகையை மாற்றவும்",

    step3_title: "படி 3: இருப்பிட விவரங்கள்",
    step3_gps_btn: "எனது இருப்பிடத்தைப் பயன்படுத்து (GPS)",
    step3_map_btn: "வரைபடத்தில் தேர்ந்தெடுக்கவும்",
    step3_lat: "அட்சரேகை (Latitude)",
    step3_lng: "தீர்க்கரேகை (Longitude)",
    step3_address_label: "முகவரி / வார்டு",
    step3_landmark_label: "அருகிலுள்ள அடையாளம்",
    step3_landmark_placeholder: "எ.கா., ரவுண்டானா அருகில், பேருந்து நிறுத்தம் எதிரில்",
    step3_gps_success: "GPS இருப்பிடம் வெற்றிகரமாக பதிவு செய்யப்பட்டது!",

    step4_title: "படி 4: பிரச்சினையின் விளக்கம்",
    step4_category_label: "பிரச்சினை வகை",
    step4_desc_label: "பிரச்சினையை விரிவாக விளக்கவும்",
    step4_desc_placeholder: "பிரச்சினையின் தாக்கம், பொதுமக்களுக்கு ஏற்படும் சிரமம் ஆகியவற்றை விளக்கவும்...",
    step4_severity_label: "தீவிரத்தன்மை",
    step4_sev_low: "குறைவு — சிறிய பிரச்சினை, உடனடி ஆபத்து இல்லை",
    step4_sev_med: "நடுத்தரம் — குடியிருப்பாளர்களுக்கு சிரமம்",
    step4_sev_high: "அதிகம் — பொதுமக்களுக்கு பெரிய ஆபத்து அல்லது போக்குவரத்து பாதிப்பு",
    step4_sev_emergency: "அவசரம் — உயிருக்கும் பொது சுகாதாரத்திற்கும் உடனடி ஆபத்து",

    step5_title: "படி 5: மதிப்பாய்வு மற்றும் சமர்ப்பித்தல்",
    step5_summary_title: "புகார் சுருக்கம்",
    step5_calc_priority: "கணக்கிடப்பட்ட மாநகராட்சி முன்னுரிமை",
    step5_dept: "ஒதுக்கப்பட்ட துறை",
    step5_submit_btn: "புகாரை சமர்ப்பிக்கவும்",

    // Success Screen
    submit_success_title: "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
    submit_success_id_label: "உங்கள் புகார் எண்:",
    submit_success_msg: "உங்கள் புகார் பெருநகர சென்னை மாநகராட்சி பதிவேட்டில் பதிவு செய்யப்பட்டுள்ளது. சம்பந்தப்பட்ட துறைக்கு தகவல் அனுப்பப்பட்டுள்ளது.",
    btn_track_this: "புகாரைக் கண்காணிக்கவும்",
    btn_back_home: "முகப்பிற்குச் செல்லவும்",
    btn_report_another: "மற்றொரு புகாரைப் பதிவு செய்",

    // Duplicate Modal
    dup_title: "இதே போன்ற பிரச்சினை அருகில் கண்டறியப்பட்டது",
    dup_msg: "இந்த இடத்திற்கு அருகில் இதே போன்ற பிரச்சினை ஏற்கனவே புகாரளிக்கப்பட்டுள்ளது.",
    dup_existing_id: "ஏற்கனவே உள்ள புகார் எண்:",
    dup_btn_support: "👍 ஏற்கனவே உள்ள புகாரை ஆதரிக்கவும்",
    dup_btn_proceed: "புதிய புகாராக சமர்ப்பிக்கவும்",

    // Track Page
    track_title: "புகாரின் நிலையை கண்காணிக்கவும்",
    track_subtitle: "உங்கள் புகார் எண்ணை உள்ளிட்டு நடப்பு நிலை மற்றும் துறைசார் நடவடிக்கைகளை அறியவும்.",
    track_input_placeholder: "புகார் எண்ணை உள்ளிடவும் (எ.கா. NCC-2026-00125)",
    track_btn: "கண்காணிக்கவும்",
    track_quick_demo: "மாதிரி புகார் எண்கள்:",
    track_details_title: "புகார் விவரங்கள்",
    track_expected_date: "எதிர்பார்க்கப்படும் தீர்வு நாள்:",
    track_reported_on: "புகாரளிக்கப்பட்ட நாள்:",
    track_department: "ஒதுக்கப்பட்ட துறை:",
    track_priority: "முன்னுரிமை நிலை:",
    track_status: "தற்போதைய நிலை:",
    track_timeline_title: "தீர்வு காலவரிசை",
    track_resolution_photos: "தீர்வு ஆய்வு புகைப்படங்கள்",
    track_before: "முன்பு (குடிமக்கள் புகார்)",
    track_after: "பின்பு (துறைசார் தீர்வு)",

    // Timeline Steps
    timeline_reported: "புகாரளிக்கப்பட்டது",
    timeline_verified: "சரிபார்க்கப்பட்டது",
    timeline_assigned: "ஒதுக்கப்பட்டது",
    timeline_in_progress: "பணியில் உள்ளது",
    timeline_resolved: "தீர்வு காணப்பட்டது",

    // Community Verification
    comm_support_btn: "👍 இந்த புகாரை ஆதரிக்கவும்",
    comm_support_count: "குடிமக்கள் இந்த புகாரை ஆதரிக்கின்றனர்",
    comm_still_exists_btn: "⚠️ பிரச்சினை இன்னும் உள்ளது என உறுதிசெய்",
    comm_confirm_resolved_btn: "✅ பிரச்சினை தீர்க்கப்பட்டது என உறுதிசெய்",
    comm_verified_badge: "குடிமக்களால் உறுதிசெய்யப்பட்ட தீர்வு",
    comm_add_comment: "கருத்துப் பதிவிடவும்",
    comm_comment_placeholder: "இந்த பிரச்சினை குறித்த உங்கள் கருத்தை பதிவு செய்யவும்...",
    comm_submit_comment: "பதிவிடவும்",

    // Live Map
    map_title: "நேரலை நகராட்சி வரைபடம்",
    map_subtitle: "சென்னை வார்டுகள் முழுவதும் உள்ள புகார்கள், நடப்பு பணிகள் மற்றும் தீர்க்கப்பட்ட பிரச்சினைகளை காண்க.",
    map_filter_all: "அனைத்து புகார்கள்",
    map_filter_open: "திறந்தவை",
    map_filter_in_progress: "பணியில் உள்ளவை",
    map_filter_resolved: "தீர்க்கப்பட்டவை",
    map_filter_emergency: "அவசர புகார்கள்",
    map_click_hint: "விவரங்களைக் காண வரைபடக் குறியீட்டை கிளிக் செய்யவும்.",

    // Nearby Issues
    nearby_title: "என்னைச் சுற்றியுள்ள பிரச்சினைகள்",
    nearby_subtitle: "உங்கள் பகுதியில் (2 கி.மீ சுற்றளவில்) பதிவான பொதுப் பிரச்சினைகள்.",
    nearby_detecting: "உங்கள் இருப்பிடம் கண்டறியப்படுகிறது...",
    nearby_found: "நகரப் பிரச்சினைகள் 2 கி.மீ சுற்றளவில் கண்டறியப்பட்டன.",
    nearby_distance: "தொலைவில்",
    nearby_none: "இந்த 2 கி.மீ சுற்றளவில் தீவிர பிரச்சினைகள் எதுவும் இல்லை. சுற்றுப்புறத்தை தூய்மையாக வைத்திருக்க உதவியதற்கு நன்றி!",

    // Citizen Dashboard
    cdash_title: "குடிமக்கள் டாஷ்போர்டு",
    cdash_welcome: "மீண்டும் வருக, கார்த்திக் சுந்தரம்",
    cdash_stat_total: "மொத்த புகார்கள்",
    cdash_stat_progress: "பணியில் உள்ளவை",
    cdash_stat_resolved: "தீர்க்கப்பட்டவை",
    cdash_stat_pending: "சரிபார்ப்பில் உள்ளவை",
    cdash_tab_my_complaints: "எனது புகார்கள்",
    cdash_tab_notifications: "அறிவிப்புகள்",
    cdash_tab_community: "சமூக செயல்பாடு",

    // Admin Dashboard
    admin_title: "மாநகராட்சி நிர்வாக கட்டுப்பாட்டு மையம்",
    admin_subtitle: "பெருநகர சென்னை மாநகராட்சி • ஒருங்கிணைந்த குறைதீர்ப்பு தளம்",
    admin_stat_total: "மொத்த புகார்கள்",
    admin_stat_new: "புதிய புகார்கள்",
    admin_stat_high: "அதிக முன்னுரிமை",
    admin_stat_emergency: "அவசரப் பிரச்சினைகள்",
    admin_stat_in_progress: "பணியில் உள்ளவை",
    admin_stat_resolved: "தீர்க்கப்பட்டவை",
    admin_stat_avg_time: "சராசரி தீர்வு நேரம்",
    admin_manage_title: "அனைத்து மாநகராட்சி புகார்கள்",
    admin_filter_dept: "அனைத்து துறைகள்",
    admin_filter_priority: "அனைத்து முன்னுரிமை",
    admin_filter_status: "அனைத்து நிலைகள்",
    admin_search_placeholder: "புகார் எண், இடம் அல்லது குறிச்சொல் மூலம் தேடவும்...",
    admin_col_id: "புகார் எண்",
    admin_col_issue: "பிரச்சினை & வகை",
    admin_col_location: "இடம்",
    admin_col_priority: "முன்னுரிமை",
    admin_col_department: "துறை",
    admin_col_status: "நிலை",
    admin_col_date: "நாள்",
    admin_col_actions: "நடவடிக்கை",
    admin_btn_view: "விவரம்",
    admin_btn_update: "நிலையை மாற்று",

    // Admin Update Modal
    modal_update_title: "புகார் நிலை மற்றும் துறை ஒதுக்கீடு",
    modal_label_status: "புதிய நிலை",
    modal_label_dept: "துறையை மாற்று",
    modal_label_priority: "முன்னுரிமையை மாற்று",
    modal_label_notes: "அதிகாரியின் பணி குறிப்பு",
    modal_label_res_img: "தீர்வு புகைப்பட முகவரி / கோப்பு",
    modal_btn_save: "சேமித்து குடிமகனுக்கு அறிவிக்கவும்",
    modal_btn_cancel: "ரத்து செய்",

    // Departments Management
    dept_page_title: "நகராட்சி துறைகள் மற்றும் பணிச்சுமை",
    dept_assigned: "ஒதுக்கப்பட்டவை",
    dept_pending: "நிலுவையில் உள்ளவை",
    dept_in_progress: "பணியில் உள்ளவை",
    dept_resolved: "தீர்க்கப்பட்டவை",
    dept_sla: "சராசரி தீர்வு நேரம்",

    // Reports Page
    reports_title: "நகராட்சி அறிக்கைகள் மற்றும் ஏற்றுமதி",
    reports_subtitle: "சென்னை மாநகராட்சியின் செயல்பாட்டு தணிக்கை மற்றும் அறிக்கைகளை பதிவிறக்கவும்.",
    reports_type_daily: "தினசரி குறைதீர்ப்பு அறிக்கை",
    reports_type_weekly: "வாராந்திர தீர்வு தணிக்கை",
    reports_type_monthly: "மாதாந்திர துறை செயல்திறன்",
    reports_type_category: "வகைவாரியான சம்பவ பகுப்பாய்வு",
    reports_type_location: "வார்டு அடர்த்தி அறிக்கை",
    reports_type_emergency: "அவசரகால மீட்பு தணிக்கை",
    reports_btn_generate: "அறிக்கையை உருவாக்கு",
    reports_btn_export_csv: "CSV தரவிறக்கம்",
    reports_btn_print: "அச்சு / PDF சேமிக்க",

    // Emergency Help
    emerg_title: "அவசர சேவைகள் தொலைபேசி கையேடு",
    emerg_warning_title: "முக்கிய பாதுகாப்பு அறிவிப்பு",
    emerg_warning_text: "இந்த இணையதளம் அதிகாரப்பூர்வ அவசர சேவைகளுக்கு மாற்றாகாது. உயிருக்கு ஆபத்து, தீவிபத்து அல்லது மருத்துவ அவசரத்திற்கு உடனடியாக அதிகாரப்பூர்வ எண்களை நேரடியாகத் தொடர்பு கொள்ளவும்.",
    emerg_police: "காவல்துறை கட்டுப்பாட்டு அறை",
    emerg_police_desc: "சட்டம் ஒழுங்கு, சாலை விபத்துக்கள், பாதுகாப்பு அவசரம்",
    emerg_ambulance: "மருத்துவ ஆம்புலன்ஸ்",
    emerg_ambulance_desc: "உடனடி மருத்துவ முதலுதவி, அவசர சிகிச்சை",
    emerg_fire: "தீயணைப்பு மற்றும் மீட்பு பணிகள்",
    emerg_fire_desc: "தீ விபத்துக்கள், கட்டட இடிபாடுகள், ஆபத்து மீட்பு",
    emerg_disaster: "மாநில பேரிடர் மேலாண்மை",
    emerg_disaster_desc: "வெள்ள எச்சரிக்கை, புயல், மழைநீர் தேக்கம்",
    emerg_women: "பெண்கள் உதவி மையம்",
    emerg_child: "குழந்தைகள் உதவி மையம்",
    emerg_corp_tollfree: "சென்னை மாநகராட்சி 24/7 கட்டணமில்லா உதவி எண்",
    emerg_btn_call: "அழைக்கவும்",

    // Auth & RBAC
    nav_login: "உள்நுழைக",
    nav_logout: "வெளியேறு",
    role_ward_officer: "வார்டு அதிகாரி (மண்டலம் 8)",
    role_super_admin: "தலைமை நிர்வாகி (GCC HQ)",
    auth_jwt_inspector: "JWT டோக்கன் பார்வை",
    auth_login_title: "மாநகராட்சி அங்கீகார தளம்",
    auth_login_desc: "பாதுகாப்பான JWT RBAC மற்றும் PBKDF2 கடவுச்சொல் பாதுகாப்பு.",
    auth_btn_login: "JWT மூலம் உள்நுழைக",
    auth_email_label: "அதிகாரப்பூர்வ மின்னஞ்சல்",
    auth_pass_label: "கடவுச்சொல் (PBKDF2 குறியாக்கம்)",
    auth_demo_title: "டெமோ கணக்குகள்",
    auth_demo_citizen: "குடிமகன் (கார்த்திக்)",
    auth_demo_officer: "வார்டு அதிகாரி (மீனாட்சி)",
    auth_demo_admin: "மாநகராட்சி ஆணையர் (அண்ணாமலை)",

    // Vision Pipeline & Visual Proof
    vision_engine_label: "பல்வகை பார்வை நரம்பியல் இயந்திரம்",
    vision_proof_valid: "காட்சி ஆதாரம் சரிபார்க்கப்பட்டது",
    vision_proof_inconclusive: "காட்சி ஆதாரம் போதாது",
    vision_bbox_label: "கண்டறியப்பட்ட சேத பகுதி",
    vision_api_config: "Vision AI அமைப்புகள்",
    vision_api_key_prompt: "ஜெமினி விஷன் API விசையை உள்ளிடவும் அல்லது உலாவி நரம்பியல் கணினியைப் பயன்படுத்தவும்.",
    
    // S3 Cloud Storage
    s3_storage_btn: "S3 கிளவுட் ஸ்டோரேஜ்",
    s3_title: "S3 கிளவுட் மீடியா ஸ்டோரேஜ்",
    s3_desc: "AWS SigV4 Presigned PUT URL மூலம் நேரடி கிளவுட் பதிவேற்றம்.",
    s3_bucket_label: "செயலில் உள்ள பக்கெட்",
    s3_savings_label: "சேமிக்கப்பட்ட நினைவகம் & அலைவரிசை",
    s3_uploading: "கிளவுட் பக்கெட்டிற்கு அனுப்பப்படுகிறது...",

    // Design Thinking & Tamil Lexicon
    dt_lexicon_btn: "வடிவமைப்பு சிந்தனை & தமிழ் ஆய்வு",
    dt_title: "வடிவமைப்பு சிந்தனை & தமிழ் கள ஆய்வு முடிவுகள்",
    dt_subtitle: "மண்டலம் 8 மற்றும் 13-ல் நடத்தப்பட்ட கள ஆய்வின் அடிப்படையில் தேர்ந்தெடுக்கப்பட்ட சொற்கள்.",

    // Common
    loading: "ஏற்றப்படுகிறது...",
    close: "மூடு",
    actions: "நடவடிக்கைகள்",
    view: "பார்வை",
    days: "நாட்கள்",
    hours: "மணிநேரம்"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("namma_city_lang") || "en";
  }

  get lang() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (lang !== "en" && lang !== "ta") return;
    this.currentLang = lang;
    localStorage.setItem("namma_city_lang", lang);
    document.documentElement.lang = lang;
    this.updateDOM();
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.en;
    return dict[key] || translations.en[key] || key;
  }

  getCategoryTitle(catEn) {
    const map = {
      "Garbage": this.currentLang === "ta" ? "குப்பை" : "Garbage",
      "Pothole": this.currentLang === "ta" ? "சாலை பள்ளம்" : "Pothole",
      "Streetlight": this.currentLang === "ta" ? "தெருவிளக்கு" : "Streetlight",
      "Water Leakage": this.currentLang === "ta" ? "குடிநீர் கசிவு" : "Water Leakage",
      "Damaged Road": this.currentLang === "ta" ? "சேதமடைந்த சாலை" : "Damaged Road",
      "Drainage": this.currentLang === "ta" ? "வடிகால்" : "Drainage",
      "Environmental Issue": this.currentLang === "ta" ? "சுற்றுச்சூழல் பிரச்சினை" : "Environmental Issue",
      "Other": this.currentLang === "ta" ? "பிற பிரச்சினைகள்" : "Other"
    };
    return map[catEn] || catEn;
  }

  getStatusBadge(status) {
    const statusMap = {
      "Reported": { en: "Reported", ta: "புகாரளிக்கப்பட்டது", color: "bg-amber-100 text-amber-800 border-amber-300" },
      "Verified": { en: "Verified", ta: "சரிபார்க்கப்பட்டது", color: "bg-blue-100 text-blue-800 border-blue-300" },
      "Assigned": { en: "Assigned", ta: "ஒதுக்கப்பட்டது", color: "bg-purple-100 text-purple-800 border-purple-300" },
      "In Progress": { en: "In Progress", ta: "பணியில் உள்ளது", color: "bg-teal-100 text-teal-800 border-teal-300" },
      "Resolved": { en: "Resolved", ta: "தீர்வு காணப்பட்டது", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
      "Rejected": { en: "Rejected", ta: "நிராகரிக்கப்பட்டது", color: "bg-rose-100 text-rose-800 border-rose-300" }
    };
    const item = statusMap[status] || { en: status, ta: status, color: "bg-gray-100 text-gray-800 border-gray-300" };
    return {
      label: this.currentLang === "ta" ? item.ta : item.en,
      color: item.color,
      class: item.color
    };
  }

  /**
   * Generates localized priority indicator badge and pulsing styles for emergencies
   * @param {string} priority ('Low' | 'Medium' | 'High' | 'Emergency')
   * @returns {{label: string, color: string, class: string}}
   */
  getPriorityBadge(priority) {
    const map = {
      "Low": { en: "🟢 Low", ta: "🟢 குறைவு", color: "bg-slate-100 text-slate-700 border-slate-300" },
      "Medium": { en: "🟡 Medium", ta: "🟡 நடுத்தரம்", color: "bg-amber-100 text-amber-700 border-amber-300" },
      "High": { en: "🟠 High", ta: "🟠 அதிகம்", color: "bg-orange-100 text-orange-800 border-orange-300" },
      "Emergency": { en: "🔴 Emergency", ta: "🔴 அவசரம்", color: "bg-rose-100 text-rose-800 border-rose-400 font-bold animate-pulse" }
    };
    const item = map[priority] || { en: priority, ta: priority, color: "bg-gray-100 text-gray-700 border-gray-200" };
    return {
      label: this.currentLang === "ta" ? item.ta : item.en,
      color: item.color,
      class: item.color
    };
  }

  updateDOM() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", translation);
        }
      } else {
        el.innerHTML = translation;
      }
    });

    // Update buttons with active language state
    const enBtn = document.getElementById("lang-en-btn");
    const taBtn = document.getElementById("lang-ta-btn");
    if (enBtn && taBtn) {
      if (this.currentLang === "en") {
        enBtn.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-teal-600 text-white shadow-sm transition-all";
        taBtn.className = "px-3 py-1.5 text-xs font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all";
      } else {
        taBtn.className = "px-3 py-1.5 text-xs font-bold rounded-lg bg-teal-600 text-white shadow-sm transition-all";
        enBtn.className = "px-3 py-1.5 text-xs font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all";
      }
    }
  }
}

window.i18n = new I18nManager();
