// Открытие и закрытие попап
let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup__close");

function openForm(){
    popup.classList.add('popup_opened');
}

function closeForm(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openForm);
popupClose.addEventListener('click', closeForm);

// Информация о себе

// Находим форму в DOM
let formElement = document.querySelector('.popup__main');
let nameInput = formElement.querySelector('.popup__text-name');
let jobInput = formElement.querySelector('.popup__text-job');

nameInput.value = document.querySelector('.profile__title').textContent;
jobInput.value = document.querySelector('.profile__text').textContent;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    

    // Получите значение полей из свойства value
    

    // Выберите элементы, куда должны быть вставлены значения полей 
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__text');

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value; 
    job.textContent = jobInput.value;

    closeForm();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

