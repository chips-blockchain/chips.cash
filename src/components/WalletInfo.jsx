import React from 'react';

const WalletInfo = () => {
  return (
    <div className="neumorphic bg-dark-purple/30 rounded-lg p-8 max-w-3xl mx-auto my-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Get CHIPS in Your Wallet</h2>
      <p className="text-gray-300 mb-6">
        CHIPS is supported in the VerusCoin multi-coin wallet, making it easy to store and manage your CHIPS for decentralized poker and other applications.
      </p>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-purple-900/50 p-3 rounded-lg text-neon-purple text-xl font-bold flex items-center justify-center w-12 h-12 flex-shrink-0">
            1
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Download the VerusCoin Wallet</h3>
            <p className="mb-3 text-gray-300">
              The VerusCoin wallet is available for Windows, macOS, and Linux, providing a secure environment for managing your CHIPS.
            </p>
            <a 
              href="https://veruscoin.io/wallet.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-neon-purple/80 text-white rounded-lg hover:bg-neon-purple transition-colors"
            >
              Download VerusCoin Wallet
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-purple-900/50 p-3 rounded-lg text-neon-purple text-xl font-bold flex items-center justify-center w-12 h-12 flex-shrink-0">
            2
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Activate CHIPS in Your Wallet</h3>
            <p className="text-gray-300">
              After installing, open the VerusCoin wallet and navigate to the coin manager to activate CHIPS. This will enable you to send, receive, and manage CHIPS within the wallet.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-purple-900/50 p-3 rounded-lg text-neon-purple text-xl font-bold flex items-center justify-center w-12 h-12 flex-shrink-0">
            3
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Get Ready for Decentralized Poker</h3>
            <p className="text-gray-300">
              With CHIPS in your wallet, you're ready to participate in decentralized poker games and other applications built on the CHIPS blockchain!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;