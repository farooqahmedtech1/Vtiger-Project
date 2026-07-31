import {test as base} from '@playwright/test'
import { loginclass } from '../pages/login'
import login from '../testdata/login.json'

export let test = base.extend({
    login : async ({page},use) => {
        let signin = new loginclass(page)
        await signin.launchApplication(login.url);
        await signin.details(login.username,login.password);
        await use(page)
    }
}) 