const {test} = require('@playwright/test')

test ('get product titles test', async({page}) =>    {

    const userEmail = page.locator('input[id="userEmail"]')
    const userPassword = page.locator('input[id="userPassword"]')
    const rgstrBtn = page.locator('input[id="login"]')
    const itmLabel = page.locator('.card-body b')

    await page.goto('https://rahulshettyacademy.com/client')

    await userEmail.fill('practice_test1@yopmail.com')

    await userPassword.fill('Practice@1')

    await rgstrBtn.click()

    // method be a little flaky 
    // await page.waitForLoadState('networkidle')

    console.log(await itmLabel.allTextContents())
    

})