import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


class LoginPage extends BasePage{
    username:Locator
    password:Locator
    loginBtn:Locator
    loginErrorMsg:Locator

  
    constructor(page:Page){
        super(page)
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.loginBtn = page.getByRole("button", {name:"Login"})
        this.loginErrorMsg = page.getByText('Epic sadface:', { exact: false })
    }

    async setUsername(user:string){
        await this.username.fill(user)

    }

    async setPassword(pass:string){
        await this.password.fill(pass)
    }

    async clickLoginButton(){
        await this.loginBtn.click()
    }

    async getErrorMessage(){
        return await this.loginErrorMsg.textContent()
    }


    
}

export{LoginPage}