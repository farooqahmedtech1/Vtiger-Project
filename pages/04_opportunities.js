// export class OpportunitiesPage {

//     constructor(page) {
//         this.page = page
//         this.opportunities = page.getByRole('link', { name: 'Opportunities' })
//         this.createOpportunityBtn = page.getByRole('img', { name: 'Create Opportunity...' }).first()
//         this.opportunityName = page.locator('//input[@name="potentialname"]')
//         this.organization = page.getByRole('img', { name: 'Select' }).first()
//         this.opportunityType = page.locator('//select[@name="opportunity_type"]')
//         this.amount = page.locator('//input[@name="amount"]')
//         this.save = page.getByRole('button', { name: 'Save' }).first()
//     }
//      async launchurl(url) {
//         await this.page.goto(url)
//     }
//     async createOpportunity(opportunityName,organization,opportunityType,amount) {

//         await this.opportunities.click()
//         await this.createOpportunityBtn.click()

//         await this.opportunityName.fill(opportunityName)

//         let [popup] = await Promise.all([
//             this.page.waitForEvent('popup'),
//             this.organization.click()
//         ]);

//         await popup.getByRole('link', { name: organization }).click();

//         await this.opportunityType.selectOption({ value: opportunityType });
//         await this.amount.fill(amount);

//         await this.save.click();
//     }

// }

import { Utility } from "../utils/utility.js";

export class OpportunitiesPage extends Utility {

    constructor(page) {
        super(page);

        this.opportunities = page.getByRole('link', { name: 'Opportunities' });
        this.createOpportunityBtn = page.getByRole('img', { name: 'Create Opportunity...' }).first();
        this.opportunityName = page.locator('//input[@name="potentialname"]');
        this.organization = page.getByRole('img', { name: 'Select' }).first();
        this.opportunityType = page.locator('//select[@name="opportunity_type"]');
        this.amount = page.locator('//input[@name="amount"]');
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createOpportunity(opportunityName, organization, opportunityType, amount) {

        await this.clickElement(this.opportunities);
        await this.clickElement(this.createOpportunityBtn);

        await this.fillText(this.opportunityName, opportunityName);

        const [popup] = await this.popup(this.organization);

        await popup.getByRole('link', { name: organization }).click();

        await this.selectDropdown(this.opportunityType, opportunityType);
        await this.fillText(this.amount, amount);

        await this.clickElement(this.save);
    }
}