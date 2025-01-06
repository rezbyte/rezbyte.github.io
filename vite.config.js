// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        // Workaround for Yarn PNP
        searchForWorkspaceRoot(process.cwd())
      ]
    }
  }
};

export default config;
