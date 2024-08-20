// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import the ERC721A contract, which provides the blueprint for NFTs
import "erc721a/contracts/ERC721A.sol";

// MyCollectibles contract that follows the ERC721A blueprint
contract MyCollectibles is ERC721A {
    // Address of the contract owner
    address public owner;

    // Maximum number of tokens that can be created
    uint256 public maxQuantity = 5;

    // Base URL for the NFTs (IPFS base URL)
    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmQxbHhAu9CpNnMNXnEnphi5ev5fENLrE1xZLxMfSxXrww/";

    // Description shown to users about discovering treasures
    string public prompt = "Discover the hidden treasures";

    // Constructor: Initialize the contract with a name and symbol for NFTs
    constructor() ERC721A("MyCollectibles", "MC") {
        owner = msg.sender;
    }

    // Modifier: Only the owner can execute this function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can do this.");
        _;
    }

    // Mint new NFTs, only callable by the owner
    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can't create more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Get the description shown to users
    function getPromptDescription() external view returns (string memory) {
        return prompt;
    }
}
