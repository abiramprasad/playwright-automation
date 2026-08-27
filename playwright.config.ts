// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  workers: 2,

  // Retry once on failure (for flakiness)
  retries: 1,

  // Timeout for each test
  timeout: 30000,

  // Reporter
  reporter: [
    ['html', { open: 'on-failure' }],
    ['list']
  ],

  use: {
    // Base URL — reads from .env
    baseURL: process.env.BASE_URL || 'https://practicetestautomation.com',

    // On failure: take screenshot + keep video
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Trace on retry (for debugging)
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});