// DATOS PARA FILTRAR // 

//Primer filtro: combos //

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.combos-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Activa el botón que fue presionado
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const selectedCategory = button.getAttribute('data-category').trim().toLowerCase();
  
        cards.forEach(card => {
          const rawGender = card.getAttribute('data-gender') || '';
          
          // Quita espacios y tildes ("películas" -> "peliculas")
          const cardCategory = rawGender
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
  
          // Muestra u oculta aplicando style directamente
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.cssText = 'display: block !important;';
          } else {
            card.style.cssText = 'display: none !important;';
          }
        });
      });
    });
  
    // Marca el botón "Todos" como activo al iniciar
    if (filterButtons.length > 0) {
      filterButtons[0].classList.add('active');
    }
  
    // Desplazamiento suave para menú
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
  
  // Función para volver arriba (footer)
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
    // Activa el botón "Todos" al cargar
    if (filterButtons.length > 0) {
      filterButtons[0].classList.add('active');
    }
  
    // Scroll suave del menú
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
  
  // Función para volver arriba (footer)
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
    // Desplazamiento suave menú
    const navLinks = document.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
  
  // Función botón footer
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }