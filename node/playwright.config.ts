// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'Microsoft Edge',
            use: {
                channel: 'msedge',
                headless: false,
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