// =============================================
// DATA KARAKTER
// Tambahkan karakter baru di sini
// =============================================
const characters = {
  tako: {
    name:       "Hyoumonmaru Tako",
    alias:      "Nickname: Tako / Hyou",
    nick:       "Tako / Hyou",
    lang:       "ID / ENG / JP",
    debut:      "10 August 2025",
    bday:       "08 August",
    story:      "Seekor gurita yang berevolusi karna kotornya banyak pantai di Indonesia dan ketika evolusi nya sampai tingkat terakhir dia mendapati dirinya di pinggir pantai Jepang",
    avatar:     "../Tako/Pict/Tako.png",
    debutVid:   "mlG97WnpJaU",   // YouTube video ID
    charsheet:  "../Tako/Pict/Tako Sheet.png",
    socials: {
      x:   "https://www.x.com/hyomonmaru_tako",
      ig:  "https://www.instagram.com/hyoumonmaru_tako",
      yt:  "https://youtube.com/@HyoumonmaruTako",
      tt:  "https://www.tiktok.com/@hyoumonmaru_tako",
      fb:  "https://www.facebook.com/HyoumonmaruTako",
    }
  },
  // Contoh karakter kedua — uncomment & isi datanya:
  // char2: {
  //   name:      "Nama Karakter",
  //   alias:     "Nickname: ...",
  //   nick:      "...",
  //   lang:      "ID / JP",
  //   debut:     "01 January 2026",
  //   bday:      "15 March",
  //   story:     "Lore karakter ini...",
  //   avatar:    "../Char2/Pict/Char2.png",
  //   debutVid:  "YOUTUBE_VIDEO_ID",
  //   charsheet: "../Char2/Pict/Sheet.png",
  //   socials: {
  //     x:  "https://x.com/...",
  //     ig: "https://instagram.com/...",
  //     yt: "https://youtube.com/@...",
  //     tt: "https://tiktok.com/@...",
  //     fb: "https://facebook.com/...",
  //   }
  // },
};

// =============================================
// SWITCH KARAKTER
// =============================================
function switchCharacter(charId) {
  const c = characters[charId];
  if (!c) return;

  // Update avatar (main)
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.src = c.avatar;
    // Reset zoom
    scale = 1; offsetX = 0; offsetY = 0;
    const slider = document.getElementById("zoomSlider");
    if (slider) slider.value = 1;
    updateTransform();
  }

  // Update biodata teks
  document.getElementById("char-name").textContent  = c.name;
  document.getElementById("char-alias").textContent = c.alias;
  document.getElementById("info-nick").textContent  = c.nick;
  document.getElementById("info-lang").textContent  = c.lang;
  document.getElementById("info-debut").textContent = c.debut;
  document.getElementById("info-bday").textContent  = c.bday;
  document.getElementById("char-story").textContent = c.story;

  // Update debut video thumbnail
  const ytThumb = document.querySelector(".yt-thumb");
  const ytLink  = document.querySelector(".thumbnail-container")?.closest("a");
  if (ytThumb)  ytThumb.src = `https://i.ytimg.com/vi/${c.debutVid}/maxresdefault.jpg`;
  if (ytLink)   ytLink.href  = `https://www.youtube.com/watch?v=${c.debitVid}`;

  // Update charsheet
  const sheet = document.querySelector(".sheet-img");
  if (sheet) sheet.src = c.charsheet;

  // Update social links
  const icons = document.querySelectorAll(".icon");
  const keys  = ["x","ig","yt","tt","fb"];
  icons.forEach((icon, i) => {
    if (keys[i] && c.socials[keys[i]]) {
      icon.setAttribute("data-link", c.socials[keys[i]]);
    }
  });

  // Sidebar active state
  document.querySelectorAll(".av").forEach(av => av.classList.remove("on"));
  const activeAv = document.querySelector(`.av[data-char="${charId}"]`);
  if (activeAv) activeAv.classList.add("on");

  // Reset ke tab debut video
  showTab(null, "debut-video");
  document.querySelectorAll(".mid-btn .btn").forEach((b, i) => {
    b.classList.toggle("active", i === 0);
  });
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

  if (scale <= 1) {
    scale = 1; offsetX = 0; offsetY = 0;
    avatar.style.cursor = "default";
  } else {
    avatar.style.cursor = "grab";
  }

  const maxX = Math.max(0, (avatar.offsetWidth  * scale - container.clientWidth)  / 2);
  const maxY = Math.max(0, (avatar.offsetHeight * scale - container.clientHeight) / 2);
  offsetX = Math.min(Math.max(offsetX, -maxX), maxX);
  offsetY = Math.min(Math.max(offsetY, -maxY), maxY);

  avatar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const avatar      = document.getElementById("avatar");
  const container   = document.getElementById("zoomContainer");
  const slider      = document.getElementById("zoomSlider");
  const zoomInBtn   = document.getElementById("zoomIn");
  const zoomOutBtn  = document.getElementById("zoomOut");
  const fsBtn       = document.getElementById("fullscreenBtn");
  const closeFs     = document.getElementById("closeFullscreen");

  if (avatar && container) {
    zoomInBtn.onclick  = () => { scale = Math.min(scale + 0.2, 3); if(slider) slider.value = scale; updateTransform(); };
    zoomOutBtn.onclick = () => { scale = Math.max(scale - 0.2, 1); if(slider) slider.value = scale; updateTransform(); };
    if (slider) slider.oninput = e => { scale = parseFloat(e.target.value); updateTransform(); };

    avatar.addEventListener("mousedown", e => {
      if (scale <= 1) return;
      isDragging = true;
      avatar.style.cursor = "grabbing";
      startX = e.clientX - offsetX;
      startY = e.clientY - offsetY;
      e.preventDefault();
    });
    window.addEventListener("mousemove", e => {
      if (!isDragging) return;
      offsetX = e.clientX - startX;
      offsetY = e.clientY - startY;
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
    if (closeFs) {
      closeFs.onclick = e => {
        e.stopPropagation();
        if (document.fullscreenElement) document.exitFullscreen();
      };
    }
  }

  // Social icon click
  document.querySelectorAll(".icon").forEach(icon => {
    icon.onclick = () => {
      const url = icon.getAttribute("data-link");
      if (url) window.open(url, "_blank");
    };
  });

  // Sidebar avatar click → switch karakter
  document.querySelectorAll(".av[data-char]").forEach(av => {
    av.addEventListener("click", () => {
      switchCharacter(av.getAttribute("data-char"));
    });
  });
});

// =============================================
// TAB SWITCHER
// =============================================
function showTab(event, tabId) {
  document.querySelectorAll(".tab-content").forEach(c => {
    c.classList.remove("active");
    c.style.display = "none";
  });
  document.querySelectorAll(".mid-btn .btn").forEach(b => b.classList.remove("active"));

  const target = document.getElementById(tabId);
  if (target) { target.classList.add("active"); target.style.display = "block"; }
  if (event && event.currentTarget) event.currentTarget.classList.add("active");
}
