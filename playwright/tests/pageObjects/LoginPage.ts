import { Locator ,Page,expect} from "@playwright/test"
export class LoginPage{
     private readonly userNameTextBox: Locator
     private readonly passwordTextBox: Locator
     private readonly loginButtonTextBox:  Locator
     private readonly shoppingCartIcon:  Locator

    constructor(page: Page){
        this.userNameTextBox = page.getByRole('textbox',{name:'Username'})
        this.passwordTextBox = page.getByRole('textbox',{name:'Password'})
        this.loginButtonTextBox = page.getByRole('button',{name:'Login'})
        this.shoppingCartIcon = page.locator("xpath=//a[contains(@class, 'shopping_cart_link')]")
    }
    async fillUsername(){
        await this.userNameTextBox.fill('standard_user')
    }
    async fillPassword(){
        await this.passwordTextBox.fill('secret_sauce')
    }

    async clickOnLogin(){
        await this.loginButtonTextBox.click()
    }
    async loginConCredencial(username: string,password: string){
        await this.userNameTextBox.fill(username)
        await this.passwordTextBox.fill(password)
        await this.loginButtonTextBox.click()
    }

    async checkSuccesLogin (){
        await expect(this.shoppingCartIcon).toBeVisible()
    }

    
}