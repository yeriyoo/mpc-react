// add-cache-version.js
import fs from "fs";
import path from "path";

const distPath = path.resolve("dist/index.html");
const version = "1.0.0"; // 또는 Date.now() 로 자동화 가능

let html = fs.readFileSync(distPath, "utf8");

// ✅ /assets/ 뿐 아니라 /mpc-react/assets/ 도 포함되도록 정규식 확장
html = html.replace(
  /(\/(?:mpc-react\/)?assets\/[\w.-]+\.(?:js|css))(?!\?v=)/g,
  `$1?v=${version}`
);

fs.writeFileSync(distPath, html, "utf8");
console.log("✅ Cache-busting query added to assets.");
