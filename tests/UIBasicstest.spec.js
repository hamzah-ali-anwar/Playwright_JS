const {test, expect} = require('@playwright/test')

// Playwright Udemy Course Scripts

test('practice test', async ({page}) =>    {

    // Locators

    const userName = page.locator("input[id='username']")

    const userPassword = page.locator("input[id='password']")

    const productTitle = page.locator(".card-body a")

    const dropdown = page.locator('select.form-control')

    const loginBtn = page.locator('input[id="signInBtn"]')

    const radioBtn = page.locator('input[id="usertype"]')

    const agreementBtn = page.locator('input[id="terms"]')

    const popUp = page.locator('#okayBtn')


    // Go to the website
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    // Enter username
    await userName.fill("rahulshettyacademy")

    // Enter password
    await userPassword.fill('learning')

    // Select radio button
    await radioBtn.last().click()

    // Popup checked
    await popUp.click()

    // Assertion
    await expect(radioBtn.last()).toBeChecked()

    // Select from dropdown
    await dropdown.selectOption('Consultant')

    // Select agreement
    await agreementBtn.click()

    // Pasuing the execution
   // await page.pause()

    // Click on login
    await loginBtn.click()

    // If condition to verify if login is passed or failed
    if (page.url() === "https://rahulshettyacademy.com/angularpractice/shop")   {
        console.log("login successful")
    }
    else    {
        console.log("login failed")
    }

    // Getting the first and last content with two different methods
    console.log(await productTitle.nth(0).textContent())
    console.log(await productTitle.last().textContent())

    // Getting the whole list of content
    console.log(await productTitle.allTextContents())
    
}) 

test('UI Controls', async ({page}) =>    {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const dropdown = page.locator('select.form-control')

    const documentLink = page.locator('[href*="documents-request"]')

    await dropdown.selectOption('Consultant')

    await page.locator('input[id="usertype"]').last().click()

    await page.locator('#okayBtn').click()

    console.log(await page.locator('input[id="usertype"]').last().isChecked())

    await expect(page.locator('input[id="usertype"]').last()).toBeChecked()

    await page.locator('input[id="terms"]').click()

    await expect(page.locator('input[id="terms"]')).toBeChecked()

    await page.locator('input[id="terms"]').uncheck()

    expect(await page.locator('input[id="terms"]').isChecked()).toBeFalsy()

    await expect(documentLink).toHaveAttribute("class","blinkingText")

})


test('Child Windows Handle', async ({browser}) =>    {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator('[href*="documents-request"]')

    const [newPage] = await Promise.all(
    [
    context.waitForEvent('page'),
    documentLink.click()
    ])

    const text = await newPage.locator('id#interview-material-container,.im-para.red').textContent()

    const arrayText = text.split('@')
    const domain = arrayText[1].split(' ') [0]
    console.log(domain)
    await page.locator("input[id='username']").fill(domain)
    console.log(await page.locator("input[id='username']").textContent())
})