import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/redirector');
});

test('Redirect from /redirector to /stetus_codes', async ({ page }) => {
    await page.locator('a:has-text("here")').click();
    await expect(page).toHaveURL('/status_codes');
    await expect(page.locator('h3')).toHaveText('Status Codes');
});