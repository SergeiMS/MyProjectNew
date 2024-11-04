import {createFuncBurgerMenu} from './burgerMenu.js';
createFuncBurgerMenu();

// слайдер


const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
slideIndex = (slideIndex - 1 + slideCount) % slideCount;
slide();
});

nextButton.addEventListener('click', () => {
slideIndex = (slideIndex + 1) % slideCount;
slide();
});

const slide = () => {
const imageWidth = slider.clientWidth;
const slideOffset = -slideIndex * imageWidth;
slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
slide();
});

let btn = document.querySelector('.btn');
btn.addEventListener('click', function (){
    alert('Извините, товар закончился');
});

// let btn = document.querySelector('.btn2');
// btn.addEventListener('click', function (){
//     alert('Извините, товар закончился');
// });



// проверка бургер меню подключение через импорт ??

// import {createFuncBurgerMenu} from './burgerMenu.js';
// createFuncBurgerMenu();




