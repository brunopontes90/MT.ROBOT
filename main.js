const env = require('dotenv').config();

const open = require('./Facebook/facebook');
const openFacebook = new open();

const end = require('./Cep/cep');
const cep = new end;

const portal = require('./Senac/senac');
const senac = new portal;

const gitHub = require('./GitHub/gitHub');
const git = new gitHub;

try {
    console.log(`========== INICIANDO APLICAÇÃO: ${process.env.APP_NAME} ==========`);
    // git.git();
    // openFacebook.facebook();
    senac.senac();
    // cep.cepRequest();
} catch (error) {
    console.log(`Não foi possivel executar: ${error}`);
}