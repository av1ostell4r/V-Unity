document.addEventListener("DOMContentLoaded", () => {
    // === 1. FITUR ZOOM & DRAG AVATAR ===
    const avatar = document.getElementById("avatar");
    const container = document.querySelector(".image-container");
    const slider = document.getElementById("zoomSlider");
    const zoomIn = document.getElementById("zoomIn");
    const zoomOut = document.getElementById("zoomOut");
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    const closeFullscreen = document.getElementById("closeFullscreen");

    if (avatar && container) {
        let scale = 1;
        let offsetX = 0;
        let offsetY = 0;
        let isDragging = false;
        let startX, startY;

        function updateTransform() {
            if (scale <= 1) {
                scale = 1;
                offsetX = 0;
                offsetY = 0;
                avatar.style.cursor = "default";
            } else {
                avatar.style.cursor = "grab";
            }

            const maxX = Math.max(0, (avatar.offsetWidth * scale - container.clientWidth) / 2);
            const maxY = Math.max(0, (avatar.offsetHeight * scale - container.clientHeight) / 2);

            offsetX = Math.min(Math.max(offsetX, -maxX), maxX);
            offsetY = Math.min(Math.max(offsetY, -maxY), maxY);

            avatar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        }

        zoomIn.onclick = () => {
            scale = Math.min(scale + 0.2, 3);
            if(slider) slider.value = scale;
            updateTransform();
        };

        zoomOut.onclick = () => {
            scale = Math.max(scale - 0.2, 1);
            if(slider) slider.value = scale;
            updateTransform();
        };

        if(slider) {
            slider.oninput = (e) => {
                scale = parseFloat(e.target.value);
                updateTransform();
            };
        }

        avatar.addEventListener("mousedown", (e) => {
            if (scale <= 1) return;
            isDragging = true;
            avatar.style.cursor = "grabbing";
            startX = e.clientX - offsetX;
            startY = e.clientY - offsetY;
            e.preventDefault();
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            offsetX = e.clientX - startX;
            offsetY = e.clientY - startY;
            requestAnimationFrame(updateTransform);
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
            if (scale > 1) avatar.style.cursor = "grab";
        });

        if(fullscreenBtn) {
            fullscreenBtn.onclick = () => {
                if (!document.fullscreenElement) {
                    container.requestFullscreen().catch(err => console.error(err));
                } else {
                    document.exitFullscreen();
                }
            };
        }

        if (closeFullscreen) {
            closeFullscreen.onclick = (e) => {
                e.stopPropagation();
                if (document.fullscreenElement) document.exitFullscreen();
            };
        }
    }

    // === 2. SOCIAL MEDIA ICONS (Link Clicker) ===
    document.querySelectorAll('.icon').forEach(icon => {
        icon.onclick = () => {
            const url = icon.getAttribute('data-link');
            if (url) window.open(url, "_blank");
        };
    });
});

// === 3. FITUR TAB (Ditaruh di luar DOMContentLoaded agar bisa diakses onclick HTML) ===
function showTab(event, tabId) {
    // Sembunyikan semua tab-content
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none'; // Paksa sembunyi
    });

    // Matikan semua tombol aktif di mid-btn
    const allButtons = document.querySelectorAll('.mid-btn .btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Tampilkan konten yang dipilih
    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block'; // Paksa muncul
    }

    // Aktifkan tombol yang diklik
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}