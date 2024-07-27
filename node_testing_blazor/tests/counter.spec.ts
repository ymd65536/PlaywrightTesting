// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('blazor button test', async ({ page }) => {
    await page.goto('https://ef6judcqey.ap-northeast-1.awsapprunner.com/counter');
    await page.waitForSelector('h1');
    // 秒数待ちはアンチパターン
    await page.waitForTimeout(1000);
    await page.getByText('Current count: 0');
    for (let i = 0; i < 30; i++) {
        await page.getByRole('button').click();
        await page.waitForTimeout(1000);
    }
    await expect(page.getByText('Current count: 30')).toHaveText('Current count: 30');
});
