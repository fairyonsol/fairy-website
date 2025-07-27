import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  twinkle: number;
}

const ParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const colors = [
      '#ffffff',
      '#e879f9',
      '#c084fc',
      '#a855f7',
      '#fbbf24',
      '#f59e0b'
    ];

    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 500 + 300,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkle: Math.random() * Math.PI * 2
    });

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      // Clear canvas with very subtle fade
      ctx.fillStyle = 'rgba(2, 6, 23, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Occasionally add new particles
      if (Math.random() < 0.005) {
        particlesRef.current.push(createParticle());
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.twinkle += 0.02;

        // Gentle attraction to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200 * 0.0001;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Boundary wrapping
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Calculate opacity with twinkling effect
        const lifeRatio = particle.life / particle.maxLife;
        const twinkleEffect = Math.sin(particle.twinkle) * 0.3 + 0.7;
        particle.opacity = Math.max(0, (1 - lifeRatio) * 0.8 * twinkleEffect);

        // Draw particle
        if (particle.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          
          // Outer glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner bright core
          ctx.globalAlpha = particle.opacity * 1.5;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Sparkle effect for some particles
          if (Math.random() < 0.1) {
            ctx.globalAlpha = particle.opacity * 0.8;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size * 2, particle.y);
            ctx.lineTo(particle.x + particle.size * 2, particle.y);
            ctx.moveTo(particle.x, particle.y - particle.size * 2);
            ctx.lineTo(particle.x, particle.y + particle.size * 2);
            ctx.stroke();
          }
          
          ctx.restore();
        }

        return particle.life < particle.maxLife;
      });

      // Keep particle count reasonable
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-80);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleSystem;