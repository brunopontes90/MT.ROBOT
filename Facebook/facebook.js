const env = require('dotenv').config();
const puppeteer = require("puppeteer");
class chrome {

    facebook = async() => {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-notifications']
        });

        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/login');
        console.log('Acessou a pagina: https://www.facebook.com/login');

        await page.type('#email', process.env.FACEBOOK_EMAIL, { delay: 100 });
        console.log(`Inseriu email: ${process.env.FACEBOOK_EMAIL}`);

        await page.type('#pass', process.env.FACEBOOK_PASS, { delay: 100 });
        console.log('Inseriu senha: ************');

        await page.click('#loginbutton');

    };

}

module.exports = chrome;