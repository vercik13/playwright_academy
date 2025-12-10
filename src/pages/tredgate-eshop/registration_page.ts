import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccountBtn: Locator;
  readonly registerAnchor: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountBtn = page.locator("#top-links a i.fa-user");
    this.registerAnchor = page.locator(
      ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']"
    ); // ? v zadání domácího ukolu je v odkazu navíc &quot, který v testu nefunguje - odkaz jsem zde upravila podle eshopu
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueBtn = page.locator('input[type="submit"]');
  }

  async open() {
    await this.page.goto(this.url);
  }

  async clickMyAccount() {
    await this.myAccountBtn.click();
  }

  async clickRegistration() {
    await this.registerAnchor.click();
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirmInput.fill(passwordConfirm);
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}
