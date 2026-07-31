import { test } from '../../fixtures/crmfixtures';
import productData from '../../testdata/05_products.json';

test('Create Product using Fixture', async ({ products }) => {

    await test.slow();
    await products.createProduct(productData.productname,productData.productcategory);

});