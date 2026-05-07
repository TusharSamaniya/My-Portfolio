import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  useEffect(() => {
    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', move);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
        transition: 'opacity 0.3s ease',
      }}
    />
  );
}
