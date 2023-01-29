import type { PlaywrightTestConfig } from '@playwright/test'

// see: https://playwright.dev/docs/intro
const config: PlaywrightTestConfig = {
  testDir: './src/pages',
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:3000/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
}
export default config
