// --- 1. Typing Effect ---
const text = "Welcome to V-Unity!";
let index = 0;

// Change variable name
let charIndex = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (typingElement && charIndex < text.length) {
    typingElement.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 300);
  }
}

// Only ONE DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  typeEffect(); // only call once here
  
  setTimeout(() => {
    document.body.classList.remove("fade-in-start");
  }, 10);

  // ... rest of your code
});

// --- 2. Tab Logic ---
function showTab(event, type) {
  const content = document.getElementById("content");
  const tabs = document.querySelectorAll(".tab");

  // reset tab
  tabs.forEach(t => t.classList.remove("active"));

  // aktifkan tab yang diklik
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  }

  // reset isi
  content.innerHTML = "";

  // --- BACKSTORY ---
  if (type === "Story") {
    content.innerHTML = `
      <h2 class="title">Bahasa</h2>
      <p class="text">
        V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi dan kebersamaan di dunia maya.
        Kami hadir sebagai wadah bagi para kreator digital dari berbagai latar belakang — mulai dari VTuber,
        streamer, artist, video editor, hingga vocal mixer — untuk tumbuh, berkarya, dan saling mendukung.
      </p>

      <h2 class="title">English</h2>
      <p class="text">
        V-Unity is a VTuber community born from the spirit of collaboration and togetherness.
        We serve as a platform for creators from various backgrounds to grow and support each other.
      </p>
    `;

    // styling via JS
    content.querySelectorAll(".title").forEach(el => {
      el.style.color = "#ffffff";
      el.style.fontSize = "52px";
      el.style.marginTop = "20px";
      el.style.marginTop = "50px";
    });

    content.querySelectorAll(".text").forEach(el => {
      el.style.lineHeight = "1.6";
      el.style.fontSize = "23px";
      el.style.color = "white";
      el.style.textAlign = "justify";
      el.style.margin = "20px 180px";
    });
  }

  // --- SOSMED ---
  else if (type === "Sosmed") {
    content.innerHTML = `
      <div class="social-list">

        <a href="https://instagram.com/v.unityy" target="_blank" class="social-item">
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a href="https://www.x.com/@V_Unityy" target="_blank" class="social-item">
          <i class="fab fa-x-twitter"></i>
          <span>X</span>
        </a>

        <a href="https://discord.gg/qFfgFuskex" target="_blank" class="social-item">
          <i class="fab fa-discord"></i>
          <span>Discord</span>
        </a>

        <a href="https://www.youtube.com/@V-Unity5" target="_blank" class="social-item">
          <i class="fab fa-youtube"></i>
          <span>YouTube</span>
        </a>

      </div>
    `;
  }
}

// --- 3. INIT SAAT PAGE LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  const tabs = document.querySelectorAll(".tab");

  // kasih event ke semua tab
  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      const type = this.textContent.includes("Backstory") ? "Story" : "Sosmed";
      showTab(e, type);
    });
  });

  // 🔥 default buka Backstory
  if (tabs[0]) {
    showTab({ currentTarget: tabs[0] }, "Story");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".social-item")) {
    e.stopPropagation();
  }
});

document.addEventListener("click", function(e) {
  if (e.target.closest(".social-item")) {
    const items = document.querySelectorAll(".social-item");

    items.forEach(i => i.classList.remove("active"));

    e.target.closest(".social-item").classList.add("active");
  }
});

document.querySelectorAll(".social-item").forEach(item => {
  item.addEventListener("click", function(e) {
    const ripple = this.querySelector("::after"); // ga bisa langsung, jadi trick manual

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// --- 3. Main Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    
    // Jalankan efek mengetik
    typeEffect();

    // Animasi Masuk (Fade In)
    setTimeout(() => {
        document.body.classList.remove("fade-in-start");
    }, 10);

    // --- 4. Talent Card Logic (THE FIX) ---
const talentCards = document.querySelectorAll(".talent-card");

talentCards.forEach(card => {
    // Event Klik (Logika yang sudah ada)
    card.addEventListener("click", function (e) {
        if (this.classList.contains("locked")) {
            this.classList.add("locked-shake");
            setTimeout(() => this.classList.remove("locked-shake"), 500);
            return;
        }
        const page = this.dataset.page;
        if (page) {
            document.body.classList.add("fade-out");
            setTimeout(() => { window.location.href = page; }, 300);
        }
    });

    // Efek Hover 3D & Cahaya Berlawanan
    card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posisi X kursor di dalam kartu
        const y = e.clientY - rect.top;  // Posisi Y kursor di dalam kartu

        // Hitung titik tengah kartu
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Hitung rotasi (makin jauh dari tengah, makin miring)
        // Nilai 15 adalah intensitas kemiringan (bisa diubah)
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        // Terapkan Transform
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

        // Efek Cahaya Berlawanan (Gunakan CSS Variable)
        // Kita hitung posisi cahaya di sisi berlawanan kursor
        const lightX = 100 - (x / rect.width) * 100;
        const lightY = 100 - (y / rect.height) * 100;
        
        this.style.setProperty('--light-x', `${lightX}%`);
        this.style.setProperty('--light-y', `${lightY}%`);
        this.style.setProperty('--light-opacity', '0.4');
    });

    // Reset saat kursor keluar
    card.addEventListener("mouseleave", function () {
        this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        this.style.setProperty('--light-opacity', '0');
    });
});

    // --- 5. Scroll Header & Mouse Move ---
    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
        lastScroll = currentScroll;
    });

    document.addEventListener("mousemove", (e) => {
        document.body.style.setProperty("--x", e.clientX + "px");
        document.body.style.setProperty("--y", e.clientY + "px");
    });
});

// --- 6. Finisher Header ---
new FinisherHeader({
    "count": 100,
    "size": { "min": 2, "max": 12, "pulse": 0.1 },
    "speed": {
        "x": { "min": 0, "max": 0.4 },
        "y": { "min": 0, "max": 0.4 }
    },
    "colors": {
        "background": "#16131c",
        "particles": ["#49c9ff", "#fff17f", "#b797cf", "#29d34d", "#ff80ff"]
    },
    "blending": "overlay",
    "opacity": { "center": 0.65, "edge": 0.1 },
    "skew": -2,
    "shapes": ["c"]
});

const cards = document.querySelectorAll(".talent-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // posisi mouse dalam card
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // hitung rotasi (semakin jauh dari tengah → makin miring)
    const rotateX = ((y - centerY) / centerY) * -10; // atas bawah
    const rotateY = ((x - centerX) / centerX) * 10;  // kiri kanan

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  // balik normal saat keluar
  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
});
