// burger menu

let burger = document.querySelector('.header-burger__btn');
let menu = document.querySelector('.header__list');
let link = document.querySelectorAll('.header-nav__link');

burger.addEventListener('click',
function(){
  burger.classList.toggle('header-burger__btn--active');

  menu.classList.toggle('header__list--active');

  document.body.classList.toggle('stop--scroll');
})

link.forEach(element =>
  element.addEventListener('click', function(){
    burger.classList.remove('header-burger__btn--active');

    menu.classList.remove('header__list--active');

    document.body.classList.remove('stop--scroll');
  })
)

// search btn

let btn_search = document.querySelector('.header__btn-search');
let line_search = document.querySelector('.line-search');
let btn_closed = document.querySelector('.closed-search');
let header = document.querySelector('.header__nav');
let header_search = document.querySelector('.header__search-line');
let header_logo = document.querySelector('.header__logo');

btn_search.addEventListener('click', function() {

    header.classList.toggle('header__nav--active');

    line_search.classList.toggle('line-search--active');

    header_logo.classList.toggle('header__logo--active');

    burger.classList.toggle('header-burger__btn--active2');

    document.body.classList.toggle('stop--scroll');

    header_search.classList.toggle('header__search-line--active');

  }

)

btn_closed.addEventListener('click', function(){

  line_search.classList.remove('line-search--active');

  header_logo.classList.remove('header__logo--active');

  burger.classList.remove('header-burger__btn--active2');

  header.classList.remove('header__nav--active');

  header_search.classList.remove('header__search-line--active');

}
)



// tab

let tabsLink = document.querySelectorAll('.how-item__link');
let tabsText = document.querySelectorAll('.tabs-item');

tabsLink.forEach(function(element){
  element.addEventListener('click', function(e){
    const link = e.currentTarget.dataset.path;


    tabsLink.forEach(function(btn){ btn.classList.remove('how-item__link--active')});
    e.currentTarget.classList.add('how-item__link--active');

    tabsText.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-text="${link}"]`).classList.add('tabs-item--active');
  })
})

// swipper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 1,
  slidesPerView: 'auto',
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// accordion

$( ".faq__list" ).accordion({
  heightStyle: 'content',
  active: 'none',
  collapsible: true
});






