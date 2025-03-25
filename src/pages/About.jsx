import React from 'react';
import { FaCode, FaLock, FaUsers, FaChartLine, FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 hero-title">
          About <span className="text-neon-purple">CHIPS</span>
        </h1>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-xl mb-6 leading-relaxed">
            CHIPS is a specialized cryptocurrency designed for gambling applications, with a primary focus on enabling decentralized poker. Founded on the principles of fairness, transparency, and security, CHIPS aims to revolutionize the online gambling industry.
          </p>
          <p className="text-lg">
            Our blockchain is optimized for the unique needs of gaming applications, offering fast transaction times, low fees, and built-in mechanisms for provably fair gameplay.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-xl mb-6 leading-relaxed">
            We believe that gambling should be fair, transparent, and accessible to everyone. Our mission is to create a decentralized ecosystem where:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="mission-item">
              <div className="mission-icon">✓</div>
              <p>Players can verify the fairness of every game</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">✓</div>
              <p>Operators can run platforms with minimal overhead</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">✓</div>
              <p>Transactions are fast and fees are minimal</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">✓</div>
              <p>No central authority can manipulate outcomes or seize funds</p>
            </div>
          </div>
          <p className="text-lg text-center font-medium text-neon-purple">
            By building on blockchain technology, we're creating a trustless environment where the code is the only authority needed.
          </p>
        </div>
      </section>

        {/* Key Features Section */}
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="cyber-card-container noselect">
            <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card feature-cyber-card">
                <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="feature-icon">
                    <FaLock className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div className="cyber-card-title">Secure & Trustless</div>
                    <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                    Built on proven blockchain technology with a focus on security and removing the need for trusted third parties.
                    </div>
                    <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Feature 2 */}
            <div className="cyber-card-container noselect">
            <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card feature-cyber-card">
                <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="feature-icon">
                    <FaChartLine className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div className="cyber-card-title">Scalable Solution</div>
                    <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                    Designed to handle high transaction volumes with low latency, ensuring smooth gameplay even with many concurrent users.
                    </div>
                    <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Feature 3 */}
            <div className="cyber-card-container noselect">
            <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card feature-cyber-card">
                <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="feature-icon">
                    <FaCode className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div className="cyber-card-title">Developer Friendly</div>
                    <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                    Comprehensive APIs and development tools make it easy to build and integrate gambling applications on the CHIPS network.
                    </div>
                    <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Feature 4 */}
            <div className="cyber-card-container noselect">
            <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card feature-cyber-card">
                <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="feature-icon">
                    <FaUsers className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div className="cyber-card-title">Community Driven</div>
                    <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                    An active and passionate community of developers, players, and gambling enthusiasts driving the project forward.
                    </div>
                    <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">PBaaS Technology</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            One of the key innovations behind CHIPS is our implementation of Platform-Based as a Service (PBaaS) technology. This architecture creates a flexible ecosystem for gambling applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Card 1 */}
            <div className="cyber-card-container noselect">
                <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card">
                    <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="cyber-card-number">1</div>
                    <div className="cyber-card-title">Custom Chains</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Developers can create specialized blockchains for their gambling applications, all secured by the main CHIPS network.
                    </div>
                    <div className="card-particles">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="cyber-card-container noselect">
                <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card">
                    <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="cyber-card-number">2</div>
                    <div className="cyber-card-title">Cross-Chain Interoperability</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Assets and information can flow freely between different gambling applications in the CHIPS ecosystem.
                    </div>
                    <div className="card-particles">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="cyber-card-container noselect">
                <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card">
                    <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="cyber-card-number">3</div>
                    <div className="cyber-card-title">Scalable Infrastructure</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        As demand grows, the network can scale horizontally by adding more chains, rather than being constrained by a single blockchain's limitations.
                    </div>
                    <div className="card-particles">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Card 4 */}
            <div className="cyber-card-container noselect">
                <div className="cyber-card-canvas">
                <div className="cyber-card-tracker tr-1"></div>
                <div className="cyber-card-tracker tr-2"></div>
                <div className="cyber-card-tracker tr-3"></div>
                <div className="cyber-card-tracker tr-4"></div>
                <div className="cyber-card-tracker tr-5"></div>
                <div className="cyber-card-tracker tr-6"></div>
                <div className="cyber-card-tracker tr-7"></div>
                <div className="cyber-card-tracker tr-8"></div>
                <div className="cyber-card-tracker tr-9"></div>
                <div id="card" className="cyber-card">
                    <div className="cyber-card-content">
                    <div className="cyber-card-glare"></div>
                    <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="cyber-card-number">4</div>
                    <div className="cyber-card-title">Optimized Performance</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Each application can have blockchain parameters tuned specifically for its needs, rather than compromising on a one-size-fits-all approach.
                    </div>
                    <div className="card-particles">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div className="corner-elements">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Project Timeline</h2>
  <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2017</span>
          <h3 className="text-xl font-semibold mb-2">CHIPS Founded</h3>
          <p>Initial concept development and blockchain launch</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2018</span>
          <h3 className="text-xl font-semibold mb-2">Poker Protocol Development</h3>
          <p>Implementation of mental poker cryptographic protocols</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2019</span>
          <h3 className="text-xl font-semibold mb-2">Pangea Poker Alpha</h3>
          <p>First working prototype of decentralized poker application</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2022</span>
          <h3 className="text-xl font-semibold mb-2">PBaaS Integration</h3>
          <p>Enhanced scalability with Platform-Based as a Service technology</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2023</span>
          <h3 className="text-xl font-semibold mb-2">Ecosystem Expansion</h3>
          <p>Integration with other blockchain networks and gambling applications</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span className="timeline-date">2025</span>
          <h3 className="text-xl font-semibold mb-2">The Future</h3>
          <p>Continued innovation and expansion of the CHIPS ecosystem</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Community Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Join the CHIPS Community</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg text-center">
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a developer, a gambling enthusiast, or simply interested in blockchain technology, there's a place for you in the CHIPS community.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/chips-blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a 
              href="https://discord.gg/9XMYRXUUSP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <FaDiscord className="mr-2" /> Discord
            </a>
            <a 
              href="https://x.com/chipscurrency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Contribute to Development</h2>
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            CHIPS is an open-source project that thrives on community contributions. Whether you're a developer, designer, or community advocate, you can help shape the future of decentralized gambling.
          </p>
          <div className="text-center">
            <a 
              href="https://github.com/chips-blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FaGithub className="mr-2" /> Explore Repositories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;