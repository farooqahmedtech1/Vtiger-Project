import { expect, test } from '@playwright/test';
import login from '../../testdata/login.json';
import products from '../../testdata/05_products.json';
import { loginclass } from '../../pages/login';
import { ProductsPage } from '../../pages/05_products';

test('create opportunity', async ({ page }) => {
    await test.slow()
    await page.goto('http://localhost:8888/');

    await page.locator('//input[@name="user_name"]').fill('admin');
    await page.locator('//input[@name="user_password"]').fill('admin');
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByRole('link',{name:"Products"}).click()
    await page.getByRole('img',{name:"Create Product..."}).first().click()

    await page.locator('//input[@name="productname"]').fill('CRM Automation Suite')
    let productname = await page.locator('//input[@name="productname"]').inputValue()
    await page.locator('//select[@name="productcategory"]').selectOption({value:'CRM Applications'})
    await page.getByRole('button',{name:"Save"}).first().click()

    let valid = await page.locator('//span[@id="dtlview_Product Name"]').textContent()
    if(productname===valid){
        console.log('product is created');
    }else{
        console.log('product is not created');
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
    await page.getByRole('link',{name:"Products"}).click()
    await page.getByRole('img',{name:"Create Product..."}).first().click()

    await page.locator('//input[@name="productname"]').fill(products.productname)
    let productname = await page.locator('//input[@name="productname"]').inputValue()
    await page.locator('//select[@name="productcategory"]').selectOption({value:products.productcategory})
    await page.getByRole('button',{name:"Save"}).first().click()

    // let valid = await page.locator('//span[@id="dtlview_Product Name"]').textContent()
    // if(productname===valid){
    //     console.log('product is created');
    // }else{
    //     console.log('product is not created');
    // }

    await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(productname)
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})
test('POM', async ({ page }) => {
    test.slow();
    const signin = new loginclass(page);
    const product = new ProductsPage(page);

    await signin.launchApplication(login.url);
    await signin.details(login.username, login.password);

    await product.createProduct(products.productname,products.productcategory)
})

test('POM1', async ({ page }) => {
    test.slow();
    const loginPage = new loginclass(page);
const productPage = new ProductsPage(page);

await loginPage.launchApplication(login.url);
await loginPage.details(login.username, login.password);

await productPage.createProduct(products.productname,products.productcategory);
})