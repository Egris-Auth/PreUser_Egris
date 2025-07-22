'use client';
import { useState } from 'react';

const ToolTip = ({ 
  children, 
  content, 
  position = 'top',
  className = '',
  delay = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const getPositionClasses = () => {
    const positions = {
      top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
    };
    return positions[position] || positions.top;
  };

  const getArrowClasses = () => {
    const arrows = {
      top: 'top-full left-1/2 transform -translate-x-1/2 border-l-6 border-r-6 border-t-6 border-transparent border-t-white/40',
      bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-6 border-r-6 border-b-6 border-transparent border-b-white/40',
      left: 'left-full top-1/2 transform -translate-y-1/2 border-t-6 border-b-6 border-l-6 border-transparent border-l-white/40',
      right: 'right-full top-1/2 transform -translate-y-1/2 border-t-6 border-b-6 border-r-6 border-transparent border-r-white/40'
    };
    return arrows[position] || arrows.top;
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute z-50 px-3 py-1 text-sm text-white border border-white/40 bg-neutral-900 rounded-md shadow-lg whitespace-nowrap ${getPositionClasses()} ${className}`}
        >
          {content}
          <div className={`absolute w-0 h-0 ${getArrowClasses()}`} />
        </div>
      )}
    </div>
  );
};

export default ToolTip;