import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import autoprefixer from 'autoprefixer';

const createSafeRemoveDeclPlugin = (prop: string, value?: string) => ({
  postcssPlugin: `remove-${prop}`,
  Once(root: any) {
    root.walkDecls((decl: any) => {
      // value가 지정되어 있으면 일치하는 경우 제거
      // value가 없으면 prop만 일치해도 제거
      if (decl.prop === prop && (value === undefined || decl.value === value)) {
        decl.remove();
      }
    });
  },
});
createSafeRemoveDeclPlugin.postcss = true;



export default defineConfig({
  base: '/mpc-react/',
  plugins: [react(), svgr()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  css: {
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
        createSafeRemoveDeclPlugin('-webkit-text-size-adjust') as any,
        createSafeRemoveDeclPlugin('text-align', '-webkit-match-parent') as any,
        createSafeRemoveDeclPlugin('color-adjust') as any,
      ],
    },
  },
build: {
    rollupOptions: {
      input: { main: path.resolve(__dirname, 'index.html') },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    watch: { ignored: ['!**/*.tsx', '!**/*.ts', '!**/*.scss'] },
  },
});