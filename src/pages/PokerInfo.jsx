import React from 'react';
import { FaGithub, FaDiscord, FaDownload, FaPlay, FaWallet, FaExchangeAlt } from 'react-icons/fa';

const PokerInfo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 hero-title">
          Decentralized <span className="text-neon-purple">Poker</span> with CHIPS
        </h1>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-xl mb-6 leading-relaxed">
            Poker is the flagship application for the CHIPS blockchain. Through our Pangea Poker implementation, 
            we're revolutionizing online poker by making it truly decentralized, transparent, and provably fair.
          </p>
          <p className="text-lg">
            Say goodbye to rigged games, opaque random number generation, and centralized control. 
            With CHIPS-based poker, every card dealt and every pot awarded is verifiable on the blockchain.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg space-y-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-20 h-20 shrink-0">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-neon-purple">Mental Poker Protocol</h3>
              <p className="text-lg">
                CHIPS poker is built on a cryptographic "mental poker" protocol that allows players to shuffle and deal cards without requiring a trusted third party. Each player participates in the shuffling process, ensuring that no single entity controls the deck.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-20 h-20 shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-neon-purple">Blockchain Verification</h3>
              <p className="text-lg">
                All game actions and results are recorded on the CHIPS blockchain, creating an immutable record that players can verify. This ensures that the game's history cannot be altered and that funds are distributed fairly.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-20 h-20 shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-neon-purple">Smart Contract Tables</h3>
              <p className="text-lg">
                Poker tables are managed by smart contracts that automatically enforce the rules of the game, handle buy-ins and payouts, and ensure that every action follows the proper sequence and logic.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-20 h-20 shrink-0">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-neon-purple">Peer-to-Peer Gameplay</h3>
              <p className="text-lg">
                Players connect directly to each other in a peer-to-peer network, eliminating the need for a central server. This reduces latency and creates a more resilient system that can't be shut down by targeting a single point of failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Decentralized Poker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="benefit-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">No House Edge</h3>
            <p className="text-lg">
              Without a central operator taking a large rake, more money stays on the table for the players. CHIPS poker takes only a minimal fee to sustain the network.
            </p>
          </div>

          <div className="benefit-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Protection from Cheating</h3>
            <p className="text-lg">
              The cryptographic protocols make it mathematically impossible for players or operators to see cards they shouldn't or manipulate the deck in any way.
            </p>
          </div>

          <div className="benefit-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Play from Anywhere</h3>
            <p className="text-lg">
              Since the games run on a global, decentralized network, players from any jurisdiction can participate without restrictions or concerns about regulatory shutdowns.
            </p>
          </div>

          <div className="benefit-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Full Control of Funds</h3>
            <p className="text-lg">
              Players maintain control of their funds at all times with non-custodial wallets, eliminating the risk of a poker site absconding with player deposits.
            </p>
          </div>
        </div>
      </section>

      {/* Pangea Poker Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pangea Poker</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Pangea Poker is our flagship implementation of decentralized poker on the CHIPS blockchain. 
            It offers a fully decentralized gaming experience with cutting-edge features:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Multiple Variants</h3>
              <p>Texas Hold'em, Omaha, and more poker variants all secured by blockchain technology</p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Modern Interface</h3>
              <p>Intuitive, sleek user interface designed for both beginners and experienced players</p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Built-in Wallet</h3>
              <p>Manage your CHIPS directly in the application with integrated wallet functionality</p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Tournaments</h3>
              <p>Participate in decentralized tournaments with automated prize distribution</p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Cross-Platform</h3>
              <p>Available on Windows, macOS, and Linux for gaming on your preferred device</p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Privacy-Focused</h3>
              <p>Play with confidence knowing your personal data is protected</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://github.com/chips-blockchain/pangea-poker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaPlay className="mr-2" /> Try Pangea Poker
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <div className="space-y-8">
            <div className="getting-started-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-3">Get a CHIPS Wallet</h3>
                <p className="mb-4 text-lg">
                  First, you'll need a wallet that supports CHIPS. The easiest way is to download the VerusCoin wallet, which has built-in support for CHIPS.
                </p>
                <a 
                  href="https://veruscoin.io/wallet.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <FaWallet className="mr-2" /> Download Wallet
                </a>
              </div>
            </div>
            
            <div className="getting-started-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-3">Acquire CHIPS</h3>
                <p className="mb-4 text-lg">
                  You can acquire CHIPS through exchanges or by participating in the community. Check our Discord for the latest information on how to obtain CHIPS.
                </p>
                <a 
                  href="https://discord.gg/chips" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <FaExchangeAlt className="mr-2" /> Get CHIPS
                </a>
              </div>
            </div>
            
            <div className="getting-started-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-3">Download Pangea Poker</h3>
                <p className="mb-4 text-lg">
                  Visit the Pangea Poker GitHub repository to download the latest version of the client software and follow the installation instructions.
                </p>
                <a 
                  href="https://github.com/chips-blockchain/pangea-poker/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <FaDownload className="mr-2" /> Download Client
                </a>
              </div>
            </div>
            
            <div className="getting-started-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-3">Join a Game</h3>
                <p className="text-lg">
                  Launch Pangea Poker, connect your wallet, and join one of the available tables to start playing decentralized poker!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Join the Poker Revolution</h2>
        <div className="neumorphic bg-dark-purple/30 p-10 rounded-lg text-center">
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Be part of the future of poker. Stay updated on our development progress and be the first to know when new features and tournaments are available.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/chips-blockchain/pangea-poker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
            <a 
              href="https://discord.gg/chips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <FaDiscord className="mr-2" /> Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokerInfo;