document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
    <style>
      /* Navbar general */
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #1a1a2e;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      .navbar .logo img {
        height: 60px;
      }
      .nav-menu {
        display: flex;
        align-items: center;
      }
      .nav-menu a {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        transition: color 0.3s;
      }
      .nav-menu a:hover {
        color: #ffcccb;
      }

      /* Hamburger */
      .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        gap: 5px;
      }
      .hamburger .bar {
        width: 25px;
        height: 3px;
        background-color: white;
        transition: all 0.3s;
      }
      .hamburger.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }
      .hamburger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hamburger {
          display: flex;
        }
        .nav-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #1a1a2e;
          flex-direction: column;
          width: 200px;
          display: none;
          padding: 10px 0;
          border-radius: 0 0 10px 10px;
        }
        .nav-menu.active {
          display: flex;
        }
        .nav-menu a {
          margin: 10px 0;
        }
      }
    </style>

    <header class="navbar">
      <div class="logo">
        <a href="index.html">
          <img src="img/logo.png" alt="Logo Sentiverso">
        </a>
      </div>
      <nav class="nav-menu" id="nav-menu">
        <a href="index.html">Inicio</a>
        <a href="talleres.html">Talleres</a>
        <a href="experiencias.html">Experiencias</a>
        <a href="contactenos.html">Contáctenos</a>
        <a href="sobre-nosotros.html">Modelo Sentiverso</a>
      </nav>
      <div class="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>
  `;

  // Toggle del menú hamburguesa
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Espacio debajo del navbar para no tapar contenido
  document.body.style.paddingTop = '80px';
});
