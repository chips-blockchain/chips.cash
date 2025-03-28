import React from 'react';
import { FaDownload, FaWallet, FaExchangeAlt, FaKey, FaShieldAlt, FaExclamationTriangle, FaMobile, FaTerminal, FaNetworkWired } from 'react-icons/fa';

const Wallet = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 hero-title">
          CHIPS <span className="text-neon-purple">Wallet</span> Options
        </h1>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-xl mb-6 leading-relaxed">
            Access and manage your CHIPS through various wallet options, each offering different features 
            for security, convenience, and functionality.
          </p>
          <div className="flex items-center justify-center">
            <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
            <p className="text-lg font-semibold text-yellow-400">
              Always backup your wallet files and private keys!
            </p>
          </div>
        </div>
      </section>

      {/* Verus Desktop Wallet Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Verus Desktop Wallet</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg space-y-6">
          <p className="text-lg mb-6">
            The recommended option for most users. Verus Desktop provides a full-featured graphical interface
            with support for CHIPS, staking, and DeFi capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>User-friendly graphical interface</li>
                <li>Native CHIPS support</li>
                <li>Staking capabilities</li>
                <li>PBaaS chain support</li>
                <li>VerusPay for easy payments</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Platforms</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Windows</li>
                <li>macOS</li>
                <li>Linux</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="https://verus.io/wallet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <FaDownload className="mr-2" /> Download Verus Desktop
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mt-6">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-500 text-xl mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Important Backup Information</h4>
                <p className="text-base">
                  <strong>Each blockchain requires its own backup!</strong> When using Verus Desktop with multiple 
                  chains (VRSC, CHIPS, vDEX, or other PBaaS chains), you must backup each chain's wallet.dat 
                  file separately.
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li>Your VRSC wallet backup does NOT include PBaaS chains or CHIPS</li>
                  <li>Imported addresses in one chain are not automatically imported to others</li>
                  <li>Each chain has its own wallet.dat file that must be backed up independently</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLI Wallet Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Command-Line Wallet</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-lg mb-6">
            For advanced users who prefer direct control or need to run on servers, the Verus CLI wallet 
            provides access to CHIPS and other chains through chain parameters.
          </p>
          
          <div className="cyber-card-container noselect max-w-2xl mx-auto mb-8">
            <div className="cyber-card-canvas">
              <div id="card" className="cyber-card">
                <div className="cyber-card-content">
                  <div className="cyber-card-glare"></div>
                  <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="cyber-card-title">Verus CLI Wallet</div>
                  <div className="cyber-card-text">
                    Unified command-line interface for all chains.
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>All-in-one chain access</li>
                      <li>Perfect for servers & staking</li>
                      <li>Advanced feature support</li>
                    </ul>
                    <div className="mt-3">
                      <a 
                        href="https://github.com/VerusCoin/VerusCoin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 bg-neon-purple/80 rounded inline-flex items-center"
                      >
                        <FaDownload className="mr-1 text-xs" /> GitHub
                      </a>
                    </div>
                  </div>
                  <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-purple/50 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-3 text-neon-purple">Accessing Different Chains via CLI</h3>
            <div className="font-mono text-sm bg-black/30 p-4 rounded overflow-auto">
              <p className="mb-2 text-green-400"># Access CHIPS blockchain</p>
              <p className="mb-4">verus -chain=CHIPS [command]</p>
              
              <p className="mb-2 text-green-400"># Access vDEX blockchain</p>
              <p className="mb-4">verus -chain=VDEX [command]</p>
              
              <p className="mb-2 text-green-400"># Access other PBaaS chains</p>
              <p className="mb-4">verus -chain=CHAINNAME [command]</p>
              
              <p className="mb-2 text-green-400"># Example backup commands</p>
              <p className="mb-4">verus -chain=CHIPS backupwallet /path/to/backup/chips-wallet-backup.dat</p>
              
              <p className="mb-2 text-green-400"># Export private keys</p>
              <p>verus -chain=CHIPS dumpprivkey "YourAddress"</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Mobile Wallet Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Mobile Wallets</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Access your CHIPS on the go with mobile wallet options that provide convenience without sacrificing security.
          </p>
          
          <div className="cyber-card-container noselect max-w-2xl mx-auto">
            <div className="cyber-card-canvas">
              <div id="card" className="cyber-card">
                <div className="cyber-card-content">
                  <div className="cyber-card-glare"></div>
                  <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="feature-icon">
                    <FaMobile className="text-neon-purple text-3xl" />
                  </div>
                  <div className="cyber-card-title">Verus Mobile</div>
                  <div className="cyber-card-text">
                    Official mobile wallet with CHIPS support.
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-left">
                      <li>iOS and Android</li>
                      <li>Multi-currency</li>
                      <li>Biometric security</li>
                    </ul>
                    <div className="mt-4">
                      <a 
                        href="https://verus.io/wallet/mobile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm px-3 py-1"
                      >
                        <FaDownload className="mr-1" /> Get App
                      </a>
                    </div>
                  </div>
                  <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mt-8">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-500 text-xl mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Mobile Wallet Security</h4>
                <p className="text-base">
                  Always backup your mobile wallet seed phrase in a secure, offline location. Never share 
                  your seed phrase or private keys with anyone. If your device is lost or compromised, 
                  your seed phrase is the only way to recover your funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komodo Wallet for Atomic Swaps */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Komodo Wallet for Atomic Swaps</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-lg mb-8">
            For decentralized trading, the Komodo wallet provides P2P atomic swap capabilities, allowing 
            you to trade CHIPS directly with other cryptocurrencies without using a centralized exchange.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="benefit-card">
              <div className="card-icon">
                <FaExchangeAlt className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">P2P Atomic Swaps</h3>
              <p>
                Trade CHIPS for other cryptocurrencies directly from your wallet without intermediaries.
                Atomic swaps ensure that either the entire trade completes successfully or no funds move at all.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="card-icon">
                <FaShieldAlt className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No Custody Risk</h3>
              <p>
                Unlike centralized exchanges, decentralized atomic swaps keep your funds in your control 
                throughout the entire trading process, eliminating the risk of exchange hacks or freezes.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://github.com/komodoce/komodo-wallet-desktop-ce/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaDownload className="mr-2" /> Download Komodo Wallet
            </a>
          </div>
        </div>
      </section>

      {/* Comprehensive Backup Guide */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Backup Guide</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-red-500 text-xl mr-3 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Critical Information</h4>
                <p className="text-base">
                  <strong>Each blockchain requires its own separate backup!</strong> A wallet.dat file from 
                  one chain (e.g., VRSC) does NOT backup other chains (e.g., CHIPS, vDEX, or other PBaaS chains).
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-neon-purple">Backup Best Practices</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-16 h-16 shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-3">Backup Each Chain Separately</h4>
                <p className="text-lg">
                  For Verus Desktop or CLI wallets, you must backup each blockchain's wallet.dat file separately:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li>VRSC wallet backup: Only contains VRSC addresses</li>
                  <li>CHIPS wallet backup: Only contains CHIPS addresses</li>
                  <li>PBaaS wallet backup (vDEX, etc.): Only contains addresses for that specific chain</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-16 h-16 shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-3">Back Up After Important Actions</h4>
                <p className="text-lg">
                  Create fresh backups after:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li>Creating new addresses</li>
                  <li>Importing private keys</li>
                  <li>Sending or receiving significant transactions</li>
                  <li>Before software updates</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-16 h-16 shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-3">Alternative: Export Private Keys</h4>
                <p className="text-lg">
                  In addition to wallet.dat backups, you can export private keys for individual addresses:
                </p>
                <div className="font-mono text-sm bg-black/30 p-4 rounded mt-3 overflow-auto">
                  verus dumpprivkey "YourVerusAddress"<br />
                  verus -chain=CHIPS dumpprivkey "YourChipsAddress"<br />
                </div>
                <p className="mt-3">
                  Store these private keys securely in an encrypted, offline location.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-purple-900/50 p-6 rounded-full text-neon-purple text-4xl font-bold flex items-center justify-center w-16 h-16 shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-3">Secure Storage</h4>
                <p className="text-lg">
                  Store backups in multiple secure locations:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li>Encrypted USB drives</li>
                  <li>Password-protected archive files</li>
                  <li>Paper backups in fire-resistant safes</li>
                  <li>Consider geographical distribution for critical backups</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="font-mono text-sm bg-black/30 p-4 rounded overflow-auto mb-8">
            <p className="mb-2 text-green-400"># Verus Desktop wallet.dat locations:</p>
            <p className="mb-2">Windows: %APPDATA%\Roaming\Komodo\VRSC</p>
            <p className="mb-2">macOS: ~/Library/Application Support/Komodo/VRSC</p>
            <p className="mb-4">Linux: ~/.komodo/VRSC</p>
            
            <p className="mb-2 text-green-400"># CHIPS wallet.dat locations:</p>
            <p className="mb-2">Windows: %APPDATA%\Roaming\verus\pbaas\f315367528394674d45277e369629605a1c3ce9f\</p>
            <p className="mb-2">macOS: ~/Library/Application Support/verus/pbaas/f315367528394674d45277e369629605a1c3ce9f/</p>
            <p className="mb-4">Linux: ~/.verus/pbaas/f315367528394674d45277e369629605a1c3ce9f/</p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://docs.verus.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaKey className="mr-2" /> Complete Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;