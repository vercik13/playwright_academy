import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Asserts", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage
      .open()
      .then((login) => login.login("pw_academy", "Playwright321!"));
  });

  test("ToContainText test", async ({ page }) => {
    const dashboardHeader = page.locator("#welcome-page-header");
    await expect(dashboardHeader).toContainText("Vítej v testovací aplikaci");
  });

  test("ToHaveText test", async ({ page }) => {
    const dashboardHeader = page.locator("#welcome-page-header");
    await expect(dashboardHeader).toHaveText(
      "Vítej v testovací aplikaci Tredgate Project"
    );
  });

  test("ToBeVisible test", async ({ page }) => {
    await expect(page.locator(".logo img")).toBeVisible();
  });

  test("toHaveValue test", async ({ page }) => {
    await page.locator("#Projects").click();
    await page.locator('[test_id="search_input"]').fill("test");
    await expect(page.locator('[test_id="search_input"]')).toHaveValue("test");
  });
});
