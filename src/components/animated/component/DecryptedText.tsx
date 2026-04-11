import { useState, useEffect, useRef, useCallback } from "react";

const PHRASES = [
  "That Inspire & Engage",
  "hello world",
  "Welcome to my DevPortfolio",
  "Building Digital Dreams",
  "React • Next • GSAP • Three.js",
  "Mobile Apps & Web Experiences",
  "Code. Create. Innovate.",
];

export default function DecryptionText() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);
  
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const decryptPhrase = useCallback((targetPhrase: string) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const letters = targetPhrase.split("");
    
    setIsDecrypting(true);
    
    let iteration = 0;
    const maxIterations = targetPhrase.length * 10;
    
    const animate = () => {
      const result = letters.map((letter, index) => {
        if (index < iteration / 4) return letter;
        if (letter === " ") return " ";
        return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      
      setDisplayText(result);
      
      if (iteration < maxIterations) {
        iteration++;
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetPhrase);
        setIsDecrypting(false);
        timeoutRef.current = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }, 2000); // 2 second pause
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    decryptPhrase(PHRASES[currentPhraseIndex]);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentPhraseIndex, decryptPhrase]);

  return (
    <span className="text-accent-cyan glow-text decryption-text">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}