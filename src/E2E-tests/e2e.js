import config from './configuration';
import { userSearch } from './Journeys/userSearch';

fixture
    .disablePageCaching `Nasa search assets`
    .page(config.url);

test('User watch a video', async () => {
    await userSearch();
});


