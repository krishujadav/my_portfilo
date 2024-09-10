import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './CursorEffect.css'; // Import the CSS

function CursorEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [clickPosition, setClickPosition] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      setClickPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => setClickPosition(null), 400); // Adjusted to match CSS animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Box className="cursor-wrapper">
      <Box
        className="cursor-shadow"
        sx={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: 'all 0.1s ease', // Adjusted to match CSS transition duration
          zIndex: 9999,
        }}
      />
      {clickPosition && (
        <Box
          className="click-effect"
          sx={{
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`,
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.6) 0%, rgba(0, 255, 255, 0.6) 100%)',
            transform: 'scale(0)',
            opacity: 0.8,
            zIndex: 9999,
          }}
        />
      )}
    </Box>
  );
}

export default CursorEffect;
