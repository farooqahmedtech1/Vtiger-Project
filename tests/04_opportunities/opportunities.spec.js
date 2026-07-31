import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json';
import opportunities from '../../testdata/04_opportunities.json';
import { loginclass } from '../../pages/login';
import { OpportunitiesPage } from '../../pages/04_opportunities';

test('create opportunity', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"Opportunities"}).click()
    await page.getByRole('img',{name:"Create Opportunity..."}).first().click()

    await page.locator('//input[@name="potentialname"]').fill('CRM Automation Project')
    let potentialname = await page.locator('//input[@name="potentialname"]').inputValue()

     let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:"TCS Technologies Pvt Ltd"}).click()
    await page.locator('//select[@name="opportunity_type"]').selectOption({value:'New Business'})
    await page.locator('//input[@name="amount"]').fill('500000')
    await page.getByRole('button',{name:"Save"}).first().click()

      let valid = await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
    if(potentialname===valid){
        console.log('opportunity is created');
    }else{
        console.log('opportunity is not created');
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
    await page.getByRole('link',{name:"Opportunities"}).click()
    await page.getByRole('img',{name:"Create Opportunity..."}).first().click()

    await page.locator('//input[@name="potentialname"]').fill(opportunities.potentialname)
    let potentialname = await page.locator('//input[@name="potentialname"]').inputValue()

     let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:opportunities.Relatedto}).click()
    await page.locator('//select[@name="opportunity_type"]').selectOption({value:'New Business'})
    await page.locator('//input[@name="amount"]').fill('500000')
    await page.getByRole('button',{name:"Save"}).first().click()

    //   let valid = await page.locator('//span[@id="dtlview_Opportunity Name"]').textContent()
    // if(potentialname===valid){
    //     console.log('opportunity is created');
    // }else{
    //     console.log('opportunity is not created');
    // }

    await expect(page.locator('//span[@id="dtlview_Opportunity Name"]')).toContainText(potentialname)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})
test('POM', async ({ page }) => {
    test.slow();
    const signin = new loginclass(page);
    const opportunity = new OpportunitiesPage(page);

    await signin.launchurl(login.url);
    await signin.details(login.username, login.password);

    await opportunity.createOpportunity(opportunities.potentialname,opportunities.Relatedto,'New Business','500000')

})

test.only('POM1', async ({ page }) => {
    test.slow();
    const loginPage = new loginclass(page);
    const opportunityPage = new OpportunitiesPage(page);

await loginPage.launchApplication(login.url);
await loginPage.details(login.username, login.password);

await opportunityPage.createOpportunity(opportunities.potentialname,
    opportunities.Relatedto,'New Business','500000');

})