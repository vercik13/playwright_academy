// tests/learning/iframe/
// handling_iframes.spec.ts

import { test } from "@playwright/test";

// ? vždy se musí identifikovat iframe, jinak test nebude fungovat

test("Handling Iframes", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]'); // ? pro interakci s iframe (jinym obsahem stranky na stránce) musím použít frameLocator
  await frame.locator("#name").fill("Toto se vyplní do iframu");
});
