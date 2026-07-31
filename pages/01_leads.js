// export class leadsclass {
//     constructor(page) {
//         this.page = page;
//         this.lead = page.getByRole('link', { name: 'Leads' })
//         this.link = page.getByRole('img', { name: 'Create Lead...' })
//         this.salutation = page.locator('//select[@name="salutationtype"]')
//         this.firstname = page.locator('//input[@name="firstname"]')
//         this.lastname = page.locator('//input[@name="lastname"]')
//         this.companyname = page.locator('//input[@name="company"]')
//         this.save = page.locator('(//input[@title="Save [Alt+S]"])[1]')
//     }

//     async launchurl(url) {
//         await this.page.goto(url)
//     }

//     async details(salutationtype, firstname, lastname, company) {
//         await this.lead.click()
//         await this.link.click()
//         await this.salutation.selectOption({ value: salutationtype })
//         await this.firstname.fill(firstname)
//         await this.lastname.fill(lastname)
//         await this.companyname.fill(company)
//         await this.save.click();
//     }
// }

import { Utility } from "../utils/utility.js";

export class leadsclass extends Utility {

    constructor(page) {
        super(page);

        this.lead = page.getByRole('link', { name: 'Leads' });
        this.link = page.getByRole('img', { name: 'Create Lead...' });
        this.salutation = page.locator('//select[@name="salutationtype"]');
        this.firstname = page.locator('//input[@name="firstname"]');
        this.lastname = page.locator('//input[@name="lastname"]');
        this.companyname = page.locator('//input[@name="company"]');
        this.save = page.locator('(//input[@title="Save [Alt+S]"])[1]');
    }

    async details(salutationtype, firstname, lastname, company) {

        await this.clickElement(this.lead);
        await this.clickElement(this.link);

        await this.selectDropdown(this.salutation, salutationtype);

        await this.fillText(this.firstname, firstname);
        await this.fillText(this.lastname, lastname);
        await this.fillText(this.companyname, company);

        await this.clickElement(this.save);
    }
}