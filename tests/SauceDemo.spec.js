const {test, expect} = require('@playwright/test')

// Loggin into sauce demo and verifying its url

test('sauce demo login test', async ({page}) =>    {


    // Locators
    const userEmail = page.locator('input[id="user-name"]')
    const userPassword = page.locator('input[id="password"]')
    const loginBtn = page.locator('input[id="login-button"]')
    const productTitles = page.locator('.inventory_item_name')
    const productName = 'Sauce Labs Fleece Jacket'
    const addToCart = ('button[id="add-to-cart-sauce-labs-backpack"]')
    const cartIcon = ('div[id="shopping_cart_container"]')
 

    // Go to sauce demo
    await page.goto('https://www.saucedemo.com/')

    // Enter email
    await userEmail.fill('standard_user')

    // Enter password
    await userPassword.fill('secret_sauce')

    // Click on login button
    await loginBtn.click()

    // Grab and print product title
    console.log(await productTitles.allTextContents())

    // Count the number of products displayed
    const productCount = productTitles.count()

    // Iterating thorough products and adding one to cart
    for (let i = 0; i < productCount; i++) {

        if(await productTitles.nth(i).textContent === productName)    {

            // Add product to cart
            productTitles.nth(i).locator('button[id="add-to-cart-sauce-labs-backpack"]').click().textContent()
            break

        }
    }

})