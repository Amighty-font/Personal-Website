import React, { useState, useEffect } from 'react';
import './Scrollbar.css';

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="custom-scrollbar">
      <div className="custom-scrollbar-progress" style={{ height: `${(scrollPosition / document.body.scrollHeight) * 100}%` }} />
    </div>
  );
};

export default CustomScrollbar;