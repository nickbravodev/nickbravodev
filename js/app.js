// Form validation
(function() {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity() == true) {
          event.preventDefault();
          form.submit();
        }
        form.classList.add('was-validated');
      }, false);
    });
})();
// Contact form success popup
$(document).ready(function() {
  if (window.location.href.indexOf('#success') != -1) {
    $('#success').modal('show');
  }
});