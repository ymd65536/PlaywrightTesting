# Microsoft Playwrigth Testing

## フォルダの説明

- node: Node.jsでテストする場合のサンプル
- node_report: レポートを作る場合のサンプル
- node_testing: Microsoft Playwright Testingを使ってテストする場合のサンプル
- node_uim: UI Modeを使ってテストする場合のサンプル
- node_uim_localhost: UI Modeを使ってテストする場合のサンプル、localhostのアプリケーションを使う

## Microsoft Playwrigth Testingを試す

### テストに利用するアプリケーション

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

## おまけ

### GitHub CI

[参考](https://playwright.dev/docs/ci-intro)

### テストオプション

[参考](https://playwright.dev/docs/api/class-testoptions)

### グローバルにインストール

```bash
npm install -g @playwright/test
```
