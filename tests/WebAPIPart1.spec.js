const {test, expect, request} = require('@playwright/test')
const loginPayload = {userEmail:'practice_test1@yopmail.com',userPassword:'Practice@1'}
const orderPayload = {orders:[{country:"Cuba",productOrderedId:"6581ca399fd99c85e8ee7f45"}]}

let token
let orderId

test.beforeAll( async()=> {

    // Login API
    const apiContext = await request.newContext()

    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
        {
            data:loginPayload
        })

        console.log(`Response status: ${loginResponse.status()}`)
        const responseBody = await loginResponse.text()
        console.log(`Response body: ${responseBody}`)

        expect(loginResponse.ok()).toBeTruthy()

        const loginResponseJson = await loginResponse.json()
        
        token = loginResponseJson.token

        console.log(token)

        // Creating order API
       const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data : orderPayload,
            headers: {

                'Authorization' : token,
                'Content-Type' : 'application/json'
            }
        }
       )
    
       const orderResponseJson = await orderResponse.json()
       console.log(orderResponseJson)
       orderId = orderResponseJson.orders[0]
       
})

test ('Client App Login', async({page}) =>    {

    page.addInitScript(value => {

        window.localStorage.setItem('token', value)
    }, token )


    await page.goto('https://rahulshettyacademy.com/client/')

    if(page.url() === 'https://rahulshettyacademy.com/client/dashboard/dash')   {
        console.log('User logged in successfully')
    }
    else    {
        console.log('login failed')
    }

    await page.pause()
})

test('Place the order', async ({page})  =>{

    const orderID = createOrder()
    page.addInitScript(value => {

        window.localStorage.setItem('token', value)
    }, token )


await page.goto('https://rahulshettyacademy.com/client/')
await page.locator('[routerlink="/dashboard/myorders"]').click()
await page.locator('tbody').waitFor()
const rows = await page.locator('tbody tr')

for (let i = 0; i < rows.count(); ++i) {
        
    const rowOrderId = await rows.nth(i).locator('th').textContent()
    if (orderId.includes(rowOrderId)) {

        await rows.nth(i).locator('button').first().click()
        break
    }
}

const orderIdDetails = await page.locator('.col-text').first().textContent()
expect(orderNumber.includes(orderIdDetails)).toBeTruthy()

 })