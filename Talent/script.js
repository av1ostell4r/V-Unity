// Ganti fungsi initWaves() yang lama dengan ini:

function initWaves() {
  const bg = document.getElementById("animationBg");

  // 3 Glow orbs
  const orbData = [
    { cls: "wave-orb wave-orb--1" },
    { cls: "wave-orb wave-orb--2" },
    { cls: "wave-orb wave-orb--3" },
  ];
  orbData.forEach(o => {
    const el = document.createElement("div");
    el.className = o.cls;
    bg.appendChild(el);
  });

  // 3 lapis SVG wave
  const waves = [
    { cls: "wave wave--1", path: "M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z", fill: "rgba(0,80,200,0.35)" },
    { cls: "wave wave--2", path: "M0,40 C200,80 400,10 600,50 C800,90 1000,15 1200,55 C1320,75 1400,30 1440,40 L1440,120 L0,120 Z", fill: "rgba(60,40,180,0.25)" },
    { cls: "wave wave--3", path: "M0,50 C150,90 350,10 550,50 C750,90 950,10 1150,50 C1300,80 1400,20 1440,50 L1440,120 L0,120 Z", fill: "rgba(0,140,255,0.2)" },
  ];

  waves.forEach(w => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1440 120");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.className.baseVal = w.cls;

    // Duplikat path agar looping mulus (width 200%)
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", w.path);
    path1.setAttribute("fill", w.fill);

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // Path kedua digeser 1440 unit ke kanan
    path2.setAttribute("d", w.path.replace(/([0-9]+),/g, (m, n) => (parseInt(n)+1440) + ","));
    path2.setAttribute("fill", w.fill);

    svg.appendChild(path1);
    svg.appendChild(path2);
    bg.appendChild(svg);
  });
}
