import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json';
import salesorder from '../../testdata/07_salesorder.json'
import { loginclass } from '../../pages/login';
import { SalesOrderPage } from '../../pages/07_salesorder';

test('create SalesOrder', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"More"}).first().click()
    await page.getByRole('link',{name:"Sales Order"}).first().click()
    await page.getByRole('img',{name:"Create Sales Order..."}).first().click()

    await page.locator('//input[@name="subject"]').fill('CRM Software')
    

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup.getByRole('link',{name:"CRM Software Quote"}).first().click()

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup1.getByRole('link',{name:"Farooq Ahmed"}).first().click()

    await page.locator('//select[@name="carrier"]').selectOption({value:'BlueDart'})
    await page.locator('//select[@name="sostatus"]').selectOption({value:'Created'})

    let [popup2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(3).click()])
    await popup2.getByRole('link',{name:"TCS Technologies 01"}).first().click()

    // await page.locator('//input[@name="duedate"]').fill('2026/09/10')

    let date = 16;
    let month = "August";
    let year = 2026;
    await page.locator('//img[@id="jscal_trigger_duedate"]').click();

// Navigate until the desired month appears
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    // await page.locator('//td[text()=">"]').click();


// Select the date
    await page.locator(`//td[text()="${date}"]`).click();

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    let bill = await page.locator('//textarea[@name="bill_street"]').inputValue()
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

    let valid = await page.locator('//textarea[@name="bill_street"]').textContent()
    if(bill===valid){
        console.log('Sales order is created');
    }else{
        console.log('Sales order is not created');
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
    await page.getByRole('link',{name:"Sales Order"}).first().click()
    await page.getByRole('img',{name:"Create Sales Order..."}).first().click()

    await page.locator('//input[@name="subject"]').fill(salesorder.subject)
    

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup.getByRole('link',{name:"CRM Software Quote"}).first().click()

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup1.getByRole('link',{name:"Farooq Ahmed"}).first().click()

    await page.locator('//select[@name="carrier"]').selectOption({value:salesorder.carrier})
    await page.locator('//select[@name="sostatus"]').selectOption({value:'Created'})

    let [popup2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(3).click()])
    await popup2.getByRole('link',{name:"TCS Technologies 01"}).first().click()

    // await page.locator('//input[@name="duedate"]').fill('2026/09/10')

    let date = 16;
    let month = "August";
    let year = 2026;

    await page.locator('//img[@id="jscal_trigger_duedate"]').click();
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    await page.locator('//td[@class="button nav"]').nth(2).click()
    await page.locator(`//td[text()="${date}"]`).click();

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    let bill = await page.locator('//textarea[@name="bill_street"]').inputValue()
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

    // let valid = await page.locator('//textarea[@name="bill_street"]').textContent()
    // if(bill===valid){
    //     console.log('Sales order is created');
    // }else{
    //     console.log('Sales order is not created');
    // }

    await expect(page.locator('//textarea[@name="bill_street"]')).toContainText(bill)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test('POM', async ({ page }) => {
    test.slow();
    const signin = new loginclass(page)
    const order = new SalesOrderPage(page)

    await signin.launchurl(login.url);
    await signin.details(login.username, login.password)

    await order.createSalesOrder(salesorder.subject,salesorder.carrier)
})

test.only('POM1', async ({ page }) => {
    test.slow(); 
    const signin = new loginclass(page);
    const order = new SalesOrderPage(page);

    await signin.launchApplication(login.url);
    await signin.details(login.username, login.password);

    await order.createSalesOrder(
        salesorder.subject,
        salesorder.carrier
    );

})