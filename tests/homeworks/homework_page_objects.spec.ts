import { test } from "@playwright/test";
import { RegistrationPage } from "../../src/pages/tredgate-eshop/registration_page.ts";

test("Register new user", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.open();
  await registrationPage.clickMyAccount();
  await registrationPage.clickRegistration();
  await registrationPage.fillFirstName("Veronika");
  await registrationPage.fillLastName("Vokounová");
  await registrationPage.fillEmail("verca@seznam.cz");
  await registrationPage.fillTelephone("123123123");
  await registrationPage.fillPassword("heslo123");
  await registrationPage.fillPasswordConfirm("heslo123");
  await registrationPage.clickContinue();
});
