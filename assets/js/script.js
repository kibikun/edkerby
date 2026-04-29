const btn = document.querySelector('.nav__burger');
const profile = document.querySelector('.modal__overlay');
const closeBtn = document.getElementById('cls-btn');
const form = document.getElementById("contact__form");

btn.addEventListener('click', () => {
    profile.classList.remove('pop');

});

closeBtn.addEventListener('click', () => {
    profile.classList.add('pop');
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

const container = document.querySelector('.project__container');

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
});