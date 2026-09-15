import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';


test.describe("Access management suite", async()=> {

  let loginObj:LoginPage;
  let inventoryObj:InventoryPage;
  let page:any;  
  const baseURL:string = "https://www.saucedemo.com/";

  test.beforeEach("Launch browser",async({browser})=>{
    const context= await browser.newContext()
    page= await context.newPage()
    loginObj = new LoginPage(page)
    inventoryObj = new InventoryPage(page)

    await loginObj.goto(baseURL)

    })

    test("TC-001 Verify user can successfully log in with valid credentials", async()=>{

      await loginObj.setUsername("standard_user")
      await loginObj.setPassword("secret_sauce")
      await loginObj.clickLoginButton()

      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")


    })
      
  test("TC-003 Verify error message is shown when user enters invalid credentials", async()=>{

      await loginObj.setUsername("standard_userd")
      await loginObj.setPassword("secret_saucea")
      await loginObj.clickLoginButton()

      expect(await loginObj.getErrorMessage()).toContain("Username and password do not match any user in this service")

    })

  test("TC-004 Verify error message is shown when user leave credentials empty", async()=>{

      await loginObj.setUsername("")
      await loginObj.setPassword("")
      await loginObj.clickLoginButton()

      expect(await loginObj.getErrorMessage()).toContain("Username is required")

    })

  test("TC-005 Verify error message is shown when locked user attempts to log in", async()=>{

      await loginObj.setUsername("locked_out_user")
      await loginObj.setPassword("secret_sauce")
      await loginObj.clickLoginButton()

      expect(await loginObj.getErrorMessage()).toContain("Sorry, this user has been locked out.")

    })

   test("TC-006 Verify  unauthenticated direct route access", async()=>{

      await page.goto("https://www.saucedemo.com/inventory.html")

      expect(await loginObj.getErrorMessage()).toContain("You can only access '/inventory.html' when you are logged in.")

    })

   test("TC-007 Verify user can successfully logout their session", async()=>{

      await loginObj.setUsername("standard_user")
      await loginObj.setPassword("secret_sauce")
      await loginObj.clickLoginButton()
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

      await inventoryObj.clickBurguerMenu()
      await inventoryObj.clickLogoutOption()
      await expect(page).toHaveURL("https://www.saucedemo.com")
    })



  
})