import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/checkboxes');
});

test('Checkbox 1 should not be checked initialy', async ({ page }) => {
    const checkbox1 = page.locator('input[type="checkbox"]').first();
    await expect(checkbox1).not.toBeChecked();
});

test('Checkbox 2 should be checked initialy', async ({ page }) => {
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    await expect(checkbox2).toBeChecked();

});

test('Check checkbox 1 and verify', async ({ page }) => {
    const checkbox1 = page.locator('input[type="checkbox"]').first();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
});