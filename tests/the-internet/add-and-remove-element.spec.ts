import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
});

test('Add 3 elements', async ({ page }) => {

    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');

    await expect(page.locator('button:has-text("Delete")')).toHaveCount(3);
});

test('Add 2 elements and remove 1 element', async ({ page }) => {
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');

    await expect(page.locator('button:has-text("Delete")')).toHaveCount(2);

    await page.click('button:has-text("Delete")');

    await expect(page.locator('button:has-text("Delete")')).toHaveCount(1);
});

test('Add 10 elements and remove 10 elements and add 10 elements', async ({ page }) => {
    for (let i = 0; i < 10; i++) {
        await page.click('button:has-text("Add Element")');
    }
    await expect(page.locator('button:has-text("Delete")')).toHaveCount(10);

    for (let i = 0; i < 10; i++) {
        await page.click('button:has-text("Delete")');
    }
    await expect(page.locator('button:has-text("Delete")')).toHaveCount(0);

    for (let i = 0; i < 10; i++) {
        await page.click('button:has-text("Add Element")');
    }
    await expect(page.locator('button:has-text("Delete")')).toHaveCount(10);
});