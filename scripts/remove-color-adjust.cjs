// scripts/remove-color-adjust.cjs
const fs = require('fs');
const path = require('path');

const cssDir = path.resolve(__dirname, '../dist/assets');
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(cssDir, file);
  let css = fs.readFileSync(filePath, 'utf-8');

  // color-adjust 제거
  css = css.replace(/color-adjust:[^;]+;/g, '');

  fs.writeFileSync(filePath, css, 'utf-8');
  console.log(`Removed color-adjust in ${file}`);
});
