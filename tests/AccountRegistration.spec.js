const {test} = require('@playwright/test')

test('account registration test', async ({page}) =>   {

    const rgstrHereBtn = page.locator('a[class="text-reset"]')
    const firstName = page.locator('input[id="firstName"]')
    const lastName = page.locator('input[id="lastName"]')
    const userEmail = page.locator('input[id="userEmail"]')
    const contactNumber = page.locator('input[id="userMobile"]')
    // const occupationDropdown = page.locator('select[class="custom-select ng-pristine ng-valid ng-touched"]')
    const gender = page.locator('input[value="Male"]')
    const userPassword = page.locator('input[id="userPassword"]')
    const confirmPassword = page.locator('input[id="confirmPassword"]')
    const ageConsent = page.locator('input[type="checkbox"]')
    const rgstrBtn = page.locator('input[id="login"]')
    const acctExist = page.locator('div[id="toast-container"]')
    const acctCrtMsg = page.locator('div.login-wrapper.my-auto.p-5.ng-star-inserted')

   await page.goto('https://rahulshettyacademy.com/client')
   
   await rgstrHereBtn.click()
   
   await firstName.fill('student')

   await lastName.fill('practice')

   await userEmail.fill('practice_test1@yopmail.com')

   await contactNumber.fill('1234567889')

   //await occupationDropdown.click()

   await gender.click()

   await userPassword.fill('Practice@1')

   await confirmPassword.fill('Practice@1')

   await ageConsent.click()

   await rgstrBtn.click()

   if (acctExist === 'User already exisits with this Email Id!')    {
        console.log('Enter new email Id')   
   }
   else if (acctCrtMsg === 'Account Created Successfully Login')   {
        console.log('Registered successfully')
    }    
    else {
    console.log('Registration failed')
}


})
