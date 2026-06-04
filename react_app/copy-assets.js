const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'react_app', 'public', 'Gambar');
const destDir = path.join(__dirname, 'public', 'Gambar');

console.log('Sumber:', srcDir);
console.log('Tujuan:', destDir);

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Error: Folder sumber tidak ditemukan di ${src}`);
    return;
  }
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
    console.log(`Membuat folder tujuan: ${dest}`);
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Berhasil menyalin: ${entry.name}`);
    }
  }
  console.log('\n--- Selesai menyalin semua gambar! ---');
}

copyDir(srcDir, destDir);
