'use client';
import { useEffect, useRef } from 'react';

export default function Flickering({title}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create cubes data
    const cubes = [];
    const cubeSize = 4;
    const gap = 2;
    const cols = Math.floor(canvas.width / (cubeSize + gap));
    const rows = Math.floor(canvas.height / (cubeSize + gap));

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cubes.push({
          x: i * (cubeSize + gap),
          y: j * (cubeSize + gap),
          opacity: Math.random() * 0.5 + 0.1,
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.02
        });
      }
    }

    let animationId;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      cubes.forEach(cube => {
        cube.phase += cube.speed;
        const alpha = 0.1 + (Math.sin(cube.phase) + 1) * 0.3;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(cube.x, cube.y, cubeSize, cubeSize);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative bg-black overflow-hidden border-t border-b border-neutral-800 flex items-center justify-center h-24">
      <canvas
        ref={canvasRef}
        className="absolute top-1 left-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      <h2 className="text-white text-center text-lg z-10">
        {title}
      </h2>
    </div>
  );
}