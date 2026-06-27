export function initCounters() {
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;

  const animate = () => {
    if (animated) return;

    stats.forEach((stat) => {
      const rect = stat.getBoundingClientRect();
      if (rect.top >= window.innerHeight || rect.bottom <= 0) return;

      animated = true;
      const text = stat.textContent.trim();
      const match = text.match(/(\d+)/);
      if (!match) return;

      const target = Number.parseInt(match[1], 10);
      const suffix = text.replace(match[1], '');
      let current = 0;
      const steps = 40;
      const increment = Math.max(1, Math.ceil(target / steps));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = `${current}${suffix}`;
      }, 1400 / steps);
    });
  };

  window.addEventListener('scroll', animate, { passive: true });
  animate();
}
