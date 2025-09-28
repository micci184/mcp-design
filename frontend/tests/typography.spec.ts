import { test, expect } from '@playwright/test';

test('Typography component visual regression test', async ({ page }) => {
  // テストページにアクセス
  await page.goto('http://localhost:3000/typography-test');

  // ページが完全に読み込まれるのを待つ（必要に応じて）
  await page.waitForLoadState('networkidle');

  // スクリーンショットを撮影して比較
  // expect(await page.screenshot()).toMatchSnapshot('typography-page.png');
  // 初回実行時は↑をコメントアウトし、ベース画像を生成します。
  // 2回目以降の実行で、差分がないことを確認します。
  await page.screenshot({ path: 'tests/screenshots/typography-page.png', fullPage: true });
});
