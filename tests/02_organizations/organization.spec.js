import { test } from '../../fixtures/crmfixtures';
import organizationData from '../../testdata/02_organization.json';

test('Create Organization', async ({ organization }) => {
    await test.slow();
    await organization.createOrg(organizationData.accountname,organizationData.website,
        "Technology","Customer");

});