import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig(
  getViteConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'dist/',
          '.astro/',
          '**/*.config.*',
          '**/test/**',
          '**/*.test.*',
          '**/*.spec.*',
        ],
      },
      include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    },
  })
);
