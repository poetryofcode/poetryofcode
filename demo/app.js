const projects = [
  {
    id: "point",
    name: "POINT",
    kicker: "Most Creative · TechNYU",
    year: "2025",
    line: "A narrating tour guide for the landmarks on your route.",
    body: "You give POINT a start and a destination. It draws the route, picks out points of interest, and plays an AI narration of each one so the walk explains itself. Next.js and TypeScript on the front, Tailwind for the UI, Flask for the API. Claude writes the descriptions, ElevenLabs speaks them, and Google Maps holds the route. The build won Most Creative at TechNYU.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Flask", "Claude", "ElevenLabs", "Maps"],
    repo: "https://github.com/poetryofcode/POINT",
    live: "https://pointg.vercel.app/",
    hue: "hue-point",
  },
  {
    id: "handy",
    name: "HandyDaddy",
    kicker: "HackBrown · Brown",
    year: "2026",
    line: "Show the repair. Get a plan grounded in real docs.",
    body: "HandyDaddy won HackBrown at Brown University. It is a vision-first home repair assistant: you show the problem instead of describing it. Gemini turns a frame into a structured note — fixture, place, issue, safety — then a FAISS index of repair docs grounds the answer. Groq writes the steps. Redis keeps the session. Vision, then retrieval, then a plan.",
    stack: ["Gemini", "FAISS", "Groq", "Redis", "RAG"],
    repo: "https://dev.to/poetryofcode",
    repoLabel: "Build notes",
    hue: "hue-handy",
  },
  {
    id: "care",
    name: "Urgent Care",
    kicker: "HackPrinceton",
    year: "2024",
    line: "Nearest center, shorter wait, forecast demand.",
    body: "The Urgent Care Coordinator finds nearby clinics and steers you toward a shorter line. Wait estimates come from real-time demand plus a scikit-learn forecast, with Google Maps for the geography. React and TypeScript up front, Node for the API.",
    stack: ["React", "TypeScript", "Node.js", "scikit-learn", "Maps"],
    repo: "https://github.com/poetryofcode/HackPrinceton",
    live: "https://u-care.netlify.app/",
    hue: "hue-care",
  },
  {
    id: "walls",
    name: "Whispering Walls",
    kicker: "HackHarvard",
    year: "2025",
    line: "An AI guide for paintings, sculptures, and exhibits.",
    body: "Pick or upload a work and the guide talks through it — history, feeling, or a plain-language tour. Built with Next.js, React, and Tailwind, with a vision model doing the looking and ElevenLabs giving the piece a voice.",
    stack: ["Next.js", "React", "Tailwind", "Vision", "ElevenLabs"],
    repo: "https://github.com/poetryofcode/HackHarvard",
    live: "https://whispering-walls.vercel.app/",
    hue: "hue-walls",
  },
  {
    id: "appeal",
    name: "AppealRX",
    kicker: "BERT · appeals",
    year: "2025",
    line: "A fine-tuned BERT trained on thousands of appeal notes.",
    body: "AppealRX reads appeal notes with a fine-tuned BERT. The client is Next.js and Tailwind. Behind it: Python, MongoDB, Pinecone, and Deepseek, with Railway in the deploy path.",
    stack: ["Next.js", "Tailwind", "Python", "BERT", "MongoDB", "Pinecone"],
    repo: "https://github.com/poetryofcode/HOFhack",
    live: "https://appealrx.vercel.app/",
    hue: "hue-appeal",
  },
  {
    id: "surf",
    name: "GoSurf",
    kicker: "SCSS · Gulp",
    year: "",
    line: "A surf-trip page where the motion is the product.",
    body: "GoSurf is an interface study: Gulp 4, SCSS, Animate.css, Wow.js, and Slick Slider. Engaging visuals, seamless interaction, no mystery stack.",
    stack: ["SCSS", "Gulp", "Animate.css", "Wow.js", "Slick"],
    repo: "https://github.com/poetryofcode/GoSurf",
    live: "https://surf-trip.vercel.app",
    hue: "hue-surf",
  },
];

const notes = [
  {
    id: "brown",
    title: "Won at Brown",
    dek: "HandyDaddy, HackBrown",
    body: "A field note on winning HackBrown with a home-repair assistant that would rather see the problem than hear a description of it. The write-up is about orchestration: vision, retrieval, and a plan that stays tied to real documentation.",
  },
  {
    id: "technyu",
    title: "Most Creative",
    dek: "POINT at TechNYU",
    body: "POINT started as a travel annoyance — walking past a place and wishing you knew the story. The note covers the route, the narrated points of interest, and what it took to keep maps, text, and speech in one walk.",
  },
  {
    id: "leetcode",
    title: "100 days",
    dek: "A LeetCode streak",
    body: "A public log of a hundred days of LeetCode, written while the streak was still the point: fluency first, cleverness later. The profile still carries the radical-theme LeetCode card.",
  },
  {
    id: "site",
    title: "The portfolio",
    dek: "poetryofcode.com",
    body: "The 2023 note on putting a portfolio on a domain of one’s own, hosted from GitHub Pages. This phone is a later reading of that same profile: same name, same work, tap to move.",
  },
];

const path = [
  {
    when: "2025",
    title: "Piksta",
    role: "Frontend engineer intern",
    text: "Feature-Sliced Design, Storybook, Radix UI, and forms with React Hook Form and Zod.",
  },
  {
    when: "2025",
    title: "G-SWEP · BASTA",
    role: "Google software engineering program",
    text: "Ten weeks of pair programming and interview practice with a Google engineer, in New York.",
  },
  {
    when: "2024",
    title: "MyLÚA Health",
    role: "Frontend engineering intern",
    text: "A Figma redesign proposal and SEO work for a Brooklyn health product.",
  },
  {
    when: "2024",
    title: "Unadat",
    role: "Frontend developer",
    text: "Progress tracking, milestones, and filters on an 11-person team.",
  },
  {
    when: "2023",
    title: "Tech Talent Pipeline",
    role: "Full-stack residency",
    text: "A PERN bootcamp at the College of Staten Island: React, Node, PostgreSQL, Tailwind, AWS.",
  },
  {
    when: "2022–26",
    title: "College of Staten Island",
    role: "B.S. Computer Science · CUNY",
    text: "The degree behind the profile. Before that, tour guiding in the city — in English, Spanish, and Italian.",
  },
];

const groups = [
  {
    name: "Interface",
    items: [
      ["HTML", "The first badge on the profile wall."],
      ["CSS", "Layout, motion, and the radical theme itself."],
      ["SCSS", "GoSurf and the older interface studies."],
      ["Tailwind", "POINT, urgent care, Whispering Walls, AppealRX."],
      ["JavaScript", "The language under most of the public repos."],
      ["React", "Urgent care, AppealRX’s neighborhood, Social Bites, the GPA wizard."],
      ["Next.js", "POINT, Whispering Walls, and AppealRX."],
      ["Radix UI", "Accessible pieces from the Piksta internship."],
      ["Storybook", "Component docs, also from Piksta."],
      ["Figma", "The MyLÚA redesign was drawn here first."],
    ],
  },
  {
    name: "Application",
    items: [
      ["Node.js", "API side of the urgent care finder and the bootcamp apps."],
      ["TanStack", "On the badge wall, next to the data-fetching tools."],
      ["Zustand", "Listed with the other client-state badges."],
      ["RTK Query", "The Redux-flavored badge on the same row."],
      ["Jest", "Test badge beside the React work."],
      ["Socket.io", "Realtime badge on the profile."],
      ["jQuery", "Still on the wall, from earlier sites."],
      ["Gulp", "The build tool behind GoSurf."],
    ],
  },
  {
    name: "Data & languages",
    items: [
      ["GraphQL", "A badge between the client tools and the databases."],
      ["MySQL", "Coursework and the MySQL bootcamp certificate."],
      ["MongoDB", "AppealRX stores notes here."],
      ["C++", "Data-structures work, including the Kingsborough course repo."],
      ["Java", "On the profile next to the systems badges."],
      ["PHP", "An earlier badge, kept on the wall."],
    ],
  },
  {
    name: "Platform",
    items: [
      ["Linux", "Daily driver badge."],
      ["Docker", "Containers, from the profile’s platform row."],
      ["GitHub Actions", "CI on the profile, and on POINT’s test story."],
      ["Kubernetes", "The orchestration badge."],
      ["GitOps", "The delivery badge added beside Actions."],
      ["Terraform", "Infrastructure as code, on the same row."],
      ["AWS EKS", "The cloud badge at the end of the wall."],
      ["Prometheus", "Metrics."],
      ["Grafana", "Dashboards."],
      ["Loki", "Logs, next to the metrics badges."],
      ["VPS", "A box on Ubuntu, badged in green."],
    ],
  },
];

const hints = {
  studio: ["Studio", "Tap POINT, the path, or say hello. Nothing advances alone."],
  work: ["Work", "Pick a build. Its color springs into the case study."],
  project: ["Case study", "A real repo and, where it exists, a live URL. Back returns you."],
  stack: ["Stack", "Tap a badge from the README. A note springs up inside the phone."],
  notes: ["Notes", "Open a field note. These are short recaps, not the full essays."],
  note: ["Field note", "Back returns to the list."],
  signal: ["Hello", "Every address on this screen is a real public profile."],
  path: ["The path", "Internships and study, in the order they happened."],
};

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SPRING = (() => {
  const frames = [];
  let x = 0;
  let v = 0;
  const stiffness = 280;
  const damping = 24;
  const dt = 1 / 60;
  for (let i = 0; i < 80; i += 1) {
    const a = -stiffness * (x - 1) - damping * v;
    v += a * dt;
    x += v * dt;
    frames.push(x);
    if (Math.abs(x - 1) < 0.0015 && Math.abs(v) < 0.012) break;
  }
  frames.push(1);
  return frames;
})();

let stack = [{ name: "studio" }];
let busy = false;
let skill = null;

const $ = (id) => document.getElementById(id);

function current() {
  return stack[stack.length - 1];
}

function projectById(id) {
  return projects.find((item) => item.id === id);
}

function noteById(id) {
  return notes.find((item) => item.id === id);
}

function isRoot(name) {
  return name === "studio" || name === "work" || name === "stack" || name === "notes";
}

function spring(el, at) {
  const frames = SPRING.map((progress, index) => ({
    ...at(progress),
    offset: index / (SPRING.length - 1),
  }));
  return el.animate(frames, {
    duration: (SPRING.length / 60) * 1000,
    easing: "linear",
    fill: "forwards",
  });
}

function settle(animation) {
  return animation.finished.then(() => {
    try {
      animation.commitStyles();
      animation.cancel();
    } catch (error) {
      /* element may already be gone */
    }
  });
}

function relBox(el, root) {
  const box = el.getBoundingClientRect();
  const host = root.getBoundingClientRect();
  return {
    x: box.left - host.left,
    y: box.top - host.top,
    w: box.width,
    h: box.height,
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function chipList(items) {
  return items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("");
}

function renderStudio() {
  const point = projects[0];
  const handy = projects[1];
  const care = projects[2];
  return `
    <div data-rise style="--i:0">
      <div class="who">
        <div class="avatar">
          <span>VP</span>
          <img src="https://avatars.githubusercontent.com/u/101225909?v=4" alt="" />
        </div>
        <div>
          <p class="who-name">Vitaliy Prymak</p>
          <p class="who-meta">New York · Computer Science · CSI</p>
        </div>
      </div>
      <h2 class="display">Poetry<br /><em>of Code</em></h2>
      <p class="quote">“Developers, Developers, Developers”</p>
      <p class="dek">Crafting captivating interfaces, one line at a time.</p>
    </div>
    <div class="stats" data-rise style="--i:1">
      <div><b>185</b><span>repos</span></div>
      <div><b>16</b><span>followers</span></div>
      <div><b>16</b><span>following</span></div>
    </div>
    <div class="section-label" data-rise style="--i:2">
      <span>Featured</span>
      <button type="button" class="text-btn" data-goto="work">All work</button>
    </div>
    <button type="button" class="feature tap" data-open="${point.id}" data-rise style="--i:3">
      <span class="tap-fx ${point.hue} feature-face">
        <span class="kicker">${escapeHtml(point.kicker)}</span>
        <span class="feature-name">${escapeHtml(point.name)}</span>
        <span class="feature-line">${escapeHtml(point.line)}</span>
        <span class="feature-go">Open the route</span>
      </span>
    </button>
    <div class="split" data-rise style="--i:4">
      ${miniCard(handy)}
      ${miniCard(care)}
    </div>
    <div class="link-row" data-rise style="--i:5">
      <button type="button" class="tap" data-goto="path"><span class="tap-fx">The path<small>Internships & study</small></span></button>
      <button type="button" class="tap" data-goto="signal"><span class="tap-fx">Say hello<small>Hireable · frontend</small></span></button>
    </div>
  `;
}

function miniCard(project) {
  return `
    <button type="button" class="mini tap" data-open="${project.id}">
      <span class="tap-fx ${project.hue} mini-face">
        <span class="kicker">${escapeHtml(project.year)}</span>
        <strong>${escapeHtml(project.name)}</strong>
      </span>
    </button>
  `;
}

function renderWork() {
  const rows = projects
    .map(
      (project, index) => `
      <button type="button" class="row tap" data-open="${project.id}" data-rise style="--i:${index + 2}">
        <span class="tap-fx row-face">
          <span class="swatch ${project.hue}" data-swatch></span>
          <span class="row-copy">
            <strong>${escapeHtml(project.name)}</strong>
            <em>${escapeHtml(project.line)}</em>
          </span>
          <span class="chev" aria-hidden="true">›</span>
        </span>
      </button>`
    )
    .join("");
  return `
    <p class="eyebrow" data-rise style="--i:0">Selected</p>
    <h2 class="screen-title" data-rise style="--i:0">Work</h2>
    <p class="screen-dek" data-rise style="--i:1">Six public builds. Tap one to open it.</p>
    <div class="work-list">${rows}</div>
  `;
}

function renderProject(id) {
  const project = projectById(id);
  const repoLabel = project.repoLabel || "Repository";
  const live = project.live
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">Live site</a>`
    : "";
  const meta = [project.kicker, project.year].filter(Boolean).join(" · ");
  return `
    <header class="hero ${project.hue}" data-hero>
      <button type="button" class="back" data-back>‹ Back</button>
      <p class="kicker">${escapeHtml(meta)}</p>
      <h2>${escapeHtml(project.name)}</h2>
      <p>${escapeHtml(project.line)}</p>
    </header>
    <p class="prose" data-rise style="--i:0">${escapeHtml(project.body)}</p>
    <div class="chips" data-rise style="--i:1">${chipList(project.stack)}</div>
    <div class="actions" data-rise style="--i:2">
      <a href="${project.repo}" target="_blank" rel="noopener noreferrer">${escapeHtml(repoLabel)}</a>
      ${live}
      <button type="button" data-goto="stack">See the stack</button>
    </div>
  `;
}

function renderStack() {
  const blocks = groups
    .map((group, groupIndex) => {
      const chips = group.items
        .map(
          ([name]) =>
            `<button type="button" class="skill${skill === name ? " is-lit" : ""}" data-skill="${escapeHtml(name)}">${escapeHtml(name)}</button>`
        )
        .join("");
      return `<section class="group" data-rise style="--i:${groupIndex}"><h3>${escapeHtml(group.name)}</h3><div class="chips">${chips}</div></section>`;
    })
    .join("");
  return `
    <p class="eyebrow">Badge wall</p>
    <h2 class="screen-title">Stack</h2>
    <p class="screen-dek">The same tools pinned on the profile README. Tap one.</p>
    ${blocks}
  `;
}

function renderNotes() {
  const list = notes
    .map(
      (note, index) => `
      <button type="button" class="note" data-note="${note.id}" data-rise style="--i:${index}">
        <b>${escapeHtml(note.title)}</b>
        <span>${escapeHtml(note.dek)}</span>
      </button>`
    )
    .join("");
  return `
    <p class="eyebrow">DEV</p>
    <h2 class="screen-title">Field notes</h2>
    <p class="screen-dek">Short recaps of public posts. Tap to read.</p>
    ${list}
  `;
}

function renderNote(id) {
  const note = noteById(id);
  return `
    <button type="button" class="back" data-back>‹ Back</button>
    <article class="reader">
      <p class="meta" data-rise style="--i:0">${escapeHtml(note.dek)}</p>
      <h2 data-rise style="--i:1">${escapeHtml(note.title)}</h2>
      <p data-rise style="--i:2">${escapeHtml(note.body)}</p>
      <div class="actions" data-rise style="--i:3">
        <a href="https://dev.to/poetryofcode" target="_blank" rel="noopener noreferrer">poetryofcode on DEV</a>
      </div>
    </article>
  `;
}

function renderPath() {
  const items = path
    .map(
      (item, index) => `
      <article class="path-item" data-rise style="--i:${index}">
        <i>${escapeHtml(item.when)}</i>
        <b>${escapeHtml(item.title)}</b>
        <p>${escapeHtml(item.role)}. ${escapeHtml(item.text)}</p>
      </article>`
    )
    .join("");
  return `
    <button type="button" class="back" data-back>‹ Back</button>
    <p class="eyebrow">Experience</p>
    <h2 class="screen-title">The path</h2>
    <p class="screen-dek">Frontend roles, a residency, and CUNY.</p>
    ${items}
  `;
}

function renderSignal() {
  const links = [
    ["poetryofcode.com", "https://poetryofcode.com"],
    ["github.com/poetryofcode", "https://github.com/poetryofcode"],
    ["dev.to/poetryofcode", "https://dev.to/poetryofcode"],
    ["leetcode.com/poetryofcode", "https://leetcode.com/poetryofcode"],
    ["codewars.com/users/poetryofcode", "https://www.codewars.com/users/poetryofcode"],
    ["devpost.com/poetryofcode", "https://devpost.com/poetryofcode"],
  ]
    .map(
      ([label, href], index) =>
        `<a data-rise style="--i:${index}" href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span>↗</span></a>`
    )
    .join("");
  return `
    <button type="button" class="back" data-back>‹ Back</button>
    <p class="eyebrow">Open to work</p>
    <h2 class="screen-title">Say hello</h2>
    <p class="screen-dek">Hireable, available for frontend. New York.</p>
    <div class="signal-list">${links}</div>
  `;
}

function markupFor(route) {
  switch (route.name) {
    case "studio":
      return renderStudio();
    case "work":
      return renderWork();
    case "project":
      return renderProject(route.id);
    case "stack":
      return renderStack();
    case "notes":
      return renderNotes();
    case "note":
      return renderNote(route.id);
    case "path":
      return renderPath();
    case "signal":
      return renderSignal();
    default:
      return renderStudio();
  }
}

function playRise(sheet) {
  if (reduce) return;
  sheet.querySelectorAll("[data-rise]").forEach((el, index) => {
    const order = Number(el.style.getPropertyValue("--i")) || index;
    el.animate(
      [
        { opacity: 0, transform: "translateY(16px)" },
        { opacity: 1, transform: "none" },
      ],
      {
        duration: 620,
        delay: 40 + order * 48,
        easing: "cubic-bezier(0.16, 1.05, 0.3, 1)",
        fill: "both",
      }
    );
  });
}

function bumpIsland() {
  if (reduce) return;
  const island = $("island");
  island.animate(
    [{ width: "126px" }, { width: "158px", offset: 0.38 }, { width: "126px" }],
    { duration: 560, easing: "cubic-bezier(0.2, 0.9, 0.2, 1)" }
  );
}

function skillBlurb(name) {
  for (const group of groups) {
    const found = group.items.find((item) => item[0] === name);
    if (found) return found[1];
  }
  return "";
}

function paintDock() {
  const dock = $("dock");
  const onStack = current().name === "stack" && skill;
  $("screen").classList.toggle("has-dock", Boolean(onStack));
  if (!onStack) {
    dock.hidden = true;
    dock.innerHTML = "";
    delete dock.dataset.skill;
    return;
  }
  if (dock.dataset.skill === skill && !dock.hidden) return;
  dock.hidden = false;
  dock.dataset.skill = skill;
  dock.innerHTML = `<strong>${escapeHtml(skill)}</strong><p>${escapeHtml(skillBlurb(skill))}</p>`;
  if (!reduce) {
    dock.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 380, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
    );
  }
}

function updateChrome() {
  const route = current();
  const root = isRoot(route.name) ? route.name : null;
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const on = button.dataset.tab === root;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-current", on ? "page" : "false");
  });
  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.classList.toggle("is-on", button.dataset.chapter === (root || ""));
  });
  $("tabbar").classList.toggle("is-hidden", !root);
  $("screen").classList.toggle("is-deep", !root);
  $("screen").classList.toggle("has-dock", route.name === "stack" && Boolean(skill));
  const index = ["studio", "work", "stack", "notes"].indexOf(root);
  if (index >= 0) {
    const pill = $("pill");
    const width = pill.parentElement.clientWidth / 4;
    pill.style.transform = `translateX(${index * width}px)`;
  }
  const [title, copy] = hints[route.name] || hints.studio;
  $("step-title").textContent = title;
  $("step-copy").textContent = copy;
  const hash = route.id ? `#/${route.name}/${route.id}` : `#/${route.name}`;
  if (location.hash !== hash) {
    history.replaceState({ stack }, "", hash);
  }
  if (route.name !== "stack") skill = null;
  paintDock();
}

function makeSheet(route) {
  const sheet = document.createElement("div");
  sheet.className = "sheet";
  sheet.dataset.screen = route.name;
  sheet.innerHTML = markupFor(route);
  const image = sheet.querySelector(".avatar img");
  if (image) {
    image.addEventListener("error", () => image.remove(), { once: true });
  }
  return sheet;
}

async function playPush(prev, next) {
  const width = next.getBoundingClientRect().width || 360;
  const incoming = spring(next, (progress) => ({
    transform: `translate3d(${lerp(width, 0, progress)}px,0,0)`,
  }));
  const outgoing = spring(prev, (progress) => ({
    transform: `translate3d(${lerp(0, -width * 0.22, progress)}px,0,0) scale(${lerp(1, 0.94, progress)})`,
    filter: `brightness(${lerp(1, 0.55, progress)})`,
  }));
  playRise(next);
  await Promise.all([settle(incoming), settle(outgoing)]);
}

async function playPop(prev, next) {
  const width = prev.getBoundingClientRect().width || 360;
  next.style.transform = `translate3d(${-width * 0.22}px,0,0) scale(0.94)`;
  next.style.filter = "brightness(0.55)";
  const outgoing = spring(prev, (progress) => ({
    transform: `translate3d(${lerp(0, width, progress)}px,0,0)`,
  }));
  const incoming = spring(next, (progress) => ({
    transform: `translate3d(${lerp(-width * 0.22, 0, progress)}px,0,0) scale(${lerp(0.94, 1, progress)})`,
    filter: `brightness(${lerp(0.55, 1, progress)})`,
  }));
  await Promise.all([settle(outgoing), settle(incoming)]);
  next.style.transform = "";
  next.style.filter = "";
}

async function playTab(prev, next) {
  const outgoing = prev.animate(
    [
      { opacity: 1, transform: "none" },
      { opacity: 0, transform: "translateY(-12px) scale(0.98)" },
    ],
    { duration: 280, easing: "ease", fill: "forwards" }
  );
  const incoming = next.animate(
    [
      { opacity: 0, transform: "translateY(18px)" },
      { opacity: 1, transform: "none" },
    ],
    { duration: 520, easing: "cubic-bezier(0.16, 1.05, 0.3, 1)", fill: "forwards" }
  );
  playRise(next);
  await Promise.all([outgoing.finished, incoming.finished]);
  try {
    incoming.commitStyles();
    incoming.cancel();
  } catch (error) {
    /* ignore */
  }
}

async function playMorph(prev, next, source) {
  const viewport = $("viewport");
  const face = source.querySelector(".swatch") || source.querySelector(".tap-fx") || source;
  const origin = relBox(face, viewport);
  next.style.opacity = "0";
  const hero = next.querySelector("[data-hero]");
  const dest = hero ? relBox(hero, viewport) : origin;
  next.style.opacity = "1";
  if (hero) hero.style.opacity = "0";

  const ghost = document.createElement("div");
  ghost.className = `morph-ghost ${face.className}`;
  ghost.style.left = `${origin.x}px`;
  ghost.style.top = `${origin.y}px`;
  ghost.style.width = `${origin.w}px`;
  ghost.style.height = `${origin.h}px`;
  ghost.style.borderRadius = "18px";
  viewport.appendChild(ghost);
  face.style.visibility = "hidden";

  const travel = (SPRING.length / 60) * 1000;
  const move = spring(ghost, (progress) => {
    const t = Math.max(0, progress);
    return {
      left: `${lerp(origin.x, dest.x, t)}px`,
      top: `${lerp(origin.y, dest.y, t)}px`,
      width: `${Math.max(0, lerp(origin.w, dest.w, t))}px`,
      height: `${Math.max(0, lerp(origin.h, dest.h, t))}px`,
      borderRadius: `${lerp(18, 0, Math.min(t, 1))}px`,
    };
  });
  const fade = prev.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 420,
    easing: "ease",
    fill: "forwards",
  });
  let heroFade = Promise.resolve();
  if (hero) {
    heroFade = hero
      .animate(
        [
          { opacity: 0 },
          { opacity: 0, offset: 0.45 },
          { opacity: 1 },
        ],
        { duration: travel, easing: "linear", fill: "forwards" }
      )
      .finished.then(() => {
        hero.style.opacity = "1";
      });
  }
  playRise(next);
  await Promise.all([settle(move), fade.finished, heroFade]);
  ghost.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: "forwards" });
  await new Promise((resolve) => {
    window.setTimeout(resolve, 150);
  });
  ghost.remove();
}

async function show(mode, source) {
  const viewport = $("viewport");
  const prev = viewport.querySelector(".sheet");
  const next = makeSheet(current());
  if (mode === "pop" && prev) viewport.insertBefore(next, prev);
  else viewport.appendChild(next);
  updateChrome();
  bumpIsland();

  if (reduce || !prev || mode === "enter") {
    prev?.remove();
    playRise(next);
    return;
  }

  viewport.style.pointerEvents = "none";
  try {
    if (mode === "morph" && source) await playMorph(prev, next, source);
    else if (mode === "push") await playPush(prev, next);
    else if (mode === "pop") await playPop(prev, next);
    else await playTab(prev, next);
  } finally {
    prev.remove();
    viewport.style.pointerEvents = "";
    next.style.transform = "";
    next.style.filter = "";
    next.style.opacity = "";
  }
}

function navigate(mutator, mode, source) {
  if (busy) return;
  busy = true;
  mutator();
  show(mode, source).finally(() => {
    busy = false;
  });
}

function goTab(name) {
  if (current().name === name && stack.length === 1) return;
  skill = null;
  navigate(() => {
    stack = [{ name }];
  }, "tab");
}

function push(route, mode, source) {
  navigate(() => {
    stack.push(route);
  }, mode, source);
}

function pop() {
  if (stack.length < 2) return;
  navigate(() => {
    stack.pop();
  }, "pop");
}

function toggleSkill(name) {
  if (busy) return;
  skill = skill === name ? null : name;
  const sheet = $("viewport").querySelector(".sheet");
  if (!sheet) return;
  sheet.querySelectorAll("[data-skill]").forEach((button) => {
    button.classList.toggle("is-lit", button.dataset.skill === skill);
  });
  paintDock();
  if (!skill) return;
  const active = sheet.querySelector(`[data-skill="${CSS.escape(name)}"]`);
  const dock = $("dock");
  if (!active || dock.hidden) return;
  const limit = dock.getBoundingClientRect().top - 8;
  const bottom = active.getBoundingClientRect().bottom;
  if (bottom > limit) {
    sheet.scrollBy({ top: bottom - limit, behavior: reduce ? "auto" : "smooth" });
  }
}

function bindPress(root) {
  root.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(".tap, .tab, .note, .skill, .back");
    if (!target || !root.contains(target)) return;
    target.classList.add("is-down");
  });
  const clear = (event) => {
    const target = event.target.closest?.(".is-down") || root.querySelectorAll(".is-down");
    root.querySelectorAll(".is-down").forEach((el) => el.classList.remove("is-down"));
  };
  root.addEventListener("pointerup", clear);
  root.addEventListener("pointercancel", clear);
  root.addEventListener("pointerleave", clear);
}

function onClick(event) {
  const chapter = event.target.closest("[data-chapter]");
  if (chapter) {
    goTab(chapter.dataset.chapter);
    return;
  }
  if (!$("viewport").contains(event.target) && !$("tabbar").contains(event.target)) return;

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    goTab(tab.dataset.tab);
    return;
  }
  const skillButton = event.target.closest("[data-skill]");
  if (skillButton) {
    toggleSkill(skillButton.dataset.skill);
    return;
  }
  const open = event.target.closest("[data-open]");
  if (open) {
    open.classList.remove("is-down");
    const face = open.querySelector(".tap-fx");
    if (face) face.style.transform = "none";
    push({ name: "project", id: open.dataset.open }, "morph", open);
    return;
  }
  const note = event.target.closest("[data-note]");
  if (note) {
    push({ name: "note", id: note.dataset.note }, "push");
    return;
  }
  if (event.target.closest("[data-back]")) {
    pop();
    return;
  }
  const goto = event.target.closest("[data-goto]");
  if (goto) {
    const name = goto.dataset.goto;
    if (name === "signal" || name === "path") push({ name }, "push");
    else goTab(name);
  }
}

function fit() {
  const narrow = window.innerWidth < 1100;
  const chrome = narrow ? 158 : 96;
  const maxH = window.innerHeight - chrome;
  const maxW = narrow ? window.innerWidth - 28 : Math.min(470, window.innerWidth * 0.4);
  const scale = Math.min(1, maxH / 844, maxW / 390);
  document.documentElement.style.setProperty("--s", String(Math.max(scale, 0.46)));
  updateChrome();
}

function tick() {
  const now = new Date();
  let hours = now.getHours() % 12;
  if (hours === 0) hours = 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  $("clock").textContent = `${hours}:${minutes}`;
}

function routeFromHash() {
  const raw = location.hash.replace(/^#\/?/, "");
  if (!raw) return [{ name: "studio" }];
  const [name, id] = raw.split("/");
  if (name === "project" && projectById(id)) return [{ name: "work" }, { name: "project", id }];
  if (name === "note" && noteById(id)) return [{ name: "notes" }, { name: "note", id }];
  if (["studio", "work", "stack", "notes", "signal", "path"].includes(name)) return [{ name }];
  return [{ name: "studio" }];
}

function boot() {
  stack = routeFromHash();
  bindPress(document.body);
  document.body.addEventListener("click", onClick);
  window.addEventListener("resize", fit);
  fit();
  tick();
  window.setInterval(tick, 15000);
  show("enter");
  const pill = $("pill");
  const index = ["studio", "work", "stack", "notes"].indexOf(isRoot(current().name) ? current().name : "studio");
  pill.style.transition = "none";
  pill.style.transform = `translateX(${index * (pill.parentElement.clientWidth / 4)}px)`;
  requestAnimationFrame(() => {
    pill.style.transition = "";
  });
}

boot();
