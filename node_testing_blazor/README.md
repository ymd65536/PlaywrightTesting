# node_testing

## 手順

Microsoft Playwright Testingを使ってテストする場合のサンプル

### パッケージのインストール

```bash
npm install
```

### Node.jsでテスト

```bash
npx playwright test --config=playwright.service.config.ts --workers=1
```

### 環境変数のセットアップ

```bash
PLAYWRIGHT_SERVICE_ACCESS_TOKEN={MY-ACCESS-TOKEN}
PLAYWRIGHT_SERVICE_URL={MY-REGION-ENDPOINT}
```

### playwright.service.config.tsを作成する

```typescript
import { defineConfig } from '@playwright/test';
import config from './playwright.config';
import dotenv from 'dotenv';

dotenv.config();

process.env.PLAYWRIGHT_SERVICE_RUN_ID = process.env.PLAYWRIGHT_SERVICE_RUN_ID || new Date().toISOString();

const os = process.env.PLAYWRIGHT_SERVICE_OS || 'linux';

export default defineConfig(config, {
  workers: 1,

  ignoreSnapshots: false,
  snapshotPathTemplate: `{testDir}/__screenshots__/{testFilePath}/${os}/{arg}{ext}`,
  
  use: {
    // Specify the service endpoint.
    connectOptions: {
      wsEndpoint: `${process.env.PLAYWRIGHT_SERVICE_URL}?cap=${JSON.stringify({
        // Can be 'linux' or 'windows'.
        os,
        runId: process.env.PLAYWRIGHT_SERVICE_RUN_ID
      })}`,
      timeout: 30000,
      headers: {
        'x-mpt-access-key': process.env.PLAYWRIGHT_SERVICE_ACCESS_TOKEN!
      },
      // Allow service to access the localhost.
      exposeNetwork: '<loopback>'
    }
  },

  projects: config.projects? config.projects : [{}]
});
```

### 実行

```bash
npx playwright test tests/foo.spec.ts --config=playwright.service.config.ts
```

## 参考

[クイックスタート: Microsoft Playwright Testing (プレビュー) を使用して、大規模なエンド ツー エンドテストを実行する](https://learn.microsoft.com/ja-jp/azure/playwright-testing/quickstart-run-end-to-end-tests?tabs=playwrightcli)
