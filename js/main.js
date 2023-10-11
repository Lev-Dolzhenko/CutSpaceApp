const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');

formInput.addEventListener('focus', function() {
    form.classList.add('form--active');
})

formInput.addEventListener('blur', function() {
    form.classList.remove('form--active');
})