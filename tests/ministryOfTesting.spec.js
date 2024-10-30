const {test} = require('@playwright/test')

test('registering for ministry of testing account', async ({page}) =>  {


    // Locators
    const joinBtn = page.locator('#membershipNav')
    const joinTodayBtn = page.locator('[href="#join-today"]')
    const freeMembershipOption = page.locator('.card.border#freemembership')
    const joinNow = page.locator('[href*="/account/signup?plan=theclub"]')
    const yourName = page.locator('#user_first_name')
    const email = page.locator('#user_email')
    const userName = page.locator('#user_username')
    const password = page.locator('#user_password')
    const confirmPassword = page.locator('#user_password_confirmation')
    const signUp = page.locator('#submit')

    
    // Go to the website
    await page.goto('https://www.ministryoftesting.com/learn')

    // Click on Join button
    await joinBtn.click()

    // Click on Join Today button which scrolls down to the membership options
    await joinTodayBtn.click()

    // Verify free membership option is displayed and verify its content
    console.log(await freeMembershipOption.textContent())
    freeMembershipOption.getByText('Explore the testing community.', { exact: true })

    // Click on Join Now
    await joinNow.click()

    // Enter name
    await yourName.fill('testing')

    // Enter email
    await email.fill('firstuidemo@yopmail.com')

    // Enter user name
    await userName.fill('firstuidemo')

    // Enter password
    await password.fill('Password')

    // Confirm password
    await confirmPassword.fill('Password')

    // Added force click since it was just hovering over the button
    await signUp.click({ force: true })

    // Verifying sign up confirmation message
    const confirmationMsg = await page.locator('#flash', { hasText: /A message with a confirmation link has been sent to your email address./ }).textContent()
    console.log(confirmationMsg)


})

test('verify account email link', async ({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    const enterEmail = page.locator('#login')
    const nextBtn = page.locator('#refreshbut button[class="md"]')
    const printMailIcon = page.locator('button[onclick*= printmail]')
    const selectEmail = page.locator('iframe[name="ifinbox"]')
    const cnfrmMyAcctLnk = page.locator('iframe[name="ifmail"]')


    // Go to the email
    await page.goto('https://yopmail.com/')

    // Enter email
    await enterEmail.fill('firstuidemo@yopmail.com')

    // Click on next icon
    await nextBtn.click()

    // Verify emails page is displayed
    await printMailIcon.isVisible()

    // Select confirm account email
    await selectEmail.contentFrame().getByRole('button', { name:  /Ministry of Testing Confirm your new account/ }).click();

    // Created an array because these two lines needs to be run parallely

    const [newPage] = await Promise.all
    ([

    context.waitForEvent('page'),
    cnfrmMyAcctLnk.contentFrame().getByRole('link', { name: 'Confirm my account' }).click()

    ])
    
    // Confirm email address success banner on a new page
    
    const successMsg = await newPage.locator('#flash', { hasText: /Your email address has been successfully confirmed/ }).textContent()
    console.log(successMsg)

})

test('sign in and out of ministry of testing account', async ({page}) =>  {

    // locators
    const signIn = page.locator('#nav-sign-in')
    const emailOrUserName = page.locator('#user_login')
    const password = page.locator('#user_password')
    const signIn_Login = page.locator('input[type="submit"]')
    const profileImage = page.locator('div.dropdown.ms-1.ms-lg-0.navbar-nav')
    const signOut = page.locator('#myMotSignOut')

    // Go to the website
    await page.goto('https://www.ministryoftesting.com/learn')

    // Click on sign in button
    await signIn.click()

    // Enter email
    await emailOrUserName.fill('firstuidemo@yopmail.com')

    // Enter password
    await password.fill('Password')

    // Log into the application
    await signIn_Login.click()

    // Verifying signed in message after loggin into the application
    const SignInsuccessMsg = await page.locator('#flash', { hasText: /Signed in successfully./ }).textContent()
    console.log(SignInsuccessMsg)

    // Further verification of successful login
    if (profileImage.first().isVisible())   {
        console.log('Login is successful, user profile icon is displayed')
    }
    else    {
        console.log('Please retry')
    }

    // Signing out
    await profileImage.click()
    await signOut.click()

    const SignOutsuccessMsg = await page.locator('#flash', { hasText: /Signed out successfully./ }).textContent()
    console.log(SignOutsuccessMsg)

})


