export function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 768 ? 18 : 32;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 7}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.opacity = `${Math.random() * 0.4 + 0.2}`;

    container.appendChild(particle);
  }
}
