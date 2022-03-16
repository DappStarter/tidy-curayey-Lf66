require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food dance rice magnet coach junior light army gas'; 
let testAccounts = [
"0xce3ae3d24bbbcb1e82d9d40da23dafcea8e6c4a974198ee0267fe4a7a845ae34",
"0x2518aaa349da82c59f0671d21db4efda0e30f8d9c05161076c023ec73c47ea5f",
"0x3554c17cae766e27e9c1d63ce17b4d51cdfedc69b5d2e00e06beda4f3ba02230",
"0x8f5cdac784062cbbd83180fad5da461874b4a96505d0e03e6ac511d927824295",
"0x176fe5de01061f8d746561a2a3681ec4bb2a7697a8fb964fea2512d6080418d4",
"0x7fd8e46d767d3cdb40894dcecd6a9d56a5db25db9fd49fd4f12fc29d261910ed",
"0x8e6ca13054359bf61bc5bf941a4d792a740364e9a266e6538badd000e90046c0",
"0xd4bfb6152b516c8acaabd87a4123c70b658ea1a89b873ff8b94495cf5ad16a65",
"0x46580c964e687b73dee8420705c70be3df9d049767db3e98d7c0d3aa4e1dadf4",
"0xd523579e185482d47cdb18344641b2d5ec14c58b2dd52999f59bf0ad8e21daaa"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

