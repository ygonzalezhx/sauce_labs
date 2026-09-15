import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


class InventoryPage extends BasePage{

    burguerMenu:Locator
    logoutOption:Locator


    constructor(page:Page){
        super(page)
        this.burguerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.logoutOption = page.getByRole('button', { name: 'Logout' })
    }

    async clickBurguerMenu(){
        await this.burguerMenu.click()
    }

    async clickLogoutOption(){
        await this.logoutOption.click()
    }



}

export {InventoryPage}