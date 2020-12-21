function showError(form, input){
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
}

function hideError(form, input){
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
}

function checkInputValidity(form, input){
  if (input.validity.valid){
    hideError(form, input);
  } else {
    showError(form, input);
  }
} 

function setButtonState(button, isActive, config){
  if(isActive){
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }
}

function setEventListener(form, config){
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputList.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(form, input);
      setButtonState(submitButton, form.checkValidity(), config);
      
    });
  });
}

function enableValidation(config){
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach(form => {
    setEventListener(form, config);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("Done");
    });

    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  })
}

const validationConfig = {
  formSelector: ".popup__main",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "button_invalid",
  //inputErrorClass: "popup__input_type_error",
  //errorClass: "popup__error_visible",
};
 
enableValidation(validationConfig);