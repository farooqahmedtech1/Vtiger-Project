// import { dropdown } from "../utils/dropdown";
// import { window } from "../utils/windowhandling";
// import { Utility } from "../utils/utility.js";

// export class ContactsPage {

//     constructor(page) {
//         this.page = page;

//         this.contacts = page.getByRole('link', { name: 'Contacts' })
//         this.createContactBtn = page.getByRole('img', { name: 'Create Contact...' }).first()
//         this.salutation = page.locator('//select[@name="salutationtype"]')
//         this.firstname = page.locator('//input[@name="firstname"]')
//         this.lastname = page.locator('//input[@name="lastname"]');
//         this.organization = page.getByRole('img', { name: 'Select' }).first()
//         this.leadsource = page.locator('//select[@name="leadsource"]');
//         this.save = page.getByRole('button', { name: 'Save' }).first();
//     }
//     async launchurl(url) {
//         await this.page.goto(url);
//     }

//     async createContact(salutation, firstname, lastname, organization, leadsource) {

//         await this.contacts.click();
//         await this.createContactBtn.click();

//         await this.salutation.selectOption({ value: salutation });
//         await this.firstname.fill(firstname);
//         await this.lastname.fill(lastname);

//         let [popup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.organization.click()
//         ]);

//         await popup.getByRole('link', { name: organization }).click();

//         await this.leadsource.selectOption({ value: leadsource });
        

//         await this.save.click();
//     }
// }


import { Utility } from "../utils/utility.js";

export class ContactsPage extends Utility {

    constructor(page) {
        super(page);

        this.contacts = page.getByRole('link', { name: 'Contacts' });
        this.createContactBtn = page.getByRole('img', { name: 'Create Contact...' }).first();
        this.salutation = page.locator('//select[@name="salutationtype"]');
        this.firstname = page.locator('//input[@name="firstname"]');
        this.lastname = page.locator('//input[@name="lastname"]');
        this.organization = page.getByRole('img', { name: 'Select' }).first();
        this.leadsource = page.locator('//select[@name="leadsource"]');
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createContact(salutation, firstname, lastname, organization, leadsource) {

        await this.clickElement(this.contacts);
        await this.clickElement(this.createContactBtn);

        await this.selectDropdown(this.salutation, salutation);
        await this.fillText(this.firstname, firstname);
        await this.fillText(this.lastname, lastname);

        const [popup] = await this.popup(this.organization);

        await popup.getByRole('link', { name: organization }).click();

        await this.selectDropdown(this.leadsource, leadsource);

        await this.clickElement(this.save);
    }
}