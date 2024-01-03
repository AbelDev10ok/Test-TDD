// @ts-check
const { test, expect } = require('@playwright/test');

//Xpath (buscar elementos)
//absoluto path: /html/head/body/div/input
//relativa path: //input

//Css selector
//input[@type="text"]
//input[@id="text"]
//input[@class="text"]

//Shortcuts
//input.form(by class)
//input#name(by id)

test('test locators',async({page})=>{
  await page.goto('https://www.mercadolibre.com.ar/')
  //busca por id
  await page.locator("#name").fill('algo')
  //busca xpath
  await page.locator('xpath=//input[@class="form"]').fill('Iphone')

})



test('test mercado libre',async({page})=>{
  //habre un browser
  await page.goto('https://www.mercadolibre.com.ar/')
  //localizo los elementos en forma css selector con el inspector input[id=\'cb1-edit\']
  await page.locator("input[id=\'cb1-edit\']").fill('Iphone')
  await page.keyboard.press('Enter')
  //este es otro metodo de busqueda llamado Xpath (//ol[contains(@class,'ui-search-layout')])
  //toBeVisible le digo que espere que sea visible
  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible()
  await page.pause()
  //como habia mas de un li nos devolvera una lista
  //allInnerTexts saco todos los textos
  const titles = await page.locator('//ol[contains(@class,\'ui-search-layout\')]//li//h2').allInnerTexts()

  for(let title of titles){
    console.log('el titulo es : ',title);
  }
})

//para buscar por la propiedad placeholder
test('metodo getByPlaceholder',async({page})=>{
  await page.goto('https://www.mercadolibre.com.ar/')
  //le pasamos el valor del elemento placeholder
  await page.getByPlaceholder("Buscar productos, marcas y más…").fill('iphone')

})

//para buscar por imagenes la propiedad alt
test('metodo getByAltText',async({page})=>{
  await page.goto('https://www.mercadolibre.com.ar/silla-de-escritorio-vonne-sv-g0-gamer-ergonomica-negra-y-roja-con-tapizado-de-cuero-sintetico/p/MLA18643024?pdp_filters=deal%3AMLA779357-1#polycard_client=homes-korribanSearchTodayPromotions&searchVariation=MLA18643024&position=2&search_layout=grid&type=product&tracking_id=c6f88a6f-1231-480d-8988-b8ab8213ac26')
  //le pasamos el valor del alt
  await page.getByAltText("Silla de escritorio Vonne SV-G0 gamer ergonómica  negra y roja con tapizado de cuero sintético")

})


//LA MEJOR FORMA
//para buscar elementos basados en su nombre accesible
test('metodo getByRole',async({page})=>{
  await page.goto('https://www.mercadolibre.com.ar/')
  //para buscar los roles y name mas facil buscar accesibilidad en el inspector
  // await page.getByRole('link',{name: 'Mis compras'}).click()
  // await page.pause()
  //en caso de repetidos utilizar exact:true
  await page.getByRole('link',{name: 'Ingresá',exact:true}).click()
  await page.pause()
})

