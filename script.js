/**
 * V-Unity Official Script
 * Bersih dari syntax error & redundansi
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Efek Mengetik (Typing Effect) ---
    const typingText = "Welcome to V-Unity!";
    const typingElement = document.getElementById("typing");
    let charIndex = 0;

    function typeEffect() {
        if (typingElement && charIndex < typingText.length) {
            typingElement.innerHTML += typingText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150); // Kecepatan mengetik
        }
    }
    typeEffect();

    // --- 2. Animasi Masuk Body ---
    setTimeout(() => {
        document.body.classList.remove("fade-in-start");
    }, 10);

    // --- 3. Logika Tab (Backstory & Sosmed) ---
    const contentBox = document.getElementById("content");
    const tabs = document.querySelectorAll(".tab");

    function renderTabContent(type) {
        if (!contentBox) return;

        contentBox.innerHTML = ""; // Bersihkan konten lama

        if (type === "Story") {
            contentBox.innerHTML = `
                <div class="fade-in-content">
                    <h2 class="dynamic-title">Bahasa</h2>
                    <p class="dynamic-text">
                        V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi dan kebersamaan di dunia maya.
                        Kami hadir sebagai wadah bagi para kreator digital dari berbagai latar belakang — mulai dari VTuber,
                        streamer, artist, video editor, hingga vocal mixer — untuk tumbuh, berkarya, dan saling mendukung.
                    </p>
                    <h2 class="dynamic-title">English</h2>
                    <p class="dynamic-text">
                        V-Unity is a VTuber community born from the spirit of collaboration and togetherness.
                        We serve as a platform for creators from various backgrounds to grow and support each other.
                    </p>
                </div>
            `;
        } else if (type === "Sosmed") {
            contentBox.innerHTML = `
                <div class="social-list fade-in-content">
                    <a href="https://instagram.com/v.unityy" target="_blank" class="social-item">
                        <i class="fab fa-instagram"></i> <span>Instagram</span>
                    </a>
                    <a href="https://www.x.com/@V_Unityy" target="_blank" class="social-item">
                        <i class="fab fa-x-twitter"></i> <span>X</span>
                    </a>
                    <a href="https://discord.gg/qFfgFuskex" target="_blank" class="social-item">
                        <i class="fab fa-discord"></i> <span>Discord</span>
                    </a>
                    <a href="https://www.youtube.com/@V-Unity5" target="_blank" class="social-item">
                        <i class="fab fa-youtube"></i> <span>YouTube</span>
                    </a>
                </div>
            `;
        }
    }

    // Pasang Event Listener ke tombol Tab
    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            // Hapus class active dari semua tab
            tabs.forEach(t => t.classList.remove("active"));
            // Tambah class active ke yang diklik
            this.classList.add("active");

            // Cek tipe berdasarkan teks
            const type = this.textContent.includes("Backstory") ? "Story" : "Sosmed";
            renderTabContent(type);
        });
    });

    // Default: Buka tab pertama (Backstory) saat pertama load
    if (tabs[0]) {
        tabs[0].classList.add("active");
        renderTabContent("Story");
    }

    // --- 4. Efek Hover 3D pada Talent Card ---
    const talentCards = document.querySelectorAll(".talent-card");
    talentCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            
            // Efek cahaya (spotlight)
            card.style.setProperty('--light-x', `${100 - (x / rect.width) * 100}%`);
            card.style.setProperty('--light-y', `${100 - (y / rect.height) * 100}%`);
            card.style.setProperty('--light-opacity', '0.4');
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.setProperty('--light-opacity', '0');
        });

        // Logika Klik Card (Redirect)
        card.addEventListener("click", function() {
            if (this.classList.contains("locked")) {
                this.classList.add("locked-shake");
                setTimeout(() => this.classList.remove("locked-shake"), 500);
            } else {
                const page = this.dataset.page;
                if (page) {
                    document.body.classList.add("fade-out");
                    setTimeout(() => { window.location.href = page; }, 300);
                }
            }
        });
    });

    // --- 5. Scroll Header & Mouse Spotlight Body ---
    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (header) {
            if (currentScroll > lastScroll && currentScroll > 50) {
                header.classList.add("hide");
            } else {
                header.classList.remove("hide");
            }
        }
        lastScroll = currentScroll;
    });

    document.addEventListener("mousemove", (e) => {
        document.body.style.setProperty("--x", e.clientX + "px");
        document.body.style.setProperty("--y", e.clientY + "px");
    });

});
