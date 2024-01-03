import {test,expect} from '@playwright/test'

test('test web table', async ({page}) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable/')

    const tableContainer = await page.locator("xpath=//table[@id='countries']")

    const rows = await tableContainer.locator("xpath=.//tr").all()

    const countries: Country [] = []

    console.log(rows.length);

    for(let row of rows){
        let country: Country ={
            name: await row?.locator("xpath=.//td[2]").innerText(),
            capital: await row?.locator("xpath=.//td[3]").innerText(),
            currency: await row?.locator("xpath=.//td[4]").innerText(),
            primaryLanguage: await row?.locator("xpath=.//td[5]").innerText(),
        }
        countries.push(country)
        
    }

    for(let country of countries){
        console.log(country);
        
    }

    // esto demora mucho tiempo, en caso de error en config agregar timeout:60_000
    // const row1 = rows.at(1)

    // const country = await row1?.locator("xpath=.//td[2]").innerText()
    // const countryCapital = await row1?.locator("xpath=.//td[3]").innerText()
    // const countryCurrency = await row1?.locator("xpath=.//td[4]").innerText()

    
 })

 interface Country{
    name?: string,
    capital?: string
    currency?: string,
    primaryLanguage?: string,
    amount?: number

 }

/*
element container: //table[@id='countries']
.//tr -> filas
//table[@id='countries']//tr[2]//td[1]->Check
//table[@id='countries']//tr[2]//td[2]->Country
//table[@id='countries']//tr[2]//td[3]->Capital
//table[@id='countries']//tr[2]//td[4]->Currency
//table[@id='countries']//tr[2]//td[5]->Primary lenguage
*/