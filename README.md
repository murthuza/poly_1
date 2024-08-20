# ERC20 Sepolia to Amoy Bridge via fxPortal & MyCollectibles NFT Collection

This project demonstrates how to utilize fxPortal contracts to bridge ERC20 tokens from the Sepolia Ethereum testnet to the Amoy Ethereum Polygon network. Additionally, it includes a MyCollectibles NFT Collection, showcasing how to create, manage, and bridge ERC721A tokens.

## Prerequisites

Before you begin, ensure you have the following:

- **Image Generation Tools:**  
  Setup tools like DALLE 2, Midjourney, or Lexica to create NFT images.

- **IPFS Account:**  
  Obtain an IPFS account for securely storing NFT images.

- **Familiarity with Networks:**  
  Understand the basics of Ethereum and Polygon networks.

- **Hardhat Framework:**  
  Install the Hardhat framework for deploying and testing contracts.

## Bridging Process (ERC20 Sepolia to Amoy)

Follow these steps to bridge ERC20 tokens from Sepolia to Amoy:

1. **Install Dependencies:**  
   Run `npm install` to install the required dependencies.

2. **Set Up Environment:**  
   Place your private key in the `.env.example` file, rename it to `.env`, and configure your settings.

3. **Deploy ERC20 Contract:**  
   Execute `npx hardhat run scripts/deploy.js --network sepolia` to deploy the ERC20 contract. The contract address will be displayed upon successful deployment.

4. **Configure Token Address:**  
   Replace the `tokenAddress` variable in the scripts with the newly deployed ERC20 contract address.

5. **Specify Public Key:**  
   Fill in your public key for the following steps.

6. **Mint Tokens:**  
   Run `npx hardhat run scripts/mint.js --network sepolia` to mint tokens to your wallet.

7. **Approve and Deposit Tokens:**  
   Approve and deposit tokens to the Polygon network by executing `npx hardhat run scripts/approveDeposit.js --network sepolia`.

8. **Wait for Confirmation:**  
   Wait for approximately 20-30 minutes for the tokens to appear in your Polygon account.

9. **Check Token Balance on Polygon:**  
   Use polyscan.com to monitor your account and track the arrival of tokens. Replace the `tokenAddress` variable in the `getBalance.js` script with the Polygon contract address, then run `npx hardhat run scripts/getBalance.js --network amoy` to view your balance.

## MyCollectibles NFT Collection

The MyCollectibles NFT Collection project is designed for creating and managing a unique collection of NFTs using the ERC721A standard. The contract extends the ERC721A contract, enabling functionalities such as minting, transferring, and querying balances.

### Project Components

- **Contract Details:**  
  - **Contract:** `MyCollectibles` extends ERC721A, serving as the blueprint for the NFT collection.
  - **Max Quantity:** The contract limits the total number of tokens to 5.
  - **Base URI:** Set to an IPFS gateway for NFT metadata.
  - **Prompt Description:** A description provided for user interaction with the NFT collection.
  - **Constructor:** Initializes the contract with a name, symbol, and owner address.
  - **Minting:** The owner can mint up to 5 NFTs at once.
  - **Base URI Override:** Overrides the base URI for NFT metadata.
  - **Prompt Description Function:** Provides access to the stored prompt description.

### Execution Steps

1. **Generate Images:**  
   Use AI models like DALLE 2, Midjourney, or Lexica to create a collection of 5 unique NFT images.

2. **IPFS Storage:**  
   Upload the generated NFT images to IPFS for secure storage.

3. **Deploy Contract:**  
   Deploy the `MyCollectibles` contract on the Ethereum network.

4. **Enhance Contract:**  
   Implement the `getPromptDescription` function in the contract.

5. **Mint NFTs:**  
   Write a script to batch mint 5 NFTs.

6. **Approve Transfer:**  
   Prepare NFTs for transfer to the Polygon network.

7. **Deposit to FxChain:**  
   Deposit NFTs to the Ethereum FxChain network.

8. **Check Balance:**  
   Verify the NFT wallet balance on the FxChain network.

## Scripts Overview

- **ERC20 Token Scripts:**
  - `deploy.js`: Deploys the ERC20 contract.
  - `mint.js`: Mints tokens to the wallet.
  - `approveDeposit.js`: Approves and deposits tokens to Polygon.
  - `getBalance.js`: Checks token balance on Polygon.

- **ERC721A Token Scripts:**
  - `mint.js`: Batch mint 5 NFTs.
  - `transfer.js`: Transfer NFTs to Ethereum FxChain.
  - `checkBalance.js`: Check NFT balance of a wallet address.

## Author
Sayyed Murthuza

## License
This project is licensed under the [MIT License].
