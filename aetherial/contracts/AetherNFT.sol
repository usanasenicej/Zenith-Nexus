// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AetherNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public marketAddress;

    event NFTMinted(uint256 indexed tokenId, string tokenURI, address owner);

    constructor(address _marketAddress) ERC721("Aetherial NFTs", "AETHER") Ownable(msg.sender) {
        marketAddress = _marketAddress;
    }

    function mintNFT(string memory _tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        setApprovalForAll(marketAddress, true);

        emit NFTMinted(newItemId, _tokenURI, msg.sender);
        return newItemId;
    }

    function getCurrentTokenId() public view returns (uint256) {
        return _tokenIds.current();
    }
}
