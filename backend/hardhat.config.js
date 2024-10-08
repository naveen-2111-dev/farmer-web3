require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  optimizer: {
    enabled: true,
    runs: 200,
  },
  networks: {
    fanthomtest: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
