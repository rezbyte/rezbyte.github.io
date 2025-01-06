// @ts-check

import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as svelteParser from 'svelte-eslint-parser';
import * as typescriptParser from '@typescript-eslint/parser';
import svelteConfig from './svelte.config.js';

export default [
  {
    ignores: [
      '**/DS_Store',
      'node_modules/',
      'docs/',
      '.svelte-kit/',
      '**/package',
      '**/.env',
      '**/.env.*',
      '**/!.env.example',
      // Ignore files for PNPM, NPM and YARN
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/.pnp.cjs',
      '**/.pnp.loader.mjs',
      '.yarn/'
    ]
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  eslintConfigPrettier,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: typescriptParser,
        svelteConfig,
        sourceType: 'module',
        ecmaVersion: 2025,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte']
      }
    }
  }
];
