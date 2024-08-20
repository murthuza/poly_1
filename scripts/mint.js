// This script batch mints cricket ERC721A tokens.

// Import required libraries
const { ethers } = require("hardhat"); // Hardhat is a development environment for Ethereum smart contracts
require("dotenv").config(); // Load environment variables from a .env file

async function main() {
  // Get private key from environment variables (Make sure PRIVATE_KEY is defined in the .env file)
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider (Goerli test network in this case)
  const networkAddress =
    "https://rpc2.sepolia.org/";

  // Create a provider using the specified URL to connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer (account) from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract that we want to interact with
  const contractAddress = "0xac311515a5A7d0c88b4b089c3fb69221A68Ec7EE";

  // Get the contract factory for the MyCollectibles contract and attach it to the signer
  const MyCollectibles = await ethers.getContractFactory("MyCollectibles", signer);

  // Attach the deployed contract to the signer
  const contract = MyCollectibles.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("Minted 5 tokens.");
}

main()
  .then(() => process.exit(0)) // Exit the process with success status code (0) after execution
  .catch((error) => {
    console.error(error);
    process.exit(1); // Log any errors that occur during execution and exit the process with an error status code (1)
  });
