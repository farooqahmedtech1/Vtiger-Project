// export class ProductsPage {

//     constructor(page) {
//         this.page = page
//         this.products = page.getByRole('link', { name: 'Products' })
//         this.createProductBtn = page.getByRole('img', { name: 'Create Product...' }).first()
//         this.productname = page.locator('//input[@name="productname"]')
//         this.productcategory = page.locator('//select[@name="productcategory"]')
//         this.save = page.getByRole('button', { name: 'Save' }).first()

//     }
//      async launchurl(url) {
//         await this.page.goto(url)
//     }

//     async createProduct(productname, productcategory) {
//         await this.products.click()
//         await this.createProductBtn.click()
//         await this.productname.fill(productname);
//         await this.productcategory.selectOption({ value: productcategory })
//         await this.save.click()
//     }
// }


import { Utility } from "../utils/utility.js";

export class ProductsPage extends Utility {

    constructor(page) {
        super(page);

        this.products = page.getByRole('link', { name: 'Products' });
        this.createProductBtn = page.getByRole('img', { name: 'Create Product...' }).first();
        this.productname = page.locator('//input[@name="productname"]');
        this.productcategory = page.locator('//select[@name="productcategory"]');
        this.save = page.getByRole('button', { name: 'Save' }).first();
    }

    async createProduct(productname, productcategory) {

        await this.clickElement(this.products);
        await this.clickElement(this.createProductBtn);

        await this.fillText(this.productname, productname);
        await this.selectDropdown(this.productcategory, productcategory);

        await this.clickElement(this.save);
    }
}