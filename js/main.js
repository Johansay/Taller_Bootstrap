(function () {
  'use strict';

  // --- Smooth scroll para todos los enlaces internos ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Manejo del formulario de contacto ---
  const form = document.querySelector('#contacto form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const terminos = document.getElementById('terminos').checked;

      if (!nombre || !email || !telefono || !mensaje || !terminos) {
        showAlert('Por favor completa todos los campos y acepta los términos.', 'danger');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAlert('Ingresa un correo electrónico válido.', 'danger');
        return;
      }

      showAlert('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
      form.reset();
    });
  }

  function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    `;

    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);

    setTimeout(() => {
      if (alert.parentNode) {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
      }
    }, 5000);
  }

})();
