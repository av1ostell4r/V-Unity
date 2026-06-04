import React, { useState, useEffect, useRef, useCallback } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────
const CHARACTERS: Record<string, {
  theme: string; type: string; name: string; alias: string; nick: string;
  lang: string; debut: string; bday: string; email: string; story: string;
  avatar: string; avatarThumb: string; debutVid: string; charsheet: string;
  accent: string; glow: string;
  socials: Record<string, string>;
}> = {
  tako: {
    theme: "Tako", type: "HUMANOID OCTOPUS", name: "Hyoumonmaru Tako",
    alias: "✦ ݁冰門丸たこ ✦", nick: "Tako / Hyou", lang: "ID / ENG / JP",
    debut: "10 August 2025", bday: "08 August",
    email: "yuusen.bluekai@gmail.com",
    story: `✦ ───────────────🐚 🌊 🐚─────────────── ✦\n\nSeekor gurita yang berevolusi karna kotornya banyak pantai di Indonesia dan ketika evolusi nya sampai tingkat terakhir dia mendapati dirinya di pinggir pantai Jepang.\n\n✦ ───────────────🐚 🌊 🐚─────────────── ✦`,
    avatar: "/Gambar/Tako.png", avatarThumb: "/Gambar/TCrop.png",
    debutVid: "mlG97WnpJaU", charsheet: "/Gambar/TCH.png",
    accent: "#00d4ff", glow: "rgba(0,212,255,0.15)",
    socials: { x: "https://www.x.com/hyomonmaru_tako", ig: "https://www.instagram.com/hyoumonmaru_tako", yt: "https://youtube.com/@HyoumonmaruTako", tt: "https://www.tiktok.com/@hyoumonmaru_tako", fb: "https://www.facebook.com/HyoumonmaruTako" },
  },
  seiko: {
    theme: "Seiko", type: "MESSENGER", name: "Seiko Hato",
    alias: "✦ セイコハト ✦", nick: "Seiko / Sei", lang: "ID / EN",
    debut: "15 September 2025", bday: "20 May",
    email: "seikohato.vtuber@gmail.com",
    story: `✦ ───────────────🕊️ 💌 🕊️─────────────── ✦\n\nDi sebuah dunia di mana perasaan manusia tidak selalu bisa tersampaikan, ada satu sosok yang bertugas mengantarkan hal-hal yang tak terlihat — surat berisi emosi.\n\nNamanya Seiko Hato, seorang pengantar surat dari dimensi lain. Berbeda dari kurir biasa, Seiko tidak mengantarkan paket fisik. Ia membawa:\n\n  surat yang tak pernah terkirim\n  kata-kata yang tak sempat diucapkan\n  dan perasaan yang terlalu sulit dijelaskan\n\nDengan tas suratnya yang misterius, ia melintasi batas antara dunia — dari mimpi ke realita, dari hati ke hati.\n\n✦ ───────────────🕊️ 💌 🕊️─────────────── ✦`,
    avatar: "/Gambar/Seiko 1.png", avatarThumb: "/Gambar/SCrop.png",
    debutVid: "YlX-smfgCHo", charsheet: "/Gambar/Seiko 2.png",
    accent: "#ff4d4d", glow: "rgba(255,77,77,0.15)",
    socials: { x: "https://www.x.com/SeikoHato", ig: "https://www.instagram.com/seikohato/", yt: "https://www.youtube.com/@seikohato", tt: "https://www.tiktok.com/@seikohato", fb: "https://www.facebook.com/SeikoHato" },
  },
  haku: {
    theme: "Haku", type: "SLAYER", name: "Hakumi Ishiki",
    alias: "✦ 白光イシキ ✦", nick: "Haku / Ishiki", lang: "ID / ENG",
    debut: "01 October 2025", bday: "12 December",
    email: "hakumi.ishiki@gmail.com",
    story: `✦ ───────────────🐾 🗡️ 🐾─────────────── ✦\n\nAda salah satu kota yang bertahan dari serangan apocalypse, yang memiliki sistem bertahan yang unik yaitu memiliki sebuah barrier yang berbentuk seperti kubah untuk melindungi kota. Maka dari situ nama kotanya adalah Domu (Dome City).

Sebelum terjadi serangan apocalypse di dunia ini, semua ras hidup terpisah. Namun, semenjak terjadi serangan apocalypse, semua ras termasuk manusia mulai bersatu, dan beberapa ras yang berada di sekitar kota akhirnya bersatu untuk bertahan hidup.

Hakumi merupakan seorang half human dan half ras cat yang menjadi salah satu pemimpin pasukan Slayers di kota yang bertugas untuk melindungi kota, memperluas kekuasaan kota, maupun mengambil outpost.

Suatu hari, Hakumi menerima tugas dari wali kota untuk mengambil kembali sebuah outpost yang jatuh setelah diserang kelompok besar zombie. Sebelum melakukan perjalanan menuju outpost, Hakumi memperingatkan bawahannya untuk berhati-hati, bukan hanya terhadap zombie tetapi juga kelompok lain yang sengaja menggagalkan misi ini. Hal tersebut karena di dalam kota politik sangat kacau dan ada kelompok yang ingin merebut posisi pemimpin Slayers ini.

Pada saat misi pengembalian outpost, terjadi sabotase dari kelompok dalam kota supaya Hakumi gagal dalam misi tersebut. Pada saat Hakumi berhasil mengambil kembali outpost dan membersihkan zombie yang ada di sana, tidak lama dari itu kelompok tidak dikenal menyerang pasukan Hakumi.

Pasukan Hakumi yang dalam keadaan lelah dan beberapa terluka kembali bertarung bersama kelompok asing yang menyerang outpost. Tidak lama bertarung, pasukan Hakumi terpojok dan semakin banyak yang terluka. Namun, kelompok asing tersebut tiba-tiba mundur dan melarikan diri.

Hakumi yang bingung karena keadaan tersebut memiliki firasat buruk, dan benar saja, segerombolan zombie sudah mengepung outpost tersebut. Akhirnya, misi Hakumi untuk mengembalikan outpost gagal dan banyak pasukan yang dibawanya terbunuh saat misi tersebut. Hanya beberapa saja yang berhasil kembali ke Dome City.

Karena dianggap gagal menyelesaikan misi dan dianggap sebagai penghianat, Hakumi diasingkan ke bagian lapisan pertama barrier kota.

Selama diasingkan, karena tidak mempunyai tempat tinggal di luar lapisan kedua, Hakumi hanya tinggal di sebuah gubuk dan berburu untuk memenuhi kebutuhan sehari-hari.

Pada suatu sore hari, seorang kakek dan seorang anak perempuan yang berkisaran umur 6–8 tahun mengampiri Hakumi yang sedang menyiapkan makanan hasil buruan di gubuk tersebut. Akhirnya, Hakumi diajak untuk pergi ke rumah kakek tersebut.

Sesampainya di sana, ternyata mereka merupakan manusia pasutri tua yang sudah lama tinggal di lapisan pertama barrier kota bersama seorang anak perempuan yang pasangan ini juga temukan di pinggir sungai kota.

Akhirnya, Hakumi tinggal bersama pasutri tua dan seorang anak perempuan yang bernama Hana.
\n\n✦ ───────────────🐾 🗡️ 🐾─────────────── ✦`,
    avatar: "/Gambar/Haku 1.png", avatarThumb: "/Gambar/HCrop.png",
    debutVid: "5rftwF7r7gk", charsheet: "/Gambar/Haku 2.png",
    accent: "#ffd700", glow: "rgba(255,215,0,0.15)",
    socials: { x: "https://www.x.com/HakumiIshiki", ig: "https://www.instagram.com/hakumi_ishiki/", yt: "https://www.youtube.com/@HakumiIshikiCh", tt: "https://www.tiktok.com/@hakumi_ishiki", fb: "https://www.facebook.com/HakumiIshiki" },
  },
  reiji: {
    theme: "Reiji", type: "RONIN TRAVELER", name: "Kichirou Reiji",
    alias: "✦ 吉郎礼二 ✦", nick: "Reiji / Kichirou", lang: "ID",
    debut: "31 May 2026", bday: "07 December",
    email: "kichiroreiji@gmail.com",
    story: `✦ ───────────────🎋 ⚔️ 🎋─────────────── ✦\n\n
Kichiro Reiji adalah seorang ronin pengembara yang hidup mengikuti kemana angin menghembuskannya. Dikenal dengan santai, pemalas, dan sering tertidur di mana saja, Reiji lebih menyukai ketenangan, minuman dingin, serta perjalanan sunyi dibanding keributan dan konflik yang tidak perlu. Meski terlihat tidak serius, ia memiliki kemampuan berpedang dan insting tajam yang membuatnya tetap disegani selama pengembaraannya yang tanpa ujung.
\n\n✦ ───────────────🎋 ⚔️ 🎋─────────────── ✦`,
    avatar: "/Gambar/Reiji.png", avatarThumb: "/Gambar/RCrop.png",
    debutVid: "1CO34rBT8I0", charsheet: "",
    accent: "#2ecc71", glow: "rgba(46,204,113,0.15)",
    socials: { x: "https://www.x.com/KichiroReiji", ig: "https://www.instagram.com/kichiroreiji/", yt: "https://www.youtube.com/@ItsMeReiji", tt: "#", fb: "https://www.facebook.com/Kichirou.Reiji" },
  },
  sanma: {
    theme: "Sanma", type: "HUNTER", name: "Agashi Sanma",
    alias: "✦ サンマ ✦", nick: "Sanma / Agashi", lang: "ID / JP",
    debut: "11 November 2025", bday: "22 February",
    email: "agashi.sanma@gmail.com",
    story: `✦ ───────────────👹 ⚔️ 👹─────────────── ✦\n\n... The bleak wind, the corpses on the ground, the screams under the stars... I smell them all, the scent of Oni's. I shall join the hunt.

---

Walking Catastrophe, itulah julukan kepada pemburu Oni yang satu ini. Dia berasal dari desa terpencil yang bernama Hagashi.

Tidak mempunyai rumah atau tempat tinggal, sehingga selalu berpindah-pindah penginapan untuk beristirahat.

Mempunyai senjata katana, namun ia belum bisa menggunakan katana yang merupakan kepunyaan leluhurnya. Katana tersebut hanya dapat digunakan jika syarat sudah terpenuh, tapi sayangnya masiht terkunci.

Walaupun ia seorang pemburu yang ditakuti, namun ia sangat baik dan ramah senyum, bahkan sering tertawa. Ia juga senang untuk menghibur orang-orang di manapun ia berada, juga ke orang yang baru dikenalnya....
\n\n✦ ───────────────👹 ⚔️ 👹─────────────── ✦`,
    avatar: "/Gambar/Agashi.png", avatarThumb: "/Gambar/ACrop.png",
    debutVid: "ibWV4k0Onvw", charsheet: "/Gambar/ACH.jpeg",
    accent: "#a29bfe", glow: "rgba(162,155,254,0.15)",
    socials: { x: "https://www.x.com/ChSanmaa", ig: "https://www.instagram.com/agashi_sanma/", yt: "https://www.youtube.com/@AgashiSanmaCh", tt: "https://www.tiktok.com/@sanmavtuber", fb: "https://www.facebook.com/agashisanma" },
  },
};

const TALENT_CARDS: { id: string; label: string; name: string; color: string; locked: boolean }[] = [
  { id: "tako", label: "冰門丸たこ", name: "Hyoumonmaru Tako", color: "blue", locked: false },
  { id: "seiko", label: "セイコハト", name: "Seiko Hato", color: "red", locked: false },
  { id: "reiji", label: "吉郎礼二", name: "Kichirou Reiji", color: "green", locked: false },
  { id: "sanma", label: "サンマ", name: "Agashi Sanma", color: "purple", locked: false },
  { id: "haku", label: "白光イシキ", name: "Hakumi Ishiki", color: "orange", locked: false },
];

const CARD_COLORS: Record<string, { bg: string; glow: string }> = {
  blue: { bg: "radial-gradient(circle at 50% 0%, rgba(22,19,28,1), rgba(22,19,28,0.6), transparent), linear-gradient(140deg, rgba(59,130,246,0.4), rgba(139,92,246,0.4))", glow: "rgba(59,130,246,0.4)" },
  red: { bg: "radial-gradient(circle at 50% 0%, rgba(22,19,28,1), rgba(22,19,28,0.6), transparent), linear-gradient(140deg, rgba(239,68,148,0.4), rgba(249,22,192,0.4))", glow: "rgba(246,59,227,0.4)" },
  green: { bg: "radial-gradient(circle at 50% 0%, rgba(22,19,28,1), rgba(22,19,28,0.6), transparent), linear-gradient(140deg, rgba(34,197,94,0.4), rgba(74,222,128,0.4))", glow: "rgba(59,246,184,0.4)" },
  purple: { bg: "radial-gradient(circle at 50% 0%, rgba(22,19,28,1), rgba(22,19,28,0.6), transparent), linear-gradient(140deg, rgba(139,92,246,0.4), rgba(167,139,250,0.4))", glow: "rgba(189,148,255,0.4)" },
  orange: { bg: "radial-gradient(circle at 50% 0%, rgba(22,19,28,1), rgba(22,19,28,0.6), transparent), linear-gradient(140deg, rgba(249,230,22,0.4), rgba(251,178,60,0.4))", glow: "rgba(227,246,59,0.4)" },
};

const GLASS_COLORS: Record<string, string> = {
  blue: "linear-gradient(120deg, rgba(115,59,246,0.25), rgba(125,211,252,0.25)), rgba(255,255,255,0.08)",
  red: "linear-gradient(120deg, rgba(239,68,228,0.25), rgba(249,22,26,0.25)), rgba(255,255,255,0.08)",
  green: "linear-gradient(120deg, rgba(34,197,94,0.25), rgba(74,222,128,0.25)), rgba(255,255,255,0.08)",
  purple: "linear-gradient(120deg, rgba(139,92,246,0.25), rgba(167,139,250,0.25)), rgba(255,255,255,0.08)",
  orange: "linear-gradient(120deg, rgba(226,249,22,0.25), rgba(251,238,60,0.25)), rgba(255,255,255,0.08)",
};




// ── ANIMATION DATA ────────────────────────────────────────────────────────────
const PAW_DATA: { key: number; left: number; top: number; delay: number; duration: number }[] =
  Array.from({ length: 15 }, (_, i) => ({
    key: i, left: Math.floor(Math.random() * 90), top: Math.floor(Math.random() * 90),
    delay: Math.random() * 3, duration: 2.5 + Math.random() * 2,
  }));

const FISH_DATA: { key: number; top: number; duration: number; delay: number }[] =
  Array.from({ length: 12 }, (_, i) => ({
    key: i, top: Math.random() * 92,
    duration: 6 + Math.random() * 10, delay: -(Math.random() * 12),
  }));

const CLOUD_DATA: { key: number; top: number; size: number; duration: number; delay: number; opacity: number; layer: number }[] =
  Array.from({ length: 18 }, (_, i) => ({
    key: i, top: 3 + Math.random() * 88, size: 0.55 + Math.random() * 1.1,
    duration: 20 + Math.random() * 30, delay: -(Math.random() * 55),
    opacity: 0.75 + Math.random() * 0.25, layer: i % 3,
  }));

// ── SEIKO LETTERS ─────────────────────────────────────────────────────────────
function SeikoLetters({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    function spawnEnvelope() {
      if (!container) return;
      const el = document.createElement("div");
      const size = 52 + Math.random() * 32;
      const h = size * 0.68;
      const rot = (Math.random() - 0.5) * 22;
      el.style.cssText = `position:absolute;width:${size}px;height:${h}px;left:${Math.random() * 92}%;top:-${h + 10}px;opacity:0;transform:rotate(${rot}deg);animation:envFall ${5 + Math.random() * 5}s ease-in forwards;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.35));`;
      el.innerHTML = `<svg width="${size}" height="${h}" viewBox="0 0 80 54" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="80" height="54" rx="3" ry="3" fill="#f5e6c8"/>${Array.from({ length: 10 }, (_, k) => `<rect x="${k * 8}" y="0" width="4" height="4" fill="${k % 2 === 0 ? '#e63939' : '#2563eb'}"/>`).join('')}${Array.from({ length: 10 }, (_, k) => `<rect x="${k * 8}" y="50" width="4" height="4" fill="${k % 2 === 0 ? '#2563eb' : '#e63939'}"/>`).join('')}${Array.from({ length: 7 }, (_, k) => `<rect x="0" y="${4 + k * 7}" width="4" height="4" fill="${k % 2 === 0 ? '#e63939' : '#2563eb'}"/>`).join('')}${Array.from({ length: 7 }, (_, k) => `<rect x="76" y="${4 + k * 7}" width="4" height="4" fill="${k % 2 === 0 ? '#2563eb' : '#e63939'}"/>`).join('')}<rect x="4" y="4" width="72" height="46" rx="2" fill="#f5e6c8"/><polyline points="4,50 29,30 40,39 51,30 76,50" fill="none" stroke="rgba(180,150,100,0.5)" stroke-width="1"/><polygon points="4,4 40,32 76,4" fill="#eddcb0" stroke="rgba(180,150,100,0.4)" stroke-width="0.8"/><rect x="35" y="23" width="10" height="10" rx="1" fill="#e63939" transform="rotate(45 40 28)" opacity="0.85"/><rect x="8" y="6" width="22" height="4" rx="2" fill="rgba(255,255,255,0.45)"/></svg>`;
      container.appendChild(el);
      el.addEventListener("animationend", () => el.remove());
    }
    const iv = setInterval(spawnEnvelope, 800);
    for (let i = 0; i < 6; i++) setTimeout(spawnEnvelope, i * 250);
    return () => clearInterval(iv);
  }, [containerRef]);
  return null;
}

// ── CLOUD SVG ─────────────────────────────────────────────────────────────────
function CloudSVG({ size, opacity }: { size: number; opacity: number }) {
  const w = 160 * size, h = 80 * size;
  return (
    <svg width={w} height={h} viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <defs>
        <radialGradient id={`cg${Math.round(size * 100)}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,1)" />
          <stop offset="100%" stopColor="rgba(220,235,255,0.85)" />
        </radialGradient>
        <filter id="cshadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(100,140,200,0.2)" />
        </filter>
      </defs>
      <g opacity={opacity} filter="url(#cshadow)">
        <ellipse cx="80" cy="65" rx="70" ry="20" fill={`url(#cg${Math.round(size * 100)})`} />
        <circle cx="38" cy="52" r="20" fill="white" /><circle cx="62" cy="42" r="26" fill="white" />
        <circle cx="92" cy="38" r="28" fill="white" /><circle cx="122" cy="48" r="22" fill="white" />
        <circle cx="138" cy="56" r="16" fill="white" /><circle cx="24" cy="60" r="16" fill="white" />
        <ellipse cx="85" cy="34" rx="22" ry="10" fill="rgba(255,255,255,0.6)" />
      </g>
    </svg>
  );
}

// ── ANIMATION BG ──────────────────────────────────────────────────────────────
function AnimationBg({ charId }: { charId: string }) {
  const bgRef = useRef<HTMLDivElement>(null);
  if (charId === "tako") return (
    <div className="animation-bg" ref={bgRef}>
      <div className="wave-orb wave-orb--1" /><div className="wave-orb wave-orb--2" /><div className="wave-orb wave-orb--3" />
      <svg className="wave wave--1" viewBox="0 0 2880 220" preserveAspectRatio="none"><path d="M0,110 C180,190 360,40 540,110 C720,190 900,40 1080,110 C1260,190 1380,80 1440,110 L1440,220 L0,220 Z" fill="rgba(0,80,200,0.35)" /><path d="M1440,110 C1620,190 1800,40 1980,110 C2160,190 2340,40 2520,110 C2700,190 2820,80 2880,110 L2880,220 L1440,220 Z" fill="rgba(0,80,200,0.35)" /></svg>
      <svg className="wave wave--2" viewBox="0 0 2880 180" preserveAspectRatio="none"><path d="M0,80 C200,160 400,20 600,90 C800,160 1000,25 1200,100 C1320,145 1400,55 1440,80 L1440,180 L0,180 Z" fill="rgba(60,40,180,0.25)" /><path d="M1440,80 C1640,160 1840,20 2040,90 C2240,160 2440,25 2640,100 C2760,145 2840,55 2880,80 L2880,180 L1440,180 Z" fill="rgba(60,40,180,0.25)" /></svg>
      <svg className="wave wave--3" viewBox="0 0 2880 150" preserveAspectRatio="none"><path d="M0,90 C150,150 350,20 550,90 C750,160 950,20 1150,90 C1300,145 1400,35 1440,90 L1440,150 L0,150 Z" fill="rgba(0,140,255,0.2)" /><path d="M1440,90 C1590,150 1790,20 1990,90 C2190,160 2390,20 2590,90 C2740,145 2840,35 2880,90 L2880,150 L1440,150 Z" fill="rgba(0,140,255,0.2)" /></svg>
    </div>
  );
  if (charId === "seiko") return (
    <div className="animation-bg seiko-bg" ref={bgRef}><SeikoLetters containerRef={bgRef} /></div>
  );
  if (charId === "haku") return (
    <div className="animation-bg" ref={bgRef}>
      {PAW_DATA.map(p => <div key={p.key} className="paw" style={{ left: `${p.left}vw`, top: `${p.top}vh`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }} />)}
    </div>
  );
  if (charId === "reiji") return (
    <div className="animation-bg reiji-bg" ref={bgRef}>
      {CLOUD_DATA.map(cl => (
        <div key={cl.key} className={`reiji-cloud reiji-cloud--${cl.layer}`} style={{ top: `${cl.top}vh`, animationDuration: `${cl.duration}s`, animationDelay: `${cl.delay}s` }}>
          <CloudSVG size={cl.size} opacity={cl.opacity} />
        </div>
      ))}
    </div>
  );
  if (charId === "sanma") {
    const c = CHARACTERS[charId];
    return (
      <div className="animation-bg" ref={bgRef}>
        {FISH_DATA.map(f => <div key={f.key} className="fish" style={{ top: `${f.top}vh`, background: c.accent, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }} />)}
      </div>
    );
  }
  return <div className="animation-bg" ref={bgRef} />;
}

// ── SOCIAL ICONS ──────────────────────────────────────────────────────────────
const SocialIcon = ({ platform, url, accent }: { platform: string; url: string; accent: string }) => {
  const icons: Record<string, React.ReactNode> = {
    x: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    ig: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
    yt: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
    tt: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52v-3.4a4.85 4.85 0 01-1.01-.12z" /></svg>,
    fb: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  };
  const icon = icons[platform];
  if (!icon) return null;
  const isReal = url && url !== "#";
  return (
    <a href={isReal ? url : undefined} target={isReal ? "_blank" : undefined} rel="noopener noreferrer"
      style={{ color: accent, opacity: isReal ? 1 : 0.3, cursor: isReal ? "pointer" : "default", transition: "transform .3s, opacity .3s", display: "flex" }}
      onMouseEnter={e => { if (isReal) (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}>
      {icon}
    </a>
  );
};



// ── TALENT DETAIL PAGE ────────────────────────────────────────────────────────
function TalentDetailPage({ charId, onBack }: { charId: string; onBack: () => void }) {
  const [activeChar, setActiveChar] = useState(charId || "tako");
  const [activeTab, setActiveTab] = useState("debut-video");
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fsScale, setFsScale] = useState(1);
  const [fsOffset, setFsOffset] = useState({ x: 0, y: 0 });
  const [fsDragging, setFsDragging] = useState(false);
  const [fsDragStart, setFsDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const fsContainerRef = useRef<HTMLDivElement>(null);
  const fsAvatarRef = useRef<HTMLImageElement>(null);
  const c = CHARACTERS[activeChar];

  const updateTransform = useCallback((s: number, ox: number, oy: number) => {
    if (!avatarRef.current || !containerRef.current) return;
    const maxX = Math.max(0, (avatarRef.current.offsetWidth * s - containerRef.current.clientWidth) / 2);
    const maxY = Math.max(0, (avatarRef.current.offsetHeight * s - containerRef.current.clientHeight) / 2);
    setOffset({ x: Math.min(Math.max(ox, -maxX), maxX), y: Math.min(Math.max(oy, -maxY), maxY) });
  }, []);

  const updateFsTransform = useCallback((s: number, ox: number, oy: number) => {
    if (!fsAvatarRef.current || !fsContainerRef.current) return;
    const maxX = Math.max(0, (fsAvatarRef.current.offsetWidth * s - fsContainerRef.current.clientWidth) / 2);
    const maxY = Math.max(0, (fsAvatarRef.current.offsetHeight * s - fsContainerRef.current.clientHeight) / 2);
    setFsOffset({ x: Math.min(Math.max(ox, -maxX), maxX), y: Math.min(Math.max(oy, -maxY), maxY) });
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (!dragging) return; updateTransform(scale, e.clientX - dragStart.x, e.clientY - dragStart.y); };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [dragging, dragStart, scale, updateTransform]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (!fsDragging) return; updateFsTransform(fsScale, e.clientX - fsDragStart.x, e.clientY - fsDragStart.y); };
    const onUp = () => setFsDragging(false);
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [fsDragging, fsDragStart, fsScale, updateFsTransform]);

  useEffect(() => {
    const onChange = () => {
      const inFs = !!document.fullscreenElement;
      setIsFullscreen(inFs);
      if (!inFs) { setFsScale(1); setFsOffset({ x: 0, y: 0 }); }
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.15 : 0.15;
      setFsScale(prev => { const ns = Math.min(Math.max(prev + delta, 1), 4); updateFsTransform(ns, fsOffset.x, fsOffset.y); return ns; });
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isFullscreen, fsOffset, updateFsTransform]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => { });
    else document.exitFullscreen();
  };

  const switchChar = (id: string) => {
    setActiveChar(id); setScale(1); setOffset({ x: 0, y: 0 });
    setFsScale(1); setFsOffset({ x: 0, y: 0 }); setActiveTab("debut-video");
  };
  const charIds = ["tako", "seiko", "haku", "reiji", "sanma"];

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap');
        img{-webkit-user-drag:none;user-drag:none;pointer-events:none}
        img::selection{background:transparent}
        *::selection{background:rgba(255,255,255,0.05)}

        html,body{margin:0;padding:0;background-color:#0b0d14;overflow-x:hidden}
        .animation-bg{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(10,25,47,1) 0%,rgba(2,5,10,1) 100%)}
        .wave-orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none}
        .wave-orb--1{width:380px;height:380px;background:rgba(0,120,255,0.18);top:-80px;left:40px;animation:orbFloat 7s ease-in-out infinite}
        .wave-orb--2{width:280px;height:280px;background:rgba(80,40,200,0.15);bottom:60px;right:80px;animation:orbFloat 9s ease-in-out infinite reverse}
        .wave-orb--3{width:220px;height:220px;background:rgba(0,180,255,0.1);top:45%;left:45%;animation:orbFloat 11s ease-in-out infinite}
        @keyframes orbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        .wave{position:absolute;bottom:0;left:0;width:200%;pointer-events:none}
        .wave--1{height:220px;animation:waveMov 8s linear infinite}
        .wave--2{height:180px;animation:waveMov 12s linear infinite reverse;opacity:.6}
        .wave--3{height:150px;animation:waveMov 6s linear infinite;opacity:.4}
        @keyframes waveMov{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .seiko-bg{background:radial-gradient(circle at 50% 50%,rgba(40,10,10,1) 0%,rgba(10,2,2,1) 100%) !important}
        @keyframes envFall{0%{transform:translateY(0) rotate(var(--rot,-8deg));opacity:0}6%{opacity:0.85}88%{opacity:0.75}100%{transform:translateY(110vh) rotate(calc(var(--rot,-8deg) + 15deg));opacity:0}}
        .paw{position:absolute;width:42px;height:42px;pointer-events:none;background:#ffd700;opacity:0;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,8.5C14.5,8.5 16.5,10.5 16.5,13C16.5,15.5 14.5,17.5 12,17.5C9.5,17.5 7.5,15.5 7.5,13C7.5,10.5 9.5,8.5 12,8.5M10.5,3.5C11.3,3.5 12,4.2 12,5C12,5.8 11.3,6.5 10.5,6.5C9.7,6.5 9,5.8 9,5C9,4.2 9.7,3.5 10.5,3.5M13.5,3.5C14.3,3.5 15,4.2 15,5C15,5.8 14.3,6.5 13.5,6.5C12.7,6.5 12,5.8 12,5C12,4.2 12.7,3.5 13.5,3.5M7,5.5C7.8,5.5 8.5,6.2 8.5,7C8.5,7.8 7.8,8.5 7,8.5C6.2,8.5 5.5,7.8 5.5,7C5.5,6.2 6.2,5.5 7,5.5M17,5.5C17.8,5.5 18.5,6.2 18.5,7C18.5,7.8 17.8,8.5 17,8.5C16.2,8.5 15.5,7.8 15.5,7C15.5,6.2 16.2,5.5 17,5.5Z'/%3E%3C/svg%3E") no-repeat center;animation:pawPop 3s ease-in-out infinite}
        @keyframes pawPop{0%,100%{opacity:0;transform:scale(.5)}50%{opacity:.35;transform:scale(1.2)}}
        .reiji-bg{background:radial-gradient(circle at 50% 20%,rgba(12,28,58,1) 0%,rgba(4,10,28,1) 100%) !important}
        .reiji-cloud{position:absolute;left:-360px;pointer-events:none;animation:cloudDrift linear infinite}
        @keyframes cloudDrift{0%{transform:translateX(-360px);opacity:0}5%{opacity:1}92%{opacity:1}100%{transform:translateX(112vw);opacity:0}}
        .fish{position:absolute;left:-80px;width:64px;height:32px;pointer-events:none;opacity:.28;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M2,12C2,12 5,9 11,9C15,9 19,12 19,12C19,12 15,15 11,15C5,15 2,12 2,12M22,12L19,10V14L22,12Z'/%3E%3C/svg%3E") no-repeat center;animation:fishSwim linear infinite}
        @keyframes fishSwim{0%{transform:translateX(0) scaleX(1);opacity:0}5%{opacity:.28}48%{transform:translateX(105vw) scaleX(1);opacity:.28}50%{transform:translateX(105vw) scaleX(-1);opacity:0}55%{opacity:.28}98%{transform:translateX(-5vw) scaleX(-1);opacity:.28}100%{transform:translateX(0) scaleX(1);opacity:0}}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:10px}
        .tab-content-anim{animation:fadeInTab .5s}
        @keyframes fadeInTab{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .av-btn{width:48px;height:48px;border-radius:50%;border:2px solid rgba(255,255,255,0.1);overflow:hidden;cursor:pointer;transition:.3s;flex-shrink:0;background:#111;display:flex;align-items:center;justify-content:center}
        .av-btn:hover{border-color:rgba(255,255,255,0.4)}
        .fs-overlay{position:fixed;inset:0;z-index:99999;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}
        .fs-close-btn{position:fixed;top:20px;right:20px;z-index:100000;width:46px;height:46px;border-radius:50%;background:rgba(20,20,20,0.85);font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.25s,border-color 0.25s,box-shadow 0.25s,color 0.25s;backdrop-filter:blur(8px);padding:0}
        .fs-close-icon{display:inline-block;transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);line-height:1}
        .fs-close-btn:hover .fs-close-icon{transform:rotate(90deg)}
        .fs-zoom-bar{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:14px;z-index:100000;background:rgba(0,0,0,0.65);padding:10px 22px;border-radius:50px;border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(10px)}
        .fs-zoom-btn{background:none;border:2px solid;border-radius:50%;width:36px;height:36px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;transition:all .25s}
        .fs-zoom-btn:hover{color:#000 !important}
      `}</style>

      <AnimationBg key={activeChar} charId={activeChar} />

      {isFullscreen && (
        <div className="fs-overlay">
          <AnimationBg key={"fs-" + activeChar} charId={activeChar} />
          <button className="fs-close-btn" onClick={toggleFullscreen}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = c.accent; b.style.color = "#000"; b.style.boxShadow = `0 0 20px ${c.accent}`; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(20,20,20,0.85)"; b.style.color = c.accent; b.style.boxShadow = `0 0 8px ${c.glow}`; }}
            style={{ border: `2px solid ${c.accent}`, color: c.accent, boxShadow: `0 0 8px ${c.glow}` }}>
            <span className="fs-close-icon">✕</span>
          </button>
          <div ref={fsContainerRef} style={{ flex: 1, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", position: "relative" }}
            onMouseDown={e => { if (fsScale <= 1) return; setFsDragging(true); setFsDragStart({ x: e.clientX - fsOffset.x, y: e.clientY - fsOffset.y }); e.preventDefault(); }}>
            <img ref={fsAvatarRef} src={c.avatar} alt={c.name} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
              style={{ height: "95vh", maxWidth: "100%", objectFit: "contain", objectPosition: "bottom center", transform: `translate(${fsOffset.x}px,${fsOffset.y}px) scale(${fsScale})`, transition: fsDragging ? "none" : "transform .1s", cursor: fsScale > 1 ? "grab" : "default", userSelect: "none", position: "relative", zIndex: 1 }} />
          </div>
          <div className="fs-zoom-bar">
            <button className="fs-zoom-btn" style={{ borderColor: c.accent, color: c.accent }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = c.accent; b.style.color = "#000"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.color = c.accent; }}
              onClick={() => { const ns = Math.max(fsScale - 0.25, 1); setFsScale(ns); updateFsTransform(ns, fsOffset.x, fsOffset.y); }}>−</button>
            <input type="range" min="1" max="4" step="0.05" value={fsScale}
              onChange={e => { const ns = parseFloat(e.target.value); setFsScale(ns); updateFsTransform(ns, fsOffset.x, fsOffset.y); }}
              style={{ width: 120, accentColor: c.accent, cursor: "pointer" }} />
            <button className="fs-zoom-btn" style={{ borderColor: c.accent, color: c.accent }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = c.accent; b.style.color = "#000"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.color = c.accent; }}
              onClick={() => { const ns = Math.min(fsScale + 0.25, 4); setFsScale(ns); updateFsTransform(ns, fsOffset.x, fsOffset.y); }}>+</button>
            <span style={{ color: "#888", fontSize: 12, minWidth: 38, textAlign: "center", fontFamily: "'Lexend',sans-serif" }}>{Math.round(fsScale * 100)}%</span>
          </div>
        </div>
      )}

      <nav style={{ position: "relative", zIndex: 100, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px 0 0", background: "rgba(2,5,10,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontFamily: "'Lexend',sans-serif", flexShrink: 0 }}>
        <div style={{ width: 70, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <img src="/Gambar/Logo.png" alt="V-Unity Logo" style={{ width: 36, height: 36, borderRadius: 6, objectFit: "contain" }} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} />
        </div>
        <span style={{ fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: 1, flex: 1, paddingLeft: 8 }}>THE FOUNDER</span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button onClick={onBack}
            style={{ background: "none", border: "none", color: "#888", fontSize: 14, cursor: "pointer", fontFamily: "'Lexend',sans-serif", transition: "color .3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = c.accent; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#888"; }}>
            ← Back
          </button>
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 5, display: "flex", flex: 1, overflow: "hidden", fontFamily: "'Lexend',sans-serif" }}>
        <aside style={{ width: 70, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 0", gap: 15, borderRight: "1px solid rgba(255,255,255,0.05)", zIndex: 10, overflowY: "auto", background: "rgba(2,5,10,0.75)", backdropFilter: "blur(8px)" }}>
          {charIds.map(id => {
            const ch = CHARACTERS[id]; const isOn = id === activeChar;
            return (
              <button key={id} className="av-btn" title={ch.name} onClick={() => switchChar(id)}
                style={{ borderColor: isOn ? ch.accent : undefined, boxShadow: isOn ? `0 0 15px ${ch.accent}` : undefined, transform: isOn ? "scale(1.1)" : undefined }}>
                <img src={ch.avatarThumb} alt={ch.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} />
              </button>
            );
          })}
          <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.1)", opacity: .3 }} />
        </aside>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", overflow: "hidden", position: "relative" }}>
          <div ref={containerRef} style={{ flex: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden" }}>
            <img ref={avatarRef} src={c.avatar} alt={c.name} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()}
              style={{ height: "100%", maxWidth: "100%", objectFit: "contain", objectPosition: "bottom center", transform: `translate(${offset.x}px,${offset.y}px) scale(${scale})`, transition: dragging ? "none" : "transform .1s", cursor: scale > 1 ? "grab" : "default", userSelect: "none" }}
              onMouseDown={e => { if (scale <= 1) return; setDragging(true); setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y }); e.preventDefault(); }} />
          </div>
          <div style={{ flexShrink: 0, marginBottom: 20, display: "flex", alignItems: "center", gap: 15, background: "rgba(0,0,0,0.5)", padding: "10px 20px", borderRadius: 50, border: "1px solid rgba(255,255,255,0.1)" }}>
            {([["−", -0.2], ["+", 0.2]] as [string, number][]).map(([lbl, d]) => (
              <button key={lbl} onClick={() => { const ns = Math.min(Math.max(scale + d, 1), 3); setScale(ns); updateTransform(ns, offset.x, offset.y); }}
                style={{ background: "none", border: `2px solid ${c.accent}`, color: c.accent, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: ".3s" }}
                onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = c.accent; b.style.color = "#000"; }}
                onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.color = c.accent; }}>
                {lbl}
              </button>
            ))}
            <input type="range" min="1" max="3" step="0.1" value={scale}
              onChange={e => { const ns = parseFloat(e.target.value); setScale(ns); updateTransform(ns, offset.x, offset.y); }}
              style={{ width: 100, accentColor: c.accent, cursor: "pointer" }} />
            <button onClick={toggleFullscreen} title="Fullscreen"
              style={{ background: "none", border: `2px solid ${c.accent}`, color: c.accent, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: ".3s", flexShrink: 0 }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = c.accent; b.style.color = "#000"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "none"; b.style.color = c.accent; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
            </button>
          </div>
        </div>

        <div style={{ width: 500, flexShrink: 0, background: "rgba(2,5,10,0.9)", padding: "30px 35px 30px 30px", borderLeft: "1px solid rgba(255,255,255,0.05)", overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column", gap: 20, height: "100%", zIndex: 10 }}>
          <div>
            <span style={{ fontSize: 10, color: c.accent, background: c.glow, padding: "4px 10px", borderRadius: 4, border: `1px solid ${c.accent}`, display: "inline-block", letterSpacing: 1 }}>{c.type}</span>
            <h1 style={{ fontSize: 32, fontWeight: 600, color: "#fff", marginTop: 10 }}>{c.name}</h1>
            <p style={{ fontSize: 14, color: "#666" }}>{c.alias}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 50, background: "rgba(0,255,100,0.1)", color: "#00ff66", border: "1px solid rgba(0,255,100,0.2)" }}>● ACTIVE</span>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 50, background: "rgba(162,155,254,0.1)", color: "#a29bfe", border: "1px solid rgba(162,155,254,0.2)" }}>● INDIE</span>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.05)", flexShrink: 0 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {([["NICKNAMES", c.nick], ["LANGUAGE", c.lang], ["DEBUT DATE", c.debut], ["BIRTHDAY", c.bday]] as [string, string][]).map(([label, val]) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: 15, borderRadius: 12, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: c.accent, borderRadius: "12px 12px 0 0" }} />
                <span style={{ fontSize: 10, color: "#444", letterSpacing: 1 }}>{label}</span>
                <p style={{ fontSize: 14, color: "#ccc", marginTop: 5, fontWeight: 600 }}>{val}</p>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.05)", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 11, color: "#444", letterSpacing: 1, marginBottom: 10 }}>OFFICIAL SOCIALS</p>
            <div style={{ display: "flex", gap: 15 }}>
              {Object.entries(c.socials).map(([k, v]) => <SocialIcon key={k} platform={k} url={v} accent={c.accent} />)}
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.05)", flexShrink: 0 }} />
          <div style={{ display: "flex", gap: 8 }}>
            {([["debut-video", "Debut Video"], ["char-sheet", "Charsheet"], ["story", "Story"]] as [string, string][]).map(([id, lbl]) => (
              <button key={id} onClick={() => setActiveTab(id)}
                style={{ flex: 1, padding: "10px 12px", textAlign: "center", borderRadius: 10, background: activeTab === id ? c.glow : "rgba(255,255,255,0.03)", border: `1px solid ${activeTab === id ? c.accent : "rgba(255,255,255,0.1)"}`, fontSize: 12, color: activeTab === id ? c.accent : "#666", cursor: "pointer", transition: ".3s", fontFamily: "'Lexend',sans-serif" }}>
                {lbl}
              </button>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {activeTab === "debut-video" && (
              <a key={activeChar + "dv"} className="tab-content-anim" href={`https://www.youtube.com/watch?v=${c.debutVid}`} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: 15, overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                  <img src={`https://i.ytimg.com/vi/${c.debutVid}/maxresdefault.jpg`} alt="debut" onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
                    <span style={{ fontSize: 40, color: c.accent }}>▶</span>
                  </div>
                </div>
              </a>
            )}
            {activeTab === "char-sheet" && c.charsheet && (
              <img key={activeChar + "cs"} className="tab-content-anim" src={c.charsheet} alt="charsheet" onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} style={{ width: "100%", borderRadius: 15, border: "1px solid rgba(255,255,255,0.1)" }} />
            )}
            {activeTab === "char-sheet" && !c.charsheet && (
              <div key={activeChar + "ncs"} className="tab-content-anim" style={{ padding: 30, textAlign: "center", color: "#444", fontSize: 14 }}>Charsheet not available yet.</div>
            )}
            {activeTab === "story" && (
              <div key={activeChar + "st"} className="tab-content-anim" style={{ padding: 15, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#aaa", whiteSpace: "pre-wrap", textAlign: "justify" }}>{c.story}</p>
              </div>
            )}
          </div>
          <div style={{ height: 30, flexShrink: 0 }} />
        </div>
      </div>
    </div>
  );
}

// ── MARQUEE ROW ───────────────────────────────────────────────────────────────
function MarqueeRow({ cards, onCardClick, onCardMouseMove, shakeCard, hoveredCard, setHoveredCard }: {
  cards: typeof TALENT_CARDS;
  onCardClick: (card: typeof TALENT_CARDS[0]) => void;
  onCardMouseMove: (e: React.MouseEvent, ref: HTMLDivElement | null) => void;
  shakeCard: string | null; hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0); const rafRef = useRef(0);
  const isDragging = useRef(false); const dragStartX = useRef(0);
  const dragStartOffset = useRef(0); const velocityRef = useRef(0);
  const lastClientX = useRef(0); const isPaused = useRef(false);
  const halfWidthRef = useRef(0); const SPEED = -0.45;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => { halfWidthRef.current = track.scrollWidth / 2; };
    measure(); window.addEventListener("resize", measure);
    const animate = () => {
      if (!isDragging.current) {
        if (isPaused.current) {
          velocityRef.current *= 0.90; offsetRef.current += velocityRef.current;
          if (Math.abs(velocityRef.current) < 0.05) { isPaused.current = false; velocityRef.current = 0; }
        } else { offsetRef.current += SPEED; }
        const hw = halfWidthRef.current;
        if (offsetRef.current <= -hw) offsetRef.current += hw;
        if (offsetRef.current > 0) offsetRef.current -= hw;
      }
      if (track) track.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", measure); };
  }, []);

  const startDrag = (clientX: number) => { isDragging.current = true; isPaused.current = true; dragStartX.current = clientX; dragStartOffset.current = offsetRef.current; lastClientX.current = clientX; velocityRef.current = 0; document.body.style.userSelect = "none"; };
  const moveDrag = (clientX: number) => {
    if (!isDragging.current) return;
    velocityRef.current = clientX - lastClientX.current; lastClientX.current = clientX;
    let next = dragStartOffset.current + (clientX - dragStartX.current);
    const hw = halfWidthRef.current;
    if (next <= -hw) next += hw; if (next > 0) next -= hw; offsetRef.current = next;
  };
  const endDrag = () => { if (!isDragging.current) return; isDragging.current = false; document.body.style.userSelect = ""; };

  return (
    <div onMouseDown={e => startDrag(e.clientX)} onMouseMove={e => moveDrag(e.clientX)} onMouseUp={endDrag} onMouseLeave={endDrag}
      onTouchStart={e => startDrag(e.touches[0].clientX)} onTouchMove={e => { e.preventDefault(); moveDrag(e.touches[0].clientX); }} onTouchEnd={endDrag}
      style={{ position: "relative", overflow: "hidden", cursor: "grab" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right,rgba(11,13,20,1),transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left,rgba(11,13,20,1),transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div ref={trackRef} style={{ display: "flex", flexDirection: "row", gap: 24, width: "max-content", paddingBottom: 28, paddingTop: 10, willChange: "transform" }}>
        {[...cards, ...cards].map((card, idx) => (
          <div key={idx} style={{ flexShrink: 0 }}>
            <TalentCard card={card} onCardClick={onCardClick} onMouseMove={onCardMouseMove} shake={shakeCard === card.id} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── HEADER ANIMATION ─────────────────────────────────────────────────────────
function HeaderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let t = 0;

    const colors = ["#49c9ff", "#fff17f", "#b797cf", "#29d34d", "#ff80ff", "#ff9f5e", "#5effd8"];
    const rgbColors = colors.map(hex => {
      const val = parseInt(hex.slice(1), 16);
      return { r: (val >> 16) & 255, g: (val >> 8) & 255, b: val & 255 };
    });

    // Floating orbs (large, slow, glowy)
    const orbs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 80 + Math.random() * 140,
      phase: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.004,
      driftX: (Math.random() - 0.5) * 0.35,
      driftY: (Math.random() - 0.5) * 0.35,
      color: rgbColors[i % rgbColors.length],
    }));

    // Small particles (fast, sharp)
    const particles = Array.from({ length: 120 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() * 0.55) * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() * 0.75) * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * 5 + 1.5,
      life: Math.random(),
      lifeSpeed: 0.003 + Math.random() * 0.004,
      color: rgbColors[i % rgbColors.length],
    }));

    // Star/sparkle points
    const stars = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      twinkle: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.04,
    }));

    // Shooting stars
    const shoots: { x: number; y: number; vx: number; vy: number; len: number; alpha: number; active: boolean }[] = [];
    const spawnShoot = () => {
      shoots.push({
        x: Math.random() * w * 0.7,
        y: Math.random() * h * 0.4,
        vx: 6 + Math.random() * 6,
        vy: 2 + Math.random() * 3,
        len: 80 + Math.random() * 120,
        alpha: 1,
        active: true,
      });
    };
    let shootTimer = 0;

    const resize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const animate = () => {
      t++;
      ctx.clearRect(0, 0, w, h);

      // === Draw orbs ===
      orbs.forEach(orb => {
        orb.x += orb.driftX + Math.sin(t * orb.speed + orb.phase) * 0.5;
        orb.y += orb.driftY + Math.cos(t * orb.speed * 0.7 + orb.phase) * 0.4;

        if (orb.x < -orb.r) orb.x = w + orb.r;
        if (orb.x > w + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = h + orb.r;
        if (orb.y > h + orb.r) orb.y = -orb.r;

        // opacity diturunkan ~50%
        const pulse =
          0.22 + 0.08 * Math.sin(t * orb.speed * 2 + orb.phase);

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );

        grad.addColorStop(
          0,
          `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${pulse})`
        );

        grad.addColorStop(
          0.5,
          `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${pulse * 0.8})`
        );

        grad.addColorStop(
          1,
          `rgba(${orb.color.r},${orb.color.g},${orb.color.b},0)`
        );

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // === Draw stars ===
      stars.forEach(s => {
        s.twinkle += s.speed;
        const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      // === Draw particles ===
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += p.lifeSpeed;

        if (p.life > 1) p.life = 0;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // opacity diturunkan ~50%
        const alpha =
          0.35 + 0.15 * Math.sin(p.life * Math.PI);

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );

        grad.addColorStop(
          0,
          `rgba(${p.color.r},${p.color.g},${p.color.b},${alpha})`
        );

        grad.addColorStop(
          1,
          `rgba(${p.color.r},${p.color.g},${p.color.b},0)`
        );

        ctx.shadowBlur = 20;
        ctx.shadowColor =
          `rgb(${p.color.r},${p.color.g},${p.color.b})`;

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // === Shooting stars ===
      shootTimer++;
      if (shootTimer > 140) { spawnShoot(); shootTimer = 0; }
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.x += s.vx; s.y += s.vy; s.alpha -= 0.022;
        if (s.alpha <= 0 || s.x > w + 50) { shoots.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.len / s.vx), s.y - s.vy * (s.len / s.vx));
        const sGrad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.vy * (s.len / s.vx));
        sGrad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        sGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = sGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, mixBlendMode: "screen", transform: "translateZ(0)" }} />;
}

// ── ANIMATED HEADER TEXT ──────────────────────────────────────────────────────
function AnimatedHeaderText() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing" | "done">("typing");
  const fullText = "Welcome to V-Unity!";
  const indexRef = useRef(0);
  const phaseRef = useRef<"typing" | "pause" | "erasing" | "done">("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (phaseRef.current === "typing") {
        if (indexRef.current < fullText.length) {
          indexRef.current++;
          setDisplayed(fullText.slice(0, indexRef.current));
          timer = setTimeout(tick, 68 + Math.random() * 55);
        } else {
          phaseRef.current = "pause";
          setPhase("pause");
          timer = setTimeout(tick, 2800);
        }
      } else if (phaseRef.current === "pause") {
        phaseRef.current = "erasing";
        setPhase("erasing");
        tick();
      } else if (phaseRef.current === "erasing") {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayed(fullText.slice(0, indexRef.current));
          timer = setTimeout(tick, 38 + Math.random() * 30);
        } else {
          phaseRef.current = "done";
          setPhase("done");
          timer = setTimeout(() => {
            phaseRef.current = "typing";
            setPhase("typing");
            tick();
          }, 1200);
        }
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  const showCursor = phase !== "done";

  return (
    <div style={{ position: "relative", zIndex: 1, display: "inline-block" }}>
      <style>{`
        @keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes textGlow{0%,100%{text-shadow:0 0 20px rgba(255,255,255,0.15),0 0 40px rgba(125,200,255,0.08)}50%{text-shadow:0 0 35px rgba(255,255,255,0.28),0 0 70px rgba(125,200,255,0.18)}}
        @keyframes shimmerText{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .header-main-text{
          font-family:'Playfair Display', Georgia, serif;
          font-size:clamp(48px, 8vw, 84px);
          font-weight:500;
          background:linear-gradient(90deg,#fff 0%,#7dd3fc 25%,#fff 50%,#f0c8ff 75%,#fff 100%);
          background-size:200% 200%;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmerText 5s ease-in-out infinite, textGlow 4s ease-in-out infinite;
          letter-spacing:1px;
          line-height:1.2;
          min-height:1.2em;
          display:inline;
        }
        .header-cursor{
          display:inline-block;
          width:3px;
          height:0.85em;
          background:linear-gradient(180deg,#7dd3fc,#f0c8ff);
          border-radius:2px;
          margin-left:4px;
          vertical-align:middle;
          animation:cursorBlink 1s step-end infinite;
          box-shadow:0 0 8px rgba(125,211,252,0.6);
        }
      `}</style>
      <span className="header-main-text">{displayed}</span>
      {showCursor && <span className="header-cursor" />}
    </div>
  );
}

// ── LANDING PAGE ──────────────────────────────────────────────────────────────
function LandingPage({ onOpenTalent }: { onOpenTalent: (id: string) => void }) {
  const [aboutTab, setAboutTab] = useState("Story");
  const [headerHidden, setHeaderHidden] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [shakeCard, setShakeCard] = useState<string | null>(null);
  const lastScroll = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur <= 0) { setHeaderHidden(false); return; }
      if (Math.abs(cur - lastScroll.current) < 5) return;
      setHeaderHidden(cur > lastScroll.current); lastScroll.current = cur;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
  const handleCardClick = (card: typeof TALENT_CARDS[0]) => {
    if (card.locked) { setShakeCard(card.id); setTimeout(() => setShakeCard(null), 500); return; }
    onOpenTalent(card.id);
  };
  const handleCardMouseMove = (e: React.MouseEvent, cardRef: HTMLDivElement | null) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    cardRef.style.transform = `perspective(1000px) rotateX(${((y - cy) / cy) * -15}deg) rotateY(${((x - cx) / cx) * 15}deg) scale3d(1.05,1.05,1.05)`;
    cardRef.style.setProperty("--light-x", `${100 - (x / rect.width) * 100}%`);
    cardRef.style.setProperty("--light-y", `${100 - (y / rect.height) * 100}%`);
    cardRef.style.setProperty("--light-opacity", "0.4");
  };

  return (
    <div style={{ background: "radial-gradient(circle at center,#0d0b14,#16131c,#0b1210)", color: "#e5e7eb", minHeight: "100vh", overflowX: "hidden", position: "relative" }}
      onMouseMove={handleMouseMove}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Palanquin:wght@300;400;500;600&family=Palanquin+Dark:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
        html,body{margin:0;padding:0;background-color:#0b0d14;overflow-x:hidden}
        @keyframes shimmer{0%{background-position:0 0}100%{background-position:200px 200px}}
        @keyframes fadeHero{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
        @keyframes shakeCard{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
        .talent-card-item{transition:box-shadow .3s,transform .2s}
        .talent-card-item::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(circle at var(--light-x,50%) var(--light-y,50%),rgba(255,255,255,var(--light-opacity,0)) 0%,transparent 60%);mix-blend-mode:overlay;transition:opacity .3s;opacity:0}
        .talent-card-item:hover::before{opacity:1}
        .social-item-land{transition:all .3s ease}
        .social-item-land:hover{transform:translateY(-6px);background:#7dd3fc !important;border-color:#7dd3fc !important;color:#0b0d14 !important}
        .social-item-land:hover i,.social-item-land:hover span{color:#0b0d14 !important}
        .tab-land{transition:all .3s ease}.tab-land:hover{transform:translateY(-6px) scale(1.04)}
      `}</style>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999, background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px,rgba(125,180,252,0.08),transparent)` }} />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px)", backgroundSize: "55px 55px", opacity: .35, animation: "shimmer 20s linear infinite" }} />

      <header style={{ position: "fixed", width: "100%", top: 0, left: 0, background: "rgba(18, 15, 28, 0.45)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "8px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1000, transition: "transform 0.3s ease", transform: headerHidden ? "translateY(-100%)" : "none" }}>
        <img src="/Gambar/Logo.png" alt="V-Unity Logo" style={{ width: 70, height: 70, borderRadius: 10, objectFit: "contain" }} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} />
        <nav style={{ display: "flex", gap: 50, marginRight: 25, alignItems: "center" }}>
          {([["About", "about"], ["Talent", "Talent"]] as [string, string][]).map(([label, anchor]) => (
            <a key={label} href={`#${anchor}`}
              style={{ textDecoration: "none", color: "white", fontSize: 23, fontFamily: "'Cal Sans',sans-serif", transition: "color .3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#7dd3fc"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" style={{ position: "relative", minHeight: "100vh", padding: "100px 30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", animation: "fadeHero 1s ease" }}>
        <HeaderAnimation />
        <AnimatedHeaderText />
      </section>

      <section id="about" style={{ minHeight: "100vh", padding: "120px 30px 100px", textAlign: "center", fontFamily: "'Palanquin',sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 0, flexWrap: "wrap" }}>
          {([["About Us", "Story"], ["Social Media", "Sosmed"]] as [string, string][]).map(([lbl, tab]) => {
            const isActive = aboutTab === tab;
            return (
              <button key={lbl} className="tab-land" onClick={() => setAboutTab(tab)}
                style={{ minWidth: 280, padding: "18px 55px", borderRadius: 12, cursor: "pointer", fontSize: 20, fontFamily: "'Cal Sans',sans-serif", color: isActive ? "#fff" : "#e0d4f5", border: "1px solid transparent", background: isActive ? "linear-gradient(135deg,rgba(125,211,252,0.18),rgba(244,114,182,0.18)) padding-box,linear-gradient(135deg,#7dd3fc,#f472b6) border-box" : "linear-gradient(#16131c,#16131c) padding-box,linear-gradient(135deg,#7dd3fc,#f472b6) border-box", boxShadow: isActive ? "0 0 22px rgba(125,211,252,0.25)" : "none", transition: "all .3s" }}>
                {lbl}
              </button>
            );
          })}
        </div>
        <div style={{ marginTop: 20, position: "relative", zIndex: 1 }}>
          {aboutTab === "Story" && (
            <div>
              <h2 style={{ color: "#fff", fontSize: 52, marginTop: 50, fontFamily: "'Palanquin Dark',sans-serif" }}>Bahasa</h2>
              <p style={{ lineHeight: 1.6, fontSize: 23, color: "#fff", textAlign: "justify", margin: "20px auto", maxWidth: 700 }}>V-Unity adalah komunitas VTuber yang lahir dari semangat kolaborasi dan kebersamaan di dunia maya. Kami hadir sebagai wadah bagi para kreator digital dari berbagai latar belakang — mulai dari VTuber, streamer, artist, video editor, hingga vocal mixer — untuk tumbuh, berkarya, dan saling mendukung.</p>
              <h2 style={{ color: "#fff", fontSize: 52, marginTop: 50, fontFamily: "'Palanquin Dark',sans-serif" }}>English</h2>
              <p style={{ lineHeight: 1.6, fontSize: 23, color: "#fff", textAlign: "justify", margin: "20px auto", maxWidth: 700 }}>V-Unity is a VTuber community born from the spirit of collaboration and togetherness online. We serve as a platform for digital creators from various backgrounds — from VTubers and streamers to artists and video editors to vocal mixers — to grow, create, and support each other.</p>
            </div>
          )}
          {aboutTab === "Sosmed" && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 18, marginTop: 28 }}>
              {[
                { href: "https://instagram.com/v.unityy", icon: "fab fa-instagram", label: "Instagram" },
                { href: "https://www.x.com/@V_Unityy", icon: "fab fa-x-twitter", label: "X" },
                { href: "https://discord.gg/qFfgFuskex", icon: "fab fa-discord", label: "Discord" },
                { href: "https://www.youtube.com/@V-Unity5", icon: "fab fa-youtube", label: "YouTube" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-item-land"
                  style={{ width: 320, height: 76, padding: "0 28px", borderRadius: 16, display: "flex", alignItems: "center", gap: 18, color: "white", fontSize: 22, textDecoration: "none", border: "1px solid transparent", background: "linear-gradient(#13101e,#13101e) padding-box,linear-gradient(135deg,#7dd3fc,#f472b6) border-box", position: "relative", overflow: "hidden" }}>
                  <i className={icon} />
                  <span style={{ fontSize: 18, fontFamily: "'Palanquin',sans-serif", fontWeight: 500 }}>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="Talent" style={{ minHeight: "100vh", padding: "100px 0", textAlign: "center", fontFamily: "'Palanquin',sans-serif" }}>
        <h2 style={{ fontFamily: "'Cal Sans',sans-serif", fontWeight: 400, fontSize: 85, color: "#fff", marginBottom: 40 }}>Talent</h2>
        <MarqueeRow cards={TALENT_CARDS} onCardClick={handleCardClick} onCardMouseMove={handleCardMouseMove} shakeCard={shakeCard} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
      </section>

      <footer style={{ textAlign: "center", padding: 20, background: "#0b0d14", color: "#e5e7eb" }}>
        <p>© V-Unity 2026</p>
      </footer>
    </div>
  );
}

// ── TALENT CARD ───────────────────────────────────────────────────────────────
function TalentCard({ card, onCardClick, onMouseMove, shake, hoveredCard, setHoveredCard }: {
  card: typeof TALENT_CARDS[0];
  onCardClick: (card: typeof TALENT_CARDS[0]) => void;
  onMouseMove: (e: React.MouseEvent, ref: HTMLDivElement | null) => void;
  shake: boolean; hoveredCard: string | null; setHoveredCard: (id: string | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { bg, glow } = CARD_COLORS[card.color];
  const isHovered = hoveredCard === card.id;
  const charData = CHARACTERS[card.id];
  return (
    <div ref={cardRef} className="talent-card-item"
      style={{ width: 240, height: 460, borderRadius: 20, background: bg, border: "1px solid rgba(255,255,255,0.12)", position: "relative", cursor: card.locked ? "not-allowed" : "pointer", overflow: "hidden" }}
      onClick={() => onCardClick(card)}
      onMouseMove={e => { setHoveredCard(card.id); onMouseMove(e, cardRef.current); }}
      onMouseLeave={() => {
        setHoveredCard(null);
        if (cardRef.current) { cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"; cardRef.current.style.setProperty("--light-opacity", "0"); }
      }}>
      <img src={charData.avatarThumb} alt={card.name} onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} style={{ width: "100%", height: "100%", marginTop: 30, objectFit: "cover", objectPosition: "center top", transform: isHovered ? "translateY(-20px)" : "none", transition: "transform .2s ease" }} />
      {card.locked && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 4 }}>
          <span style={{ fontSize: 40 }}>🔒</span>
        </div>
      )}
      <div style={{ position: "absolute", bottom: 0, left: 5, right: 5, padding: "8px 8px 10px", textAlign: "center", marginBottom: 5, border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 15, background: GLASS_COLORS[card.color], backdropFilter: "blur(20px)", zIndex: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <p style={{ fontSize: 13, letterSpacing: 1, opacity: 0.85, margin: 0, color: isHovered ? "#fff" : "#0b0d14", textShadow: isHovered ? "0 0 10px rgba(125,211,252,0.6)" : "none", transition: ".3s", fontFamily: "'Palanquin',sans-serif", fontWeight: 700 }}>• {card.label} •</p>
        <h2 style={{ fontFamily: "'Cal Sans',sans-serif", fontWeight: 400, fontSize: 21, margin: 0, lineHeight: 1.15, color: isHovered ? "#fff" : "#0b0d14", textShadow: isHovered ? "0 0 10px rgba(125,211,252,0.6)" : "none", transition: ".3s" }}>{card.name}</h2>
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<"landing" | "talent">("landing");
  const [selectedChar, setSelectedChar] = useState("tako");

  // ── Blokir klik kanan, drag, dan shortcut download ────────────────────────
  useEffect(() => {
    const blockContext = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") e.preventDefault();
    };
    const blockKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "S", "u", "U"].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && ["i", "I", "j", "J"].includes(e.key)) ||
        e.key === "F12"
      ) e.preventDefault();
    };
    const blockDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("dragstart", blockDrag);
    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  const openTalent = (charId: string) => { setSelectedChar(charId); setPage("talent"); };
  const goHome = () => setPage("landing");

  if (page === "talent") return <TalentDetailPage charId={selectedChar} onBack={goHome} />;
  return <LandingPage onOpenTalent={openTalent} />;
}