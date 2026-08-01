import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json';
import invoiceData from '../../testdata/08_invoice.json';
import { loginclass } from '../../pages/login';
import { InvoicePage } from '../../pages/08_invoice';

test('create Invoice', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"More"}).first().click()
    await page.getByRole('link',{name:"INVOICE"}).first().click()
    await page.getByRole('img',{name:"Create Invoice..."}).first().click()

    await page.locator('//input[@name="subject"]').fill('CRM Software Invoice')

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup.getByRole('link',{name:"Farooq Ahmed"}).first().click()

    let date = 16;
    let month = "August";
    let year = 2026;
    await page.locator('//img[@id="jscal_trigger_duedate"]').click();
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    await page.locator('//td[@class="button nav"]').nth(2).click();
    await page.locator(`//td[text()="${date}"]`).click();

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup1.getByRole('link',{name:"TCS Technologies Pvt Ltd"}).first().click()


    let date1 = 18;
    let month1 = "August";
    let year1 = 2026;
    await page.locator('//img[@id="jscal_trigger_invoicedate"]').click();
    await page.locator(`//td[contains(text(),"${month1}, ${year1}")]`).isVisible() 
    await page.locator('//td[@class="button nav"]').nth(2).click();
    await page.locator(`//td[text()="${date1}"]`).nth(1).click();
    

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    let invoice = await page.locator('//textarea[@name="bill_street"]').inputValue()
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
    if(invoice===valid){
        console.log('Invoice is created');
    }else{
        console.log('Invoice is not created');
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
    await page.getByRole('link',{name:"INVOICE"}).first().click()
    await page.getByRole('img',{name:"Create Invoice..."}).first().click()

    await page.locator('//input[@name="subject"]').fill('CRM Software Invoice')

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(1).click()])
    await popup.getByRole('link',{name:invoiceData.Contact}).first().click()

    let date = 16;
    let month = "August";
    let year = 2026;
    await page.locator('//img[@id="jscal_trigger_duedate"]').click();
    await page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible() 
    await page.locator('//td[@class="button nav"]').nth(2).click();
    await page.locator(`//td[text()="${date}"]`).click();

    let [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).nth(2).click()])
    await popup1.getByRole('link',{name:invoiceData.Organization}).first().click()


    // let date1 = 18;
    // let month1 = "August";
    // let year1 = 2026;
    // await page.locator('//img[@id="jscal_trigger_invoicedate"]').click();
    // await page.locator(`//td[contains(text(),"${month1}, ${year1}")]`).isVisible() 
    // await page.locator('//td[@class="button nav"]').nth(2).click();
    // await page.locator(`//td[text()="${date1}"]`).nth(1).click();
    

    await page.locator('//textarea[@name="bill_street"]').fill('Farooq ahmed,sarjapura,bangalore')
    let invoice = await page.locator('//textarea[@name="bill_street"]').inputValue()
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
    // if(invoice===valid){
    //     console.log('Invoice is created');
    // }else{
    //     console.log('Invoice is not created');
    // }

    await expect(page.locator('//textarea[@name="bill_street"]')).toContainText(invoice)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})
test('POM', async ({ page }) => {
    test.slow()
    let signin = new loginclass(page)
    let invoice = new InvoicePage(page)

    await signin.launchurl(login.url)
    await signin.details(login.username, login.password)

    await invoice.createInvoice(invoiceData.subject,invoiceData.Contact,invoiceData.Organization,16,'August',2026,'Farooq ahmed,sarjapura,bangalore','Bangalore',
        'Karnataka','581102','India','CRM Automation Suite','1','500000')

})

test('POM with Utility', async ({ page }) => {

    test.slow();

    const signin = new loginclass(page);
    const invoice = new InvoicePage(page);

    await signin.launchApplication(login.url);

    await signin.details(
        login.username,
        login.password
    );

    await invoice.createInvoice(
        invoiceData.subject,
        invoiceData.Contact,
        invoiceData.Organization,
        16,
        "August",
        2026,
        "Farooq ahmed,sarjapura,bangalore",
        "Bangalore",
        "Karnataka",
        "581102",
        "India",
        "CRM Automation Suite",
        "1",
        "500000"
    );
});

