// Select DOM Items
const errorIcon = document.querySelector(".form__error-icon");
const errorMessage = document.querySelector(".form__error-message");
const input = document.querySelector(".form__email-input");

input.addEventListener("invalid", toggleError);

function toggleError(e) {
  e.preventDefault(); //prevents default error message ??bad for accessibility?
  errorIcon.classList.add("show");
  errorMessage.classList.add("show");
  input.classList.add("form__email-input--error");
}
