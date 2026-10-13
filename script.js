/* ============================================================
   SECTION 1: TRANSLATION DICTIONARY
   ============================================================ */
const T = {
  en: {
    /* Nav */
    nav_dashboard: 'Dashboard', nav_workers: 'Workers', nav_bob: 'Bob & Reports',
    nav_logout: 'Logout', nav_nominal: 'NOMINAL', nav_caution: 'CAUTION', nav_critical: 'CRITICAL',
    /* Login */
    ls_subtitle: 'Smart Tea Plantation Monitor · Highland Indonesia',
    lbl_uname: 'Username', lbl_upass: 'Password',
    login_btn: 'Sign In', login_error: 'Incorrect username or password. Try a demo account below.',
    demo_title: 'Demo Accounts (tap to fill)',
    role_owner: 'Owner', role_mandor: 'Foreman', role_worker: 'Field Worker (Block C)',
    how_title: 'How to explore',
    how_steps: ['Sign in with a demo role above', 'Go to Dashboard → run a scenario in Simulation Center', 'Visit Bob & Reports and ask a question'],
    change_lang: '← Change language',
    /* Dashboard titles */
    dash_summary: 'Summary',
    sc_status: 'Status', sc_forecast: 'Weekly Forecast', sc_tasks: 'Tasks Done',
    sc_quality: 'Tea Quality', sc_workers_active: 'Active Workers',
    sc_forecast_target: 'Target: 1,800 kg',
    hint_owner: '<strong>Tip:</strong> Try a scenario in <em>Simulation Center</em> to see live data react.',
    hint_worker: '<strong>Tip:</strong> Your tasks for Block C are listed below.',
    hint_action_owner: '↓ Show me',
    hint_action_worker: '↓ Show tasks',
    hint_dismiss: '×',
    map_title: 'Plantation Map',
    map_select_hint: 'Click a block to inspect',
    detail_moisture: 'Soil Moisture', detail_leaf: 'Leaf Health', detail_pest: 'Pest Risk',
    detail_advice: {
      green: 'Conditions look healthy. Maintain regular monitoring.',
      amber: 'Slight stress detected. Check irrigation and pest traps.',
      red: 'High risk. Immediate intervention recommended.'
    },
    sensors_title: 'Field Sensors (Live)',
    sensor_temp: 'Temperature', sensor_hum: 'Humidity', sensor_soil: 'Soil Moisture', sensor_rain: 'Rainfall',
    tasks_title: "Today's Tasks",
    tasks_done: 'of', tasks_done2: 'done',
    task_names: [
      'Prune Block A rows 1-4', 'Spray fertilizer Block B', 'Inspect pest traps Block C',
      'Irrigate Block D terraces', 'Quality check Block E', 'Soil sample Block F',
      'Clear drainage channels Block A'
    ],
    task_blocks: ['A','B','C','D','E','F','A'],
    sim_title: 'Simulation Center',
    sim_disclaimer: '⚠ Simulated data only — not real sensor readings',
    sim_s1_name: 'Heavy Rain + Pest Outbreak', sim_s1_desc: 'Rising moisture & pest risk, falling productivity',
    sim_s2_name: 'Long Drought', sim_s2_desc: 'Heat stress, falling moisture, weakened leaves',
    sim_s3_name: 'Landslide Warning', sim_s3_desc: 'Blocks A–C critical, worker evacuation triggered',
    sim_s4_name: 'Harvest Peak', sim_s4_desc: 'Optimal conditions, forecast +35%, extra harvest tasks',
    sim_run: 'Run Scenario', sim_stop: 'Stop', sim_running: 'Running…',
    sim_level_amber: '● WATCH', sim_level_red: '● DANGER', sim_level_green: '● INFO',
    trend_title: '7-Day Trend', trend_rainfall: 'Rainfall (mm)', trend_moisture: 'Soil Moisture (%)',
    log_title: 'Bob · Estate Log',
    log_ambient: [
      'Morning mist over Block D — sensors nominal.',
      'Leaf moisture within optimal range for Block B.',
      'Soil pH steady at 5.2 across terraces.',
      'Temperature dipped 1°C overnight — within tolerance.',
      'Pest trap in Block C shows low activity.',
      'Block E ready for quality inspection.',
      'Irrigation pump running at 78% capacity.',
      'Wind speed low — spraying conditions are good.',
      'Block F soil moisture slightly below threshold.',
      'Dawn chorus confirms no large fauna disturbance.',
    ],
    log_tasks_done: 'All visible tasks completed! Great work. ☁',
    /* Workers */
    workers_title: 'Workers',
    workers_map_title: 'Worker Map',
    workers_list_title: 'Worker List',
    wt_name: 'Name', wt_block: 'Block', wt_status: 'Status',
    ws_working: 'Working', ws_walking: 'Walking', ws_resting: 'Resting', ws_evacuating: 'Evacuating',
    assembly_point: 'Assembly Point',
    /* Bob & Reports */
    bob_title: 'Bob & Reports',
    bob_ask_title: 'Ask Bob',
    bob_chat_title: 'Chat',
    bob_disclaimer: 'Bob is a rule-based assistant. Responses are based on simulated data, not real AI.',
    bob_greeting: 'Hello! I\'m Bob, your estate assistant. Ask me about blocks, forecast, sensors, or workers.',
    bob_quick: ['Which block needs attention?', 'What is the harvest forecast?', 'Any warnings?', 'How is the tea quality?', 'How are the workers?'],
    report_title: 'Daily Report',
    report_download: 'Download Daily Report',
    /* Warning banner texts */
    banner_rain_title: 'Heavy Rain + Pest Outbreak',
    banner_rain_desc: 'Rainfall rising fast. Pest activity elevated on Blocks C & D.',
    banner_rain_bob: 'Bob: Check drainage in C & D. Deploy pest traps. Workers should carry rain gear.',
    banner_drought_title: 'Long Drought Alert',
    banner_drought_desc: 'Soil moisture falling. Temperature rising. Leaf stress detected.',
    banner_drought_bob: 'Bob: Increase irrigation frequency. Apply mulch to retain moisture.',
    banner_landslide_title: '⛔ Landslide Warning',
    banner_landslide_desc: 'High-risk movement detected near Blocks A–C. Evacuation in progress.',
    banner_landslide_bob: 'Bob: All workers in A–C must evacuate to the Assembly Point immediately.',
    banner_harvest_title: 'Harvest Peak Conditions',
    banner_harvest_desc: 'Optimal temperature and humidity. Leaf health excellent across all blocks.',
    banner_harvest_bob: 'Bob: Begin harvest in highest-quality blocks first. Coordinate with foreman.',
    /* Quality labels */
    q_premium: 'Premium', q_good: 'Good', q_fair: 'Fair', q_low: 'Low',
    /* Weekdays */
    weekdays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    /* Harvest extra tasks */
    harvest_tasks: ['Harvest Block A top rows', 'Harvest Block C premium leaves', 'Pack & weigh harvest Shed 1'],
    /* Sim log messages */
    sim_log_rain: ['Rainfall sensor spiked — 38mm/hr recorded.', 'Pest trap Block C triggered — high catch count.', 'Drainage overflow risk on lower terrace D.'],
    sim_log_drought: ['Temperature hit 28°C — above optimal.', 'Soil moisture in Block F dropped below 35%.', 'Leaf curl observed in Block B — heat stress.'],
    sim_log_landslide: ['⛔ Seismic sensor alert — ground movement detected.', 'Blocks A–C marked CRITICAL. Evacuating workers.', 'Assembly Point check — all workers must report in.'],
    sim_log_harvest: ['☀ Optimal harvest window open. All quality metrics green.', 'Leaf turgidity peak — ideal for premium grade.', '3 harvest tasks added to today\'s task list.'],
    /* Bob responses */
    bob_block_resp: (block, h, p) => `Block ${block}: Leaf health ${h}%, Pest risk ${p}%. ${h<55?'Needs attention.':h<75?'Moderate condition.':'Looking healthy.'}`,
    bob_forecast_resp: (kg, pct) => `Weekly forecast: ${kg} kg (${pct}% of 1,800 kg target).`,
    bob_warning_resp: (w) => w ? `Active warning: ${w}. Please follow safety protocols.` : `No active warnings. Estate status is NOMINAL.`,
    bob_quality_resp: (score, label) => `Tea quality score: ${score}/100 — ${label}. ${score>=80?'Excellent conditions for premium grade!':score>=65?'Good quality, minor optimizations possible.':score>=50?'Fair. Review moisture and pest levels.':'Low quality alert — immediate action needed.'}`,
    bob_workers_resp: (n, total) => `${n} of ${total} workers currently active on estate.`,
    bob_fallback: 'I\'m not sure about that. Try asking about blocks, forecast, tea quality, warnings, or workers.',
    bob_tasks_resp: (done, total) => `${done} of ${total} tasks completed today. Keep it up!`,
    bob_sensors_resp: (t, h, s, r) => `Sensors: Temp ${t}°C · Humidity ${h}% · Soil ${s}% · Rainfall ${r}mm/hr`,
  },
  id: {
    /* Nav */
    nav_dashboard: 'Dasbor', nav_workers: 'Pekerja', nav_bob: 'Bob & Laporan',
    nav_logout: 'Keluar', nav_nominal: 'NORMAL', nav_caution: 'WASPADA', nav_critical: 'KRITIS',
    /* Login */
    ls_subtitle: 'Monitor Kebun Teh Cerdas · Dataran Tinggi Indonesia',
    lbl_uname: 'Nama Pengguna', lbl_upass: 'Kata Sandi',
    login_btn: 'Masuk', login_error: 'Username atau kata sandi salah. Coba akun demo di bawah.',
    demo_title: 'Akun Demo (ketuk untuk isi)',
    role_owner: 'Pemilik', role_mandor: 'Mandor', role_worker: 'Pekerja Lapangan (Blok C)',
    how_title: 'Cara eksplorasi',
    how_steps: ['Masuk dengan akun demo di atas', 'Buka Dasbor → jalankan skenario di Pusat Simulasi', 'Kunjungi Bob & Laporan lalu ajukan pertanyaan'],
    change_lang: '← Ganti bahasa',
    /* Dashboard */
    dash_summary: 'Ringkasan',
    sc_status: 'Status', sc_forecast: 'Prakiraan Mingguan', sc_tasks: 'Tugas Selesai',
    sc_quality: 'Mutu Teh', sc_workers_active: 'Pekerja Aktif',
    sc_forecast_target: 'Target: 1.800 kg',
    hint_owner: '<strong>Tips:</strong> Coba skenario di <em>Pusat Simulasi</em> untuk melihat data langsung berubah.',
    hint_worker: '<strong>Tips:</strong> Tugas Anda untuk Blok C tercantum di bawah.',
    hint_action_owner: '↓ Tunjukkan',
    hint_action_worker: '↓ Lihat tugas',
    hint_dismiss: '×',
    map_title: 'Peta Perkebunan',
    map_select_hint: 'Klik blok untuk inspeksi',
    detail_moisture: 'Kelembaban Tanah', detail_leaf: 'Kesehatan Daun', detail_pest: 'Risiko Hama',
    detail_advice: {
      green: 'Kondisi terlihat sehat. Pertahankan pemantauan rutin.',
      amber: 'Ada tekanan ringan. Periksa irigasi dan perangkap hama.',
      red: 'Risiko tinggi. Tindakan segera direkomendasikan.'
    },
    sensors_title: 'Sensor Lapangan (Langsung)',
    sensor_temp: 'Suhu', sensor_hum: 'Kelembaban', sensor_soil: 'Kelembaban Tanah', sensor_rain: 'Curah Hujan',
    tasks_title: 'Tugas Hari Ini',
    tasks_done: 'dari', tasks_done2: 'selesai',
    task_names: [
      'Pemangkasan Blok A baris 1-4', 'Semprot pupuk Blok B', 'Periksa perangkap hama Blok C',
      'Irigasi teras Blok D', 'Pemeriksaan mutu Blok E', 'Sampel tanah Blok F',
      'Bersihkan saluran drainase Blok A'
    ],
    task_blocks: ['A','B','C','D','E','F','A'],
    sim_title: 'Pusat Simulasi',
    sim_disclaimer: '⚠ Hanya data simulasi — bukan pembacaan sensor nyata',
    sim_s1_name: 'Hujan Deras + Serangan Hama', sim_s1_desc: 'Kelembaban & risiko hama naik, produktivitas turun',
    sim_s2_name: 'Kekeringan Panjang', sim_s2_desc: 'Tekanan panas, kelembaban turun, daun melemah',
    sim_s3_name: 'Peringatan Longsor', sim_s3_desc: 'Blok A–C kritis, evakuasi pekerja dimulai',
    sim_s4_name: 'Puncak Panen', sim_s4_desc: 'Kondisi optimal, prakiraan +35%, tugas panen ekstra',
    sim_run: 'Jalankan Skenario', sim_stop: 'Berhenti', sim_running: 'Berjalan…',
    sim_level_amber: '● WASPADA', sim_level_red: '● BAHAYA', sim_level_green: '● INFO',
    trend_title: 'Tren 7 Hari', trend_rainfall: 'Curah Hujan (mm)', trend_moisture: 'Kelembaban Tanah (%)',
    log_title: 'Bob · Catatan Estate',
    log_ambient: [
      'Kabut pagi di Blok D — sensor normal.',
      'Kelembaban daun dalam kisaran optimal di Blok B.',
      'pH tanah stabil di 5,2 di semua teras.',
      'Suhu turun 1°C semalam — masih dalam toleransi.',
      'Perangkap hama Blok C menunjukkan aktivitas rendah.',
      'Blok E siap untuk inspeksi mutu.',
      'Pompa irigasi berjalan pada kapasitas 78%.',
      'Kecepatan angin rendah — kondisi baik untuk penyemprotan.',
      'Kelembaban tanah Blok F sedikit di bawah ambang batas.',
      'Suara fajar mengkonfirmasi tidak ada gangguan fauna besar.',
    ],
    log_tasks_done: 'Semua tugas terlihat selesai! Kerja bagus. ☁',
    /* Workers */
    workers_title: 'Pekerja',
    workers_map_title: 'Peta Pekerja',
    workers_list_title: 'Daftar Pekerja',
    wt_name: 'Nama', wt_block: 'Blok', wt_status: 'Status',
    ws_working: 'Bekerja', ws_walking: 'Berjalan', ws_resting: 'Istirahat', ws_evacuating: 'Evakuasi',
    assembly_point: 'Titik Kumpul',
    /* Bob & Reports */
    bob_title: 'Bob & Laporan',
    bob_ask_title: 'Tanya Bob',
    bob_chat_title: 'Obrolan',
    bob_disclaimer: 'Bob adalah asisten berbasis aturan. Respons berdasarkan data simulasi, bukan AI nyata.',
    bob_greeting: 'Halo! Saya Bob, asisten estate Anda. Tanyakan tentang blok, prakiraan, sensor, atau pekerja.',
    bob_quick: ['Blok mana yang perlu perhatian?', 'Berapa prakiraan panen?', 'Ada peringatan?', 'Bagaimana mutu teh?', 'Bagaimana kondisi pekerja?'],
    report_title: 'Laporan Harian',
    report_download: 'Unduh Laporan Harian',
    /* Warning banner */
    banner_rain_title: 'Hujan Deras + Serangan Hama',
    banner_rain_desc: 'Curah hujan naik cepat. Aktivitas hama meningkat di Blok C & D.',
    banner_rain_bob: 'Bob: Periksa drainase di C & D. Pasang perangkap hama. Pekerja wajib pakai jas hujan.',
    banner_drought_title: 'Peringatan Kekeringan Panjang',
    banner_drought_desc: 'Kelembaban tanah turun. Suhu naik. Tekanan pada daun terdeteksi.',
    banner_drought_bob: 'Bob: Tingkatkan frekuensi irigasi. Pasang mulsa untuk menahan kelembaban.',
    banner_landslide_title: '⛔ Peringatan Longsor',
    banner_landslide_desc: 'Gerakan tanah berisiko tinggi terdeteksi di Blok A–C. Evakuasi sedang berlangsung.',
    banner_landslide_bob: 'Bob: Semua pekerja di A–C harus segera evakuasi ke Titik Kumpul.',
    banner_harvest_title: 'Kondisi Puncak Panen',
    banner_harvest_desc: 'Suhu dan kelembaban optimal. Kesehatan daun sangat baik di semua blok.',
    banner_harvest_bob: 'Bob: Mulai panen di blok berkualitas tertinggi lebih dulu. Koordinasikan dengan mandor.',
    /* Quality labels */
    q_premium: 'Premium', q_good: 'Baik', q_fair: 'Cukup', q_low: 'Rendah',
    /* Weekdays */
    weekdays: ['Sen','Sel','Rab','Kam','Jum','Sab','Min'],
    /* Harvest extra tasks */
    harvest_tasks: ['Panen Blok A baris atas', 'Panen daun premium Blok C', 'Kemas & timbang panen Gudang 1'],
    /* Sim log messages */
    sim_log_rain: ['Sensor curah hujan melonjak — 38mm/jam tercatat.', 'Perangkap hama Blok C aktif — tangkapan tinggi.', 'Risiko luapan drainase di teras bawah D.'],
    sim_log_drought: ['Suhu mencapai 28°C — di atas optimal.', 'Kelembaban tanah Blok F turun di bawah 35%.', 'Daun menggulung di Blok B — tekanan panas.'],
    sim_log_landslide: ['⛔ Peringatan sensor seismik — gerakan tanah terdeteksi.', 'Blok A–C ditandai KRITIS. Pekerja dievakuasi.', 'Titik Kumpul — semua pekerja harus lapor segera.'],
    sim_log_harvest: ['☀ Jendela panen optimal terbuka. Semua metrik mutu hijau.', 'Turgor daun puncak — ideal untuk grade premium.', '3 tugas panen ditambahkan ke daftar hari ini.'],
    /* Bob responses */
    bob_block_resp: (block, h, p) => `Blok ${block}: Kesehatan daun ${h}%, Risiko hama ${p}%. ${h<55?'Butuh perhatian.':h<75?'Kondisi sedang.':'Tampak sehat.'}`,
    bob_forecast_resp: (kg, pct) => `Prakiraan mingguan: ${kg} kg (${pct}% dari target 1.800 kg).`,
    bob_warning_resp: (w) => w ? `Peringatan aktif: ${w}. Ikuti protokol keselamatan.` : `Tidak ada peringatan aktif. Status estate NORMAL.`,
    bob_quality_resp: (score, label) => `Skor mutu teh: ${score}/100 — ${label}. ${score>=80?'Kondisi sangat baik untuk grade premium!':score>=65?'Mutu baik, ada sedikit ruang optimasi.':score>=50?'Cukup. Tinjau kelembaban dan hama.':'Peringatan mutu rendah — tindakan segera diperlukan.'}`,
    bob_workers_resp: (n, total) => `${n} dari ${total} pekerja sedang aktif di estate.`,
    bob_fallback: 'Saya belum paham pertanyaan itu. Coba tanyakan tentang blok, prakiraan, mutu teh, peringatan, atau pekerja.',
    bob_tasks_resp: (done, total) => `${done} dari ${total} tugas selesai hari ini. Teruskan!`,
    bob_sensors_resp: (t, h, s, r) => `Sensor: Suhu ${t}°C · Kelembaban ${h}% · Tanah ${s}% · Hujan ${r}mm/jam`,
  }
};

/* ============================================================
   SECTION 2: STATE
   ============================================================ */
let lang = 'en';
let currentUser = null; // { username, role: 'owner'|'mandor'|'worker', name }
let currentPage = 'dashboard';
let selectedBlock = 'A';

/* Sensor state (updated every second) */
const sensors = { temp: 18, hum: 78, soil: 68, rain: 2 };

/* Block data */
const blocks = ['A','B','C','D','E','F'];
const blockData = {};
blocks.forEach(b => {
  blockData[b] = {
    health: 70 + Math.random()*20,
    pest: 10 + Math.random()*20,
    moisture: 60 + Math.random()*20
  };
});

/* Tasks state */
const TASK_COUNT = 7;
let tasksDone = new Set();
let harvestTasksAdded = false;
const harvestTaskIds = [7, 8, 9]; // indices for the 3 extra tasks

/* Simulation state */
let activeScenario = null; // 'rain'|'drought'|'landslide'|'harvest'
let simRunning = false;
let simTimer = null;
let simElapsed = 0;
const SIM_DURATION = 25000;

/* Simulated time (120s = 1 sim-day from 05:00 to 05:00+24h) */
let simDayStart = Date.now();
const SIM_DAY_SECONDS = 120;
const REAL_DAY_HOURS = 24;

/* Log entries */
const logEntries = [];

/* Chat history for Bob */
const chatHistory = [];

/* Warnings triggered this session */
const triggeredWarnings = [];

/* Sparkline data buffers */
const sparklines = { temp: [], hum: [], soil: [], rain: [] };
const SPARKLINE_LEN = 30;

/* Trend data (6 past days + today) */
const trendRain = [12, 28, 8, 45, 5, 19, 0];
const trendSoil = [65, 72, 60, 78, 55, 68, 0];

/* Workers */
const WORKERS = [
  { id: 0, name: 'Asep', initials: 'As', homeBlock: 'C', color: '#7bd88f' },
  { id: 1, name: 'Dedi', initials: 'De', homeBlock: 'A', color: '#54a6e8' },
  { id: 2, name: 'Rina', initials: 'Ri', homeBlock: 'B', color: '#f5a8c8' },
  { id: 3, name: 'Tono', initials: 'To', homeBlock: 'D', color: '#ffb454' },
  { id: 4, name: 'Siti', initials: 'Si', homeBlock: 'E', color: '#b8a8f5' },
  { id: 5, name: 'Wawan', initials: 'Wa', homeBlock: 'F', color: '#f5d87c' },
];
/* Worker positions (pixel coords on 400x300 canvas, set by layout) */
const workerPos = WORKERS.map(w => ({ x: 0, y: 0, tx: 0, ty: 0, state: 'working', block: w.homeBlock }));

/* ============================================================
   SECTION 3: STORAGE HELPERS
   ============================================================ */
function lsGet(k) { try { return localStorage.getItem(k); } catch(e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch(e) {} }
function ssGet(k) { try { return sessionStorage.getItem(k); } catch(e) { return null; } }
function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch(e) {} }
function ssRemove(k) { try { sessionStorage.removeItem(k); } catch(e) {} }

/* ============================================================
   SECTION 4: LANGUAGE
   ============================================================ */
function t(key, ...args) {
  const dict = T[lang] || T.en;
  const val = dict[key];
  if (typeof val === 'function') return val(...args);
  return val !== undefined ? val : (T.en[key] || key);
}

function setLang(l) {
  lang = l;
  lsSet('ke_lang', l);
  document.documentElement.lang = l;
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = l === 'en' ? 'EN' : 'ID';
  applyLangToLogin();
  if (currentUser) rerenderCurrentPage();
    applyLangToLogin();
  if (currentUser) rerenderCurrentPage();
  else showLoginScreen();
}

function toggleLang() {
  setLang(lang === 'en' ? 'id' : 'en');
}

function applyLangToLogin() {
  const set = (id, text) => { const el = document.getElementById(id); if(el) el.textContent = text; };
  const setHTML = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };
  set('ls-subtitle', t('ls_subtitle'));
  set('lbl-uname', t('lbl_uname'));
  set('lbl-upass', t('lbl_upass'));
  set('login-submit-btn', t('login_btn'));
  set('demo-title', t('demo_title'));
  set('role-owner-label', t('role_owner'));
  set('role-mandor-label', t('role_mandor'));
  set('role-worker-label', t('role_worker'));
  set('how-title', t('how_title'));
  const steps = t('how_steps');
  const ol = document.getElementById('how-steps');
  if (ol) ol.innerHTML = steps.map(s => `<li>${s}</li>`).join('');
  set('change-lang-link', t('change_lang'));
  set('logout-btn', t('nav_logout'));
}

/* ============================================================
   SECTION 5: APP INIT
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  /* Load language */
  lang = lsGet('ke_lang') || 'en';
  document.documentElement.lang = lang;

  /* Check if session exists */
  const sess = ssGet('ke_user');
  if (sess) {
    try { currentUser = JSON.parse(sess); } catch(e) {}
  }

  if (currentUser) {
    showApp();
  } else {
    const savedLang = lsGet('ke_lang');
    if (savedLang) {
      lang = savedLang;
      showLoginScreen();
    } else {
      showLangScreen();
    }
  }

  /* Hash routing */
  window.addEventListener('hashchange', handleHash);
  /* Reduced motion check */
  checkReducedMotion();
});

function checkReducedMotion() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.getElementById('particle-canvas').style.display = 'none';
  }
}

/* ============================================================
   SECTION 6: SCREENS
   ============================================================ */
function showLangScreen() {
  document.getElementById('lang-screen').style.display = 'flex';
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').classList.remove('visible');
}

function showLoginScreen() {
  lang = lsGet('ke_lang') || lang;
  document.getElementById('lang-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').classList.remove('visible');
  applyLangToLogin();
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = lang === 'en' ? 'EN' : 'ID';
}

function showApp() {
  document.getElementById('lang-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'none';
  const app = document.getElementById('app');
  app.classList.add('visible');
  applyLangToLogin();
  updateNavbar();
  /* Determine initial page */
  const hash = location.hash.replace('#','') || 'dashboard';
  navigateTo(hash);
  /* Start live update loop */
  startUpdateLoop();
  /* Ambient log */
  startAmbientLog();
  /* Initial log entry */
  addLog(t('bob_greeting'), 'accent');
  /* Bob page greeting */
  chatHistory.push({ role: 'bob', text: t('bob_greeting') });
}

/* ============================================================
   SECTION 7: AUTH
   ============================================================ */
const ACCOUNTS = {
  owner:   { role: 'owner',  name: 'Owner' },
  mandor:  { role: 'mandor', name: 'Mandor' },
  pekerja: { role: 'worker', name: 'Asep' },
};
const PASSWORDS = { owner: 'owner123', mandor: 'mandor123', pekerja: 'pekerja123' };

function doLogin(e) {
  e.preventDefault();
  const u = document.getElementById('uname').value.trim().toLowerCase();
  const p = document.getElementById('upass').value;
  const errEl = document.getElementById('login-error');
  if (ACCOUNTS[u] && PASSWORDS[u] === p) {
    errEl.textContent = '';
    currentUser = { username: u, ...ACCOUNTS[u] };
    ssSet('ke_user', JSON.stringify(currentUser));
    showApp();
  } else {
    errEl.textContent = t('login_error');
    document.getElementById('upass').value = '';
    document.getElementById('upass').focus();
  }
}

function fillDemo(u, p) {
  document.getElementById('uname').value = u;
  document.getElementById('upass').value = p;
  document.getElementById('login-submit-btn').focus();
}

function doLogout() {
  stopScenario();
  ssRemove('ke_user');
  currentUser = null;
  logEntries.length = 0;
  chatHistory.length = 0;
  triggeredWarnings.length = 0;
  stopUpdateLoop();
  hideBanner();
  resetSkyOverlay();
  showLoginScreen();
}

/* ============================================================
   SECTION 8: NAVBAR
   ============================================================ */
function updateNavbar() {
  if (!currentUser) return;
  const r = currentUser.role;
  /* User label */
  const roleLabel = r === 'owner' ? t('role_owner') : r === 'mandor' ? t('role_mandor') : t('role_worker').replace(' (Block C)','').replace(' (Blok C)','');
  document.getElementById('nav-user').textContent = `${currentUser.name} · ${roleLabel}`;
  /* Show/hide Bob nav for worker */
  const bobLink = document.getElementById('nav-bob');
  if (bobLink) bobLink.style.display = r === 'worker' ? 'none' : '';
  /* Mobile nav */
  const mBob = document.querySelector('#mobile-nav a[href="#bob"]');
  if (mBob) mBob.style.display = r === 'worker' ? 'none' : '';
  /* Lang toggle */
  document.getElementById('lang-toggle-btn').textContent = lang === 'en' ? 'EN' : 'ID';
  /* Nav link labels */
  document.getElementById('nav-dashboard').textContent = t('nav_dashboard');
  document.getElementById('nav-workers').textContent = t('nav_workers');
  if (bobLink) bobLink.textContent = t('nav_bob');
  document.getElementById('logout-btn').textContent = t('nav_logout');
}

function updateNavActive(page) {
  ['dashboard','workers','bob'].forEach(p => {
    const el = document.getElementById('nav-' + p);
    if (el) {
      if (p === page) { el.setAttribute('aria-current','page'); }
      else { el.removeAttribute('aria-current'); }
    }
  });
  /* mobile nav */
  document.querySelectorAll('#mobile-nav .nav-link').forEach(a => {
    const href = a.getAttribute('href').replace('#','');
    if (href === page) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
}

function toggleHamburger() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger-btn');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger-btn').setAttribute('aria-expanded','false');
}

/* ============================================================
   SECTION 9: ROUTING
   ============================================================ */
function handleHash() {
  const page = location.hash.replace('#','') || 'dashboard';
  navigateTo(page);
  closeMobileNav();
}

function navigateTo(page) {
  if (!currentUser) return;
  /* Role guards */
  if (page === 'bob' && currentUser.role === 'worker') page = 'dashboard';
  currentPage = page;
  updateNavActive(page);
  renderPage(page);
  updateNavbar();
}

function rerenderCurrentPage() {
  updateNavbar();
  renderPage(currentPage);
}

function renderPage(page) {
  const content = document.getElementById('page-content');
  content.innerHTML = '';
  if (page === 'dashboard') renderDashboard(content);
  else if (page === 'workers') renderWorkers(content);
  else if (page === 'bob') renderBob(content);
  /* Re-attach live canvases */
  scheduleCanvasRedraw();
}

/* ============================================================
   SECTION 10: SIMULATED TIME & SKY
   ============================================================ */
function getSimTime() {
  const elapsed = (Date.now() - simDayStart) / 1000; // real seconds elapsed
  const simHours = ((elapsed / SIM_DAY_SECONDS) * REAL_DAY_HOURS + 5) % 24; // start at 05:00
  const h = Math.floor(simHours);
  const m = Math.floor((simHours - h) * 60);
  return { h, m, simHours };
}

function getSimTimeStr() {
  const { h, m } = getSimTime();
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}

function getSkyColor() {
  const { simHours } = getSimTime();
  // 05-06: dawn dark blue, 06-08: dawn orange, 08-18: day bright, 18-20: dusk, 20+: night
  if (simHours < 6) return 'rgba(30,20,60,0.18)';
  if (simHours < 8) return 'rgba(200,100,40,0.12)';
  if (simHours < 18) return 'rgba(14,26,22,0)';
  if (simHours < 20) return 'rgba(200,80,40,0.1)';
  return 'rgba(10,10,30,0.25)';
}

function updateSkyOverlay() {
  const overlay = document.getElementById('sky-overlay');
  if (!overlay) return;
  let color = getSkyColor();
  /* Scenario overrides */
  if (simRunning) {
    if (activeScenario === 'drought') color = 'rgba(180,80,0,0.18)';
    else if (activeScenario === 'landslide') color = 'rgba(60,20,20,0.22)';
    else if (activeScenario === 'rain') color = 'rgba(20,40,80,0.18)';
    else if (activeScenario === 'harvest') color = 'rgba(200,160,30,0.1)';
  }
  overlay.style.setProperty('--sky', color);
  overlay.style.background = color;
}

function resetSkyOverlay() {
  const overlay = document.getElementById('sky-overlay');
  if (overlay) overlay.style.background = 'transparent';
}

/* ============================================================
   SECTION 11: SENSOR DATA UPDATE
   ============================================================ */
function randomWalk(val, min, max, step) {
  val += (Math.random() - 0.5) * step;
  return Math.max(min, Math.min(max, val));
}

let updateLoopId = null;
function startUpdateLoop() {
  if (updateLoopId) return;
  updateLoopId = setInterval(tickUpdate, 1000);
}
function stopUpdateLoop() {
  clearInterval(updateLoopId);
  updateLoopId = null;
}

function tickUpdate() {
  /* Update sensors with random walk */
  if (!simRunning) {
    sensors.temp = randomWalk(sensors.temp, 14, 24, 0.3);
    sensors.hum  = randomWalk(sensors.hum, 65, 90, 1);
    sensors.soil = randomWalk(sensors.soil, 55, 80, 1);
    sensors.rain = randomWalk(sensors.rain, 0, 8, 0.5);
  } else {
    applyScenarioTick();
  }

  /* Push sparklines */
  Object.keys(sparklines).forEach(k => {
    sparklines[k].push(sensors[k]);
    if (sparklines[k].length > SPARKLINE_LEN) sparklines[k].shift();
  });

  /* Update block data slowly */
  blocks.forEach(b => {
    if (!simRunning) {
      blockData[b].health   = randomWalk(blockData[b].health, 50, 95, 0.5);
      blockData[b].pest     = randomWalk(blockData[b].pest, 5, 45, 0.5);
      blockData[b].moisture = randomWalk(blockData[b].moisture, 50, 85, 0.8);
    }
  });

  /* Trend: update today's data point */
  trendRain[6] = Math.round(sensors.rain * 3);
  trendSoil[6] = Math.round(sensors.soil);

  /* Update clock */
  const clock = document.getElementById('nav-clock');
  if (clock) clock.textContent = getSimTimeStr();

  /* Update sky */
  updateSkyOverlay();

  /* Update status badge */
  updateStatusBadge();

  /* Redraw live elements */
  scheduleCanvasRedraw();

  /* Update dynamic DOM elements (not task list) */
  updateLiveDOMElements();
}

function updateStatusBadge() {
  const badge = document.getElementById('status-badge');
  if (!badge) return;
  let level = 'nominal';
  if (activeScenario === 'landslide') level = 'critical';
  else if (activeScenario === 'rain' || activeScenario === 'drought') level = 'caution';
  else if (activeScenario === 'harvest') level = 'nominal';
  else {
    const minH = Math.min(...blocks.map(b => blockData[b].health));
    if (minH < 55) level = 'caution';
  }
  badge.className = 'status-badge' + (level === 'critical' ? ' critical' : level === 'caution' ? ' caution' : '');
  badge.textContent = level === 'critical' ? t('nav_critical') : level === 'caution' ? t('nav_caution') : t('nav_nominal');
}

/* Update summary cards, sensor rings, block map cells, etc. WITHOUT touching task list */
function updateLiveDOMElements() {
  /* Summary cards */
  const scStatus = document.getElementById('sc-status-val');
  if (scStatus) {
    let level = 'nominal';
    if (activeScenario === 'landslide') level = 'critical';
    else if (activeScenario === 'rain' || activeScenario === 'drought') level = 'caution';
    scStatus.textContent = level === 'critical' ? t('nav_critical') : level === 'caution' ? t('nav_caution') : t('nav_nominal');
    scStatus.style.color = level === 'critical' ? 'var(--red)' : level === 'caution' ? 'var(--amber)' : 'var(--accent)';
  }

  /* Weekly forecast */
  const fcKg = document.getElementById('sc-forecast-kg');
  const fcBar = document.getElementById('sc-forecast-bar');
  if (fcKg) {
    let kg = Math.round(1200 + sensors.soil * 2 + blockData.A.health * 2);
    if (activeScenario === 'harvest') kg = Math.round(kg * 1.35);
    const pct = Math.min(100, Math.round(kg / 1800 * 100));
    fcKg.textContent = kg + ' kg';
    if (fcBar) fcBar.style.width = pct + '%';
  }

  /* Tea quality */
  const avgLeaf = blocks.reduce((s,b) => s + blockData[b].health, 0) / 6;
  const avgPest = blocks.reduce((s,b) => s + blockData[b].pest, 0) / 6;
  const moistureFit = Math.max(0, 1 - Math.abs(sensors.soil - 68) / 30);
  const tempFit = Math.max(0, 1 - Math.abs(sensors.temp - 18) / 10);
  const quality = Math.max(0, Math.min(100, Math.round(
    0.45 * avgLeaf + 0.30 * moistureFit * 100 + 0.25 * tempFit * 100 - 0.2 * avgPest
  )));
  const qLabel = quality >= 80 ? t('q_premium') : quality >= 65 ? t('q_good') : quality >= 50 ? t('q_fair') : t('q_low');
  const qEl = document.getElementById('sc-quality-val');
  const qLabelEl = document.getElementById('sc-quality-label');
  if (qEl) qEl.textContent = quality + '/100';
  if (qLabelEl) qLabelEl.textContent = qLabel;
  /* Tea cup liquid color */
  const cupLiquid = document.getElementById('cup-liquid');
  if (cupLiquid) {
    const r = quality >= 80 ? [140,200,80] : quality >= 65 ? [180,180,60] : quality >= 50 ? [200,150,50] : [200,100,50];
    cupLiquid.setAttribute('fill', `rgb(${r[0]},${r[1]},${r[2]})`);
    /* Animate fill level */
    const fillH = 14 + Math.round(quality / 100 * 16);
    const fillY = 42 - fillH;
    cupLiquid.setAttribute('height', fillH);
    cupLiquid.setAttribute('y', fillY);
  }

  /* Sensor cards (values only, not canvas) */
  const sensorIds = { temp: 'sensor-val-temp', hum: 'sensor-val-hum', soil: 'sensor-val-soil', rain: 'sensor-val-rain' };
  Object.entries(sensorIds).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = Math.round(sensors[k]);
  });

  /* Sensor card colors */
  updateSensorCardColors();

  /* Block map cells */
  blocks.forEach(b => {
    const cell = document.getElementById('block-cell-' + b);
    if (!cell) return;
    const h = blockData[b].health;
    const p = blockData[b].pest;
    const color = blockHealthColor(h, p);
    cell.style.background = color;
    const hEl = cell.querySelector('.blk-health');
    const pEl = cell.querySelector('.blk-pest');
    if (hEl) hEl.textContent = `❤ ${Math.round(h)}%`;
    if (pEl) pEl.textContent = `🐛 ${Math.round(p)}%`;
  });

  /* Block detail (if shown) */
  updateBlockDetail(selectedBlock);

  /* Tasks progress (but not the task list itself) */
  updateTasksProgress();

  /* Workers list */
  updateWorkersList();
}

function updateSensorCardColors() {
  const checks = [
    { key: 'temp', id: 'sensor-card-temp', amberMin: 24, redMin: 28 },
    { key: 'hum', id: 'sensor-card-hum', amberMax: 65, redMax: 55 },
    { key: 'soil', id: 'sensor-card-soil', amberMax: 50, redMax: 40 },
    { key: 'rain', id: 'sensor-card-rain', amberMin: 20, redMin: 35 },
  ];
  checks.forEach(({ key, id, amberMin, redMin, amberMax, redMax }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const v = sensors[key];
    let cls = '';
    if (redMin !== undefined && v >= redMin) cls = 'red';
    else if (amberMin !== undefined && v >= amberMin) cls = 'amber';
    else if (redMax !== undefined && v <= redMax) cls = 'red';
    else if (amberMax !== undefined && v <= amberMax) cls = 'amber';
    el.className = 'sensor-card' + (cls ? ' ' + cls : '');
  });
}

function blockHealthColor(health, pest) {
  if (health >= 75 && pest <= 20) return '#1a4d2e';
  if (health >= 60 || pest <= 30) return '#3d4a1a';
  return '#4d1a1a';
}

/* ============================================================
   SECTION 12: LOG
   ============================================================ */
function addLog(msg, type = 'normal') {
  const time = getSimTimeStr();
  logEntries.push({ time, msg, type });
  if (logEntries.length > 100) logEntries.shift();
  const container = document.getElementById('log-container');
  if (!container) return;
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-msg ${type}">${msg}</span>`;
  container.appendChild(entry);
  container.scrollTop = container.scrollHeight;
}

let ambientLogTimer = null;
function startAmbientLog() {
  if (ambientLogTimer) return;
  let i = 0;
  ambientLogTimer = setInterval(() => {
    const msgs = t('log_ambient');
    addLog(msgs[i % msgs.length]);
    i++;
  }, 7000);
}

/* ============================================================
   SECTION 13: SIMULATION CENTER
   ============================================================ */
function selectScenario(s) {
  if (simRunning) return;
  activeScenario = s;
  /* Update UI selection */
  document.querySelectorAll('.sim-card').forEach(c => {
    c.classList.remove('selected','amber-sel','red-sel','green-sel');
  });
  const card = document.getElementById('sim-card-' + s);
  if (card) {
    card.classList.add('selected');
    if (s === 'rain' || s === 'drought') card.classList.add('amber-sel');
    else if (s === 'landslide') card.classList.add('red-sel');
    else card.classList.add('green-sel');
  }
  const runBtn = document.getElementById('sim-run-btn');
  if (runBtn) runBtn.disabled = false;
}

function runScenario() {
  if (!activeScenario || simRunning) return;
  simRunning = true;
  simElapsed = 0;
  /* Scroll to top */
  window.scrollTo({ top: 0, behavior: 'smooth' });
  /* Update button */
  const runBtn = document.getElementById('sim-run-btn');
  if (runBtn) { runBtn.textContent = t('sim_stop'); runBtn.classList.add('running'); }
  /* Show banner */
  showBannerForScenario(activeScenario);
  /* Particles */
  startParticles(activeScenario);
  /* Log messages */
  const logKey = 'sim_log_' + activeScenario;
  const logs = t(logKey) || [];
  logs.forEach((msg, i) => setTimeout(() => addLog(msg, activeScenario === 'landslide' ? 'red' : activeScenario === 'rain' || activeScenario === 'drought' ? 'amber' : 'accent'), i * 2500));
  /* Harvest tasks */
  if (activeScenario === 'harvest' && !harvestTasksAdded) {
    harvestTasksAdded = true;
    setTimeout(() => addHarvestTasks(), 1000);
  }
  /* Landslide: workers */
  if (activeScenario === 'landslide') {
    triggerLandslideWorkers();
    startEdgePulse();
    startShake();
  }
  /* Track warning */
  const warningName = t('banner_' + activeScenario + '_title');
  if (!triggeredWarnings.includes(warningName)) triggeredWarnings.push(warningName);
  /* Auto-stop */
  simTimer = setTimeout(stopScenario, SIM_DURATION);
  /* Timer display */
  let elapsed = 0;
  const timerInterval = setInterval(() => {
    elapsed += 1;
    const remaining = Math.max(0, Math.round((SIM_DURATION - elapsed * 1000) / 1000));
    const timerEl = document.getElementById('sim-timer');
    if (timerEl) timerEl.textContent = `${t('sim_running')} ${remaining}s`;
    if (!simRunning) clearInterval(timerInterval);
  }, 1000);
}

function toggleSimRun() {
  if (simRunning) stopScenario(); else runScenario();
}

function stopScenario() {
  if (!simRunning) return;
  simRunning = false;
  clearTimeout(simTimer);
  const runBtn = document.getElementById('sim-run-btn');
  if (runBtn) { runBtn.textContent = t('sim_run'); runBtn.classList.remove('running'); }
  const timerEl = document.getElementById('sim-timer');
  if (timerEl) timerEl.textContent = '';
  hideBanner();
  stopParticles();
  stopEdgePulse();
  /* Worker return */
  if (activeScenario === 'landslide') returnWorkersHome();
  /* Reset scenario selection UI */
  document.querySelectorAll('.sim-card').forEach(c => c.classList.remove('selected','amber-sel','red-sel','green-sel'));
  activeScenario = null;
  const cards = document.querySelectorAll('.sim-card');
  cards.forEach(c => c.style.borderColor = '');
  if (runBtn) runBtn.disabled = true;
}

function applyScenarioTick() {
  const s = activeScenario;
  if (s === 'rain') {
    sensors.rain = Math.min(80, sensors.rain + 1.5);
    sensors.soil = Math.min(100, sensors.soil + 0.8);
    sensors.hum  = Math.min(100, sensors.hum + 0.3);
    ['C','D'].forEach(b => { blockData[b].pest = Math.min(90, blockData[b].pest + 1.2); });
    sensors.temp = randomWalk(sensors.temp, 14, 22, 0.2);
  } else if (s === 'drought') {
    sensors.rain = Math.max(0, sensors.rain - 0.5);
    sensors.soil = Math.max(20, sensors.soil - 0.8);
    sensors.hum  = Math.max(30, sensors.hum - 0.5);
    sensors.temp = Math.min(35, sensors.temp + 0.3);
    blocks.forEach(b => { blockData[b].health = Math.max(20, blockData[b].health - 0.5); });
  } else if (s === 'landslide') {
    sensors.rain = Math.min(100, sensors.rain + 2);
    ['A','B','C'].forEach(b => {
      blockData[b].health = Math.max(10, blockData[b].health - 1.5);
    });
  } else if (s === 'harvest') {
    sensors.temp = 18 + Math.sin(Date.now()/5000)*0.5;
    sensors.hum  = 75 + Math.sin(Date.now()/7000)*2;
    sensors.soil = Math.min(75, sensors.soil + 0.1);
    blocks.forEach(b => { blockData[b].health = Math.min(98, blockData[b].health + 0.3); });
  }
}

/* ============================================================
   SECTION 14: WARNING BANNER
   ============================================================ */
function showBannerForScenario(s) {
  const banner = document.getElementById('warning-banner');
  const role = currentUser ? currentUser.role : 'owner';
  /* Field worker filtering */
  if (role === 'worker') {
    const workerBlocks = ['C']; // Asep is in Block C
    if (s === 'rain') { /* affects C,D — show */ }
    else if (s === 'landslide') { /* affects A,B,C — show */ }
    else { hideBanner(); return; } /* drought, harvest — hide for worker */
  }
  banner.className = 'show ' + (s === 'landslide' ? 'red' : s === 'harvest' ? 'green' : 'amber');
  banner.setAttribute('show','');
  document.getElementById('banner-icon').textContent = s === 'rain' ? '🌧' : s === 'drought' ? '☀' : s === 'landslide' ? '⛔' : '🌿';
  document.getElementById('banner-title').textContent = t('banner_' + s + '_title');
  document.getElementById('banner-desc').textContent = t('banner_' + s + '_desc');
  document.getElementById('banner-bob').textContent = t('banner_' + s + '_bob');
}

function hideBanner() {
  const banner = document.getElementById('warning-banner');
  banner.className = '';
  banner.removeAttribute('show');
}

/* ============================================================
   SECTION 15: PARTICLES
   ============================================================ */
let particleAnimId = null;
let particles = [];
const MAX_PARTICLES = 110;

const canvas = document.getElementById('particle-canvas');
const pctx = canvas.getContext('2d');

function resizeParticleCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeParticleCanvas);
resizeParticleCanvas();

function startParticles(scenario) {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  canvas.classList.add('active');
  particles = [];
  particleAnimId = requestAnimationFrame(function loop() {
    if (!simRunning) { stopParticles(); return; }
    drawParticles(scenario);
    if (particles.length < MAX_PARTICLES) spawnParticle(scenario);
    particleAnimId = requestAnimationFrame(loop);
  });
}

function stopParticles() {
  cancelAnimationFrame(particleAnimId);
  canvas.classList.remove('active');
  pctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = [];
}

function spawnParticle(scenario) {
  const w = canvas.width, h = canvas.height;
  if (scenario === 'rain') {
    particles.push({ x: Math.random()*w, y: -10, vx: -1, vy: 12+Math.random()*8, life: 1, type: 'rain', alpha: 0.5+Math.random()*0.4 });
    /* Occasional lightning */
    if (Math.random() < 0.002) particles.push({ x: Math.random()*w, y: 0, type: 'lightning', life: 0.3, alpha: 0.9 });
  } else if (scenario === 'drought') {
    particles.push({ x: Math.random()*w, y: h+10, vx: (Math.random()-0.5)*0.5, vy: -(0.5+Math.random()*1.5), life: 1, type: 'mote', alpha: 0.4+Math.random()*0.5, r: 2+Math.random()*4 });
  } else if (scenario === 'landslide') {
    particles.push({ x: Math.random()*w, y: -5, vx: (Math.random()-0.5)*2, vy: 4+Math.random()*6, life: 1, type: 'dust', alpha: 0.25+Math.random()*0.35, r: 4+Math.random()*10 });
  } else if (scenario === 'harvest') {
    particles.push({ x: Math.random()*w, y: h+10, vx: (Math.random()-0.5)*0.8, vy: -(1+Math.random()*2), life: 1, type: 'leaf', alpha: 0.6+Math.random()*0.4, r: Math.random()*Math.PI*2, spin: (Math.random()-0.5)*0.05 });
  }
}

function drawParticles(scenario) {
  pctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= 0.005;
    if (p.type === 'rain') { p.x += p.vx; p.y += p.vy; }
    else if (p.type === 'drought' || p.type === 'mote') { p.x += p.vx; p.y += p.vy; }
    else if (p.type === 'dust') { p.x += p.vx; p.y += p.vy; p.life -= 0.008; }
    else if (p.type === 'leaf') { p.x += p.vx; p.y += p.vy; p.r += p.spin; }
    else if (p.type === 'lightning') { p.life -= 0.05; }

    /* Remove off-screen or dead */
    if (p.life <= 0 || p.y > canvas.height + 20 || p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
      particles.splice(i, 1); continue;
    }

    pctx.save();
    pctx.globalAlpha = Math.max(0, p.alpha * p.life * 2);
    if (p.type === 'rain') {
      pctx.strokeStyle = '#8be0ff';
      pctx.lineWidth = 1;
      pctx.beginPath();
      pctx.moveTo(p.x, p.y);
      pctx.lineTo(p.x + p.vx*0.5, p.y - 12);
      pctx.stroke();
    } else if (p.type === 'lightning') {
      pctx.strokeStyle = '#fff9c4';
      pctx.lineWidth = 2;
      pctx.globalAlpha = p.alpha * p.life * 3;
      pctx.beginPath();
      const lx = p.x;
      pctx.moveTo(lx, 0);
      pctx.lineTo(lx-10, canvas.height*0.3);
      pctx.lineTo(lx+5, canvas.height*0.5);
      pctx.lineTo(lx-5, canvas.height);
      pctx.stroke();
    } else if (p.type === 'mote') {
      const grad = pctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*2);
      grad.addColorStop(0, 'rgba(255,160,40,0.7)');
      grad.addColorStop(1, 'rgba(255,80,0,0)');
      pctx.fillStyle = grad;
      pctx.beginPath();
      pctx.arc(p.x, p.y, p.r*2, 0, Math.PI*2);
      pctx.fill();
    } else if (p.type === 'dust') {
      pctx.fillStyle = '#9e8060';
      pctx.beginPath();
      pctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      pctx.fill();
    } else if (p.type === 'leaf') {
      pctx.translate(p.x, p.y);
      pctx.rotate(p.r);
      pctx.fillStyle = '#a8d840';
      pctx.beginPath();
      pctx.ellipse(0, 0, 7, 4, 0, 0, Math.PI*2);
      pctx.fill();
      /* Stem */
      pctx.strokeStyle = '#6a9020';
      pctx.lineWidth = 1;
      pctx.beginPath();
      pctx.moveTo(0, 0);
      pctx.lineTo(6, 0);
      pctx.stroke();
    }
    pctx.restore();
  }
}

/* ============================================================
   SECTION 16: EDGE PULSE & SHAKE
   ============================================================ */
function startEdgePulse() {
  document.getElementById('edge-pulse').classList.add('active');
}
function stopEdgePulse() {
  document.getElementById('edge-pulse').classList.remove('active');
}
function startShake() {
  const body = document.body;
  body.classList.add('shaking');
  setTimeout(() => body.classList.remove('shaking'), 400);
  /* Repeat a few times */
  let count = 0;
  const shakeInterval = setInterval(() => {
    body.classList.add('shaking');
    setTimeout(() => body.classList.remove('shaking'), 400);
    count++;
    if (count >= 3) clearInterval(shakeInterval);
  }, 3000);
}

/* ============================================================
   SECTION 17: CANVAS DRAWING (sensors, sparklines, trend)
   ============================================================ */
let rafId = null;
function scheduleCanvasRedraw() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    rafId = null;
    drawAllCanvases();
  });
}

function drawAllCanvases() {
  drawSensorRings();
  drawSparklines();
  drawTrendChart();
  drawWorkerMap();
}

/* Sensor rings */
function drawSensorRings() {
  const defs = [
    { id: 'ring-temp', val: sensors.temp, min: 10, max: 35, color: '#ff9054', unit: '°C' },
    { id: 'ring-hum',  val: sensors.hum,  min: 0,  max: 100, color: '#54a6e8', unit: '%' },
    { id: 'ring-soil', val: sensors.soil, min: 0,  max: 100, color: '#7bd88f', unit: '%' },
    { id: 'ring-rain', val: sensors.rain, min: 0,  max: 50,  color: '#b0c8ff', unit: 'mm' },
  ];
  defs.forEach(d => {
    const c = document.getElementById(d.id);
    if (!c) return;
    const ctx = c.getContext('2d');
    const sz = 70;
    c.width = sz; c.height = sz;
    const cx = sz/2, cy = sz/2, r = 28;
    const pct = Math.max(0, Math.min(1, (d.val - d.min) / (d.max - d.min)));
    ctx.clearRect(0,0,sz,sz);
    /* Track */
    ctx.beginPath();
    ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle = '#27413a';
    ctx.lineWidth = 6;
    ctx.stroke();
    /* Fill */
    ctx.beginPath();
    ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2 + pct*Math.PI*2);
    ctx.strokeStyle = d.color;
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();
  });
}

/* Sparklines */
function drawSparklines() {
  const defs = [
    { key: 'temp', id: 'spark-temp', color: '#ff9054' },
    { key: 'hum',  id: 'spark-hum',  color: '#54a6e8' },
    { key: 'soil', id: 'spark-soil', color: '#7bd88f' },
    { key: 'rain', id: 'spark-rain', color: '#b0c8ff' },
  ];
  defs.forEach(d => {
    const c = document.getElementById(d.id);
    if (!c) return;
    const ctx = c.getContext('2d');
    const w = 90, h = 28;
    c.width = w; c.height = h;
    ctx.clearRect(0,0,w,h);
    const data = sparklines[d.key];
    if (data.length < 2) return;
    const mn = Math.min(...data), mx = Math.max(...data) + 0.001;
    const step = w / (data.length - 1);
    ctx.beginPath();
    ctx.strokeStyle = d.color;
    ctx.lineWidth = 1.5;
    data.forEach((v, i) => {
      const x = i * step;
      const y = h - ((v - mn) / (mx - mn)) * (h - 2) - 1;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
  });
}

/* 7-day trend chart */
function drawTrendChart() {
  const c = document.getElementById('trend-canvas');
  if (!c) return;
  const parent = c.parentElement;
  const W = parent.clientWidth - 24;
  const H = 160;
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  ctx.clearRect(0,0,W,H);

  const PAD = { top: 14, right: 20, bottom: 36, left: 40 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;
  const days = 7;
  const barW = Math.max(8, Math.min(30, (chartW / days) * 0.5));

  /* Weekday labels */
  const today = new Date();
  const weekdays = t('weekdays');
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(weekdays[d.getDay() === 0 ? 6 : d.getDay() - 1]);
  }

  /* Grids */
  ctx.strokeStyle = '#27413a';
  ctx.lineWidth = 1;
  ctx.setLineDash([3,4]);
  [0, 0.25, 0.5, 0.75, 1].forEach(f => {
    const y = PAD.top + chartH * (1 - f);
    ctx.beginPath();
    ctx.moveTo(PAD.left, y);
    ctx.lineTo(PAD.left + chartW, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  /* Rainfall bars */
  const maxRain = Math.max(...trendRain, 1);
  trendRain.forEach((v, i) => {
    const x = PAD.left + (i / (days - 1)) * chartW - barW/2;
    const bh = (v / maxRain) * chartH;
    const y = PAD.top + chartH - bh;
    const isToday = i === 6;
    ctx.fillStyle = isToday ? '#5590cc' : '#27413a';
    ctx.fillRect(x, y, barW, bh);
  });

  /* Soil moisture line */
  ctx.beginPath();
  ctx.strokeStyle = '#7bd88f';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  trendSoil.forEach((v, i) => {
    const x = PAD.left + (i / (days - 1)) * chartW;
    const y = PAD.top + chartH * (1 - v / 100);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  /* Dots on moisture line */
  trendSoil.forEach((v, i) => {
    const x = PAD.left + (i / (days - 1)) * chartW;
    const y = PAD.top + chartH * (1 - v / 100);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI*2);
    ctx.fillStyle = '#7bd88f';
    ctx.fill();
  });

  /* Axis labels */
  ctx.fillStyle = '#7a9e8e';
  ctx.font = '11px system-ui, sans-serif';
  ctx.textAlign = 'center';
  labels.forEach((lb, i) => {
    const x = PAD.left + (i / (days-1)) * chartW;
    ctx.fillText(lb, x, H - 6);
  });

  /* Y axis */
  ctx.textAlign = 'right';
  ctx.fillText('100%', PAD.left - 4, PAD.top + 4);
  ctx.fillText('50%', PAD.left - 4, PAD.top + chartH/2 + 4);
  ctx.fillText('0%', PAD.left - 4, PAD.top + chartH + 4);
}

/* ============================================================
   SECTION 18: WORKER MAP
   ============================================================ */
/* Block grid positions on worker map canvas (400x280) */
const BLOCK_POSITIONS = {
  A: { col: 0, row: 0 }, B: { col: 1, row: 0 }, C: { col: 2, row: 0 },
  D: { col: 0, row: 1 }, E: { col: 1, row: 1 }, F: { col: 2, row: 1 },
};
const MAP_W = 360, MAP_H = 240;
const MAP_PAD = 10;
const BLOCK_W = (MAP_W - MAP_PAD*2) / 3;
const BLOCK_H = 80;
const ASSEMBLY_Y = MAP_PAD + BLOCK_H * 2 + 10;

function getBlockCenter(block) {
  const { col, row } = BLOCK_POSITIONS[block];
  return {
    x: MAP_PAD + col * BLOCK_W + BLOCK_W / 2,
    y: MAP_PAD + row * BLOCK_H + BLOCK_H / 2
  };
}

/* Initialize worker positions */
function initWorkerPositions() {
  WORKERS.forEach((w, i) => {
    const c = getBlockCenter(w.homeBlock);
    workerPos[i].x = c.x + (Math.random()-0.5)*20;
    workerPos[i].y = c.y + (Math.random()-0.5)*15;
    workerPos[i].tx = workerPos[i].x;
    workerPos[i].ty = workerPos[i].y;
    workerPos[i].state = 'working';
    workerPos[i].block = w.homeBlock;
  });
}

/* Random worker movement */
let workerMoveTimer = null;
function startWorkerMovement() {
  if (workerMoveTimer) return;
  initWorkerPositions();
  workerMoveTimer = setInterval(tickWorkerMovement, 3000);
}
function stopWorkerMovement() {
  clearInterval(workerMoveTimer);
  workerMoveTimer = null;
}

function tickWorkerMovement() {
  WORKERS.forEach((w, i) => {
    if (workerPos[i].state === 'evacuating') return; // handled by scenario
    const homeC = getBlockCenter(w.homeBlock);
    /* Small chance to move within block or briefly rest */
    const r = Math.random();
    if (r < 0.15) {
      workerPos[i].state = 'resting';
      workerPos[i].tx = homeC.x + (Math.random()-0.5)*24;
      workerPos[i].ty = homeC.y + (Math.random()-0.5)*18;
    } else if (r < 0.25) {
      workerPos[i].state = 'walking';
      /* Move to adjacent area */
      workerPos[i].tx = homeC.x + (Math.random()-0.5)*30;
      workerPos[i].ty = homeC.y + (Math.random()-0.5)*22;
      setTimeout(() => { if(workerPos[i]) workerPos[i].state = 'working'; }, 2500);
    } else {
      workerPos[i].state = 'working';
      workerPos[i].tx = homeC.x + (Math.random()-0.5)*20;
      workerPos[i].ty = homeC.y + (Math.random()-0.5)*15;
    }
  });
}

function triggerLandslideWorkers() {
  /* Workers in A, B, C evacuate to Assembly Point */
  const assemblyX = MAP_PAD + BLOCK_W + BLOCK_W/2; // center of map
  const assemblyYpos = ASSEMBLY_Y + 20;
  WORKERS.forEach((w, i) => {
    if (['A','B','C'].includes(w.homeBlock)) {
      workerPos[i].state = 'evacuating';
      workerPos[i].tx = assemblyX + (Math.random()-0.5)*40;
      workerPos[i].ty = assemblyYpos;
    }
  });
}

function returnWorkersHome() {
  WORKERS.forEach((w, i) => {
    const c = getBlockCenter(w.homeBlock);
    workerPos[i].state = 'walking';
    workerPos[i].tx = c.x + (Math.random()-0.5)*20;
    workerPos[i].ty = c.y + (Math.random()-0.5)*15;
    setTimeout(() => { if(workerPos[i]) workerPos[i].state = 'working'; }, 3000);
  });
}

function smoothMoveWorkers() {
  WORKERS.forEach((w, i) => {
    const dx = workerPos[i].tx - workerPos[i].x;
    const dy = workerPos[i].ty - workerPos[i].y;
    workerPos[i].x += dx * 0.04;
    workerPos[i].y += dy * 0.04;
  });
}

function drawWorkerMap() {
  const c = document.getElementById('worker-map-canvas');
  if (!c) return;
  c.width = MAP_W; c.height = MAP_H + 40;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);

  smoothMoveWorkers();

  /* Draw blocks */
  blocks.forEach(b => {
    const { col, row } = BLOCK_POSITIONS[b];
    const x = MAP_PAD + col * BLOCK_W + 2;
    const y = MAP_PAD + row * BLOCK_H + 2;
    const w = BLOCK_W - 4;
    const h = BLOCK_H - 4;
    const health = blockData[b].health;
    /* Color by health */
    let fillColor = '#1a4d2e';
    if (health < 55) fillColor = '#4d1a1a';
    else if (health < 75) fillColor = '#3d3a1a';
    /* Landslide: A-C red */
    if (activeScenario === 'landslide' && simRunning && ['A','B','C'].includes(b)) {
      fillColor = '#4d1a1a';
    }
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(x, y, w, h, 6) : ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.strokeStyle = '#27413a';
    ctx.lineWidth = 1;
    ctx.stroke();
    /* Block label */
    ctx.fillStyle = '#e8f3ec';
    ctx.font = 'bold 14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(b, x + w/2, y + h/2 + 5);
  });

  /* Assembly Point band */
  const apY = MAP_PAD + BLOCK_H * 2 + 4;
  ctx.fillStyle = 'rgba(123,216,143,0.06)';
  ctx.fillRect(MAP_PAD, apY, MAP_W - MAP_PAD*2, 26);
  ctx.strokeStyle = 'rgba(123,216,143,0.2)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4,4]);
  ctx.strokeRect(MAP_PAD, apY, MAP_W - MAP_PAD*2, 26);
  ctx.setLineDash([]);
  ctx.fillStyle = '#7a9e8e';
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('▶ ' + t('assembly_point'), MAP_PAD + 6, apY + 16);

  /* Landslide: dashed evacuation routes from A,B,C workers */
  if (activeScenario === 'landslide' && simRunning) {
    WORKERS.forEach((w, i) => {
      if (['A','B','C'].includes(w.homeBlock) && workerPos[i].state === 'evacuating') {
        ctx.beginPath();
        ctx.setLineDash([3,4]);
        ctx.strokeStyle = 'rgba(255,107,107,0.5)';
        ctx.lineWidth = 1.5;
        ctx.moveTo(workerPos[i].x, workerPos[i].y);
        ctx.lineTo(workerPos[i].tx, workerPos[i].ty);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }

  /* Draw workers */
  const role = currentUser ? currentUser.role : 'owner';
  WORKERS.forEach((w, i) => {
    if (role === 'worker' && w.id !== 0) return; // Asep only
    const p = workerPos[i];
    const state = p.state;
    const dotColor = state === 'working' ? '#7bd88f' : state === 'walking' ? '#54a6e8' : state === 'resting' ? '#7a9e8e' : '#ff6b6b';
    /* Pulse for evacuating */
    if (state === 'evacuating') {
      const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 300);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 14 + pulse * 4, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,107,107,0.15)';
      ctx.fill();
    }
    /* Circle */
    ctx.beginPath();
    ctx.arc(p.x, p.y, 11, 0, Math.PI*2);
    ctx.fillStyle = dotColor;
    ctx.fill();
    ctx.strokeStyle = '#0e1a16';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    /* Initials */
    ctx.fillStyle = '#0e1a16';
    ctx.font = 'bold 9px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(w.initials, p.x, p.y + 3);
  });

  /* Redraw in a loop for smooth animation */
  if (currentPage === 'workers') {
    requestAnimationFrame(drawWorkerMap);
  }
}

/* ============================================================
   SECTION 19: WORKERS LIST UPDATE
   ============================================================ */
function updateWorkersList() {
  const table = document.getElementById('workers-table-body');
  if (!table) return;
  const role = currentUser ? currentUser.role : 'owner';
  table.innerHTML = '';
  WORKERS.forEach((w, i) => {
    if (role === 'worker' && w.id !== 0) return;
    const state = workerPos[i].state;
    const stateLabel = t('ws_' + state) || state;
    const dotClass = `wdot-${state}`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${w.name}</td>
      <td>${w.homeBlock}</td>
      <td><span class="worker-status-dot ${dotClass}"></span>${stateLabel}</td>
    `;
    table.appendChild(tr);
  });
}

/* ============================================================
   SECTION 20: TASK MANAGEMENT
   ============================================================ */
function loadTasksDone() {
  try {
    const saved = lsGet('ke_tasks_done_' + (currentUser ? currentUser.username : ''));
    if (saved) tasksDone = new Set(JSON.parse(saved));
  } catch(e) { tasksDone = new Set(); }
}

function saveTasksDone() {
  lsSet('ke_tasks_done_' + (currentUser ? currentUser.username : ''), JSON.stringify([...tasksDone]));
}

function getVisibleTaskCount() {
  const role = currentUser ? currentUser.role : 'owner';
  if (role === 'worker') {
    /* Show only tasks for Block C */
    const taskBlocks = t('task_blocks');
    return taskBlocks.filter(b => b === 'C').length;
  }
  return TASK_COUNT + (harvestTasksAdded ? 3 : 0);
}

function getTaskList() {
  const role = currentUser ? currentUser.role : 'owner';
  const names = t('task_names');
  const taskBlocks = t('task_blocks');
  let tasks = names.slice(0, TASK_COUNT).map((n, i) => ({ id: i, name: n, block: taskBlocks[i] }));
  if (harvestTasksAdded) {
    const hn = t('harvest_tasks');
    hn.forEach((n, i) => tasks.push({ id: TASK_COUNT + i, name: n, block: ['A','C','A'][i] }));
  }
  if (role === 'worker') {
    tasks = tasks.filter(tk => tk.block === 'C');
  }
  return tasks;
}

function addHarvestTasks() {
  harvestTasksAdded = true;
  /* Re-render task section if on dashboard */
  if (currentPage === 'dashboard') {
    const tl = document.getElementById('tasks-list');
    if (tl) renderTaskList(tl);
  }
}

function renderTaskList(container) {
  const tasks = getTaskList();
  container.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (tasksDone.has(task.id) ? ' done' : '');
    li.id = 'task-item-' + task.id;
    li.innerHTML = `
      <div class="task-check" role="checkbox" aria-checked="${tasksDone.has(task.id)}" tabindex="0"
           onclick="toggleTask(${task.id})" onkeydown="if(event.key===' '||event.key==='Enter'){toggleTask(${task.id});event.preventDefault()}"
           aria-label="${task.name}">
        ${tasksDone.has(task.id) ? '🍃' : ''}
      </div>
      <span class="task-label">${task.name}</span>
      <span class="task-block-tag">${task.block}</span>
    `;
    container.appendChild(li);
  });
}

function updateTasksProgress() {
  const tasks = getTaskList();
  const done = tasks.filter(tk => tasksDone.has(tk.id)).length;
  const total = tasks.length;
  const fillEl = document.getElementById('tasks-progress-fill');
  const labelEl = document.getElementById('tasks-progress-label');
  if (fillEl) fillEl.style.width = (total > 0 ? (done / total * 100) : 0) + '%';
  if (labelEl) labelEl.textContent = `${done} ${t('tasks_done')} ${total} ${t('tasks_done2')}`;
  /* Summary card */
  const scEl = document.getElementById('sc-tasks-val');
  if (scEl) scEl.textContent = `${done}/${total}`;
}

function toggleTask(id) {
  if (tasksDone.has(id)) {
    tasksDone.delete(id);
  } else {
    tasksDone.add(id);
    /* Task completion effect */
    triggerTaskEffect(id);
  }
  saveTasksDone();
  /* Update the specific item only, not the whole list */
  const item = document.getElementById('task-item-' + id);
  if (item) {
    const isDone = tasksDone.has(id);
    item.className = 'task-item' + (isDone ? ' done' : '');
    const check = item.querySelector('.task-check');
    if (check) {
      check.setAttribute('aria-checked', isDone ? 'true' : 'false');
      check.innerHTML = isDone ? '🍃' : '';
    }
  }
  updateTasksProgress();
  /* Check if all done */
  const tasks = getTaskList();
  const allDone = tasks.length > 0 && tasks.every(t => tasksDone.has(t.id));
  if (allDone) {
    setTimeout(() => addLog(t('log_tasks_done'), 'accent'), 400);
  }
}

function triggerTaskEffect(id) {
  const item = document.getElementById('task-item-' + id);
  if (!item) return;
  item.classList.add('task-glow');
  setTimeout(() => item.classList.remove('task-glow'), 900);
  /* Float +1 leaf */
  const float = document.createElement('span');
  float.className = 'float-leaf';
  float.textContent = '+1 🍃';
  item.appendChild(float);
  setTimeout(() => float.remove(), 900);
}

/* ============================================================
   SECTION 21: BLOCK DETAIL
   ============================================================ */
function selectBlock(b) {
  selectedBlock = b;
  document.querySelectorAll('.block-cell').forEach(c => c.classList.remove('selected'));
  const cell = document.getElementById('block-cell-' + b);
  if (cell) cell.classList.add('selected');
  updateBlockDetail(b);
}

function updateBlockDetail(b) {
  const detail = document.getElementById('block-detail');
  if (!detail) return;
  const data = blockData[b];
  const moisture = data.moisture;
  const leaf = data.health;
  const pest = data.pest;

  /* Advice */
  let adviceLevel = 'green';
  if (leaf < 55 || pest > 35) adviceLevel = 'red';
  else if (leaf < 75 || pest > 20) adviceLevel = 'amber';

  detail.innerHTML = `
    <h4>Block ${b}</h4>
    <div class="detail-bar-row">
      <div class="detail-bar-label"><span>${t('detail_moisture')}</span><span>${Math.round(moisture)}%</span></div>
      <div class="detail-bar-track"><div class="detail-bar-fill" style="width:${moisture}%;background:var(--accent)"></div></div>
    </div>
    <div class="detail-bar-row">
      <div class="detail-bar-label"><span>${t('detail_leaf')}</span><span>${Math.round(leaf)}%</span></div>
      <div class="detail-bar-track"><div class="detail-bar-fill" style="width:${leaf}%;background:${leaf<55?'var(--red)':leaf<75?'var(--amber)':'var(--accent)'}"></div></div>
    </div>
    <div class="detail-bar-row">
      <div class="detail-bar-label"><span>${t('detail_pest')}</span><span>${Math.round(pest)}%</span></div>
      <div class="detail-bar-track"><div class="detail-bar-fill" style="width:${pest}%;background:${pest>35?'var(--red)':pest>20?'var(--amber)':'var(--accent)'}"></div></div>
    </div>
    <div class="detail-advice">${t('detail_advice')[adviceLevel]}</div>
  `;
}

/* ============================================================
   SECTION 22: HINT CARD
   ============================================================ */
function isHintDismissed() {
  return lsGet('ke_hint_dismissed_' + (currentUser ? currentUser.username : '')) === '1';
}
function dismissHint() {
  lsSet('ke_hint_dismissed_' + (currentUser ? currentUser.username : ''), '1');
  const card = document.getElementById('hint-card');
  if (card) card.classList.add('hidden');
}
function scrollToSimCenter() {
  const el = document.getElementById('sim-section') || document.getElementById('tasks-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    el.style.outline = '2px solid var(--accent)';
    setTimeout(() => { el.style.outline = ''; }, 1200);
  }
  dismissHint();
}

/* ============================================================
   SECTION 23: REPORT GENERATION
   ============================================================ */
function generateReport() {
  if (!currentUser) return '';
  const now = new Date();
  const dateStr = now.toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const tasks = getTaskList();
  const doneTasks = tasks.filter(tk => tasksDone.has(tk.id)).length;
  const avgLeaf = blocks.reduce((s,b) => s + blockData[b].health, 0) / 6;
  const avgPest = blocks.reduce((s,b) => s + blockData[b].pest, 0) / 6;
  const moistureFit = Math.max(0, 1 - Math.abs(sensors.soil - 68) / 30);
  const tempFit = Math.max(0, 1 - Math.abs(sensors.temp - 18) / 10);
  const quality = Math.max(0, Math.min(100, Math.round(0.45*avgLeaf + 0.30*moistureFit*100 + 0.25*tempFit*100 - 0.2*avgPest)));
  const qLabel = quality >= 80 ? t('q_premium') : quality >= 65 ? t('q_good') : quality >= 50 ? t('q_fair') : t('q_low');
  let kg = Math.round(1200 + sensors.soil * 2 + blockData.A.health * 2);
  if (activeScenario === 'harvest') kg = Math.round(kg * 1.35);
  const activeW = WORKERS.filter((w,i) => workerPos[i].state !== 'resting').length;
  const lvl = activeScenario === 'landslide' ? t('nav_critical') : (activeScenario === 'rain' || activeScenario === 'drought') ? t('nav_caution') : t('nav_nominal');

  let blockLines = blocks.map(b => `  Block ${b}: ${t('detail_leaf')} ${Math.round(blockData[b].health)}%  |  ${t('detail_pest')} ${Math.round(blockData[b].pest)}%`).join('\n');
  let warnLines = triggeredWarnings.length > 0 ? triggeredWarnings.join('; ') : '-';

  return lang === 'en' ?
`============================
 KABUT ESTATE — DAILY REPORT
============================
Date     : ${dateStr}
User     : ${currentUser.name} (${(t('role_' + currentUser.role) || currentUser.role).replace(/ \(.*\)/,'')})
Sim Time : ${getSimTimeStr()}

STATUS   : ${lvl}
Forecast : ${kg} kg (${Math.round(kg/1800*100)}% of 1,800 kg target)
Tea Qual : ${quality}/100 — ${qLabel}
Workers  : ${activeW}/${WORKERS.length} active
Tasks    : ${doneTasks}/${tasks.length} completed

BLOCK HEALTH
${blockLines}

WARNINGS THIS SESSION
${warnLines}

SENSORS
  Temperature  : ${Math.round(sensors.temp)}°C
  Humidity     : ${Math.round(sensors.hum)}%
  Soil Moisture: ${Math.round(sensors.soil)}%
  Rainfall     : ${Math.round(sensors.rain)} mm/hr

---
NOTE: All data is simulated. Bob is a rule-based assistant, not a real AI.
Kabut Estate · IBM Global AI Builders Challenge · Sustainability & Smart Agriculture
` :
`============================
 KABUT ESTATE — LAPORAN HARIAN
============================
Tanggal  : ${dateStr}
Pengguna : ${currentUser.name} (${(t('role_' + currentUser.role) || currentUser.role).replace(/ \(.*\)/,'')})
Jam Sim  : ${getSimTimeStr()}

STATUS   : ${lvl}
Prakiraan: ${kg} kg (${Math.round(kg/1800*100)}% dari target 1.800 kg)
Mutu Teh : ${quality}/100 — ${qLabel}
Pekerja  : ${activeW}/${WORKERS.length} aktif
Tugas    : ${doneTasks}/${tasks.length} selesai

KESEHATAN BLOK
${blockLines}

PERINGATAN SESI INI
${warnLines}

SENSOR
  Suhu          : ${Math.round(sensors.temp)}°C
  Kelembaban    : ${Math.round(sensors.hum)}%
  Kel. Tanah    : ${Math.round(sensors.soil)}%
  Curah Hujan   : ${Math.round(sensors.rain)} mm/jam

---
CATATAN: Semua data adalah simulasi. Bob adalah asisten berbasis aturan, bukan AI nyata.
Kabut Estate · IBM Global AI Builders Challenge · Keberlanjutan & Pertanian Cerdas
`;
}

function downloadReport() {
  const text = generateReport();
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kabut-estate-report-${new Date().toISOString().slice(0,10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============================================================
   SECTION 24: BOB CHAT
   ============================================================ */
function bobAnswer(question) {
  const q = question.toLowerCase();
  /* Keyword matching (EN + ID) */
  if (/block|blok|attention|perhat|worst|terburuk|risk|risiko/.test(q)) {
    const worst = blocks.reduce((a,b) => blockData[b].health < blockData[a].health ? b : a, 'A');
    const h = Math.round(blockData[worst].health);
    const p = Math.round(blockData[worst].pest);
    return t('bob_block_resp', worst, h, p);
  }
  if (/forecast|prakiraan|harvest|panen|kg|target/.test(q)) {
    let kg = Math.round(1200 + sensors.soil * 2 + blockData.A.health * 2);
    if (activeScenario === 'harvest') kg = Math.round(kg * 1.35);
    return t('bob_forecast_resp', kg, Math.round(kg/1800*100));
  }
  if (/warn|peringat|alert|danger|bahaya|critical|kritis/.test(q)) {
    const w = activeScenario ? t('banner_' + activeScenario + '_title') : null;
    return t('bob_warning_resp', w);
  }
  if (/quality|mutu|teh|tea|score|skor|premium|good|baik/.test(q)) {
    const avgLeaf = blocks.reduce((s,b) => s + blockData[b].health, 0) / 6;
    const avgPest = blocks.reduce((s,b) => s + blockData[b].pest, 0) / 6;
    const mf = Math.max(0, 1 - Math.abs(sensors.soil - 68) / 30);
    const tf = Math.max(0, 1 - Math.abs(sensors.temp - 18) / 10);
    const quality = Math.max(0, Math.min(100, Math.round(0.45*avgLeaf + 0.30*mf*100 + 0.25*tf*100 - 0.2*avgPest)));
    const qLabel = quality >= 80 ? t('q_premium') : quality >= 65 ? t('q_good') : quality >= 50 ? t('q_fair') : t('q_low');
    return t('bob_quality_resp', quality, qLabel);
  }
  if (/worker|pekerja|staff|karyawan|people|orang/.test(q)) {
    const active = WORKERS.filter((w,i) => workerPos[i].state !== 'resting').length;
    return t('bob_workers_resp', active, WORKERS.length);
  }
  if (/task|tugas|done|selesai|progress/.test(q)) {
    const tasks = getTaskList();
    const done = tasks.filter(tk => tasksDone.has(tk.id)).length;
    return t('bob_tasks_resp', done, tasks.length);
  }
  if (/sensor|temp|suhu|humid|lembab|soil|rain|hujan/.test(q)) {
    return t('bob_sensors_resp', Math.round(sensors.temp), Math.round(sensors.hum), Math.round(sensors.soil), Math.round(sensors.rain));
  }
  if (/hello|halo|hai|hi|good|selamat|morning|pagi|siang|sore/.test(q)) {
    return t('bob_greeting');
  }
  return t('bob_fallback');
}

function sendBobMessage(text) {
  if (!text || !text.trim()) return;
  text = text.trim();
  /* Add user message */
  chatHistory.push({ role: 'user', text });
  renderChatHistory();
  /* Bob reply */
  setTimeout(() => {
    const reply = bobAnswer(text);
    chatHistory.push({ role: 'bob', text: reply });
    renderChatHistory();
  }, 350);
}

function renderChatHistory() {
  const win = document.getElementById('chat-window');
  if (!win) return;
  win.innerHTML = '';
  chatHistory.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'chat-msg' + (msg.role === 'user' ? ' user' : '');
    div.innerHTML = `
      <div class="chat-sender">${msg.role === 'user' ? (currentUser ? currentUser.name : 'You') : 'Bob 🤖'}</div>
      <div class="chat-bubble">${msg.text}</div>
    `;
    win.appendChild(div);
  });
  win.scrollTop = win.scrollHeight;
}

function handleChatInput(e) {
  if (e.key === 'Enter') sendChatFromInput();
}

function sendChatFromInput() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  input.value = '';
  sendBobMessage(val);
}

/* ============================================================
   SECTION 25: PAGE RENDERS
   ============================================================ */

/* ---- DASHBOARD ---- */
function renderDashboard(container) {
  loadTasksDone();
  const role = currentUser ? currentUser.role : 'owner';
  const isOwner = role === 'owner';
  const isMandor = role === 'mandor';
  const canSeeAll = isOwner || isMandor;
  const avgLeaf = blocks.reduce((s,b) => s + blockData[b].health, 0) / 6;
  const avgPest = blocks.reduce((s,b) => s + blockData[b].pest, 0) / 6;
  const mf = Math.max(0, 1 - Math.abs(sensors.soil - 68) / 30);
  const tf = Math.max(0, 1 - Math.abs(sensors.temp - 18) / 10);
  const quality = Math.max(0, Math.min(100, Math.round(0.45*avgLeaf + 0.30*mf*100 + 0.25*tf*100 - 0.2*avgPest)));
  const qLabel = quality >= 80 ? t('q_premium') : quality >= 65 ? t('q_good') : quality >= 50 ? t('q_fair') : t('q_low');
  let kg = Math.round(1200 + sensors.soil * 2 + blockData.A.health * 2);
  if (activeScenario === 'harvest') kg = Math.round(kg * 1.35);
  const fcPct = Math.min(100, Math.round(kg / 1800 * 100));
  const activeW = WORKERS.filter((w,i) => workerPos[i].state !== 'resting').length;
  const lvl = activeScenario === 'landslide' ? 'critical' : (activeScenario === 'rain' || activeScenario === 'drought') ? 'caution' : 'nominal';
  const lvlText = lvl === 'critical' ? t('nav_critical') : lvl === 'caution' ? t('nav_caution') : t('nav_nominal');
  const lvlColor = lvl === 'critical' ? 'var(--red)' : lvl === 'caution' ? 'var(--amber)' : 'var(--accent)';
  const tasks = getTaskList();
  const doneTasks = tasks.filter(tk => tasksDone.has(tk.id)).length;

  /* Cup colors */
  const cupR = quality >= 80 ? [140,200,80] : quality >= 65 ? [180,180,60] : quality >= 50 ? [200,150,50] : [200,100,50];
  const fillH = 14 + Math.round(quality / 100 * 16);
  const fillY = 42 - fillH;

  let html = `<h2 class="section-title" style="margin-bottom:0.5rem;">📊 ${t('dash_summary')}</h2>`;

  /* Hint card */
  const hintDismissed = isHintDismissed();
  if (!hintDismissed) {
    const hintText = canSeeAll ? t('hint_owner') : t('hint_worker');
    const hintAction = canSeeAll ? t('hint_action_owner') : t('hint_action_worker');
    html += `
    <div id="hint-card">
      <div id="hint-text">${hintText}</div>
      <button class="hint-action" onclick="scrollToSimCenter()">${hintAction}</button>
      <button class="hint-dismiss" onclick="dismissHint()" aria-label="Dismiss hint">${t('hint_dismiss')}</button>
    </div>`;
  }

  /* Summary strip */
  html += `<div class="summary-strip">
    <div class="summary-card ${lvl === 'critical' ? 'red-top' : lvl === 'caution' ? 'amber-top' : ''}">
      <div class="sc-label">${t('sc_status')}</div>
      <div class="sc-value" id="sc-status-val" style="color:${lvlColor};font-size:1.1rem;">${lvlText}</div>
    </div>`;

  if (isOwner) {
    html += `<div class="summary-card">
      <div class="sc-label">${t('sc_forecast')}</div>
      <div class="sc-value" id="sc-forecast-kg">${kg} kg</div>
      <div class="sc-sub">${t('sc_forecast_target')}</div>
      <div class="sc-bar"><div class="sc-bar-fill" id="sc-forecast-bar" style="width:${fcPct}%"></div></div>
    </div>`;
  }

  html += `<div class="summary-card">
    <div class="sc-label">${t('sc_tasks')}</div>
    <div class="sc-value" id="sc-tasks-val">${doneTasks}/${tasks.length}</div>
  </div>
  <div class="summary-card">
    <div class="sc-label">${t('sc_quality')}</div>
    <div class="tea-cup-wrap">
      <svg id="tea-cup-svg" viewBox="0 0 48 48" aria-label="Tea quality cup">
        <defs>
          <clipPath id="cup-clip">
            <path d="M8 14 L12 44 L36 44 L40 14 Z"/>
          </clipPath>
        </defs>
        <!-- Cup body -->
        <path d="M8 14 L12 44 L36 44 L40 14 Z" fill="#1c2f28" stroke="#27413a" stroke-width="1.5"/>
        <!-- Liquid fill -->
        <rect id="cup-liquid" x="8" y="${fillY}" width="32" height="${fillH}" fill="rgb(${cupR[0]},${cupR[1]},${cupR[2]})" clip-path="url(#cup-clip)"/>
        <!-- Cup rim -->
        <rect x="6" y="12" width="36" height="4" rx="2" fill="#1c2f28" stroke="#27413a" stroke-width="1.5"/>
        <!-- Handle -->
        <path d="M40 20 Q48 26 40 33" fill="none" stroke="#27413a" stroke-width="2"/>
        <!-- Steam -->
        <path d="M18 10 Q19 6 18 2" fill="none" stroke="rgba(123,216,143,0.4)" stroke-width="1.5" stroke-linecap="round">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M24 8 Q25 4 24 0" fill="none" stroke="rgba(123,216,143,0.3)" stroke-width="1.5" stroke-linecap="round">
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite"/>
        </path>
        <path d="M30 10 Q31 6 30 2" fill="none" stroke="rgba(123,216,143,0.4)" stroke-width="1.5" stroke-linecap="round">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="1.8s" repeatCount="indefinite"/>
        </path>
      </svg>
      <div>
        <div class="sc-value" id="sc-quality-val" style="font-size:1.3rem;">${quality}/100</div>
        <div class="sc-sub" id="sc-quality-label">${qLabel}</div>
      </div>
    </div>
  </div>`;

  if (canSeeAll) {
    html += `<div class="summary-card">
      <div class="sc-label">${t('sc_workers_active')}</div>
      <div class="sc-value">${activeW}/${WORKERS.length}</div>
    </div>`;
  }
  html += `</div>`; /* end summary strip */

  /* Plantation Map (Owner + Foreman) */
  if (canSeeAll) {
    html += `<div class="card" style="margin-bottom:1rem;">
      <div class="section-title">🗺 ${t('map_title')}</div>
      <div class="map-grid">`;
    blocks.forEach(b => {
      const h = blockData[b].health, p = blockData[b].pest;
      const color = blockHealthColor(h, p);
      html += `<div class="block-cell${b === selectedBlock ? ' selected' : ''}" id="block-cell-${b}"
        style="background:${color};"
        onclick="selectBlock('${b}')"
        tabindex="0" role="button" aria-label="Block ${b}"
        onkeydown="if(event.key==='Enter'||event.key===' '){selectBlock('${b}');event.preventDefault()}">
        <span class="blk-name">Block ${b}</span>
        <span class="blk-health">❤ ${Math.round(h)}%</span>
        <span class="blk-pest">🐛 ${Math.round(p)}%</span>
      </div>`;
    });
    html += `</div>
      <div id="block-detail" class="block-detail"></div>
    </div>`;
  }

  /* Block detail for worker (Block C only) */
  if (role === 'worker') {
    html += `<div class="card" style="margin-bottom:1rem;">
      <div class="section-title">🌿 Block C</div>
      <div id="block-detail" class="block-detail"></div>
    </div>`;
  }

  /* Field Sensors (Owner + Foreman) */
  if (canSeeAll) {
    html += `<div class="card" style="margin-bottom:1rem;">
      <div class="section-title">📡 ${t('sensors_title')}</div>
      <div class="sensors-grid">
        ${['temp','hum','soil','rain'].map((k,i) => {
          const names = [t('sensor_temp'), t('sensor_hum'), t('sensor_soil'), t('sensor_rain')];
          const vals = [sensors.temp, sensors.hum, sensors.soil, sensors.rain];
          const units = ['°C','%','%','mm'];
          const colors = ['#ff9054','#54a6e8','#7bd88f','#b0c8ff'];
          return `<div class="sensor-card" id="sensor-card-${k}">
            <div class="sensor-ring-wrap">
              <canvas id="ring-${k}" width="70" height="70"></canvas>
            </div>
            <div class="sensor-val" id="sensor-val-${k}">${Math.round(vals[i])}</div>
            <div class="sensor-unit">${units[i]}</div>
            <canvas id="spark-${k}" class="sparkline-canvas" width="90" height="28"></canvas>
            <div class="sensor-name">${names[i]}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }

  /* Today's Tasks */
  html += `<div class="card" id="tasks-section" style="margin-bottom:1rem;">
    <div class="section-title">✅ ${t('tasks_title')}</div>
    <ul class="tasks-list" id="tasks-list" aria-label="${t('tasks_title')}"></ul>
    <div class="tasks-progress-bar"><div class="tasks-progress-fill" id="tasks-progress-fill" style="width:${tasks.length > 0 ? doneTasks/tasks.length*100 : 0}%"></div></div>
    <div class="tasks-progress-label" id="tasks-progress-label">${doneTasks} ${t('tasks_done')} ${tasks.length} ${t('tasks_done2')}</div>
  </div>`;

  /* Simulation Center (Owner + Foreman) */
  if (canSeeAll) {
    html += `<div class="card" id="sim-section" style="margin-bottom:1rem;">
      <div class="section-title">🔬 ${t('sim_title')}</div>
      <p class="disclaimer" style="font-size:0.78rem;color:var(--muted);margin-bottom:0.75rem;">${t('sim_disclaimer')}</p>
      <div class="sim-scenarios">
        ${[['rain','amber','sim_s1'],['drought','amber','sim_s2'],['landslide','red','sim_s3'],['harvest','green','sim_s4']].map(([key, level, prefix]) => {
          const icons = { rain: '🌧', drought: '☀', landslide: '⛰', harvest: '🌿' };
          return `<div class="sim-card" id="sim-card-${key}" onclick="selectScenario('${key}')"
            tabindex="0" role="button" aria-label="${t(prefix + '_name')}"
            onkeydown="if(event.key==='Enter'||event.key===' '){selectScenario('${key}');event.preventDefault()}">
            <div class="sim-icon">${icons[key]}</div>
            <div class="sim-name">${t(prefix + '_name')}</div>
            <div class="sim-desc">${t(prefix + '_desc')}</div>
            <div class="sim-level ${level}">${t('sim_level_' + level)}</div>
          </div>`;
        }).join('')}
      </div>
      <div class="sim-btn-row">
        <button id="sim-run-btn" onclick="toggleSimRun()" disabled>${t('sim_run')}</button>
        <span id="sim-timer"></span>
      </div>
    </div>`;
  }

  /* 7-day trend (Owner + Foreman) */
  if (canSeeAll) {
    html += `<div class="card" style="margin-bottom:1rem;">
      <div class="section-title">📈 ${t('trend_title')}</div>
      <div id="trend-canvas-wrap">
        <canvas id="trend-canvas" height="160"></canvas>
      </div>
      <div class="trend-legend">
        <span><span class="legend-dot" style="background:#5590cc"></span>${t('trend_rainfall')}</span>
        <span><span class="legend-dot" style="background:#7bd88f;border-radius:50%"></span>${t('trend_moisture')}</span>
      </div>
    </div>`;
  }

  /* Estate Log */
  html += `<div class="card">
    <div class="section-title">📋 ${t('log_title')}</div>
    <div id="log-container" role="log" aria-live="polite" aria-label="${t('log_title')}"></div>
  </div>`;

  container.innerHTML = html;

  /* Render task list */
  const tl = document.getElementById('tasks-list');
  if (tl) renderTaskList(tl);

  /* Restore log entries */
  const logC = document.getElementById('log-container');
  if (logC) {
    logEntries.forEach(e => {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      entry.innerHTML = `<span class="log-time">[${e.time}]</span> <span class="log-msg ${e.type}">${e.msg}</span>`;
      logC.appendChild(entry);
    });
    logC.scrollTop = logC.scrollHeight;
  }

  /* Update block detail */
  updateBlockDetail(selectedBlock);

  /* Start workers */
  startWorkerMovement();

  /* Schedule canvas draw */
  setTimeout(() => scheduleCanvasRedraw(), 50);

  /* Re-attach sim button state */
  const runBtn = document.getElementById('sim-run-btn');
  if (runBtn && simRunning) {
    runBtn.textContent = t('sim_stop');
    runBtn.classList.add('running');
    runBtn.disabled = false;
  }
  if (runBtn && activeScenario && !simRunning) {
    runBtn.disabled = false;
  }
}

/* ---- WORKERS ---- */
function renderWorkers(container) {
  const role = currentUser ? currentUser.role : 'owner';
  container.innerHTML = `
    <h2 class="section-title">👷 ${t('workers_title')}</h2>
    <div class="workers-layout">
      <div id="worker-map-canvas-wrap" class="card">
        <div class="card-title">${t('workers_map_title')}</div>
        <canvas id="worker-map-canvas"></canvas>
      </div>
      <div class="card">
        <div class="card-title">${t('workers_list_title')}</div>
        <table class="worker-list-table" aria-label="${t('workers_list_title')}">
          <thead>
            <tr>
              <th>${t('wt_name')}</th>
              <th>${t('wt_block')}</th>
              <th>${t('wt_status')}</th>
            </tr>
          </thead>
          <tbody id="workers-table-body"></tbody>
        </table>
      </div>
    </div>
  `;
  startWorkerMovement();
  updateWorkersList();
  requestAnimationFrame(drawWorkerMap);
}

/* ---- BOB & REPORTS ---- */
function renderBob(container) {
  const quickReplies = t('bob_quick');
  container.innerHTML = `
    <h2 class="section-title">🤖 ${t('bob_title')}</h2>
    <div class="bob-layout">
      <div class="card">
        <div class="card-title">${t('bob_ask_title')}</div>
        <div id="chat-window" class="chat-window" role="log" aria-live="polite" aria-label="Bob chat"></div>
        <div class="quick-replies">
          ${quickReplies.map(q => `<button class="quick-btn" onclick="sendBobMessage('${q.replace(/'/g,"\\'")}')">💬 ${q}</button>`).join('')}
        </div>
        <div class="chat-input-row">
          <input id="chat-input" class="chat-input" type="text" placeholder="${lang === 'en' ? 'Ask Bob anything…' : 'Tanya Bob apa saja…'}"
            aria-label="Chat input" onkeydown="handleChatInput(event)">
          <button class="chat-send" onclick="sendChatFromInput()">Send</button>
        </div>
        <p class="disclaimer">${t('bob_disclaimer')}</p>
      </div>
      <div class="card">
        <div class="card-title">${t('report_title')}</div>
        <div class="report-preview" id="report-preview"></div>
        <button class="download-btn" onclick="downloadReport()">⬇ ${t('report_download')}</button>
      </div>
    </div>
  `;
  renderChatHistory();
  /* Live report preview */
  const preview = document.getElementById('report-preview');
  if (preview) preview.textContent = generateReport();
  /* Update report every 5s */
  const reportInterval = setInterval(() => {
    if (currentPage !== 'bob') { clearInterval(reportInterval); return; }
    if (preview) preview.textContent = generateReport();
  }, 5000);
}

/* ============================================================
   SECTION 26: STARTUP
   ============================================================ */
/* Initialize block data more realistically */
blockData.A.health = 82; blockData.A.pest = 12;
blockData.B.health = 75; blockData.B.pest = 18;
blockData.C.health = 68; blockData.C.pest = 22;
blockData.D.health = 88; blockData.D.pest = 9;
blockData.E.health = 71; blockData.E.pest = 15;
blockData.F.health = 62; blockData.F.pest = 28;
blocks.forEach(b => { blockData[b].moisture = 58 + Math.random()*20; });

/* ============================================================
   SECTION 27: ACCESSIBILITY & FOCUS HELPERS
   ============================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});
