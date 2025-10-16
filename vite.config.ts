import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  base: '/', // 배포 시 기본 경로
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ → src 경로
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
      // 기본적으로 무시되는 루트 파일을 감시 대상으로 추가
      ignored: [
        '!**/*.tsx',   // 루트 TSX 파일 감시
        '!**/*.ts',    // 루트 TS 파일 감시
        '!**/*.scss',  // 루트 SCSS 파일 감시
      ],
    },
  },
});
