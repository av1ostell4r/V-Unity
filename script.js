// --- 1. Typing Effect ---
const text = "Welcome to V-Unity!";
let charIndex = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (typingElement && charIndex < text.length) {
    typingElement.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 200);
  }
}

// --- 2. Tab Logic ---
function showTab(event, type) {
  const content = document.getElementById("content");
  const tabs = document.querySelectorAll(".tab");

  // Reset tab aktif
  tabs.forEach(t => t.classList.remove("active"));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  }

  content.innerHTML = "";

  if (type === "Story") {
    content.innerHTML = `
      <h2 class="title">Bahasa</h2>
      <p class="text">
        V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi dan kebersamaan di dunia maya.
        Kami hadir sebagai wadah bagi para kreator digital dari berbagai latar belakang.
      </p>
      <h2 class="title">English</h2>
      <p class="text">
        V-Unity is a VTuber community born from the spirit of collaboration and togetherness.
      </p>
    `;

    // Styling dinamis
    content.querySelectorAll(".title").forEach(el => {
      el.style.color = "#ffffff";
      el.style.fontSize = "32px";
      el.style.marginTop = "20px";
      el.style.fontWeight = "800";
    });

    content.querySelectorAll(".text").forEach(el => {
      el.style.lineHeight = "1.7";
      el.style.fontSize = "18px";
      el.style.color = "rgba(255,255,255,0.75)";
      el.style.textAlign = "justify";
      el.style.margin = "15px auto";
      el.style.maxWidth = "700px";
    });
  } 
  else if (type === "Sosmed") {
    content.innerHTML = `
      <div class="social-list">
        <a href="#" class="social-item"><i class="fab fa-instagram"></i> <span>Instagram</span></a>
        <a href="#" class="social-item"><i class="fab fa-x-twitter"></i> <span>X</span></a>
        <a href="#" class="social-item"><i class="fab fa-discord"></i> <span>Discord</span></a>
      </div>
    `;
  }
}

// --- 3. Inisialisasi Utama (Gabungan) ---
document.addEventListener("DOMContentLoaded", () => {
  // Jalankan efek mengetik
  typeEffect();

  // Animasi Masuk Body
  setTimeout(() => {
    document.body.classList.remove("fade-in-start");
  }, 10);

  // Setup Event Click untuk Tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      const type = this.textContent.includes("Backstory") ? "Story" : "Sosmed";
      showTab(e, type);
    });
  });

  // Default buka Story
  if (tabs[0]) showTab({ currentTarget: tabs[0] }, "Story");

  // Logic Mouse Move untuk latar belakang (CSS Variables)
  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });

  // Logic Talent Cards
  const talentCards = document.querySelectorAll(".talent-card");
  talentCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
});
