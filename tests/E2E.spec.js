const {test, expect} = require('@playwright/test')

test('user login test', async({page}) =>   {


    // Locators
    const userEmail = page.locator('input[id="userEmail"]')
    const userPassword = page.locator('input[id="userPassword"]')
    const loginBtn = page.locator('input[id="login"]')
    const itmLabel = page.locator('.card-body b')
    const products = page.locator('.card-body')
    const ProductName = 'ZARA COAT 3'
    const cart = page.locator('[routerlink*="cart"]')
    const item1 = page.locator('h5:has-text("ZARA COAT 3")')
    const cvvCode = page.locator('input[class="input txt"]')
    const nameOnCard = page.locator('input[class="input txt"]')
    const typeCountry = page.locator('[placeholder*="Country"]')
    const countryDropdown = page.locator('.ta-results.list-group.ng-star-inserted')
    const email = page.locator('practice_test1@yopmail.com')
    const expDateDrpdwn = page.locator('.input.ddl')
    const orderList = page.locator('.thead-dark th[scope="row"], tbody th[scope="row"]')

    // Go to this url
    await page.goto('https://rahulshettyacademy.com/client')

    // Type email
    await userEmail.fill('practice_test1@yopmail.com')

    // Type password
    await userPassword.fill('Practice@1')

    // Click on login button
    await loginBtn.click()

    // Grab and print all product labels
    console.log(await itmLabel.allTextContents())

    // Count the number of products
    const count = await products.count()

    // For loop to iterate through product names and add a particular product to cart
    for(let i = 0; i < count; i++)  {
        if (await products.nth(i).locator('b').textContent() === ProductName)   {

            // Add to cart
            products.nth(i).locator('text=  Add To Cart').click({ force: true })
            break
        }
    }

    // Click on cart button
    await cart.click() 
    await page.locator('div li').first().waitFor()

    // Click on checkout button
    await page.locator('text=Checkout').click()

    // Type initial value in country's box and select country
    await typeCountry.pressSequentially('cub',{delay:100}),

    await countryDropdown.waitFor()

    const optionsCount = await countryDropdown.locator('button').count()

    for (let i = 0; i < optionsCount; i++)  {

        const text = await countryDropdown.locator('button').nth(i).textContent()
        if(text === ' Cuba')  {

            countryDropdown.locator('button').nth(i).click()
            break
        }
    }

    // submitting the order
    await page.locator('.action__submit').click()

    // Verifying order creation msg and grabbing order number
    expect (page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')
    const orderNumber = await page.locator('.em-spacer-1 .ng-star-inserted').textContent()
    console.log(orderNumber)

    // Order history page
    await page.locator('[routerlink="/dashboard/myorders"]').first().click()

    // Waiting for order tables to display before going through order Ids
    await page.locator('tbody').waitFor()

    // Go through the list of order Id's and select a particular order Id
    const rows = await page.locator('tbody tr')
    

    for (let i = 0; i < rows.count(); ++i) {
        
        const rowOrderId = await rows.nth(i).locator('th').textContent()
        if (orderId.includes(rowOrderId)) {

            await rows.nth(i).locator("button").first().click({ force: true })
            break
        }
    }

    const orderIdDetails = await page.locator(".col-text").first().textContent()
    console.log(orderIdDetails)
    expect(orderNumber.includes(orderIdDetails)).toBeTruthy()


})