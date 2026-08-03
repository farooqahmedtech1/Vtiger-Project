// export class Utility {

//     constructor(page) {
//         this.page = page;
//     }

//     async launchurl(url) {
//         await this.page.goto(url);
//     }

//     async clickElement(locator) {
//         await locator.click();
//     }

//     async fillText(locator, value) {
//         await locator.fill(value);
//     }

//     async selectDropdown(locator, value) {
//         await locator.selectOption({ value });
//     }

//     async popup(locator) {
//         return await Promise.all([
//             this.page.waitForEvent('popup'),
//             locator.click()
//         ]);
//     }

//     async hover(locator) {
//         await locator.hover();
//     }

//     async selectDate(calendarIcon, month, year, date) {

//     await calendarIcon.click();

//     while (
//         (await this.page.locator('//td[@class="title"]').textContent()).trim() !==
//         `${month}, ${year}`
//     ) {
//         await this.page.locator('//td[@class="button nav"]').nth(2).click();
//     }

//     await this.page.locator(`//td[text()="${date}"]`).click();
// }
// }

export class Utility {

    constructor(page) {
        this.page = page;
    }

    async launchApplication(url) {
        await this.page.goto(url);
    }

    async clickElement(locator) {
        await locator.click();
    }

    async fillText(locator, value) {
        await locator.fill(value);
    }

    async selectDropdown(locator, value) {
        await locator.selectOption({ value });
    }

    async popup(locator) {
        return await Promise.all([
            this.page.waitForEvent('popup'),
            locator.click()
        ]);
    }

    async hover(locator) {
        await locator.hover();
    }

    async selectDate(calendarIcon, month, year, date) {
        await calendarIcon.click();

        while (
            (await this.page.locator('//td[@class="title"]').textContent()).trim() !==
            `${month}, ${year}`
        ) {
            await this.page.locator('//td[@class="button nav"]').last().click();
        }

        await this.page.locator(`//td[text()="${date}"]`).click();
    }
}