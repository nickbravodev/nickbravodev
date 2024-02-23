"use strict";

// Form validation
(function () {
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (form.checkValidity() == true) {
          event.preventDefault();
          form.submit();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Contact form success popup
$(document).ready(function () {
  if (window.location.href.indexOf("#success") != -1) {
    $("#success").modal("show");
    // Dismiss modal after 3 seconds if no input
    setTimeout(function () {
      $("#success").modal("hide");
    }, 3000);
  }
});

// Prevent form from resubmitting on refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
