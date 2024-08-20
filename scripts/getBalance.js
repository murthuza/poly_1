// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyCollectibles.sol/MyCollectibles.json");

const tokenAddress = "0xE7272b884CaD0126e5044D23af4427c89B96C3AA"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xfA2173261C58A5C26e80230cbc9E456a34070B53"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log(" you now have: 05 tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
