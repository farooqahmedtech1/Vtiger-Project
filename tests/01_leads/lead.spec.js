import {test} from '../../fixtures/crmfixtures'
import leadData from '../../testdata/01_leads.json';

test('Lead', async ({ leads }) => {
    await test.slow();
    await leads.details('Ms.',leadData.firstname,leadData.lastname,leadData.company_name);

});
