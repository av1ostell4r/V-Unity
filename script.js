document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const typingText = "Welcome to V-Unity!";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeEffect() {
    if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();

  // Fade in
  setTimeout(() => {
    document.body.classList.remove("fade-in-start");
  }, 50);

  // Tab system
  const tabs = document.querySelectorAll(".tab");
  const content = document.getElementById("content");

  const tabData = {
    Story: `
      <div class="fade-in-content">
        <h2 class="dynamic-title">Bahasa</h2>
        <p class="dynamic-text">
          V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi
          dan kebersamaan di dunia maya.
        </p>

        <h2 class="dynamic-title">English</h2>
        <p class="dynamic-text">
          V-Unity is a VTuber community born from collaboration and togetherness.
        </p>
      </div>
    `,
    Sosmed: `
      <div class="social-list fade-in-content">
        <a href="https://instagram.com/v.unityy" target="_blank" class="social-item">
          <i class="fab fa-instagram"></i> Instagram
        </a>

        <a href="https://x.com/V_Unityy" target="_blank" class="social-item">
          <i class="fab fa-x-twitter"></i> X
        </a>

        <a href="https://discord.gg/qFfgFuskex" target="_blank" class="social-item">
          <i class="fab fa-discord"></i> Discord
        </a>
      </div>
    `
  };

  function renderTab(tabName) {
    content.innerHTML = tabData[tabName];
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      renderTab(tab.dataset.tab);
    });
  });

  renderTab("Story");

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
