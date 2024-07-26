// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('blazor ui test', async ({ page }) => {
    await page.goto('http://localhost:5239/');
    const title = page.getByRole('link').filter({ hasText: 'BlazorAppContainer' });
    await expect(title).toHaveText('BlazorAppContainer');
});
