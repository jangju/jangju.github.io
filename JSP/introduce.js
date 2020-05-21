// 'use strict';//정확히 고려되지 않은 기능들을 방지
    str0 = document.querySelector('.about_1').innerHTML;
    str1 = document.querySelector('.about_2').innerHTML;
    str2 = document.querySelector('.about_3').innerHTML;
    str3 = document.querySelector('.about_4').innerHTML;

var currentMenu;
var menu = document.querySelector('.menus');
var list = document.querySelectorAll('.menu-link');
var introduce = document.querySelector('.about_1');
function clickHandler(e){
    if(currentMenu){
        currentMenu.classList.remove('menu_active');
    }
    // e.target.classList.add('menu_active');
    currentMenu = e.target;
    if(list[1] || list[2] || list[3])
    {
        list[0].classList.remove("menu_active");
        
    }
    if (list[0] === currentMenu ) {
        console.log('menu11111');
        introduce.innerHTML = str0;
        currentMenu.classList.add("menu_active");
        list[0].classList.remove('menu_active2');
        list[1].classList.add("menu_active2");
        list[2].classList.add("menu_active2");
        list[3].classList.add("menu_active2");
        
    }
    else if (list[1] === currentMenu ){
        console.log('menu22222');
        introduce.innerHTML = str1;
        list[0].classList.add("menu_active2");
        list[1].classList.remove('menu_active2');
        list[2].classList.add("menu_active2");
        list[3].classList.add("menu_active2");
        currentMenu.classList.add('menu_active'); 
    }
    else if (list[2] === currentMenu )   {
        console.log('menu33333');
        introduce.innerHTML = str2;
        list[0].classList.add("menu_active2");
        list[1].classList.add("menu_active2");
        list[2].classList.remove("menu_active2");
        list[3].classList.add("menu_active2");
        currentMenu.classList.add('menu_active');
    }
    else if (list[3] === currentMenu )    {
        console.log('menu44444');
        introduce.innerHTML = str3;
        list[0].classList.add("menu_active2");
        list[1].classList.add("menu_active2");
        list[2].classList.add("menu_active2");
        list[3].classList.remove("menu_active2");
        currentMenu.classList.add('menu_active');
    }
}
menu.addEventListener('click',clickHandler);