import { test } from '../../fixtures/crmfixtures';
import quote from '../../testdata/06_quote.json';

test('Create Quote using Fixture', async ({ quotes }) => {

    await test.slow();
    await quotes.createQuote(quote.subject,quote.carrier);

});