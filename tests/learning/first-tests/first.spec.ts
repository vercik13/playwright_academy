import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  // ? zkratka pro základní výpis pwt + enter
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});

// ? spuštění testu se provede příkazem v terminále: npx playwright test
// ? zobrazení reportu se provede příkazem v terminálu: npx playwright show-report
// ? zavření můžeme udělat ctrl + c
// ? pokud chci spustit jen určitý test napíšu npx playwright test a přes kliknití pravým na název testu a zkopírování Copy Relative Path vložím cestu k souboru, ale musíme upravit lomítka na / nemůžou být zpětná "\"
// ? pokud chci průběh testu vidět použiju rezim headed: npx playwright test tests/learning/first-tests/first.spec.ts --headed
// ? pokud mám nainstalované rozšíšení Playwright Test for VSC, test jde spustit zeleným tlačíkem Play, přímo v souboru testu
// ? UI mode spustíme příkazem npx playwright test --ui
