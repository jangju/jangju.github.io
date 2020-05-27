// 'use strict';//정확히 고려되지 않은 기능들을 방지
var str0 = document.querySelector('.about_1').innerHTML;
var str1 = document.querySelector('.about_2').innerHTML;
var str2 = document.querySelector('.about_3').innerHTML;
var str3 = document.querySelector('.about_4').innerHTML;

var currentMenu;
var menu = document.querySelector('.menus');
var list = document.querySelectorAll('.menu-link');
var list2 = document.querySelectorAll('.menus li');

var introduce = document.querySelector('.about_1');


function clickHandler(e){
    currentMenu = e.target;

    if(currentMenu){
        currentMenu.classList.remove('menu_active');
        console.log(currentMenu);
    }
    e.target.classList.add('menu_active');
    if(list[1] || list[2] || list[3])
    {
        list[0].classList.remove("menu_active");
        list2[0].classList.remove("menu_active");//
        
    }
    if (list[0] === currentMenu ) {
        console.log('menu11111');
        introduce.innerHTML = str0;
        currentMenu.classList.add("menu_active");
        for (let i = 1; i < list.length; ++i) {
            list[i].classList.remove('menu_active');
            list2[i].classList.remove("menu_active");//
        }
        
    }
    else if (list[1] === currentMenu ){
        console.log('menu22222');
        introduce.innerHTML = str1;
        currentMenu.classList.add('menu_active'); 
        list[0].classList.remove('menu_active');
        list[2].classList.remove('menu_active');
        list[3].classList.remove('menu_active');
        list2[0].classList.remove("menu_active");//
        list2[2].classList.remove("menu_active");//
        list2[3].classList.remove("menu_active");//
    }
    else if (list[2] === currentMenu )   {
        console.log('menu33333');
        introduce.innerHTML = str2;
        currentMenu.classList.add('menu_active');
        list[0].classList.remove('menu_active');
        list[1].classList.remove('menu_active');
        list[3].classList.remove('menu_active');
        list2[0].classList.remove("menu_active");//
        list2[1].classList.remove("menu_active");//
        list2[3].classList.remove("menu_active");//
    }
    else if (list[3] === currentMenu )    {
        console.log('menu44444');
        introduce.innerHTML = str3;
        currentMenu.classList.add('menu_active');
        for (let i = 0; i < list.length-1; ++i) {
            list[i].classList.remove('menu_active');
            list2[i].classList.remove("menu_active");//
        }
    }
}
menu.addEventListener('click', clickHandler);
