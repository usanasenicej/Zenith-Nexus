const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy Marketplace
  const AetherMarket = await hre.ethers.getContractFactory("AetherMarket");
  const market = await AetherMarket.deploy();
  await market.deployed();
  console.log("AetherMarket deployed to:", market.address);

  // Deploy NFT Contract
  const AetherNFT = await hre.ethers.getContractFactory("AetherNFT");
  const nft = await AetherNFT.deploy(market.address);
  await nft.deployed();
  console.log("AetherNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
