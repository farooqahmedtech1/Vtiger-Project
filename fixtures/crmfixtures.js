import {test as base} from './login'
import {leadsclass} from '../pages/01_leads'
import { OrganizationPage } from '../pages/02_organization'
import { ContactsPage } from '../pages/03_contacts'
import { OpportunitiesPage } from '../pages/04_opportunities'
import { ProductsPage } from '../pages/05_products'
import { QuotesPage } from '../pages/06_quote'
import { SalesOrderPage } from '../pages/07_salesorder'
import { InvoicePage } from '../pages/08_invoice'


export let test = base.extend({
   leads: async ({ login }, use) => {
        const lead = new leadsclass(login);
        await use(lead);
    },
    organization: async ({ login }, use) => {
        const org = new OrganizationPage(login);
        await use(org);
    
    },
   contacts: async ({ login }, use) => {
        const contact = new ContactsPage(login);
        await use(contact);
    },
    opportunities: async ({ login }, use) => {
        const opportunity = new OpportunitiesPage(login);
        await use(opportunity);
    },
     products: async ({ login }, use) => {
        const product = new ProductsPage(login);
        await use(product);
    },
    quotes: async ({ login }, use) => {
        const quote = new QuotesPage(login);
        await use(quote);
    },
     salesOrder: async ({ login }, use) => {
        const order = new SalesOrderPage(login);
        await use(order);
    },
    invoicePage: async ({login}, use)=>{
        const invoice = new InvoicePage(login);
        await use(invoice);
    }
}) 