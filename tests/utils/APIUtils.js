class APIUtils  {

    constructor(apiContext) {

    }
    
    async getToken()  {

        const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
            {
                data:loginPayload
            })
            expect(loginResponse.ok()).toBeTruthy()

        const loginResponseJson = await loginResponse.json()
        
        token = loginResponseJson.token

        console.log(token)

        return token

    }

}