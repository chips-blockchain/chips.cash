import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import featureBg from '../assets/images/41241242.png';
import glowBg from '../assets/images/glow.png';


const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Use the Hero component at the top of the page */}
      <Hero />

      {/* Features Section with Right-Side Background Image */}
      <section className="py-16 relative overflow-hidden">
        {/* Background image container - positioned on the right */}
        <div className="absolute right-20 top-center h-full w-1/2 pointer-events-none z-0 hidden md:block">
          <div className="w-full h-full" style={{ 
            backgroundImage: `url(${featureBg})`,
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '60%',
            opacity: 0.5,
            transform: 'scale(1.2)', // Slightly larger for better visual impact
          }}></div>
        </div>
        
        <h2 className="text-3xl font-bold mb-12 text-center relative z-10">Why Choose CHIPS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 justify-items-center relative z-10">
          
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
                    <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="cyber-card-title">Secure & Decentralized</div>
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  <div className="cyber-card-text">
                    Built on a robust blockchain foundation, ensuring all gambling operations are transparent, fair, and tamper-proof.
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
                    <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="cyber-card-title">Lightning Fast</div>
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  <div className="cyber-card-text">
                    Enjoy quick transactions and game actions with our optimized blockchain technology designed for gambling applications.
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
                    <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div className="cyber-card-title">Provably Fair</div>
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  <div className="cyber-card-text">
                    All game outcomes can be independently verified, ensuring complete fairness and eliminating the need to trust a central authority.
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

        {/* PBaaS Section */}
        <section className="py-16">
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">PBaaS Technology</h2>
            <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
            CHIPS utilizes Platform-Based as a Service (PBaaS) technology, enabling the creation of customized blockchain solutions tailored for gambling applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 justify-items-center">
            
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
                    <div className="cyber-card-title">Scalable Architecture</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Handle thousands of concurrent players and transactions with our scalable blockchain infrastructure.
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
                    <div className="cyber-card-title">Custom Chains</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Create specialized blockchains for different gambling applications, all secured by the main CHIPS network.
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
                    <div className="cyber-card-title">Interoperability</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Seamlessly connect with other blockchains and applications, enabling a unified gaming ecosystem.
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
                    <div className="cyber-card-title">Low Fees</div>
                    <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                    </div>
                    <div className="cyber-card-text">
                        Reduce transaction costs for both operators and players, making micro-bets economically viable.
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

      {/* CTA Section with Background Image and Newsletter */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image on the left */}
        <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none z-0 hidden md:block">
          <div className="w-full h-full" style={{ 
            backgroundImage: `url(${glowBg})`,
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            opacity: 0.5,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Build the Future of Gambling?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of developers and gambling enthusiasts to create innovative decentralized applications.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/poker-info" 
                className="btn-primary inline-flex items-center"
              >
                Explore Poker
              </Link>
              <a 
                href="https://github.com/chips-blockchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Developer Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;