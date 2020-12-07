
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

//Форма добавляения
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

// Cards
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const templateElement = document.querySelector('.template');
const listContainer = document.querySelector('.cards__elements');

// Карточки из коробки
function newCard(item){
  const newItem = templateElement.content.cloneNode(true);
  const titleElement = newItem.querySelector('.cards__text');
  titleElement.textContent = item.name;
  const linkElement = newItem.querySelector('.cards__image');
  linkElement.setAttribute('src', item.link);

  return newItem;
}

function renderCards(){
  const listCards = initialCards.map(newCard);

  listContainer.append(...listCards);
}

renderCards();

// добавление новых карточек
const inputElementTitle = document.querySelector('.popup__input_text_place');
const inputElementLink = document.querySelector('.popup__input_text_link');

function addNewCard(event){
    event.preventDefault();

    const inputTitle = inputElementTitle.value;
    const inputLink = inputElementLink.value;
    const newItemCard = newCard({ name: inputTitle, link: inputLink});
    listContainer.prepend(newItemCard);

    closeFormAdd();
  }

popupAdd.addEventListener('submit', addNewCard);

//кнопка лайк

const likeButton = document.querySelector('.cards__like-button');

function like(){
  likeButton.classList.toggle('cards__like-button_active');
};

likeButton.addEventListener('click', like);