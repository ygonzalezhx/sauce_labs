//En la base page van metodos genericos

import { Page } from "@playwright/test"

class BasePage{
  protected page:Page

  constructor(page:Page){
      this.page=page
  }

  async goto(url:string){
      await this.page.goto(url)
  }

  async clickOnLink(linkName:string){
    await this.page.getByRole('link', {name: linkName}).first().click()
  }

  }
export{BasePage}