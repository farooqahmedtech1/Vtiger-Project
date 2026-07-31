// export class SalesOrderPage {

//     constructor(page) {
//         this.page = page;

//         this.more = page.getByRole('link', { name: 'More' }).first()
//         this.salesOrder = page.getByRole('link', { name: 'Sales Order' }).first()
//         this.createSalesOrderBtn = page.getByRole('img', { name: 'Create Sales Order...' }).first()
//         this.subject = page.locator('//input[@name="subject"]')
//         this.selectQuote = page.getByRole('img', { name: 'Select' }).nth(1)
//         this.selectContact = page.getByRole('img', { name: 'Select' }).nth(2);
//         this.selectOrganization = page.getByRole('img', { name: 'Select' }).nth(3)

//         this.carrier = page.locator('//select[@name="carrier"]');
//         this.status = page.locator('//select[@name="sostatus"]')

//         this.calendar = page.locator('//img[@id="jscal_trigger_duedate"]')
//         this.nextMonth = page.locator('//td[@class="button nav"]').nth(2)
//         this.street = page.locator('//textarea[@name="bill_street"]')
//         this.city = page.locator('//input[@name="bill_city"]')
//         this.state = page.locator('//input[@name="bill_state"]');
//         this.code = page.locator('//input[@name="bill_code"]');
//         this.country = page.locator('//input[@name="bill_country"]');

//         this.copyAddress = page.locator('//input[@name="cpy"]').nth(1);

//         this.products = page.getByRole('img', { name: 'Products' });

//         this.quantity = page.locator('//input[@name="qty1"]');
//         this.listPrice = page.locator('//input[@name="listPrice1"]');

//         this.total = page.getByRole('cell', { name: 'Total' }).first();
//         this.save = page.getByRole('button', { name: 'Save' }).first();
//     }
//     async launchurl(url) {
//         await this.page.goto(url);
//     }

//     async createSalesOrder(subject, carrier) {

//         await this.more.click();
//         await this.salesOrder.click();
//         await this.createSalesOrderBtn.click();

//         await this.subject.fill(subject);

//         // Quote
//         const [popup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectQuote.click()
//         ]);
//         await popup.getByRole('link', { name: 'CRM Software Quote' }).first().click();

//         // Contact
//         const [popup1] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectContact.click()
//         ]);
//         await popup1.getByRole('link', { name: 'Farooq Ahmed' }).first().click();

//         await this.carrier.selectOption({ value: carrier });
//         await this.status.selectOption({ value: 'Created' });

//         // Organization
//         const [popup2] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectOrganization.click()
//         ]);
//         await popup2.getByRole('link', { name: 'TCS Technologies 01' }).first().click();

//         // Calendar
//         let date = 16;
//         let month = "August";
//         let year = 2026;

//         await this.calendar.click();
//         await this.page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible();
//         await this.nextMonth.click();
//         await this.page.locator(`//td[text()="${date}"]`).click();

//         // Billing Address
//         await this.street.fill('Farooq ahmed,sarjapura,bangalore');
//         await this.city.fill('Bangalore');
//         await this.state.fill('Karnataka');
//         await this.code.fill('581102');
//         await this.country.fill('India');

//         await this.copyAddress.click();

//         // Product
//         let [popup3] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.products.click()
//         ]);
//         await popup3.getByRole('link', { name: 'CRM Automation Suite' }).first().click();

//         await this.quantity.fill('1');
//         await this.listPrice.fill('500000');

//         await this.total.hover();
//         await this.save.click();
//     }
// }

import { Utility } from "../utils/utility.js";

export class SalesOrderPage extends Utility {

    constructor(page) {
        super(page);

        this.more = page.getByRole('link', { name: 'More' }).first();
        this.salesOrder = page.getByRole('link', { name: 'Sales Order' }).first();
        this.createSalesOrderBtn = page.getByRole('img', { name: 'Create Sales Order...' }).first();

        this.subject = page.locator('//input[@name="subject"]');

        this.selectQuote = page.getByRole('img', { name: 'Select' }).nth(1);
        this.selectContact = page.getByRole('img', { name: 'Select' }).nth(2);
        this.selectOrganization = page.getByRole('img', { name: 'Select' }).nth(3);

        this.carrier = page.locator('//select[@name="carrier"]');
        this.status = page.locator('//select[@name="sostatus"]');

        this.calendar = page.locator('//img[@id="jscal_trigger_duedate"]');
        this.nextMonth = page.locator('//td[@class="button nav"]').nth(2);

        this.street = page.locator('//textarea[@name="bill_street"]');
        this.city = page.locator('//input[@name="bill_city"]');
        this.state = page.locator('//input[@name="bill_state"]');
        this.code = page.locator('//input[@name="bill_code"]');
        this.country = page.locator('//input[@name="bill_country"]');

        this.copyAddress = page.locator('//input[@name="cpy"]').nth(1);

        this.products = page.getByRole('img', { name: 'Products' });

        this.quantity = page.locator('//input[@name="qty1"]');
        this.listPrice = page.locator('//input[@name="listPrice1"]');

        this.total = page.getByRole('cell', { name: 'Total' }).first();
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createSalesOrder(subject, carrier) {

        await this.clickElement(this.more);
        await this.clickElement(this.salesOrder);
        await this.clickElement(this.createSalesOrderBtn);

        await this.fillText(this.subject, subject);

        // Quote
        const [quotePopup] = await this.popup(this.selectQuote);
        await quotePopup.getByRole('link', { name: 'CRM Software Quote' }).first().click();

        // Contact
        const [contactPopup] = await this.popup(this.selectContact);
        await contactPopup.getByRole('link', { name: 'Farooq Ahmed' }).first().click();

        await this.selectDropdown(this.carrier, carrier);
        await this.selectDropdown(this.status, 'Created');

        // Organization
        const [organizationPopup] = await this.popup(this.selectOrganization);
        await organizationPopup.getByRole('link', { name: 'TCS Technologies 01' }).first().click();

        // Calendar
        const date = 16;
        const month = "August";
        const year = 2026;

        await this.clickElement(this.calendar);
        await this.page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible();
        await this.clickElement(this.nextMonth);
        await this.page.locator(`//td[text()="${date}"]`).click();

        // Billing Address
        await this.fillText(this.street, 'Farooq ahmed,sarjapura,bangalore');
        await this.fillText(this.city, 'Bangalore');
        await this.fillText(this.state, 'Karnataka');
        await this.fillText(this.code, '581102');
        await this.fillText(this.country, 'India');

        await this.clickElement(this.copyAddress);

        // Product
        const [productPopup] = await this.popup(this.products);
        await productPopup.getByRole('link', { name: 'CRM Automation Suite' }).first().click();

        await this.fillText(this.quantity, '1');
        await this.fillText(this.listPrice, '500000');

        await this.total.hover();

        await this.clickElement(this.save);
    }
}