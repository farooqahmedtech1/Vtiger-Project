// export class QuotesPage {

//     constructor(page) {
//         this.page = page
//         this.more = page.getByRole('link', { name: 'More' }).first()
//         this.quotes = page.getByRole('link', { name: 'Quotes' }).first()
//         this.createQuoteBtn = page.getByRole('img', { name: 'Create Quote...' }).first()
//         this.subject = page.locator('//input[@name="subject"]')
//         this.calendar = page.locator('//img[@id="jscal_trigger_validtill"]')
//         this.nextMonth = page.locator('//td[@class="button nav"]').nth(2)
//         this.carrier = page.locator('//select[@name="carrier"]')
//         this.selectPotential = page.getByRole('img', { name: 'Select' }).first()
//         this.quoteStage = page.locator('//select[@name="quotestage"]')
//         this.selectContact = page.getByRole('img', { name: 'Select' }).nth(1)
//         this.selectOrganization = page.getByRole('img', { name: 'Select' }).nth(2)
//         this.street = page.locator('//textarea[@name="bill_street"]')
//         this.city = page.locator('//input[@name="bill_city"]')
//         this.state = page.locator('//input[@name="bill_state"]')
//         this.code = page.locator('//input[@name="bill_code"]')
//         this.country = page.locator('//input[@name="bill_country"]')
//         this.copyAddress = page.locator('//input[@name="cpy"]').nth(1)
//         this.selectProduct = page.getByRole('img', { name: 'Products' })
//         this.quantity = page.locator('//input[@name="qty1"]')
//         this.listPrice = page.locator('//input[@name="listPrice1"]')

//         this.total = page.getByRole('cell', { name: 'Total' }).first()
//         this.save = page.getByRole('button', { name: 'Save' }).first()
//     }
//     async launchurl(url) {
//         await this.page.goto(url);
//     }

//     async createQuote(subject, carrier) {

//         await this.more.click();
//         await this.quotes.click();
//         await this.createQuoteBtn.click();

//         await this.subject.fill(subject);

       
//         let date = 16;
//         let month = "August";
//         let year = 2026;

//         await this.calendar.click();
//         await this.page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible();
//         await this.nextMonth.click();
//         await this.page.locator(`//td[text()="${date}"]`).click();

//         await this.carrier.selectOption({ value: carrier });

//         // Opportunity
//         let [popup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectPotential.click()
//         ]);

//         await popup.getByRole('link', { name: 'CRM Automation Project' }).first().click();

//         await this.quoteStage.selectOption({ value: 'Created' });

       
//         let [popup1] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectContact.click()
//         ]);

//         await popup1.getByRole('link', { name: 'Farooq Ahmed' }).first().click();

        
//         let [popup2] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectOrganization.click()
//         ]);

//         await popup2.getByRole('link', { name: 'TCS Technologies 01' }).click();

        
//         await this.street.fill('Farooq ahmed,sarjapura,bangalore');
//         await this.city.fill('Bangalore');
//         await this.state.fill('Karnataka');
//         await this.code.fill('581102');
//         await this.country.fill('India');

//         await this.copyAddress.click();

        
//         let [popup3] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectProduct.click()
//         ]);

//         await popup3.getByRole('link', { name: 'CRM Automation Suite' }).first().click();

//         await this.quantity.fill('1');
//         await this.listPrice.fill('500000');

//         await this.total.hover();
//         await this.save.click();
//     }
// }

import { Utility } from "../utils/utility.js";

export class QuotesPage extends Utility {
    
    constructor(page) {
        super(page);

        this.more = page.getByRole('link', { name: 'More' }).first();
        this.quotes = page.getByRole('link', { name: 'Quotes' }).first();
        this.createQuoteBtn = page.getByRole('img', { name: 'Create Quote...' }).first();
        this.subject = page.locator('//input[@name="subject"]');
        this.calendar = page.locator('//img[@id="jscal_trigger_validtill"]');
        this.nextMonth = page.locator('//td[@class="button nav"]').nth(2);
        this.carrier = page.locator('//select[@name="carrier"]');
        this.selectPotential = page.getByRole('img', { name: 'Select' }).first();
        this.quoteStage = page.locator('//select[@name="quotestage"]');
        this.selectContact = page.getByRole('img', { name: 'Select' }).nth(1);
        this.selectOrganization = page.getByRole('img', { name: 'Select' }).nth(2);
        this.street = page.locator('//textarea[@name="bill_street"]');
        this.city = page.locator('//input[@name="bill_city"]');
        this.state = page.locator('//input[@name="bill_state"]');
        this.code = page.locator('//input[@name="bill_code"]');
        this.country = page.locator('//input[@name="bill_country"]');
        this.copyAddress = page.locator('//input[@name="cpy"]').nth(1);
        this.selectProduct = page.getByRole('img', { name: 'Products' });
        this.quantity = page.locator('//input[@name="qty1"]');
        this.listPrice = page.locator('//input[@name="listPrice1"]');
        this.total = page.getByRole('cell', { name: 'Total' }).first();
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createQuote(subject, carrier) {

        await this.clickElement(this.more);
        await this.clickElement(this.quotes);
        await this.clickElement(this.createQuoteBtn);

        await this.fillText(this.subject, subject);

        let date = 16;
        let month = "August";
        let year = 2026;

        await this.clickElement(this.calendar);
        await this.page.locator(`//td[contains(text(),"${month}, ${year}")]`).isVisible();
        await this.clickElement(this.nextMonth);
        await this.page.locator(`//td[text()="${date}"]`).click();

        await this.selectDropdown(this.carrier, carrier);

        const [popup] = await this.popup(this.selectPotential);
        await popup.getByRole('link', { name: 'CRM Automation Project' }).first().click();

        await this.selectDropdown(this.quoteStage, 'Created');

        const [popup1] = await this.popup(this.selectContact);
        await popup1.getByRole('link', { name: 'Farooq Ahmed' }).first().click();

        const [popup2] = await this.popup(this.selectOrganization);
        await popup2.getByRole('link', { name: 'TCS Technologies 01' }).click();

        await this.fillText(this.street, 'Farooq ahmed,sarjapura,bangalore');
        await this.fillText(this.city, 'Bangalore');
        await this.fillText(this.state, 'Karnataka');
        await this.fillText(this.code, '581102');
        await this.fillText(this.country, 'India');

        await this.clickElement(this.copyAddress);

        const [popup3] = await this.popup(this.selectProduct);
        await popup3.getByRole('link', { name: 'CRM Automation Suite' }).first().click();

        await this.fillText(this.quantity, '1');
        await this.fillText(this.listPrice, '500000');

        await this.total.hover();
        await this.clickElement(this.save);
    }
}