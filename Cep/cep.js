const env = require('dotenv').config();
const puppeteer = require('puppeteer');
const cep = process.env.CEP;
class consultar {
    cepRequest = async() => {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-notifications']
        });

        const page = await browser.newPage();
        await page.goto(`https://viacep.com.br/ws/${cep}/json`);
    }
}

module.exports = consultar;