require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food shock roof stick history coral light army gasp'; 
let testAccounts = [
"0x6c94ff097c441ba439517755e506807431e28edc4e69338e25c9e57f702d1705",
"0x2226e542ada10e463a51ea3ca2c533954c516a576fd55124307b481a726d7013",
"0x918964525a148b7f07cba18ea085bc64642c47eb79cf1764b95f0c0b71af14cb",
"0xc0f06e4dfcadf4dfc3f4945cfcc6294819f9c3b5d4df685bd022f46f5df0cebe",
"0xec5fcb2e1f91127c256b3982d0e644d060b252c8c5dba52d31db628471396023",
"0x3c959b688d6f017b33548b051bd3b6007ddc0a07e34a651cce45b62f2357e538",
"0x86c87411c9a2ad420743743c1a31b261b0d48fba4207cc2530326bc4c706981d",
"0xc2dead409a8dafc351a72f9ccf3a09cb28f09f8b2e796885c04672492b8f9386",
"0xc6740681f5912e02f890c9fa5c53adf1d088b6bdb5afaec395fbca2ecdebf874",
"0xfee4bf7a5b0c1828812ee22567f0f0804911bff13ffb36d11b6eebd38a1e6b6b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


