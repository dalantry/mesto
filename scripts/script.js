const popupEditForm = document.querySelector(".popup-edit");
const editButton = document.querySelector(".profile__edit-button");
const popupList = document.querySelectorAll(".popup");
const formProfile = document.querySelector(".edit-form");
const nameInput = formProfile.querySelector(".popup__input_text_name");
const jobInput = formProfile.querySelector(".popup__input_text_job");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__text");
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const closeButtonList = document.querySelectorAll('.popup__close');
const templateElement = document.querySelector(".template");
const listContainer = document.querySelector(".cards__elements");
const popupImgLink = document.querySelector(".popup-img__image");
const popupImg = document.querySelector(".popup-img");
const popupImgText = document.querySelector(".popup-img__text");
const inputElementTitle = document.querySelector(".popup__input_text_place");
const inputElementLink = document.querySelector(".popup__input_text_link");
const formAddNewCard = popupAdd.querySelector(".add-form");
const submitButton = document.querySelector('.popup__save-button')

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener('keydown', closeByEscape);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  openedPopup.classList.remove("popup_opened");

  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  const escapeCode = 27
  if (evt.keyCode === escapeCode) {
    closePopup();
  }
}

function addOverlayClickClose(popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
}

popupList.forEach((popup) =>{
    addOverlayClickClose(popup);
  })

closeButtonList.forEach((button) =>{
button.addEventListener('click', function(){
  closePopup(button);
})
});

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditForm);
 
  const submitButton = document.querySelector('.popup-edit__submit'); 
  setButtonState(submitButton, formProfile.checkValidity(), validationConfig);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditForm);
;}
formProfile.addEventListener("submit", formSubmitHandler);

addButton.addEventListener("click", function() {
  openPopup(popupAdd);
  
  formAddNewCard.reset();
});

function createNewCard(item) {
  const newItem = templateElement.content.cloneNode(true);
  const titleElement = newItem.querySelector(".cards__text");
  titleElement.textContent = item.name;
  const cardImage = newItem.querySelector(".cards__image");
  cardImage.setAttribute("src", item.link);
  cardImage.setAttribute("alt", item.name);

  const likeButton = newItem.querySelector(".cards__like-button");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("cards__like-button_active");
  });

  const removeButton = newItem.querySelector(".cards__delete");
  removeButton.addEventListener("click", removeCard);

  cardImage.addEventListener("click", fullImage);

  return newItem;
}

function renderCards() {
  const listCards = initialCards.map(createNewCard);

  listContainer.append(...listCards);
}
renderCards();

formAddNewCard.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputTitle = inputElementTitle.value;
  const inputLink = inputElementLink.value;
  const newItemCard = createNewCard({ name: inputTitle, link: inputLink });
  listContainer.prepend(newItemCard);

  closePopup(popupAdd);
});

function removeCard(event) {
  const targetElement = event.target;
  const targetItem = targetElement.closest(".cards__element");
  targetItem.remove();
}

function fullImage(evt) {
  const targetImage = evt.target;
  const targetImageLink = targetImage.src;
  const targetImageText = targetImage.alt;

  popupImgLink.setAttribute("src", targetImageLink);
  popupImgText.textContent = targetImageText;

  openPopup(popupImg);
}