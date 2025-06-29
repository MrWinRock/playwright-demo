import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/inputs');
});

test('Input accpets nunber 123', async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("123");
    await expect(input).toHaveValue('123');
});

test('Input accepts negative number -99', async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("-99");
    await expect(input).toHaveValue('-99');
});

test('ArrowUp increases the number', async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill('10');
    await input.press('ArrowUp');
    await expect(input).toHaveValue('11');
});

test('ArrowDown decreases the number', async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill('10');
    await input.press('ArrowDown');
    await expect(input).toHaveValue('9');
});