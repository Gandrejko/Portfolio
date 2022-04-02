const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-line');

percent.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;   
});


  jQuery(function($){
    // $('input[name=name]').mask("+380 (999) 999-99-99"); 
    
  });
