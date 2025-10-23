import { defineConfig, type ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// ⚙️ 개발 서버에서 charset 헤더를 강제로 추가하는 플러그인
function charsetPlugin() {
  return {
    name: 'vite:charset-plugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        try {
          const url = req.url || '';

          // HTML 응답에 대해 charset 명시
          if (url === '/' || url.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
          }

          // SVG 파일에 대해 charset 명시
          if (url.endsWith('.svg')) {
            res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
          }

        } catch {
          // 안전하게 무시
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: '/mpc-react/', 
  plugins: [react(), charsetPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    watch: {
      ignored: ['!**/*.tsx', '!**/*.ts', '!**/*.scss'],
    },
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  },
});
