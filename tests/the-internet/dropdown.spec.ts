import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/dropdown');
});

test('Dropdown default value should be empty', async ({ page }) => {
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('');
    await expect(dropdown).toHaveValue('');
});

test('Select option 1 from dropdown', async ({ page }) => {
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');
});

test('Select option 2 from dropdown', async ({ page }) => {
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('2');
    await expect(dropdown).toHaveValue('2');
});