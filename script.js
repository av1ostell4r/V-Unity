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

  // Talent cards redirect
  const cards = document.querySelectorAll(".talent-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const page = card.dataset.page;
      if (page) window.location.href = page;
    });
  });
});
