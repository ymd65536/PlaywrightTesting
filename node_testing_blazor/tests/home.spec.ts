// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('blazor ui test', async ({ page }) => {
    await page.goto('https://ef6judcqey.ap-northeast-1.awsapprunner.com/');
    const title = page.getByRole('link').filter({ hasText: 'BlazorAppContainer' });
    await expect(title).toHaveText('BlazorAppContainer');
});
