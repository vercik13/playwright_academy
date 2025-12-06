import { test } from "@playwright/test";
import path from "path";

test.describe("Forms Actions Exercises", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/registration.html");
  });

  test("Fill Inputs", async ({ page }) => {
    const fullNameInput = page.locator("#full-name");
    await fullNameInput.fill("Veronika Vokounová");
    const emailInput = page.locator("#email");
    await emailInput.fill("vero.vokounova@gmail.com");
  });

  test("Date fill with date ISO 8601 - Contact Date", async ({ page }) => {
    await page.locator("#contact-date").fill("1999-05-30"); // ? <input> type = "date" je vždy nutné vyplnit ve formátu ISO 8601: YYYY-MM-DD
  });
});
