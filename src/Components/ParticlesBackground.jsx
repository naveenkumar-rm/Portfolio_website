import React, { useRef, useEffect } from 'react';
import './ParticlesBackground.css';

const PARTICLE_COUNT = 110;
const MAX_DISTANCE = 100;

function createParticle(x, y, ctx, bounds) {
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1,
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= 0 || this.x >= bounds.width) this.vx *= -1;
      if (this.y <= 0 || this.y >= bounds.height) this.vy *= -1;
    },
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fill();
    }
  };
}

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let bounds = { width: 0, height: 0 };

    const lineColor = { r: 255, g: 255, b: 255 };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      bounds.width = width;
      bounds.height = height;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(
          createParticle(
            Math.random() * bounds.width,
            Math.random() * bounds.height,
            ctx,
            bounds
          )
        );
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DISTANCE) {
            const opacity = 1 - dist / MAX_DISTANCE;
            ctx.strokeStyle = `rgba(${lineColor.r},${lineColor.g},${lineColor.b},${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, bounds.width, bounds.height);

      connectParticles();

      for (const p of particles) {
        p.update();
        p.draw();
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-container" />;
};

export default ParticlesBackground;
