import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import autoprefixer from 'autoprefixer';

// ✅ -webkit-text-size-adjust 제거용 PostCSS 커스텀 플러그인
const removeWebkitTextSizeAdjust = (): any => ({
  postcssPlugin: 'remove-webkit-text-size-adjust',
  Declaration(decl: any) {
    if (decl.prop === '-webkit-text-size-adjust') {
      decl.remove();
    }
  },
});
removeWebkitTextSizeAdjust.postcss = true;

// ✅ -webkit-match-parent 제거용 PostCSS 커스텀 플러그인
const removeWebkitMatchParent = (): any => ({
  postcssPlugin: 'remove-webkit-match-parent',
  Declaration(decl: any) {
    if (decl.prop === 'text-align' && decl.value === '-webkit-match-parent') {
      decl.remove();
    }
  },
});
removeWebkitMatchParent.postcss = true;

// ✅ color-adjust 제거용 PostCSS 플러그인
const removeColorAdjust = (): any => ({
  postcssPlugin: 'remove-color-adjust',
  Declaration(decl: any) {
    if (decl.prop === 'color-adjust') {
      decl.remove();
    }
  },
});
removeColorAdjust.postcss = true;

export default defineConfig({
  base: '/mpc-react/',
  plugins: [react(), svgr()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler', quietDeps: true },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'edge >= 140',
            'chrome >= 54',
            'chromeandroid >= 54',
            'firefox >= 52',
            '>0.2%',
            'not dead',
            'not op_mini all',
          ],
          flexbox: 'no-2009',
        }),
        // ✅ 타입 충돌 방지 위해 any 단언
        removeWebkitTextSizeAdjust() as any,
        removeWebkitMatchParent() as any,
        removeColorAdjust() as any,
      ],
    },
  },
  build: {
    rollupOptions: {
      input: { main: path.resolve(__dirname, 'index.html') },
    },
  },
  server: {
    watch: { ignored: ['!**/*.tsx', '!**/*.ts', '!**/*.scss'] },
  },
});
