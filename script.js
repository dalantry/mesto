
const popupEdit = document.querySelector(".popup__edit-form");
const editButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");

// Открытие и закрытие попап редактировнаия
function openFormEdit() {
  popupEdit.classList.add("popup_opened");
}

function closeFormEdit() {
  popupEdit.classList.remove("popup_opened");
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__text").textContent;
}

editButton.addEventListener("click", openFormEdit);
popupClose.addEventListener("click", closeFormEdit);


// Текст формы
const formElement = document.querySelector(".popup__main");
const nameInput = formElement.querySelector(".popup__input_text_name");
const jobInput = formElement.querySelector(".popup__input_text_job");

nameInput.value = document.querySelector(".profile__title").textContent;
jobInput.value = document.querySelector(".profile__text").textContent;

function formSubmitHandler(evt) {
  evt.preventDefault(); 

  let name = document.querySelector(".profile__title");
  let job = document.querySelector(".profile__text");

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closeFormEdit();
}
formElement.addEventListener("submit", formSubmitHandler);

//Добавление новой карточки
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add-card');
const popupCloseAdd = document.querySelector('.popup__close_add');

function openFormAdd() {
  popupAdd.classList.add("popup_opened");
}

function closeFormAdd() {
  popupAdd.classList.remove("popup_opened");
}

addButton.addEventListener("click", openFormAdd);
popupCloseAdd.addEventListener("click", closeFormAdd);

