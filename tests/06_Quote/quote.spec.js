import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json';
import quote from '../../testdata/06_quote.json'
import { loginclass } from '../../pages/login';
import { QuotesPage } from '../../pages/06_quote';


test('create Quote', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"More"}).first().click()
    await page.getByRole('link',{name:"Quotes"}).first().click()
    await page.getByRole('img',{name:"Create Quote..."}).first().click()

    await page.locator('//input[@name="subject"]').fill('CRM Software Quote')
    let subject = await page.locator('//input[@name="subject"]').inputValue()

    // await page.locator('//input[@name="validtill"]').fill('2026/09/10')
    let date = 16;
    let month = "August";
    let year = 2026;
    await page.locator('//img[@id="jscal_trigger_validtill"]').click();

// Navigate until the desired month appears
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    // await page.locator('//td[text()=">"]').click();


// Select the date
    await page.locator(`//td[text()="${date}"]`).click();

    await page.locator('//select[@name="carrier"]').selectOption({value:'BlueDart'})

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:"CRM Automation Project"}).first().click()
    await page.locator('//select[@name="quotestage"]').selectOption({value:'Created'})

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup1.getByRole('link',{name:"Farooq Ahmed"}).first().click()

    let [popup2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup2.getByRole('link',{name:"TCS Technologies 01"}).click()

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    await page.locator('//input[@name="bill_city"]').fill('Bangalore')
    await page.locator('//input[@name="bill_state"]').fill('Karnataka')
    await page.locator('//input[@name="bill_code"]').fill('581102')
    await page.locator('//input[@name="bill_country"]').fill('India')
    await page.locator('//input[@name="cpy"]').nth(1).click()
   
    let [popup3] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Products"}).click()])
    await popup3.getByRole('link',{name:"CRM Automation Suite"}).first().click()

    await page.locator('//input[@name="qty1"]').fill('1')
    await page.locator('//input[@name="listPrice1"]').fill('500000')
    await page.getByRole('cell',{name:"Total"}).first().hover()
    await page.getByRole('button',{name:"Save"}).first().click()
    

     let valid = await page.locator('//span[@id="dtlview_Subject"]').textContent()
    if(subject===valid){
        console.log('Quote is created');
    }else{
        console.log('Quote is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})

test('ddt', async ({ page }) => {
    await test.slow()
    await page.goto(login.url);

    await page.locator('//input[@name="user_name"]').fill(login.username);
    await page.locator('//input[@name="user_password"]').fill(login.password);
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"More"}).first().click()
    await page.getByRole('link',{name:"Quotes"}).first().click()
    await page.getByRole('img',{name:"Create Quote..."}).first().click()

    await page.locator('//input[@name="subject"]').fill(quote.subject)
    let subject = await page.locator('//input[@name="subject"]').inputValue()

 //! calendar
    let date = 16;
    let month = "August";
    let year = 2026;

    
    await page.locator('//img[@id="jscal_trigger_validtill"]').click();
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    await page.locator('//td[@class="button nav"]').nth(2).click()
    await page.locator(`//td[text()="${date}"]`).click();

    await page.locator('//select[@name="carrier"]').selectOption({value:quote.carrier})

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:"CRM Automation Project"}).first().click()
    await page.locator('//select[@name="quotestage"]').selectOption({value:'Created'})

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup1.getByRole('link',{name:"Farooq Ahmed"}).first().click()

    let [popup2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup2.getByRole('link',{name:"TCS Technologies 01"}).click()

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    await page.locator('//input[@name="bill_city"]').fill('Bangalore')
    await page.locator('//input[@name="bill_state"]').fill('Karnataka')
    await page.locator('//input[@name="bill_code"]').fill('581102')
    await page.locator('//input[@name="bill_country"]').fill('India')
    await page.locator('//input[@name="cpy"]').nth(1).click()
   
    let [popup3] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Products"}).click()])
    await popup3.getByRole('link',{name:"CRM Automation Suite"}).first().click()

    await page.locator('//input[@name="qty1"]').fill('1')
    await page.locator('//input[@name="listPrice1"]').fill('500000')
    await page.getByRole('cell',{name:"Total"}).first().hover()
    await page.getByRole('button',{name:"Save"}).first().click()
    

    //  let valid = await page.locator('//span[@id="dtlview_Subject"]').textContent()
    // if(subject===valid){
    //     console.log('Quote is created');
    // }else{
    //     console.log('Quote is not created');
    // }

    await expect(page.locator('//span[@id="dtlview_Subject"]')).toContainText(subject)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})
test('POM', async ({ page }) => {
    test.slow();
    const signin = new loginclass(page);
    const quotes = new QuotesPage(page);

    await signin.launchApplication(login.url);
    await signin.details(login.username, login.password);

    await quotes.createQuote(quote.subject,quote.carrier)
})

test('POM1', async ({ page }) => {
    test.slow(); 
    const loginPage = new loginclass(page);
    const quotesPage = new QuotesPage(page);

    await loginPage.launchApplication(login.url);

    await loginPage.details(login.username, login.password);
    await quotesPage.createQuote(quote.subject,quote.carrier);
})