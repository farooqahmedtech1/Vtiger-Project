import { test } from '../../fixtures/crmfixtures';
import contacts from '../../testdata/03_contacts.json';

test('Create Contact using Fixture', async ({ contacts: contact }) => {
    await test.slow();
    await contact.createContact('Mr.',contacts.firstname,contacts.lastname,contacts.organization,
        'Employee');

});