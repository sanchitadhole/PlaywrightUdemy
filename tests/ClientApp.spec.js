const { test, expect } = require("@playwright/test");

test("Browser Context Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  // // await page.locator(".text-reset").click();
  // await page.locator("#firstName").fill("Sanchita");
  // await page.locator("#lastName").fill("Dhole");
  // await page.locator("#userEmail").fill("abc123@gmail.com");
  // await page.locator("#userMobile").fill("34214235");
  // await page.locator("#userPassword").fill("Cgain@123");
  // await page.locator("#login").click();

  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("#login").click();
  // await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});

test("page Playwright test", async ({ page }) => {
  await page.goto("https://google.com/");
  //get Title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
