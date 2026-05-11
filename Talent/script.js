// =============================================
// DATA KARAKTER
// =============================================
const characters = {
  tako: {
    theme:     "theme-tako",
    type:      "HUMANOID OCTOPUS",
    name:      "Hyoumonmaru Tako",
    alias:     "冰門丸たこ",
    nick:      "Tako / Hyou",
    lang:      "ID / ENG / JP",
    debut:     "10 August 2025",
    bday:      "08 August",
    story:     "Seekor gurita yang berevolusi karna kotornya banyak pantai di Indonesia dan ketika evolusi nya sampai tingkat terakhir dia mendapati dirinya di pinggir pantai Jepang",
    avatar:    "Tako/Pict/Tako.png",
    debutVid:  "mlG97WnpJaU",
    charsheet: "Tako/Pict/Tako Sheet.png",
    socials:   { x:"https://www.x.com/hyomonmaru_tako", ig:"https://www.instagram.com/hyoumonmaru_tako", yt:"https://youtube.com/@HyoumonmaruTako", tt:"https://www.tiktok.com/@hyoumonmaru_tako", fb:"https://www.facebook.com/HyoumonmaruTako" }
  },
  seiko: {
    theme:     "theme-seiko",
    type:      "MESSENGER",
    name:      "Seiko Hato",
    alias:     "セイコハト",
    nick:      "Seiko / Hato",
    lang:      "ID / JP",
    debut:     "15 September 2025",
    bday:      "20 May",
    story:     " ",
    avatar:    "Seiko/Seiko 1.png",
    debutVid:  "dQw4w9WgXcQ",
    charsheet: "Seiko/Seiko 2.png",
    socials:   { x:"#", ig:"#", yt:"#", tt:"#", fb:"#" }
  },
  haku: {
    theme:     "theme-haku",
    type:      "NEKO GUARDIAN",
    name:      "Hakumi Ishiki",
    alias:     "白光イシキ",
    nick:      "Haku / Ishiki",
    lang:      "ID / ENG",
    debut:     "01 October 2025",
    bday:      "12 December",
    story:     "Penjaga kuil kucing yang turun ke dunia manusia untuk mencari pengikut baru melalui dunia virtual.",
    avatar:    "Pict/Haku 1.png",
    debutVid:  "dQw4w9WgXcQ",
    charsheet: "Pict/Haku 2.png",
    socials:   { x:"#", ig:"#", yt:"#", tt:"#", fb:"#" }
  },
  reiji: {
    theme:     "theme-reiji",
    type:      "CLOUD WALKER",
    name:      "Kichirou Reiji",
    alias:     "吉郎礼二",
    nick:      "Reiji / Kichirou",
    lang:      "ID / JP / ENG",
    debut:     "20 October 2025",
    bday:      "05 April",
    story:     "Seorang pengembara yang tinggal di atas awan, turun ke bumi hanya untuk berbagi cerita indahnya langit.",
    avatar:    "Reiji/Reiji.png",
    debutVid:  "dQw4w9WgXcQ",
    charsheet: "",
    socials:   { x:"#", ig:"#", yt:"#", tt:"#", fb:"#" }
  },
  sanma: {
    theme:     "theme-sanma",
    type:      "DEEP SEA FISH",
    name:      "Agashi Sanma",
    alias:     "サンマ",
    nick:      "Sanma / Agashi",
    lang:      "ID / JP",
    debut:     "11 November 2025",
    bday:      "22 February",
    story:     "Ikan dari laut terdalam yang bermutasi memiliki kaki dan mencoba berbaur dengan masyarakat daratan.",
    avatar:    "Sanma/Sanma.png",
    debutVid:  "dQw4w9WgXcQ",
    charsheet: "Sanma/Sanma sheet.jpeg",
    socials:   { x:"#", ig:"#", yt:"#", tt:"#", fb:"#" }
  },
};

// =============================================
// ANIMATION GENERATORS
// =============================================
function clearAnimations() {
  const bg = document.getElementById("animationBg");
  if (bg) bg.innerHTML = "";
}

function initWaves() {
  const bg = document.getElementById("animationBg");

  // 3 glow orbs
  ["wave-orb wave-orb--1","wave-orb wave-orb--2","wave-orb wave-orb--3"].forEach(cls => {
    const el = document.createElement("div");
    el.className = cls;
    bg.appendChild(el);
  });

  // 3 lapis SVG wave — path ditulis manual agar tidak rusak
  const waves = [
    {
      cls: "wave wave--1",
      d1:  "M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z",
      d2:  "M1440,60 C1620,100 1800,20 1980,60 C2160,100 2340,20 2520,60 C2700,100 2820,40 2880,60 L2880,120 L1440,120 Z",
      fill:"rgba(0,80,200,0.35)"
    },
    {
      cls: "wave wave--2",
      d1:  "M0,40 C200,80 400,10 600,50 C800,90 1000,15 1200,55 C1320,75 1400,30 1440,40 L1440,120 L0,120 Z",
      d2:  "M1440,40 C1640,80 1840,10 2040,50 C2240,90 2440,15 2640,55 C2760,75 2840,30 2880,40 L2880,120 L1440,120 Z",
      fill:"rgba(60,40,180,0.25)"
    },
    {
      cls: "wave wave--3",
      d1:  "M0,50 C150,90 350,10 550,50 C750,90 950,10 1150,50 C1300,80 1400,20 1440,50 L1440,120 L0,120 Z",
      d2:  "M1440,50 C1590,90 1790,10 1990,50 C2190,90 2390,10 2590,50 C2740,80 2840,20 2880,50 L2880,120 L1440,120 Z",
      fill:"rgba(0,140,255,0.2)"
    },
  ];

  waves.forEach(w => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox","0 0 2880 120");
    svg.setAttribute("preserveAspectRatio","none");
    svg.className.baseVal = w.cls;
    [w.d1, w.d2].forEach(d => {
      const path = document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d", d);
      path.setAttribute("fill", w.fill);
      svg.appendChild(path);
    });
    bg.appendChild(svg);
  });
}

function initLetters() {
  const bg = document.getElementById("animationBg");
  for (let i = 0; i < 20; i++) {
    const l = document.createElement("div");
    l.className = "letter";
    l.style.left = `${Math.random() * 100}vw`;
    l.style.animationDelay = `${Math.random() * 6}s`;
    l.style.animationDuration = `${5 + Math.random() * 5}s`;
    bg.appendChild(l);
  }
}

function initPaws() {
  const bg = document.getElementById("animationBg");
  for (let i = 0; i < 15; i++) {
    const p = document.createElement("div");
    p.className = "paw";
    p.style.left = `${Math.random() * 90}vw`;
    p.style.top  = `${Math.random() * 90}vh`;
    p.style.animationDelay = `${Math.random() * 3}s`;
    bg.appendChild(p);
  }
}

function initClouds() {
  const bg = document.getElementById("animationBg");
  for (let i = 0; i < 10; i++) {
    const c = document.createElement("div");
    c.className = "cloud";
    c.style.width  = `${150 + Math.random() * 250}px`;
    c.style.height = `${60  + Math.random() * 60}px`;
    c.style.top    = `${Math.random() * 100}vh`;
    c.style.animationDuration = `${25 + Math.random() * 25}s`;
    c.style.animationDelay   = `${-Math.random() * 30}s`;
    c.style.opacity = 0.05 + Math.random() * 0.15;
    bg.appendChild(c);
  }
}

function initFish() {
  const bg = document.getElementById("animationBg");
  for (let i = 0; i < 12; i++) {
    const f = document.createElement("div");
    f.className = "fish";
    f.style.top = `${Math.random() * 100}vh`;
    f.style.animationDuration = `${5 + Math.random() * 10}s`;
    f.style.animationDelay   = `${-Math.random() * 10}s`;
    bg.appendChild(f);
  }
}

function updateAnimation(charId) {
  clearAnimations();
  if      (charId === "tako")  initWaves();
  else if (charId === "seiko") initLetters();
  else if (charId === "haku")  initPaws();
  else if (charId === "reiji") initClouds();
  else if (charId === "sanma") initFish();
}

// =============================================
// SWITCH KARAKTER
// =============================================
function switchCharacter(charId) {
  const c = characters[charId];
  if (!c) return;

  // Theme & animasi
  document.body.className = c.theme;
  updateAnimation(charId);

  // Avatar
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.src = c.avatar;
    scale = 1; offsetX = 0; offsetY = 0;
    const slider = document.getElementById("zoomSlider");
    if (slider) slider.value = 1;
    updateTransform();
  }

  // Biodata
  document.getElementById("char-type").textContent  = c.type;
  document.getElementById("char-name").textContent  = c.name;
  document.getElementById("char-alias").textContent = c.alias;
  document.getElementById("info-nick").textContent  = c.nick;
  document.getElementById("info-lang").textContent  = c.lang;
  document.getElementById("info-debut").textContent = c.debut;
  document.getElementById("info-bday").textContent  = c.bday;
  document.getElementById("char-story").textContent = c.story;

  // Debut video
  const ytThumb  = document.getElementById("yt-thumb");
  const debutLink= document.getElementById("debut-link");
  if (ytThumb)   ytThumb.src  = `https://i.ytimg.com/vi/${c.debutVid}/maxresdefault.jpg`;
  if (debutLink) debutLink.href = `https://www.youtube.com/watch?v=${c.debutVid}`;

  // Charsheet
  const sheet = document.getElementById("sheet-img");
  if (sheet) sheet.src = c.charsheet;

  // Social links
  document.querySelectorAll(".icon").forEach(icon => {
    const key = icon.getAttribute("data-key");
    if (key && c.socials[key]) {
      icon.onclick = () => {
        if (c.socials[key] !== "#") window.open(c.socials[key], "_blank");
      };
    }
  });

  // Sidebar aktif
  document.querySelectorAll(".av").forEach(av => av.classList.remove("on"));
  const activeAv = document.querySelector(`.av[data-char="${charId}"]`);
  if (activeAv) activeAv.classList.add("on");

  // Reset tab ke Debut Video
  showTab(null, "debut-video");
  document.querySelectorAll(".mid-btn .btn").forEach((b, i) => b.classList.toggle("active", i === 0));
}

// =============================================
// ZOOM & DRAG
// =============================================
let scale = 1, offsetX = 0, offsetY = 0;
let isDragging = false, startX, startY;

function updateTransform() {
  const avatar    = document.getElementById("avatar");
  const container = document.getElementById("zoomContainer");
  if (!avatar || !container) return;

  if (scale <= 1) { scale = 1; offsetX = 0; offsetY = 0; avatar.style.cursor = "default"; }
  else            { avatar.style.cursor = "grab"; }

  const maxX = Math.max(0, (avatar.offsetWidth  * scale - container.clientWidth)  / 2);
  const maxY = Math.max(0, (avatar.offsetHeight * scale - container.clientHeight) / 2);
  offsetX = Math.min(Math.max(offsetX, -maxX), maxX);
  offsetY = Math.min(Math.max(offsetY, -maxY), maxY);

  avatar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const avatar     = document.getElementById("avatar");
  const container  = document.getElementById("zoomContainer");
  const slider     = document.getElementById("zoomSlider");
  const zoomInBtn  = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const fsBtn      = document.getElementById("fullscreenBtn");

  if (avatar && container) {
    zoomInBtn.onclick  = () => { scale = Math.min(scale + 0.2, 3); if (slider) slider.value = scale; updateTransform(); };
    zoomOutBtn.onclick = () => { scale = Math.max(scale - 0.2, 1); if (slider) slider.value = scale; updateTransform(); };
    if (slider) slider.oninput = e => { scale = parseFloat(e.target.value); updateTransform(); };

    avatar.addEventListener("mousedown", e => {
      if (scale <= 1) return;
      isDragging = true; avatar.style.cursor = "grabbing";
      startX = e.clientX - offsetX; startY = e.clientY - offsetY;
      e.preventDefault();
    });
    window.addEventListener("mousemove", e => {
      if (!isDragging) return;
      offsetX = e.clientX - startX; offsetY = e.clientY - startY;
      requestAnimationFrame(updateTransform);
    });
    window.addEventListener("mouseup", () => {
      isDragging = false;
      if (scale > 1) avatar.style.cursor = "grab";
    });

    if (fsBtn) {
      fsBtn.onclick = () => {
        if (!document.fullscreenElement) container.requestFullscreen().catch(console.error);
        else document.exitFullscreen();
      };
    }
  }

  // Sidebar klik
  document.querySelectorAll(".av[data-char]").forEach(av => {
    av.addEventListener("click", () => switchCharacter(av.getAttribute("data-char")));
  });

  // Load karakter dari URL param (?char=tako) atau default tako
  const charParam = new URLSearchParams(window.location.search).get("char");
  switchCharacter(charParam && characters[charParam] ? charParam : "tako");
});

// =============================================
// TAB SWITCHER
// =============================================
function showTab(event, tabId) {
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".mid-btn .btn").forEach(b => b.classList.remove("active"));
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
  if (event && event.currentTarget) event.currentTarget.classList.add("active");
}
