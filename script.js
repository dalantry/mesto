
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
      name: 'Москва',
      link: 'https://images.unsplash.com/photo-1533193256116-fcaf17cfb3b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
      name: 'Монрепо',
      link: 'https://images.unsplash.com/photo-1536012354193-8bb300dc3ce6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
  },
  {
      name: 'Токсово',
      link: 'https://images.unsplash.com/photo-1517940094524-be03e5da7a98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
      name: 'Новороссийск',
      link: 'https://images.unsplash.com/photo-1523175347343-52d8867ca0bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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

  // like
  const likeButton = newItem.querySelector('.cards__like-button');
  likeButton.addEventListener('click', function(){
  likeButton.classList.toggle('cards__like-button_active');
  });

  //remove card
  const removeButton = newItem.querySelector('.cards__delete');
  removeButton.addEventListener('click', removeCard);

  //попап картинки
  const imgFull = newItem.querySelector('.cards__image');
  imgFull.addEventListener('click', fullImage);

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

popupAdd.addEventListener('submit', function(event){
  event.preventDefault();

  const inputTitle = inputElementTitle.value;
  const inputLink = inputElementLink.value;
  const newItemCard = newCard({ name: inputTitle, link: inputLink});
  listContainer.prepend(newItemCard);

  closeFormAdd();
});

//удаление карточек
function removeCard (event){
  const targetElement = event.target;
  const targetItem = targetElement.closest('.cards__element');
  targetItem.remove();
}
 // попап картинки
 const popupImgLink = document.querySelector('.popup-img__image');
 const popupImg = document.querySelector('.popup-img');

function fullImage (evt){
  const targetImage = evt.target;
  const targetImageLink = targetImage.src;

  popupImgLink.setAttribute('src', targetImageLink);
  popupImg.classList.add('popup_opened');
}
