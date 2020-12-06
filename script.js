
let popupEdit = document.querySelector(".popup__edit-form");
let editButton = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup__close");

// Открытие и закрытие попап редактировнаия
function openForm() {
  popupEdit.classList.add("popup_opened");
}

function closeForm() {
  popupEdit.classList.remove("popup_opened");
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__text").textContent;
}

editButton.addEventListener("click", openForm);
popupClose.addEventListener("click", closeForm);


// Текст формы
let formElement = document.querySelector(".popup__main");
let nameInput = formElement.querySelector(".popup__input_text_name");
let jobInput = formElement.querySelector(".popup__input_text_job");

nameInput.value = document.querySelector(".profile__title").textContent;
jobInput.value = document.querySelector(".profile__text").textContent;

function formSubmitHandler(evt) {
  evt.preventDefault(); 

  let name = document.querySelector(".profile__title");
  let job = document.querySelector(".profile__text");

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closeForm();
}
formElement.addEventListener("submit", formSubmitHandler);
