import { expect, test } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  expect(response.status(), "Response Status Should be 200").toEqual(200);
});

test("Assert Response Header", async ({ request }) => {
  // ? test pro ověření hlaviček
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  // const contentType = headers["Content-Type"]; // ? v tomto testu to skončí chybou, protože jsou špatně napsané hlavičky (mají být malými písmeny), nejlepe k tomuto kroku dát breakpoing a spustit v debugg modu (pravým tlačítkem klik na zelené tlačítko play na řádku 10). V debugg modu vlevém sloupci kliknout pravým tlačítkem na content-type a vybrat Copy as Expression a vložit headers["content-type"]; místo headers v kódu
  expect(contentType, "Response Header Content-Type has Value").toEqual(
    "application/json; charset=utf-8"
  );
});

test("Responce Body Assert", async ({ request }) => {
  //? testování odpovědi
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json(); //? z response nejde body přímo otestovat, musíme vždy převést do json jako objekt
  expect(
    responseBody.message,
    "responseBody.message should have value"
  ).toEqual("TEG#B Training GET request successful");
  expect(responseBody, "responseBody have property timestamp").toHaveProperty(
    "timestamp"
  );
  expect(typeof responseBody.id, "responseBody.id is a number").toBe("number"); //? očekáváme, že typ id je number
});
