import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Navigate to the Playwright documentation homepage before each test.
    await page.goto('https://saucedemo.com/');
});

test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('login and add item to cart', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.getByText("Swag Labs")).toBeVisible();

    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('.shopping_cart_link');

    const cartItem = await page.locator('.cart_item').textContent();
    expect(cartItem).toContain('Sauce Labs Backpack');
});

test('demo login and add item to cart', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page
        .locator('.form_input[placeholder="Password"]')
        .fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText("Swag Labs")).toBeVisible();

    await expect(page.locator(".title")).toHaveText("Products");

    await page.locator('button[data-test^="add-to-cart"]').first().click();
    await page.locator('xpath=//a[@class="shopping_cart_link"]').click();
    await expect(page.locator(".cart_item")).toHaveCount(1);
});

// test('login and add 2 items to cart', async ({ page }) => {
//     await page.fill('#user-name', 'standard_user');
//     await page.fill('#password', 'secret_sauce');
//     await page.click('#login-button');

//     await expect(page).toHaveURL(/inventory/);

//     await page.click('#add-to-cart-sauce-labs-bike-light');
//     await page.click('#add-to-cart-sauce-labs-fleece-jacket');

//     await page.click('.shopping_cart_link');
//     const cartItems = await page.locator('.cart_item').allTextContents();
//     expect(cartItems).toContain('Sauce Labs Bike Light');
//     expect(cartItems).toContain('Sauce Labs Fleece Jacket');
// });