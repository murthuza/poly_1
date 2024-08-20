
# ERC20 Sepolia to Amoy Bridge via fxPortal
This project showcases how to utilize the fxPortal contracts to enable the seamless transfer of ERC20 tokens from the Sepolia Ethereum testnet to the Amoy Ethereum Polygon network.

### Bridging Process
Follow these steps to successfully bridge ERC20 tokens from Sepolia to Amoy:

1. **Install Dependencies:**
   Run `npm install` to install the required dependencies for the project.

2. **Set Up Environment:**
   Place your private key in the `.env.examples` file and rename it to `.env` once configured.

3. **Deploy ERC20 Contract:**
   Deploy the ERC20 contract by executing the command `npx hardhat run scripts/deploy.js --network sepolia`. The contract address will be displayed once deployment is successful.

4. **Configure Token Address:**
   Replace the `tokenAddress` variable in other scripts with the newly deployed ERC20 contract address.

5. **Specify Your Public Key:**
   Fill in your public key for the upcoming steps.

6. **Mint Tokens to Wallet:**
   Run `npx hardhat run scripts/mint.js --network sepolia` to mint tokens to your wallet.

7. **Approve and Deposit Tokens:**
   Approve and deposit your tokens to the Polygon network by executing `npx hardhat run scripts/approveDeposit.js --network sepolia`.

8. **Wait for Confirmation:**
   Wait for approximately 20-30 minutes for the tokens to reflect in your Polygon account.

9. **Check Token Balance:**
   Utilize polyscan.com to monitor your account and track the arrival of the tokens. Click on the transaction to retrieve the contract address for Polygon.

10. **Get Balance on Polygon:**
    Replace the `tokenAddress` variable in the `getBalance.js` script with the obtained Polygon contract address. Run `npx hardhat run scripts/getBalance.js --network amoy` to view your new Polygon balance.

# MyCollectibles NFT Collection

Welcome to the MyCollectibles NFT Collection project! This repository contains a smart contract and scripts for creating and managing ERC721A tokens based on the MyCollectibles collection. This ReadMe provides an overview of the project's components, features, and execution steps.

## Project Overview

The MyCollectibles NFT Collection project focuses on creating and managing a collection of unique Non-Fungible Tokens (NFTs) using the ERC721A standard. The smart contract `MyCollectibles` extends the ERC721A contract and provides functionality for minting NFTs, transferring them, and querying balances.

## Smart Contract Details

- **Contract:** The `MyCollectibles` contract is deployed and extends the ERC721A contract, serving as the blueprint for the NFT collection.
- **Max Quantity:** The contract limits the total number of tokens that can be created to 5.
- **Base URL:** The base URL for NFT metadata is set to an IPFS gateway.
- **Prompt Description:** A prompt description is provided for users interacting with the NFT collection.
- **Constructor:** The contract is initialized with a name, symbol, and owner address.
- **Minting:** The contract owner can mint up to 5 NFTs at once.
- **Base URI Override:** The base URI for NFTs is overridden to provide metadata URLs.
- **Prompt Description Function:** Provides access to the stored prompt description.

## Getting Started

Before you begin, ensure you have the required tools and knowledge. Follow the steps outlined in the "Prerequisites" and "Execution" sections to successfully set up and execute the project.

### Prerequisites

- Setup image generation tools (DALLE 2, Midjourney, or Lexica).
- Obtain an IPFS account for securely storing NFT images.
- Familiarize yourself with Ethereum and Polygon networks.
- Install the Hardhat framework for contract deployment and testing.

### Execution Steps

1. **Generate Images:** Utilize AI models to create a collection of 5 unique NFT images.
2. **IPFS Storage:** Upload the generated NFT images to IPFS for secure storage.
3. **Deploy Contract:** Deploy the `MyCollectibles` contract on the Ethereum network.
4. **Implement Function:** Enhance the contract by implementing the `getPromptDescription` function.
5. **Mint NFTs:** Write a script to batch mint 5 NFTs to the contract.
6. **Approve Transfer:** Prepare NFTs for transfer to the Polygon network.
7. **Deposit to FxChain:** Deposit NFTs to the Ethereum FxChain network.
8. **Check Balance:** Verify the NFT wallet balance on the FxChain network.

## Script Details

- **Batch Mint ERC721A Tokens:** Mint 5 ERC721A tokens on the Ethereum network.
- **Transfer ERC721A Tokens to Ethereum FxChain Network:** Transfer tokens to Ethereum FxChain.
- **ERC721A Token Balance Checker:** Check token balance of a wallet address.

## License

This project is licensed under the [MIT License](LICENSE).
