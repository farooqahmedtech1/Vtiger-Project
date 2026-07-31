import { test } from '../../fixtures/crmfixtures';
import opportunities from '../../testdata/04_opportunities.json';

test('Create Opportunity using Fixture', async ({ opportunities: opportunity }) => {
    await test.slow();
    await opportunity.createOpportunity(opportunities.potentialname,opportunities.Relatedto,'New Business',
        '500000');
});