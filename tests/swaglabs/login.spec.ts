import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the Playwright documentation homepage before each test.
    await page.goto('https://saucedemo.com/');
});

test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('login with valid credentials', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
});

test('login with invalid credentials', async ({ page }) => {
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'invalid_password');

    await page.click('#login-button');

    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});

test('login with empty credentials', async ({ page }) => {
    await page.fill('#user-name', '');
    await page.fill('#password', '');

    await page.click('#login-button');

    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Username is required');
});