import { test, expect } from '@playwright/test';
test('verify the title of the TTA cartpage', async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");
});
  