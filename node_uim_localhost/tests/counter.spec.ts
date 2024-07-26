// tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('blazor button test', async ({ page }) => {
    await page.goto('http://localhost:5239/counter');
    await page.getByText('0');
    for (let i = 0; i < 100; i++) {
        await page.getByRole('button').click();
        await page.waitForTimeout(100);
    }
    await expect(page.getByText('100')).toHaveText('100');
});
