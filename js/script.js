
var link = document.querySelector(".contacts__btn-write-to-us");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".feedback-form__close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=feedback-form__input-name]");
var email = popup.querySelector("[name=feedback-form__input-mail]");

var mapLink = document.querySelector(".contact__map-link-wrapper");
var mapPopup = document.querySelector(".map-form");
var mapClose = document.querySelector(".map-form__close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
  popup.classList.remove("feedback-form-error");
});

popup.addEventListener("submit", function(evt) {
  popup.classList.remove("feedback-form-error");

  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-form-error");
    console.log("Введите имя и email");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("feedback-form-show")) {
      popup.classList.remove("feedback-form-show");
      popup.classList.remove("feedback-form-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-form-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-form-show")) {
      mapPopup.classList.remove("map-form-show");
    }
  }
});
