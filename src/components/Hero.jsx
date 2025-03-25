import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaGamepad } from 'react-icons/fa';
import heroLogo from '../assets/images/fewfewf.png'; // Used in the hero logo animation
import fewfewBg from '../assets/images/fewfew.png'; // Background for hero

const Hero = () => {
    const heroRef = useRef(null);
    
    useEffect(() => {
        if (!heroRef.current) return;
        
        // Get elements
        const heroElement = heroRef.current;
        const chips = heroElement.querySelectorAll('.chip');
        const cards = heroElement.querySelectorAll('.poker-card');
        
        // Add mouse move effect to make elements responsive to cursor
        const handleMouseMove = (e) => {
            const heroRect = heroElement.getBoundingClientRect();
            
            // Get mouse position relative to hero container
            const mouseX = e.clientX - heroRect.left;
            const mouseY = e.clientY - heroRect.top;
            
            // Calculate center of hero container
            const centerX = heroRect.width / 2;
            const centerY = heroRect.height / 2;
            
            // Calculate how far mouse is from center (in percentage)
            const percentX = (mouseX - centerX) / centerX;
            const percentY = (mouseY - centerY) / centerY;
            
            // Apply subtle tilt effect to each card
            cards.forEach((card, index) => {
                const factor = (index + 1) * 3; // Different factor for each card
                const rotateX = percentY * factor;
                const rotateY = -percentX * factor;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                    translate(${card.dataset.translateX || '0'}, ${card.dataset.translateY || '0'}) 
                    rotate(${card.dataset.rotate || '0'})`;
            });
            
            // Apply subtle movement to chips based on mouse position
// Inside the handleMouseMove function, update the chip movement code:
chips.forEach((chip, index) => {
    // Only apply mouse movement if not hovering over the orbit
    if (!heroElement.querySelector('.logo-orbit:hover')) {
      const chipFactor = (index + 1) * 2;
      const moveX = percentX * chipFactor * 3;
      const moveY = percentY * chipFactor * 3;
      
      // Use translateX/Y consistently with original positioning
      if (chip.classList.contains('chip-1')) {
        chip.style.transform = `translateX(-50%) translateY(${moveY}px)`;
      } else if (chip.classList.contains('chip-2')) {
        chip.style.transform = `translateY(-50%) translateX(${-moveX}px)`;
      } else if (chip.classList.contains('chip-3')) {
        chip.style.transform = `translateX(-50%) translateY(${-moveY}px)`;
      } else if (chip.classList.contains('chip-4')) {
        chip.style.transform = `translateY(-50%) translateX(${moveX}px)`;
      }
    }
  });
        };
        
        // Store original positions for each card
        cards.forEach(card => {
            if (card.classList.contains('card-1')) {
                card.dataset.translateX = '0';
                card.dataset.translateY = '0';
                card.dataset.rotate = '-15deg';
            } else if (card.classList.contains('card-2')) {
                card.dataset.translateX = '0';
                card.dataset.translateY = '0';
                card.dataset.rotate = '10deg';
            } else if (card.classList.contains('card-3')) {
                card.dataset.translateX = '0';
                card.dataset.translateY = '0';
                card.dataset.rotate = '5deg';
            } else if (card.classList.contains('card-4')) {
                card.dataset.translateX = '0';
                card.dataset.translateY = '0';
                card.dataset.rotate = '-8deg';
            }
        });
        
        heroElement.addEventListener('mousemove', handleMouseMove);
        
        // Add occasional random animation to poker cards even without hover
        const randomAnimateCards = () => {
            const randomCard = cards[Math.floor(Math.random() * cards.length)];
            
            // Add a brief animation class to the card
            randomCard.classList.add('card-random-animation');
            
            // Remove the class after animation completes
            setTimeout(() => {
                randomCard.classList.remove('card-random-animation');
            }, 1500);
        };
        
        // Set interval for random card animations
        const animationInterval = setInterval(randomAnimateCards, 5000);
        
        // Clean up
        return () => {
            heroElement.removeEventListener('mousemove', handleMouseMove);
            clearInterval(animationInterval);
        };
    }, []);
    
    return (
        <div className="hero-container min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20" ref={heroRef}>
            {/* Full hero background image aligned to the left */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-hero-pattern" style={{ 
                    backgroundImage: `url(${fewfewBg})`,
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 0.5,
                }}></div>
            </div>
            
            {/* Animated background particles/chips */}
            <div className="chips-particles"></div>
            
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left content - Text and CTA */}
                    <div className="lg:w-1/2 text-center lg:text-left relative">
                        {/* Content */}
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-title">
                                Decentralized <span className="text-neon-purple">Poker</span> on the Blockchain
                            </h1>
                            <p className="text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-theme-secondary leading-relaxed">
                                CHIPS is a specialized cryptocurrency designed for gambling applications, 
                                with a primary focus on enabling provably fair, decentralized poker.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/about" className="btn-primary">
                                    Explore <FaArrowRight className="ml-2" />
                                </Link>
                                
                                <a 
                                    href="https://github.com/chips-blockchain/pangea-poker" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <FaGamepad className="mr-2" /> Play Now
                                </a>
                            </div>
                            
                            <div className="mt-8 flex items-center justify-center lg:justify-start">
                                <a 
                                    href="https://github.com/chips-blockchain" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center text-theme-secondary hover:text-neon-purple transition-colors"
                                >
                                    <FaGithub className="mr-2 text-xl" /> View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right content - Enhanced Logo Display with Cards */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="hero-graphic">
                            <div className="logo-orbit">
                                <div className="orbit-path">
                                    <div className="chip chip-1" data-value="10"></div>
                                    <div className="chip chip-2" data-value="25"></div>
                                    <div className="chip chip-3" data-value="50"></div>
                                    <div className="chip chip-4" data-value="100"></div>
                                </div>
                                <div className="logo-container-hero">
                                    <div className="logo-pulse">
                                        <img 
                                        src={heroLogo} 
                                        alt="CHIPS Logo" 
                                        className="hero-logo" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hero-cards">
                                <div className="poker-card card-1">
                                    <div className="card-inner"></div>
                                </div>
                                <div className="poker-card card-2">
                                    <div className="card-inner"></div>
                                </div>
                                <div className="poker-card card-3">
                                    <div className="card-inner"></div>
                                </div>
                                <div className="poker-card card-4">
                                    <div className="card-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;