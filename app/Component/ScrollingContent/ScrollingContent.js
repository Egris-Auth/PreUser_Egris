// ScrollingContent.jsx
"use client"; // Add this if using Next.js App Router

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollingContent.module.css';

const ScrollingContent = ({ children, direction = 'left', speed = 'normal', bgColor = 'transparent' }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Update visibility state based on intersection
        setIsVisible(entry.isIntersecting);
      });
    }, options);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Determine speed class based on prop
  const getSpeedClass = () => {
    switch(speed) {
      case 'slow': return styles.slow;
      case 'fast': return styles.fast;
      default: return styles.normal;
    }
  };
  
  // Determine direction class based on prop
  const getDirectionClass = () => {
    switch(direction) {
      case 'right': return styles.scrollRight;
      case 'up': return styles.scrollUp;
      case 'down': return styles.scrollDown;
      default: return styles.scrollLeft;
    }
  };
  
  return (
    <div 
      ref={containerRef} 
      className={styles.scrollContainer}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${styles.scrollContent} ${isVisible ? `${getDirectionClass()} ${getSpeedClass()}` : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ScrollingContent;