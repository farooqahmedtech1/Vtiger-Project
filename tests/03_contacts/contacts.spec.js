import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json'
import contacts from '../../testdata/03_contacts.json'
import { loginclass } from '../../pages/login'
import { ContactsPage } from '../../pages/03_contacts';
// import { random } from '../../utils/random';

test('create contacs', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"Contacts"}).click()
    await page.getByRole('img',{name:"Create Contact..."}).first().click()


    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Farooq')
    await page.locator('//input[@name="lastname"]').fill('Ahmed')
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
     let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:"TCS Technologies Pvt Ltd"}).click()
    await page.locator('//select[@name="leadsource"]').selectOption({value:'Employee'})
    await page.locator('//input[@name="email"]').fill('farooq@gmail.com')
    await page.getByRole('button',{name:"Save"}).first().click()

      let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
    if(lastname===valid){
        console.log('contact is created');
    }else{
        console.log('contact is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
}) 

test('ddt', async ({ page }) => {
    await test.slow()
    await page.goto(login.url)

    await page.locator('//input[@name="user_name"]').fill(login.username);
    await page.locator('//input[@name="user_password"]').fill(login.password);
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"Contacts"}).click()
    await page.getByRole('img',{name:"Create Contact..."}).first().click()


    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill(contacts.firstname)
    await page.locator('//input[@name="lastname"]').fill(contacts.lastname)
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
     let [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()])
    await popup.getByRole('link',{name:contacts.organization}).click()
    await page.locator('//select[@name="leadsource"]').selectOption({value:'Employee'})
    await page.locator('//input[@name="email"]').fill('farooq@gmail.com')
    await page.getByRole('button',{name:"Save"}).first().click()

    //   let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
    // if(lastname===valid){
    //     console.log('contact is created');
    // }else{
    //     console.log('contact is not created');
    // }

    await expect(page.locator('//span[@id="dtlview_Last Name"]')).toContainText(lastname)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})

test('POM', async ({ page }) => {
    test.slow();
    let signin = new loginclass(page);
    let contact = new ContactsPage(page);

    await signin.launchurl(login.url);
    await signin.details(login.username, login.password);

    await contact.createContact('Mr.',contacts.firstname,contacts.lastname,
        contacts.organization,'Employee')
})

test("Create Contact", async ({ page }) => {
    test.slow()
     const loginPage = new loginclass(page); 
    const contact = new ContactsPage(page);

await contact.launchApplication(login.url);

await loginPage.details(login.username, login.password);

await contact.createContact("Mr.","Farooq","Ahmed","TCS Technologies Pvt Ltd","Employee");
});