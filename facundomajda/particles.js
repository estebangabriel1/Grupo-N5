const particlesContainer = document.querySelector('.particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particlesContainer.appendChild(particle);
}

for (let i = 0; i < 100; i++) {
  createParticle();
}