
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "none";
  error.style.display = "none";

  if (phoneInput.isValidNumber()) {
    info.style.display = "";
    info.innerHTML = `Số điện thoại hợp lệ: <strong>${phoneNumber}</strong>`;
  } else {
    error.style.display = "";
    error.innerHTML = `Số điện thoại không hợp lệ! Vui lòng nhập lại`;
  }
}
