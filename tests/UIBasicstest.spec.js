const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test',async ({browser})=>{
   


    const context = await browser.newContext();
    const page = await context.newPage();
    const userName=  page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitle = page.locator(".card-body a");





    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title()); 
    await userName.fill("rahulshetty");
    await page.locator('#password').fill("learning");
    await signIn.click();
    // webdriver wait
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await signIn.click();
    // console.log(await cardTitle.first().textContent());
    // console.log(await cardTitle.nth(1).textContent());

    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);





});










test('page Playwright test',async ({page})=>{
    await page.goto('https://google.com/');
    //get Title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")


});