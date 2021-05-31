require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

const getProvider = (network, mnemonic) => new HDWalletProvider(process.env.CONTRACT_OWNER_MNEMOMNIC_MAINNET, `https://https://dai.poa.network`);

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    rinkeby: {
      provider: () => getProvider('rinkeby', process.env.CONTRACT_OWNER_MNEMOMNIC_RINKEBY),
      networkId: 4,
      gasPrice: 10e9 // 10 gwei
    },
    mainnet: {
      provider: () => getProvider('mainnet', process.env.CONTRACT_OWNER_MNEMOMNIC_MAINNET),
      networkId: 100,
      gas: 5000000,
      gasPrice: 10e9, // 10 gwei
    }
  },
};
