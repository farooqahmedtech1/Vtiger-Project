// export class loginclass{
//     constructor(page){
//         this.page=page;
//         this.username= page.locator('//input[@name="user_name"]');
//         this.password= page.locator('//input[@name="user_password"]');
//         this.button= page.getByRole('button',{name:'Login'})
//     }
//     async launchurl (url){
//         await this.page.goto(url)
//     }
//     async details(user_name,user_password){
//         await this.username.fill(user_name)
//         await this.password.fill(user_password)
//         await this.button.click()
//     }
// }

import { Utility } from "../utils/utility.js";

export class loginclass extends Utility {

    constructor(page) {
        super(page);

        this.username = page.locator('//input[@name="user_name"]');
        this.password = page.locator('//input[@name="user_password"]');
        this.login = page.getByRole('button', { name: 'Login' });
    }

    async details(username, password) {
        await this.fillText(this.username, username);
        await this.fillText(this.password, password);
        await this.clickElement(this.login);
    }
}