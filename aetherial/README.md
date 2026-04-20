# Aetherial: Premium NFT Marketplace

Aetherial is a high-end decentralized application (dApp) built for the next generation of digital asset trading. It features a sophisticated dual-contract architecture and a glassmorphism-based UI for a premium user experience.

## 🚀 Features

- **Smart Contract Ecosystem**:
  - `AetherNFT.sol`: Advanced ERC-721 implementation with URI storage and Marketplace integration.
  - `AetherMarket.sol`: Secure secondary market supporting listings, commissions, and peer-to-peer transfers.
- **Premium UI/UX**:
  - Built with modern Vanilla CSS principles.
  - Fully responsive grid layout.
  - Smooth micro-animations and glow effects.
  - Glassmorphic card design.
- **Web3 Integration**:
  - Seamless MetaMask wallet connectivity.
  - Real-time blockchain data interaction (using Ethers.js).

## 🛠 Tech Stack

- **Frontend**: React, Vite, Ethers.js
- **Blockchain**: Solidity, OpenZeppelin, Hardhat
- **Styling**: CSS3 (Glassmorphism, Flex/Grid)

## 📦 Project Structure

- `/contracts`: Solidity smart contracts for the NFT and Marketplace.
- `/frontend`: React application for the user interface.

## 🏁 Quick Start

1. **Deploy Contracts**:
   ```bash
   cd contracts
   npx hardhat run scripts/deploy.js --network <your-network>
   ```

2. **Run Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🔒 Security

Uses OpenZeppelin's standard libraries for `ReentrancyGuard`, `ERC721URIStorage`, and `Ownable` to ensuring maximum security and industry standards.
