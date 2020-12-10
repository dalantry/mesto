// Открытие и закрытие попап редактировнаия
const popupEditForm = document.querySelector(".popup-edit");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseEdit = popupEditForm.querySelector(".popup__close");

// Текст формы
const formProfile = document.querySelector(".edit-form");
const nameInput = formProfile.querySelector(".popup__input_text_name");
const jobInput = formProfile.querySelector(".popup__input_text_job");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__text");
const name = document.querySelector(".profile__title");
const job = document.querySelector(".profile__text");

//Форма добавляения
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupCloseAdd = document.querySelector(".popup__close_add");

function openAndCloseForm(popup) {
  popup.classList.toggle("popup_opened");
}

editButton.addEventListener("click", () => {
  openAndCloseForm(popupEditForm);

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
});
popupCloseEdit.addEventListener("click", () => openAndCloseForm(popupEditForm));

function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  openAndCloseForm(popupEditForm);
}
formProfile.addEventListener("submit", formSubmitHandler);

addButton.addEventListener("click", () => openAndCloseForm(popupAdd));
popupCloseAdd.addEventListener("click", () => openAndCloseForm(popupAdd));

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
const formAddNewCard = popupAdd.querySelector('.add-form');

formAddNewCard.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputTitle = inputElementTitle.value;
  const inputLink = inputElementLink.value;
  const newItemCard = newCard({ name: inputTitle, link: inputLink });
  listContainer.prepend(newItemCard);

  openAndCloseForm(popupAdd);
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

  openAndCloseForm(popupImg);
}

//закрытие попапа изображения
const closeImg = document.querySelector(".popup-img__close");
closeImg.addEventListener("click", () => openAndCloseForm(popupImg));
