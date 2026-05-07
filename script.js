document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1. Typing Effect
  // =========================
  const typingText = "Welcome to V-Unity!";
  const typingElement = document.getElementById("typing");
  let charIndex = 0;

  function typeEffect() {
    if (!typingElement) return;

    if (charIndex < typingText.length) {
      typingElement.textContent += typingText.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();

  // =========================
  // 2. Fade In Body
  // =========================
  setTimeout(() => {
    document.body.classList.remove("fade-in-start");
  }, 50);

  // =========================
  // 3. About Tabs
  // =========================
  const tabs = document.querySelectorAll(".tab");
  const contentBox = document.getElementById("content");

  const tabContent = {
    Story: `
      <div class="fade-in-content">
        <h2 class="dynamic-title">Bahasa</h2>
        <p class="dynamic-text">
          V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi
          dan kebersamaan di dunia maya. Kami hadir sebagai wadah kreator digital
          untuk berkembang, berkarya, dan saling mendukung.
        </p>

        <h2 class="dynamic-title">English</h2>
        <p class="dynamic-text">
          V-Unity is a VTuber community born from collaboration and togetherness.
          We provide a platform for creators to grow, create, and support one another.
        </p>
      </div>
    `,

    Sosmed: `
      <div class="social-list fade-in-content">
        <a href="https://instagram.com/v.unityy" target="_blank" class="social-item">
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a href="https://x.com/V_Unityy" target="_blank" class="social-item">
          <i class="fab fa-x-twitter"></i>
          <span>X / Twitter</span>
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
    `
  };

  function renderTab(tabName) {
    if (!contentBox) return;
    contentBox.innerHTML = tabContent[tabName];
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const selectedTab = tab.dataset.tab;
      renderTab(selectedTab);
    });
  });

  renderTab("Story");

  // =========================
  // 4. Talent Card Redirect
  // =========================
  const talentCards = document.querySelectorAll(".talent-card");

  talentCards.forEach((card) => {
    card.addEventListener("click", () => {
      const page = card.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });

  // =========================
  // 5. Header Scroll Effect
  // =========================
  let lastScroll = 0;
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", () => {
    if (!header) return;

    const currentScroll = window.scrollY;

    // selalu muncul di top
    if (currentScroll <= 20) {
      header.classList.remove("hide");
      return;
    }

    // scroll down -> hide
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add("hide");
    }

    // scroll up -> show
    else if (currentScroll < lastScroll) {
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });
});
