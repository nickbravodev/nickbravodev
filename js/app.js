// Form validation and success message
(function() {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity() == true) {
          event.preventDefault();
          $('#contact-form-success').modal("show");
        }
        form.classList.add('was-validated');
      }, false);
    });
})();