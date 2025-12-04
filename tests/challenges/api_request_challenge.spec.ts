import { test } from "@playwright/test";

test("POST Request", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/auth/register"
  );
});
