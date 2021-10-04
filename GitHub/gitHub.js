const env = require('dotenv').config();
const puppeteer = require('puppeteer');

class gitHub {
    git = async() => {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-notifications']
        });

        // cria uma nova aba no navegador acima
        const page = await browser.newPage();

        // define a página que queremos acessar e a função goto navega até essa página
        await page.goto('https://github.com/login');
        console.log('Acessou a pagina: https://github.com/login');

        await page.type('#login', process.env.GIT_EMAIL, { delay: 100 });
        console.log(`Inseriu email: ${process.env.GIT_EMAIL}`);

        await page.type('#password', process.env.GIT_PASS, { delay: 100 });
        console.log('Inseriu senha: ************');

        await page.click('#commit'); //VERIFICAR QUAL O ID

    }
}

module.exports = gitHub;