import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ textArray, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [arrayIndex, setArrayIndex] = useState(0);

  const currentText = textArray[arrayIndex];

  useEffect(() => {
    let timer;
    const fullText = currentText;

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length - 1)), deletingSpeed);
      } else {
        setIsTyping(true);
        setArrayIndex(prev => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, arrayIndex, textArray, typingSpeed, deletingSpeed, delay, currentText]);

  return (
    <span className="typing-effect">
      {displayedText}
      <span className={`typing-cursor ${isTyping ? 'typing' : ''}`}></span>
    </span>
  );
};

export default TypingEffect;
