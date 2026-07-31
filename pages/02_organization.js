// export class OrganizationPage {
//     constructor(page) {
//         this.page = page;

//         this.organization = page.getByRole('link', { name: 'Organizations' })
//         this.createOrganization = page.getByRole('img', { name: 'Create Organization...' }).first()
//         this.accountName = page.locator('//input[@name="accountname"]')
//         this.website = page.locator('//input[@name="website"]')
//         this.selectVendor = page.getByRole('img', { name: 'Select' }).first()
//         this.industry = page.locator('//select[@name="industry"]')
//         this.accountType = page.locator('//select[@name="accounttype"]')
//         this.save = page.getByRole('button', { name: 'Save' }).first()
//     }

//      async launchurl(url) {
//         await this.page.goto(url)
//     }

//     async createOrg(accountname,website,industry,accountType) {
//         await this.organization.click()
//         await this.createOrganization.click()

//         await this.accountName.fill(accountname)
//         await this.website.fill(website)

//         let [popup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.selectVendor.click()
//         ]);

//         await popup.getByRole('link', { name: 'TCS Technologies Pvt Ltd' }).click();

//         await this.industry.selectOption({ value: industry });
//         await this.accountType.selectOption({ value: accountType });

//         await this.save.click();
//     }

// }

import { Utility } from "../utils/utility.js";

export class OrganizationPage extends Utility {

    constructor(page) {
        super(page);

        this.organization = page.getByRole('link', { name: 'Organizations' });
        this.createOrganization = page.locator('//img[@title="Create Organization..."]').first();
        this.accountName = page.locator('//input[@name="accountname"]');
        this.website = page.locator('//input[@name="website"]');
        this.selectVendor = page.getByRole('img', { name: 'Select' }).first();
        this.industry = page.locator('//select[@name="industry"]');
        this.accountType = page.locator('//select[@name="accounttype"]');
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createOrg(accountname, website, industry, accountType) {

        await this.clickElement(this.organization);
        await this.clickElement(this.createOrganization);

        await this.fillText(this.accountName, accountname);
        await this.fillText(this.website, website);

        const [popup] = await this.popup(this.selectVendor);

        await popup.getByRole('link', {
            name: 'TCS Technologies Pvt Ltd'
        }).click();

        await this.selectDropdown(this.industry, industry);
        await this.selectDropdown(this.accountType, accountType);

        await this.clickElement(this.save);
    }
}