const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FarmerModule", (m) => {
  const FarmerContract = m.contract("Farmer", [], {});

  return { FarmerContract };
});
