// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: [['html', { outputFolder: './playwright-report' }]],
    projects: [
        {
            name: 'Microsoft Edge',
            use: {
                channel: 'msedge',
                headless: true,
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                video: 'on',
                screenshot: 'on',
                userAgent: 'playwright-test'
            }
        },
    ],
};

export default config