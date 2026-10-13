# ☁ Kabut Estate — Smart Tea Plantation Monitor

A login-protected, bilingual (English / Bahasa Indonesia) monitoring dashboard for a highland tea plantation in Indonesia. Built with **IBM Bob** using a 3-layer prompt (Role & Context → Task & Requirements → Constraints & Output) for the **IBM Global AI Builders Challenge** (Sustainability & Smart Agriculture).

**🔗 Live demo:** https://lionilsalomon414-commits.github.io/kabut-estate/
**📦 Repository:** https://github.com/lionilsalomon414-commits/kabut-estate

> **Honest note:** all data is simulated in the browser (random walk + event logic). The login is a front-end demo only, and "Bob" is a rule-based assistant, not a real AI model. This project is a prototype / UI concept.

---

## What it does

Tea estates face weather swings, pests, and safety risks on steep terraces. Kabut Estate shows how one dashboard can bring sensors, tasks, workers, and warnings together, and how it reacts when something goes wrong.

### Highlights

- **Bilingual interface (EN / ID)** from a single dictionary, switchable anytime. Language is chosen on first visit and remembered.
- **Role-based access** for Owner, Foreman, and Field Worker, each with a different view.
- **Summary strip:** status, weekly harvest forecast, tasks done, tea-quality cup (animated SVG), and active workers.
- **Plantation map** with 6 terraced blocks (A–F) colored by health, plus block detail with moisture, leaf health, pest risk, and advice.
- **Live field sensors:** temperature, humidity, soil moisture, rainfall (rings + sparklines).
- **Simulation Center** with 4 scenarios, each with a color-coded warning banner and a matching background effect:
  - 🌧 Heavy Rain + Pest Outbreak (rain streaks, lightning)
  - ☀ Long Drought (orange sky, rising heat motes)
  - ⛰ Landslide Warning (screen shake, falling dust, pulsing red edge, worker evacuation)
  - 🌿 Harvest Peak (floating golden leaves, extra harvest tasks, forecast ×1.35)
- **Worker map:** 6 workers move between blocks; during a landslide, workers in Blocks A–C walk to the Assembly Point along evacuation routes.
- **Tasks** with a subtle completion effect (leaf check, animated strikethrough, "+1 🍃", progress bar), saved in the browser.
- **7-day trend chart** (rainfall bars + soil moisture line) drawn on canvas.
- **Ask Bob:** chat with quick replies about blocks, forecast, warnings, tea quality, workers, tasks, and sensors.
- **Daily report** with live preview and one-click `.txt` download.
- **Simulated day/night cycle** (120 real seconds = one day) with sky tint and morning mist.
- **Accessibility:** WCAG-minded contrast, keyboard navigation, `aria-live` regions, and `prefers-reduced-motion` support.

---

## Try it in 1 minute

1. Open the live demo and choose a language.
2. Tap a demo account and sign in.
3. On the **Dashboard**, pick a scenario in the **Simulation Center** and press **Run Scenario**.
4. Open **Workers** to watch the evacuation during the landslide scenario.
5. Open **Bob & Reports**, ask Bob a question, and download the daily report.

### Demo accounts

| Username | Password | Role |
|---|---|---|
| `owner` | `owner123` | Owner (sees everything) |
| `mandor` | `mandor123` | Foreman (everything except weekly forecast) |
| `pekerja` | `pekerja123` | Field Worker (Block C only) |

---

## Tech stack

Pure **HTML, CSS, and vanilla JavaScript**. No frameworks, no libraries, no backend, no external APIs, and no network requests.

```
kabut-estate/
├── index.html   # page structure
├── style.css    # all styling
└── script.js    # all logic (state, simulation, canvas, routing, i18n)
```

## Run locally

Download the three files into one folder and open `index.html` in a browser. Or use the VS Code **Live Server** extension.

---

## How it was built with IBM Bob

**Prompt architecture (3 layers):**

| Layer | Question it answers | Content |
|---|---|---|
| 1. Role & Context | Who is Bob, and in what context? | Senior creative frontend engineer, challenge track, audience (judges and recruiters), hard constraint: pure HTML/CSS/JS |
| 2. Task & Requirements | What must be built? | 12 numbered requirements: access flow, roles, warnings, dashboard, scenarios, trend, task effect, time cycle, workers, Bob chat and report, quality score, language |
| 3. Constraints & Output | How should the result look and behave? | Palette, accessibility, responsiveness, performance (≤110 particles), robustness, build priority order |

**Iterations that shaped the prompt:**

1. Started as a Mars greenhouse dashboard, then moved to a real-world setting: a highland tea plantation.
2. Added login and role-based views, then a language choice shown before login.
3. Expanded one rain simulation into four scenarios with matching warnings and background effects.
4. Added a subtle task-completion effect instead of a loud one.
5. Reorganized into a top navbar with a summary strip, and merged the simulation into the Dashboard.
6. Added the worker map, Ask Bob chat, tea-quality cup, and daily report.
7. Added usability fixes (hint card, remembered language, 3-step guide), the 7-day trend, and saved tasks.

---

## Known limitations

- Data is simulated; there are no real sensors or backend.
- Login is client-side only and not secure for real use.
- Bob uses keyword matching on simulated data.
- The 7-day trend uses simulated past days.

## Possible next steps

Connect to real sensor data through an API, add real authentication, store history in a database, and connect Bob to a language model.

---

## 🇮🇩 Ringkasan singkat

**Kabut Estate** adalah dashboard pemantau perkebunan teh dataran tinggi dengan login, dua bahasa (Inggris / Indonesia), peta blok, sensor, simulasi cuaca dan bencana (hujan, kemarau, longsor, panen raya), peta pekerja dengan evakuasi, asisten Bob, dan laporan harian. Dibuat dengan IBM Bob memakai prompt tiga layer, hanya dengan HTML, CSS, dan JavaScript murni. Semua data adalah simulasi.

**Akun demo:** `owner / owner123`, `mandor / mandor123`, `pekerja / pekerja123`.

---

## Author

**Lioniel Salomon Siregar** — built for the IBM Global AI Builders Challenge.
