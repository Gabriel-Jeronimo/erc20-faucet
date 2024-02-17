import { ethers } from "hardhat";

async function main() {
  const value = 9000000000000000;

  const dripToken = await ethers.deployContract("DripToken", [value]);

  await dripToken.waitForDeployment();

  const dripFaucet = await ethers.deployContract("DripFaucet", [dripToken.target, 1800, 10000]);

  await dripFaucet.waitForDeployment();

  console.log(
    `DripToken deployed to ${dripToken.target} with ${ethers.formatEther(value)}.`
  );

  console.log(`DripFaucet deployed to ${dripFaucet.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// TODO: Contract working as it should. But:
// 1. I need to have some DRP token on the faucet. I need to set this on the deploy script??
