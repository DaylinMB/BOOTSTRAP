'use strict';
document.addEventListener('DOMContentLoaded', function() {
 
  const form = document.getElementById('emailForm');

  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.querySelector('.invalid-feedback').style.display = 'block';
    } else {
      form.querySelector('.valid-feedback').style.display = 'block';
    }

   
    form.classList.add('was-validated');
  });
});
