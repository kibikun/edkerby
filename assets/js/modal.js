const btn = document.querySelector('.nav__burger');
const profile = document.querySelector('.modal__overlay');
const closeBtn = document.getElementById('cls-btn');

btn.addEventListener('click', () => {
    profile.classList.toggle('pop');

});

closeBtn.addEventListener('click', () => {
    profile.classList.add('pop');
});