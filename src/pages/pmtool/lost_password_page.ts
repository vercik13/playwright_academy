import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly sendBtn: Locator;
  readonly backBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(
      ":nth-child(2) > .input-icon > .form-control"
    );
    this.emailInput = page.locator(
      ":nth-child(3) > .input-icon > .form-control"
    );
    this.sendBtn = page.locator(".btn-info");
    this.backBtn = page.locator("#back-btn");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }
  async clickSend() {
    await this.sendBtn.click();
    return new LoginPage(this.page);
  }

  async clickBack() {
    await this.backBtn.click();
    return new LoginPage(this.page);
  }
}
