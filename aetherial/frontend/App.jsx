import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './index.css';

// Note: In a real app, these would come from environment variables and built artifacts
const NFT_ADDRESS = "0x..."; 
const MARKET_ADDRESS = "0x...";

function App() {
  const [account, setAccount] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  }

  // Placeholder data for demonstration since we aren't deploying live here
  const demoNFTs = [
    { id: 1, name: "Neon Valkyrie", price: "0.5 ETH", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" },
    { id: 2, name: "Cosmic Drift", price: "1.2 ETH", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000" },
    { id: 3, name: "Digital Soul", price: "0.8 ETH", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1000" },
    { id: 4, name: "Ether Heart", price: "2.1 ETH", image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?auto=format&fit=crop&q=80&w=1000" },
    { id: 5, name: "Hyperion Gate", price: "0.15 ETH", image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000" },
    { id: 6, name: "Void Runner", price: "3.5 ETH", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1000" }
  ];

  useEffect(() => {
    setNfts(demoNFTs);
  }, []);

  return (
    <div className="app-container">
      <header>
        <div className="logo">AETHERIAL</div>
        <nav className="nav-links">
          <a href="#">Explore</a>
          <a href="#">My NFTs</a>
          <a href="#">Mint</a>
          <a href="#">Activity</a>
        </nav>
        <button className="connect-btn" onClick={connectWallet}>
          {account ? `${account.substring(0, 6)}...${account.substring(38)}` : "Connect Wallet"}
        </button>
      </header>

      <main>
        <section className="hero-section animate-fade">
          <h1>Discover & Collect <br /><span style={{color: 'var(--accent-secondary)'}}>Rare Digital Arts</span></h1>
          <p>The world's premium NFT marketplace for high-fidelity digital collectibles and crypto-assets.</p>
        </section>

        <div className="nft-grid">
          {nfts.map((nft) => (
            <div key={nft.id} className="nft-card animate-fade">
              <img src={nft.image} alt={nft.name} className="nft-image" />
              <div className="nft-info">
                <h3 className="nft-title">{nft.name}</h3>
                <div className="nft-price-tag">
                  <div className="price-box">
                    <span className="price-label">Current Price</span>
                    <span className="price-value">{nft.price}</span>
                  </div>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{marginTop: '10rem', textAlign: 'center', color: 'var(--text-dim)', padding: '2rem'}}>
        <p>© 2026 Aetherial Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
