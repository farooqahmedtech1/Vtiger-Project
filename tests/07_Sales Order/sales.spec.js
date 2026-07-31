import { test } from '../../fixtures/crmfixtures';
import salesorder from '../../testdata/07_salesorder.json';

test('Create Sales Order using Fixture', async ({ salesOrder }) => {

    await test.slow();
    await salesOrder.createSalesOrder(salesorder.subject,salesorder.carrier);

});