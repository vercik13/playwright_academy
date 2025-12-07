// tests/learning/mouse-actions/
// mouse_actions.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Mouse Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });

  test("Mouse Hover", async ({ page }) => {
    await page.locator('[data-testid="hover-box"]').hover();
    await expect(page.locator('[data-testid="hover-message"]')).toBeVisible();
  });

  test("Drag to", async ({ page }) => {
    // ? Presouvání Drag and drop
    const draggable = page.locator("#drag1");
    const dropzone = page.locator("#drop1");

    await dropzone.scrollIntoViewIfNeeded(); //? Při přesouvání musí být dropzone vidět. Tato funkce zascrolluje na prvek dropzone

    await draggable.dragTo(dropzone);

    // ! Přidáme si 1sec čekání na výsledek a vypneme eslint, aby nam nehlasil chybu při použití waitForTimeout
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);
  });

  test("Double Click", async ({ page }) => {
    await page.locator('[data-testid="double-click-box"]').dblclick();
    await expect(page.locator('[data-testid="double-click-box"]')).toHaveClass(
      /action-active/
    ); // ? /action-active/ - regex, který ověří, že element má třídu action-active. Používáme proto že prvek má více tříd a toHaveClass ověřuje všechny trídy. Regulární výraz ověří, že prvek má třídu active-action a ostatní třídy jsou libovolné.

    await expect(
      page.locator('[data-testid="double-click-box"]')
    ).toContainClass("action-active"); // ? naštěstí Playwright přidal v nedávné době toContainClass
  });

  test("Click and hold", async ({ page }) => {
    const hold = page.locator(".hold-button").click({ delay: 200 }); // ? zavoláme klik bez awaitu, klikne a drží (pokud chceme dělat něco v průběhu držení, nemůže být await, který by čekal) pokud v kroku není await, test pokračuje dál
    await expect(page.locator(".hold-button")).toContainClass("hold-active");
    await hold;
    // ! Přidáme si 1sec čekání na výsledek a vypneme eslint, aby nam nehlasil chybu při použití waitForTimeout
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);
  });
});
