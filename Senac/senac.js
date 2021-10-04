const env = require('dotenv').config();
const puppeteer = require("puppeteer");

class portalSenac {

    senac = async() => {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-notifications']
        });

        const page = await browser.newPage();

        await page.goto('https://www.sp.senac.br/login-unico/Login');
        console.log('Acessou a pagina: https://www.sp.senac.br/login-unico/Login');

        await page.type('#email', `${process.env.SENAC_EMAIL}`, { delay: 100 });
        console.log(`Inseriu email: ${process.env.SENAC_EMAIL}`);

        await page.type('#senha', `${process.env.SENAC_PASS}`, { delay: 100 });
        console.log('Inseriu senha: ************');

        await page.click('#formloginButtonSubmit');

    };

}

module.exports = portalSenac;