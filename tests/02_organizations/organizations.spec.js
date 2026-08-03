import { test, expect } from '@playwright/test';
import login from '../../testdata/login.json'
import organization from '../../testdata/02_organization.json'
import { loginclass } from '../../pages/login';
import { OrganizationPage } from '../../pages/02_organization';

test('create org', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()


    await page.getByRole('link',{name:"Organizations"}).click()
    await page.getByRole('img',{name:"Create Organization..."}).first().click()
    await page.locator('//input[@name="accountname"]').fill('TCS Technologies 01')
    let accountname= await page.locator('//input[@name="accountname"]').inputValue()
    await page.locator('//input[@name="website"]').fill('www.tcs.com')

    let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:"TCS Technologies Pvt Ltd"}).click()
    // await page.bringToFront()
    await page.locator('//select[@name="industry"]').selectOption({value:'Technology'})
    await page.locator('//select[@name="accounttype"]').selectOption({value:'Customer'})
    await page.getByRole('button',{name:"Save"}).first().click()
    

    let valid = await page.locator('//span[@id="dtlview_Organization Name"]').textContent()
        if (accountname === valid) {
    console.log('Organization is created');
        } else {
    console.log('Organization is not created');
        }
        await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test('ddt', async ({ page }) => {

    await page.goto(login.url)
    await page.locator('//input[@name="user_name"]').fill(login.username)
    await page.locator('//input[@name="user_password"]').fill(login.password)
    await page.getByRole('button',{name:'Login'}).click()


    await page.getByRole('link',{name:"Organizations"}).click()
    await page.getByRole('img',{name:"Create Organization..."}).first().click()
    await page.locator('//input[@name="accountname"]').fill(organization.accountname)
    let accountname= await page.locator('//input[@name="accountname"]').inputValue()
    await page.locator('//input[@name="website"]').fill(organization.website)

    //! validation
    //  let valid = await page.locator('//input[@name="accountname"]').textContent()
    //     if (accountname === valid) {
    // console.log('Organization is created');
    //     } else {
    // console.log('Organization is not created');
    //     }

        await expect(page.locator('//input[@name="accountname"]')).toHaveValue(accountname);
        await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})

test('POM', async ({ page }) => {

    let signin = new loginclass(page);
    let org = new OrganizationPage(page);

    
    await signin.launchApplication(login.url);
    await signin.details(login.username, login.password);
    await org.createOrg(organization.accountname,organization.website,'Technology','Customer');

    // await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover();
    // await page.locator('//a[text()="Sign Out"]').click();
});

test('POM1',async ({page})=>{
await test.slow();
const signin = new loginclass(page);
const org = new OrganizationPage(page);

await signin.launchApplication(login.url);
await signin.details(login.username, login.password);

await org.createOrg(organization.accountname,organization.website,"Technology","Customer");
})