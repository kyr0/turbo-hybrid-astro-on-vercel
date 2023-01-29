import { test, expect } from '@playwright/test'

test('title is correct', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle('Welcome to Hybrid Astro with turborepo!')
})
