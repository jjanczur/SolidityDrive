var SolidityDrive = artifacts.require("./SolidityDrive.sol");

module.exports = function(deployer) {
  deployer.deploy(SolidityDrive);
};
