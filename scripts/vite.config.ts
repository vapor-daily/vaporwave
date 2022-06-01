import { InlineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import { resolve } from 'path';
const root = resolve('src');
const outDir = resolve('dist');
// https://vitejs.dev/config/
export const viteConfig: InlineConfig = {
  mode: process.env['viteMode'] || 'production',
  root,
  base: './',
  esbuild: {
    jsxInject: `import {h,f} from 'ym-web'`,
    jsxFactory: 'h',
    jsxFragment: 'f'
  },
  server: {
    host: '::'
  },
  build: {
    outDir,
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': root
    }
  },
  plugins: [macrosPlugin()]
};
