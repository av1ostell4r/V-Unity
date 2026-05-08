// --- 1. Typing Effect ---
const text = "Welcome to V-Unity!";
let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// --- 2. Tab Logic ---
function showTab(event, type) {
    const content = document.getElementById("content");
    const tabs = document.querySelectorAll(".tab");

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
                Kami hadir sebagai wadah bagi para kreator digital dari berbagai latar belakang — mulai dari VTuber,
                streamer, artist, video editor, hingga vocal mixer — untuk tumbuh, berkarya, dan saling mendukung.
            </p>
            <h2 class="title">English</h2>
            <p class="text">
                V-Unity is a VTuber community born from the spirit of collaboration and togetherness.
                We serve as a platform for creators from various backgrounds to grow and support each other.
            </p>
        `;

        content.querySelectorAll(".title").forEach(el => {
            el.style.color = "#ffffff";
            el.style.fontSize = "52px";
            el.style.marginTop = "50px";
            el.style.fontFamily = "'Palanquin Dark', sans-serif";
        });

        content.querySelectorAll(".text").forEach(el => {
            el.style.lineHeight = "1.6";
            el.style.fontSize = "23px";
            el.style.color = "white";
            el.style.textAlign = "justify";
            el.style.margin = "20px 180px";
        });

    } else if (type === "Sosmed") {
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

// --- 3. Main Initialization ---
document.addEventListener("DOMContentLoaded", () => {

    // Typing effect
    typeEffect();

    // Fade in
    setTimeout(() => {
        document.body.classList.remove("fade-in-start");
    }, 10);

    // Tab events
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            const type = this.textContent.includes("About Us") ? "Story" : "Sosmed";
            showTab(e, type);
        });
    });

    // Default tab
    if (tabs[0]) {
        showTab({ currentTarget: tabs[0] }, "Story");
    }

    // --- 4. Talent Card Logic ---
    const talentCards = document.querySelectorAll(".talent-card");

    talentCards.forEach(card => {
        card.addEventListener("click", function () {
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

        card.addEventListener("mousemove", function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

            const lightX = 100 - (x / rect.width) * 100;
            const lightY = 100 - (y / rect.height) * 100;
            this.style.setProperty('--light-x', `${lightX}%`);
            this.style.setProperty('--light-y', `${lightY}%`);
            this.style.setProperty('--light-opacity', '0.4');
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            this.style.setProperty('--light-opacity', '0');
        });
    });

    // --- 5. Social Item: ripple & active state ---
    document.addEventListener("click", function (e) {
        const item = e.target.closest(".social-item");
        if (!item) return;

        document.querySelectorAll(".social-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const circle = document.createElement("span");
        circle.classList.add("ripple");
        const rect = item.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left + "px";
        circle.style.top  = e.clientY - rect.top  + "px";
        item.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });

    // --- 6. Scroll Header ---
// --- 6. Scroll Header ---
// --- 6. Scroll Header ---
let lastScroll = window.pageYOffset || 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        // Paling atas → selalu tampil
        header.classList.remove("hide");
    } else if (currentScroll > lastScroll) {
        // Scroll ke bawah → sembunyikan
        header.classList.add("hide");
    } else if (currentScroll < lastScroll) {
        // Scroll ke atas → tampilkan
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

    // --- 7. Mouse Glow ---
    document.addEventListener("mousemove", (e) => {
        document.body.style.setProperty("--x", e.clientX + "px");
        document.body.style.setProperty("--y", e.clientY + "px");
    });

    // --- 8. Finisher Header ---
    try {
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
    } catch (e) {
        console.warn("FinisherHeader gagal load:", e);
    }

}); // ← penutup DOMContentLoaded
