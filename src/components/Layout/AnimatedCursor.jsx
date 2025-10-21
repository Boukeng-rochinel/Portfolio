import React, { useState, useEffect, useRef } from 'react';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current && cursorInnerRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
        cursorInnerRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(25, 118, 210, 0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease',
          opacity: hidden ? 0 : 1,
        }}
      />
      <div
        ref={cursorInnerRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '6px',
          height: '6px',
          backgroundColor: '#1976d2',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.15s ease',
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
};

export default AnimatedCursor;