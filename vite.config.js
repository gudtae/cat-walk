import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://gudtae.github.io/cat-walk/', 
  build: {
    assetsInlineLimit: 0
  }
});