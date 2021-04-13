require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.6.12",

  networks: {
    local: {
      url: "http://localhost:8545"
    }
  }
};
