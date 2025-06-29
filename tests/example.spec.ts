import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to the Playwright documentation homepage before each test.
  await page.goto('https://playwright.dev/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check the footer', async ({ page }) => {
  // Check if the footer contains the text "Playwright".
  const footer = page.locator('footer');
  await expect(footer).toContainText('Playwright');
});

test('check the navigation menu', async ({ page }) => {
  // Check if the navigation menu contains the text "Docs".
  const navMenu = page.locator('nav');
  await expect(navMenu).toContainText('Docs');
});
