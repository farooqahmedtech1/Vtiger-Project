import { test } from '../../fixtures/crmFixtures';
import invoiceData from '../../testdata/08_invoice.json';
import { InvoicePage } from '../../pages/08_invoice';


test('Create Invoice', async ({ invoicePage }) => {

    await test.slow();
    await invoicePage.createInvoice(invoiceData.subject,invoiceData.Contact,invoiceData.Organization,
        16,"August",2026,"Farooq ahmed,sarjapura,bangalore","Bangalore","Karnataka","581102","India",
        "CRM Automation Suite","1","500000");

});