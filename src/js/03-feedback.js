import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';

const formData = {};


function onFormSubmit(e) {
    e.preventDefault();

    formData.email = form.email.value;
    formData.message = form.message.value;

    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);

    formData.email = '';
    formData.message = '';
    e.currentTarget.reset();
}


function onTextareaInput(e) {   

    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateTextarea() {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));   

    if (savedForm) {
        form.email.value = savedForm.email;
        form.message.value = savedForm.message;
        
        formData.email = savedForm.email;
        formData.message = savedForm.message;
    }

}

populateTextarea();