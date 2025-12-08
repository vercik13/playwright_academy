import { test } from "@playwright/test";

test("GET Request", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});

test("GET Request with URL Parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 1452, //? url parametr pro upřesnění co po endpointu chceme (v url to bývá např. za otazníkem)
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Testujeme hlavicky",
      },
    }
  );
});
