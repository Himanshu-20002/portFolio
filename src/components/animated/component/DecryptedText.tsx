import { useState, useEffect, useRef } from "react";

export default function DecryptionText() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);
  
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const phrases = [
    "That Inspire & Engage",
    "hello world",
   
    "Welcome to my DevPortfolio",
    "Building Digital Dreams",
    "React • Next • GSAP • Three.js",
    "Mobile Apps & Web Experiences",
    "Code. Create. Innovate.",
   
  ];

  const decryptPhrase = (targetPhrase: string) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const letters = targetPhrase.split("");
    
    setIsDecrypting(true);
    
    let iteration = 0;
    const maxIterations = targetPhrase.length * 10; // Control total animation time
    
    const animate = () => {
      const result = letters.map((letter, index) => {
        if (index < iteration / 4) {
          return letter; // Character is revealed
        }
        if (letter === " ") {
          return " "; // Keep spaces
        }
        return chars[Math.floor(Math.random() * chars.length)]; // Random character
      }).join("");
      
      setDisplayText(result);
      
      if (iteration < maxIterations) {
        iteration++;
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - show final text
        setDisplayText(targetPhrase);
        setIsDecrypting(false);
        
        // Hold the completed text, then move to next phrase
        timeoutRef.current = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 200); // Hold for 2 seconds to read
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start first animation after initial delay
    decryptPhrase(phrases[currentPhraseIndex]); // Start with the current index (initially 0)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // When phrase index changes, start new decryption
    if (!isDecrypting) { // Prevent overlap
      timeoutRef.current = setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase or loop back to 0
        decryptPhrase(phrases[currentPhraseIndex]); // Start decrypting the new phrase
      }, 200); // Delay before next phrase starts
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPhraseIndex, isDecrypting]);

  return (
    <span className="text-accent-cyan glow-text decryption-text">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}