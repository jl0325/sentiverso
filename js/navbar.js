// Insertar el navbar HTML en un contenedor con id "navbar-container"
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
    <header class="navbar">
      <div class="logo">
        <a href="index.html">
          <img src="img/logo.png" alt="Logo Sentiverso" style="height: 60px;">
        </a>
      </div>
      <nav class="nav-menu" id="nav-menu">
        <a href="index.html">Inicio</a>
        <a href="talleres.html">Talleres</a>
        <a href="experiencias.html">Experiencias</a>
        <a href="contactenos.html">Contáctenos</a>
        <a href="sobre-nosotros.html">Sobre Nosotros</a>
      </nav>
      <div class="hamburger" id="hamburger">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
      </div>
    </header>
  `;

  // Ahora, agregar evento click al hamburger para menú responsive
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
