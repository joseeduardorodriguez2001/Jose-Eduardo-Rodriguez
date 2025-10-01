function mostrarSeccion(id) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function toggleExpand(element) {
  element.classList.toggle('activo');
}

function animateOrbit(icon, radius, speed) {
  let angle = Math.random() * Math.PI * 2;
  function update() {
    angle += speed;
    const centerX = 180;
    const centerY = 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    icon.style.left = x + "px";
    icon.style.top = y + "px";
    requestAnimationFrame(update);
  }
  update();
}

document.querySelectorAll('.orbiting-icon').forEach(icon => {
  const radius = parseFloat(icon.dataset.radius);
  const speed = parseFloat(icon.dataset.speed);
  animateOrbit(icon, radius, speed);
});
