export function createFuncBurgerMenu () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav .menu');
    const burgerBars = document.querySelectorAll('.burger-bar');


    let isOpenMenu = false;

    burgerMenu.addEventListener('click', function(){
        isOpenMenu = !isOpenMenu

        toggleMenu();

    });
    // функция, которая переключает состояние меню в зависимости от 
    // флага isOpenMenu

    function toggleMenu() {
        if (isOpenMenu) {
            // если меню открыто, применяем стили крестика для бургер меню и показываем мобильное меню
            adaptiveMenuOpen();
            showMobileMenu();
        } else {
            //если  меню закрыто, возвращаем бургер меню в исходное положение и скрываем мобильное меню
            adaptiveMenuGlose();
            hideMobileMenu();
        }
    }
    function adaptiveMenuOpen() {
        burgerBars[0].style.transform = 'rotate(45deg) translateY(11.5px)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg) translateY(-11.5px)';
    
    };
    
    function adaptiveMenuGlose() {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1'
        burgerBars[2].style.transform = 'rotate(0deg)';
    
    };

    function showMobileMenu(){
        navMenu.classList.remove('menu');
        navMenu.classList.add('navigation-adaptive');

        
    }

    function hideMobileMenu(){
        navMenu.classList.remove('navigation-adaptive');
        navMenu.classList.add('menu');
        
    }

    window.addEventListener('.resize',() => {
        const isDesctop = window.matchMedia('(min-width:720px)').matches;

        if (isDesctop) {
            resetToDesctop();
        } else if (isOpenMenu) {
            adaptiveMenuOpen();
            showMobileMenu();
        }
    });

    function resetToDesctop() {
        hideMobileMenu();
        if (!isOpenMenu) {
            adaptiveMenuGlose();
        }
    }
};

// меню?