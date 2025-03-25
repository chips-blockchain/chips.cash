import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Import images (you'll need to create/add these)
import dinoT from '../assets/images/dino-t-rex.png'; 
import dinoStego from '../assets/images/dino-stego.png';
import dinoTrice from '../assets/images/dino-trice.png';
import pokerCard1 from '../assets/images/card-ace.png';
import pokerCard2 from '../assets/images/card-king.png';
import emptyChip from '../assets/images/empty-chip.png';

const NotFound = () => {
  const scene404Ref = useRef(null);
  
  useEffect(() => {
    if (!scene404Ref.current) return;
    
    const sceneElement = scene404Ref.current;
    const dinos = sceneElement.querySelectorAll('.dino');
    const cards = sceneElement.querySelectorAll('.dino-card');
    const emptyChips = sceneElement.querySelectorAll('.empty-chip');
    
    // Random animations for dinosaurs
    const randomAnimateDinos = () => {
      const randomDino = dinos[Math.floor(Math.random() * dinos.length)];
      randomDino.classList.add('dino-blink');
      
      setTimeout(() => {
        randomDino.classList.remove('dino-blink');
      }, 1000);
    };
    
    // Random card flip animations
    const randomAnimateCards = () => {
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      randomCard.classList.add('card-flip');
      
      setTimeout(() => {
        randomCard.classList.remove('card-flip');
      }, 1500);
    };
    
    // Empty chip bounce animation
    const animateEmptyChips = () => {
      const randomChip = emptyChips[Math.floor(Math.random() * emptyChips.length)];
      randomChip.classList.add('chip-bounce');
      
      setTimeout(() => {
        randomChip.classList.remove('chip-bounce');
      }, 800);
    };
    
    // Set intervals for animations
    const dinoInterval = setInterval(randomAnimateDinos, 3000);
    const cardInterval = setInterval(randomAnimateCards, 4000);
    const chipInterval = setInterval(animateEmptyChips, 2500);
    
    // Clean up
    return () => {
      clearInterval(dinoInterval);
      clearInterval(cardInterval);
      clearInterval(chipInterval);
    };
  }, []);
  
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-neon-purple/10 glitch-text">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-neon-purple glitch-overlay">404</div>
        </div>
        
        {/* Dinosaur Poker Scene Animation - No frame, just the scene */}
        <div 
          ref={scene404Ref} 
          className="dino-poker-scene relative h-64 md:h-96 max-w-4xl my-8 mx-auto"
        >
          {/* Poker table background */}
          <div className="absolute inset-x-[10%] h-40 md:h-48 bg-green-900/70 rounded-[50%] top-1/2 transform -translate-y-1/2 z-0 border-4 border-amber-800"></div>
          
          {/* T-Rex dinosaur - positioned around the table */}
          <div className="dino absolute left-[10%] top-[30%] z-20">
            <img src={dinoT} alt="T-Rex playing poker" className="w-24 md:w-32 h-auto  transform -scale-x-100" />
          </div>
          
          {/* Stegosaurus dinosaur */}
          <div className="dino absolute right-[10%] top-[30%] z-20">
            <img src={dinoStego} alt="Stegosaurus playing poker" className="w-28 md:w-36 h-auto" />
          </div>
          
          {/* Triceratops dinosaur */}
          <div className="dino absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-20">
            <img src={dinoTrice} alt="Triceratops playing poker" className="w-32 md:w-40 h-auto" />
          </div>
          
          {/* Playing cards - on the table */}
          <div className="dino-card absolute left-[23%] top-[45%] z-10 shadow-lg rotate-[-15deg]">
            <img src={pokerCard1} alt="Poker card" className="w-14 md:w-16 h-auto rounded-lg" />
          </div>
          
          <div className="dino-card absolute right-[27%] top-[43%] z-10 shadow-lg rotate-[10deg]">
            <img src={pokerCard2} alt="Poker card" className="w-14 md:w-16 h-auto rounded-lg" />
          </div>
          
          {/* Empty chip spots - shown as translucent outlines */}
          <div className="empty-chip absolute left-[45%] top-[60%] z-10">
            <img src={emptyChip} alt="Empty chip" className="w-10 md:w-12 h-auto opacity-30" />
          </div>
          
          <div className="empty-chip absolute right-[32%] top-[35%] z-10">
            <img src={emptyChip} alt="Empty chip" className="w-10 md:w-12 h-auto opacity-30" />
          </div>
          
          <div className="empty-chip absolute left-[32%] top-[35%] z-10">
            <img src={emptyChip} alt="Empty chip" className="w-10 md:w-12 h-auto opacity-30" />
          </div>
        </div>
          
        <h2 className="text-3xl font-bold mb-4 text-neon-purple">No CHIPS Found!</h2>
        <p className="text-xl mb-6">The dinosaurs are playing poker but they forgot their CHIPS... just like this page forgot to exist!</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link to="/" className="btn-primary inline-flex items-center justify-center">
            <span className="mr-2">⬅</span> Return to Home Base
          </Link>
          <a 
            href="https://github.com/chips-blockchain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Visit Repository <span className="ml-2">→</span>
          </a>
        </div>
        
        <div className="cyber-lines mt-4">
          <span></span><span></span><span></span>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes cardFlip {
          0% { transform: rotate(var(--rotation, 0deg)); }
          50% { transform: rotate(var(--rotation, 0deg)) rotateY(180deg); }
          100% { transform: rotate(var(--rotation, 0deg)); }
        }
        
        @keyframes dinoBlink {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          75% { transform: translateY(2px); }
        }
        
        @keyframes chipBounce {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-15px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 0.3; }
        }
        
        .card-flip {
          animation: cardFlip 1.5s ease-in-out;
        }
        
        .dino-blink {
          animation: dinoBlink 1s ease-in-out;
        }
        
        .chip-bounce {
          animation: chipBounce 0.8s ease-in-out;
        }
        
        .dino-poker-scene {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default NotFound;