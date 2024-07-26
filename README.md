# Microsoft Playwrigth Testing

## Microsoft Playwrigth Testingを試す

利用するアプリケーション

[BlazorAppContainer](https://github.com/ymd65536/BlazorAppContainer)

## ブラウザのインストール

```bash
npx playwright install
```

MS Edgeをインストールする場合

```bash
npx playwright install msedge
```

## Node.jsでテスト

```bash
npx playwright test --workers=1
```

## UI Modeを使ってみる

```bash
npx playwright test --ui
```

## レポートを作る

```bash
npx playwright show-report
```

[参考](https://playwright.dev/docs/test-reporters)

## おまけ

### GitHub CI

[参考](https://playwright.dev/docs/ci-intro)

### テストオプション

[参考](https://playwright.dev/docs/api/class-testoptions)

### グローバルにインストール

```bash
npm install -g @playwright/test
```
