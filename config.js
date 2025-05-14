const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=rjh2EIJA#P-xfE7_KCnNVVIL16j2IxMKbApJuWEi48DZUMII8pHY",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/38a4ba6f7a51c15f5feaf.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Hello i am ASITGA-MD i am alive now ❤️‍🩹@&",    
};
