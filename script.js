// Открытие и закрытие попап редактировнаия
const popupEditForm = document.querySelector(".popup-edit");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseEdit = popupEditForm.querySelector(".popup__close");
const popup = document.querySelector(".popup");

// Текст формы
const formProfile = document.querySelector(".edit-form");
const nameInput = formProfile.querySelector(".popup__input_text_name");
const jobInput = formProfile.querySelector(".popup__input_text_job");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__text");


//Форма добавляения
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupCloseAdd = document.querySelector(".popup__close_add");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//выход по esc
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(popupImg);
    closePopup(popupAdd);
    closePopup(popupEditForm);
  }
});

// клик на оверлей
function overlayClickClose(popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
}

//----------------------------------------------------

nameInput.value = profileTitle.textContent;
jobInput.value = profileJob.textContent;

editButton.addEventListener("click", () => {
  openPopup(popupEditForm);
});
popupCloseEdit.addEventListener("click", () => closePopup(popupEditForm));

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditForm);
}
formProfile.addEventListener("submit", formSubmitHandler);

addButton.addEventListener("click", () => openPopup(popupAdd));
popupCloseAdd.addEventListener("click", () => closePopup(popupAdd));

const templateElement = document.querySelector(".template");
const listContainer = document.querySelector(".cards__elements");

function newCard(item) {
  const newItem = templateElement.content.cloneNode(true);
  const titleElement = newItem.querySelector(".cards__text");
  titleElement.textContent = item.name;
  const linkElement = newItem.querySelector(".cards__image");
  linkElement.setAttribute("src", item.link);
  linkElement.setAttribute("alt", item.name);

  // like
  const likeButton = newItem.querySelector(".cards__like-button");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("cards__like-button_active");
  });

  //remove card
  const removeButton = newItem.querySelector(".cards__delete");
  removeButton.addEventListener("click", removeCard);

  //попап картинки
  const imgFull = newItem.querySelector(".cards__image");
  imgFull.addEventListener("click", fullImage);

  return newItem;
}

function renderCards() {
  const listCards = initialCards.map(newCard);

  listContainer.append(...listCards);
}
renderCards();

// добавление новых карточек
const inputElementTitle = document.querySelector(".popup__input_text_place");
const inputElementLink = document.querySelector(".popup__input_text_link");
const formAddNewCard = popupAdd.querySelector(".add-form");

formAddNewCard.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputTitle = inputElementTitle.value;
  const inputLink = inputElementLink.value;
  const newItemCard = newCard({ name: inputTitle, link: inputLink });
  listContainer.prepend(newItemCard);

  closePopup(popupAdd);
});

//удаление карточек
function removeCard(event) {
  const targetElement = event.target;
  const targetItem = targetElement.closest(".cards__element");
  targetItem.remove();
}
// попап картинки
const popupImgLink = document.querySelector(".popup-img__image");
const popupImg = document.querySelector(".popup-img");
const popupImgText = document.querySelector(".popup-img__text");

function fullImage(evt) {
  const targetImage = evt.target;
  const targetImageLink = targetImage.src;
  const targetImageText = targetImage.alt;

  popupImgLink.setAttribute("src", targetImageLink);
  popupImgText.textContent = targetImageText;

  openPopup(popupImg);
}

//закрытие попапа изображения
const closeImg = document.querySelector(".popup-img__close");
closeImg.addEventListener("click", () => closePopup(popupImg));

overlayClickClose(popupImg);
overlayClickClose(popupAdd);
overlayClickClose(popupEditForm);
