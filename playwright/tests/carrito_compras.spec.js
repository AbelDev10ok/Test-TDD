import {test,expect} from '@playwright/test'
import { LoginPage } from './pageObjects/LoginPage'

test('Logearse con usuario, agregar compra y validar compra',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    /*
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()
    */
   //Utilizando modelo PAGEOBJECT
    const loginPage =  new LoginPage(page)
    // await loginPage.fillUsername()
    // await loginPage.fillPassword()
    // await loginPage.clickOnLogin()
    await loginPage.loginConCredencial('standard_user','secret_sauce')
    //asersion
    await loginPage.checkSuccesLogin()

    await page.pause()

    //all ya que son varias li
    const itemContainer = await page.locator('#inventory_container .inventory_item').all()
    //obtenemos un li random
    const randomIndex = Math.floor(Math.random()* itemContainer.length)
    const randomItem = itemContainer[randomIndex]

    //obtenemos descripcion presio y nombre 
    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()
    const expectedName = await randomItem.locator('.inventory_item_name ').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()
    console.log(`name: ${expectedName}, description: ${expectedDescription}, price: ${expectedPrice}`);

    //AGREGAMOS AL CARRITO interactuando con el elemento random
    await randomItem.getByRole('button',{name:'Add to cart'}).click()
    await page.locator('.shopping_cart_link').click()

    await page.pause()
    //Esperamos que el boton del carrito este visible

    expect(page.getByRole('button',{name: 'Checkout'})).toBeVisible()

    //comparamos con lo agregado al carrito
    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDesc = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    expect(actualName).toEqual(expectedName)
    expect(actualDesc ).toEqual(expectedDescription)
    expect(actualPrice).toEqual(expectedPrice)

    //Click boton checkear compra
    await page.getByRole('button',{name: 'Checkout'}).click()


    const firstName =  await page.getByRole('textbox',{name:'First Name'}).fill('abel')
    const lastName =  await page.getByRole('textbox',{name:'Last Name'}).fill('alarcon')
    const cod =  await page.getByRole('textbox',{name:'Zip/Postal Code'}).fill('1665')

    await page.getByRole('button',{name:'Continue'}).click()
    await page.getByRole('button',{name:'Finish'}).click()

    await page.pause()
    //Validamos que aparesca el texto correcto
    await expect(page.getByRole('heading',{name:'Thank you for your order!'})).toBeVisible()






})