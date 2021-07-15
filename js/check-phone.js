
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
 initialCountry: "auto",
 geoIpLookup: getIp,
 utilsScript:
   "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
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

function getIp(callback) {
 fetch('https://ipinfo.io/json?token=fa39c9504a5389', { headers: { 'Accept': 'application/json' }})
   .then((resp) => resp.json())
   .catch(() => {
     return {
       country: 'vn',
     };
   })
   .then((resp) => callback(resp.country));
}
