// tests/learning/api/
// api_with_frontend_tests.spec.ts
import { test } from "@playwright/test";

test("Login API Check", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.locator('[data-testid="username"]').fill("fifka_petr");
  await page.locator('[data-testid="password"]').fill("Tredgate2023#");

  // ? Zapínáme čekání na odchycení response pro cestu: auth/login
  const responsePromise = page.waitForResponse(/auth\/login/);
  await page.locator('[data-testid="log_in"]').click();
  await responsePromise; // ? Počká na odchycení a dokončení api requestu auth/login
  await page.locator('[data-testid="logout_button"]').click();
});
