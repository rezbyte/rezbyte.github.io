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
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  eslintConfigPrettier,
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2025,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json'
      }
    }
  },
  {
    files: ['**/*.svelte'],
    rules: {
      '@typescript-eslint/dot-notation': 'off',
      'svelte/no-target-blank': 'error',
      'svelte/no-dupe-on-directives': 'error',
      'svelte/no-dupe-use-directives': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-store-callbacks-use-set-param': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-inline-styles': 'error',
      'svelte/no-inspect': 'warn',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-svelte-internal': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/prefer-destructured-store-props': 'error',
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/valid-each-key': 'error',
      'svelte/derived-has-same-inputs-outputs': 'warn',
      'svelte/first-attribute-linebreak': 'warn',
      'svelte/html-closing-bracket-new-line': 'warn',
      'svelte/html-closing-bracket-spacing': 'warn',
      'svelte/html-quotes': 'warn',
      'svelte/html-self-closing': 'warn',
      'svelte/indent': 'warn',
      'svelte/max-attributes-per-line': 'warn',
      'svelte/mustache-spacing': 'warn',
      'svelte/no-extra-reactive-curlies': 'warn',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
      'svelte/prefer-class-directive': 'warn',
      'svelte/shorthand-attribute': 'warn',
      'svelte/shorthand-directive': 'warn',
      'svelte/sort-attributes': 'warn',
      'svelte/spaced-html-comment': 'warn',
      'svelte/no-trailing-spaces': 'warn'
    },
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
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte']
      }
    }
  }
];
