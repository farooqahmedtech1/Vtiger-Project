// export class InvoicePage {
//     constructor(page) {
//         this.page = page;
//         this.more = page.getByRole('link', { name: 'More' }).first()
//         this.invoice = page.getByRole('link', { name: 'INVOICE' }).first()
//         this.createInvoiceBtn = page.getByRole('img', { name: 'Create Invoice...' }).first()
//         this.subject = page.locator('//input[@name="subject"]')
//         this.contactSelect = page.getByRole('img', { name: 'Select' }).nth(1)
//         this.dueDate = page.locator('//img[@id="jscal_trigger_duedate"]')
//         this.organizationSelect = page.getByRole('img', { name: 'Select' }).nth(2)
//         // this.invoiceDate = page.locator('//img[@id="jscal_trigger_invoicedate"]');
//         this.billStreet = page.locator('//textarea[@name="bill_street"]')
//         this.billCity = page.locator('//input[@name="bill_city"]')
//         this.billState = page.locator('//input[@name="bill_state"]');
//         this.billCode = page.locator('//input[@name="bill_code"]');
//         this.billCountry = page.locator('//input[@name="bill_country"]');
//         this.copyAddress = page.locator('//input[@name="cpy"]').nth(1);
//         this.product = page.getByRole('img', { name: 'Products' });
//         this.qty = page.locator('//input[@name="qty1"]');
//         this.listPrice = page.locator('//input[@name="listPrice1"]');
//         this.total = page.getByRole('cell', { name: 'Total' }).first();
//         this.save = page.getByRole('button', { name: 'Save' }).first();
//     }
//     async launchurl(url) {
//         await this.page.goto(url);
//     }

//     async createInvoice(subject,contact,organization,dueDate,dueMonth,dueYear,
//         street,city,state,code,country,product,qty,listPrice) 
    
//     {
//         await this.more.click();
//         await this.invoice.click();
//         await this.createInvoiceBtn.click();

//         await this.subject.fill("CRM Software Invoice");

//         // Contact Popup
//         let [contactPopup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.contactSelect.click()
//         ]);

//         await contactPopup.getByRole('link', { name: contact }).first().click();

//         // Due Date
//         await this.dueDate.click();
//         await this.page.locator(`//td[contains(text(),"${dueMonth}, ${dueYear}")]`).isVisible();
//         await this.page.locator('//td[@class="button nav"]').nth(2).click();
//         await this.page.locator(`//td[text()="${dueDate}"]`).click();

//         // Organization Popup
//         let [orgPopup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.organizationSelect.click()
//         ]);

//         await orgPopup.getByRole('link', { name: organization }).first().click();

//         // // Invoice Date
//         // await this.invoiceDate.click();
//         // await this.page.locator(`//td[contains(text(),"${invoiceMonth}, ${invoiceYear}")]`).isVisible();
//         // // await this.page.locator('//td[@class="button nav"]').nth(2).click();
//         // await expect(this.page.locator(`//td[contains(text(),"${invoiceMonth}, ${invoiceYear}")]`)).toBeVisible();
//         // await this.page.locator(`//td[text()="${invoiceDate}"]`).nth(1).click();
        

//         // Billing Address
//         await this.billStreet.fill(street)
//         await this.billCity.fill(city)
//         await this.billState.fill(state)
//         await this.billCode.fill(code)
//         await this.billCountry.fill(country)
//         await this.copyAddress.click()

//         // Product Popup
//         let [productPopup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.product.click()
//         ]);

//         await productPopup.getByRole('link', { name: product }).first().click();

//         await this.qty.fill(qty);
//         await this.listPrice.fill(listPrice);
//         await this.total.hover();

//         await this.save.click();
//     }
// }
import { Utility } from "../utils/utility.js";

export class InvoicePage extends Utility {

    constructor(page) {
        super(page);

        this.more = page.getByRole('link', { name: 'More' }).first();
        this.invoice = page.getByRole('link', { name: 'INVOICE' }).first();
        this.createInvoiceBtn = page.getByRole('img', { name: 'Create Invoice...' }).first();

        this.subject = page.locator('//input[@name="subject"]');

        this.contactSelect = page.getByRole('img', { name: 'Select' }).nth(1);

        this.dueDate = page.locator('//img[@id="jscal_trigger_duedate"]');

        this.organizationSelect = page.getByRole('img', { name: 'Select' }).nth(2);

        this.billStreet = page.locator('//textarea[@name="bill_street"]');
        this.billCity = page.locator('//input[@name="bill_city"]');
        this.billState = page.locator('//input[@name="bill_state"]');
        this.billCode = page.locator('//input[@name="bill_code"]');
        this.billCountry = page.locator('//input[@name="bill_country"]');

        this.copyAddress = page.locator('//input[@name="cpy"]').nth(1);

        this.product = page.getByRole('img', { name: 'Products' });

        this.qty = page.locator('//input[@name="qty1"]');
        this.listPrice = page.locator('//input[@name="listPrice1"]');

        this.total = page.getByRole('cell', { name: 'Total' }).first();

        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createInvoice(
        subject,
        contact,
        organization,
        dueDate,
        dueMonth,
        dueYear,
        street,
        city,
        state,
        code,
        country,
        product,
        qty,
        listPrice
    ) {

        await this.clickElement(this.more);
        await this.clickElement(this.invoice);
        await this.clickElement(this.createInvoiceBtn);

        await this.fillText(this.subject, subject);

        const [contactPopup] = await this.popup(this.contactSelect);

        await contactPopup
            .getByRole('link', { name: contact })
            .first()
            .click();

        await this.selectDate(
            this.dueDate,
            dueMonth,
            dueYear,
            dueDate
        );

        const [orgPopup] = await this.popup(this.organizationSelect);

        await orgPopup
            .getByRole('link', { name: organization })
            .first()
            .click();

        await this.fillText(this.billStreet, street);
        await this.fillText(this.billCity, city);
        await this.fillText(this.billState, state);
        await this.fillText(this.billCode, code);
        await this.fillText(this.billCountry, country);

        await this.clickElement(this.copyAddress);

        const [productPopup] = await this.popup(this.product);

        await productPopup
            .getByRole('link', { name: product })
            .first()
            .click();

        await this.fillText(this.qty, qty);
        await this.fillText(this.listPrice, listPrice);

        await this.hover(this.total);

        await this.clickElement(this.save);
    }
}