import { expect, test } from "@playwright/test";

test("Mocking API", async ({ page }) => {
  const username = "fifka_petr";
  const password = "Tredgate2023#";

  await page.goto("http://localhost:3001/");
  await page.locator('[data-testid="username"]').fill(username);
  await page.locator('[data-testid="password"]').fill(password);
  const responsePromise = page.waitForResponse(/auth\/login/);
  await page.locator('[data-testid="log_in"]').click();
  await responsePromise;
  await page.locator('[data-testid="accounts_section_link"]').click();
  await expect(page.locator('[data-testid="loader"]')).toBeHidden();
  await expect(page.locator('[data-testid="title"]')).toBeVisible();
});
