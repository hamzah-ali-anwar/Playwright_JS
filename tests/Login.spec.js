const {test} = require('@playwright/test')

test ('user login test', async({page}) =>    {

    const userEmail = page.locator('input[id="userEmail"]')
    const userPassword = page.locator('input[id="userPassword"]')
    const rgstrBtn = page.locator('input[id="login"]')

    await page.goto('https://rahulhshettyacademy.com/client/')

    await userEmail.fill('practice_test1@yopmail.com')

    await userPassword.fill('Practice@1')

    await rgstrBtn.click()

    if(page.url() === 'https://rahulshettyacademy.com/client/dashboard/dash')   {
        console.log('User logged in successfully')
    }
    else    {
        console.log('login failed')
    }

})

