// 'use strict';//정확히 고려되지 않은 기능들을 방지
var about_1 = document.querySelector('.about_1');
var about_2 = document.querySelector('.about_2');
var about_3 = document.querySelector('.about_3')
var about_4 = document.querySelector('.about_4');

var currentMenu;
var menu = document.querySelector('.menus');
var list = document.querySelectorAll('.menu-link');
var list2 = document.querySelectorAll('.menus li');

var introduce = document.querySelector('.about_1');
var about_spans = document.querySelectorAll('.about_span');


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
        if (Day_Night === 1){
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #bbb804d3';
            }
        }
        else if (Day_Night ===2){
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #3769d4';
            }
        }
    }
    if (list[0] === currentMenu ) {
        console.log('menu11111');
        // introduce.innerHTML = str0;
        about_1.style.display = 'block';
        about_2.style.display = 'none';
        about_3.style.display = 'none';
        about_4.style.display = 'none';
        currentMenu.classList.add("menu_active");
        for (let i = 1; i < list.length; ++i) {
            list[i].classList.remove('menu_active');
            list2[i].classList.remove("menu_active");//
        }
        if (Day_Night === 1) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #bbb804d3';
            }
        }
        else if (Day_Night === 2) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #3769d4';
            }
        }
        
    }
    else if (list[1] === currentMenu ){
        console.log('menu22222');
        // introduce.innerHTML = str1;
        about_1.style.display = 'none';
        about_2.style.display = 'block';
        about_3.style.display = 'none';
        about_4.style.display = 'none';
        currentMenu.classList.add('menu_active'); 
        list[0].classList.remove('menu_active');
        list[2].classList.remove('menu_active');
        list[3].classList.remove('menu_active');
        list2[0].classList.remove("menu_active");//
        list2[2].classList.remove("menu_active");//
        list2[3].classList.remove("menu_active");//
        if (Day_Night === 1) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #bbb804d3';
            }
        }
        else if (Day_Night === 2) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #3769d4';
            }
        }
        
    }
    else if (list[2] === currentMenu )   {
        console.log('menu33333');
        // introduce.innerHTML = str2;
        about_1.style.display = 'none';
        about_2.style.display = 'none';
        about_3.style.display = 'block';
        about_4.style.display = 'none';
        currentMenu.classList.add('menu_active');
        list[0].classList.remove('menu_active');
        list[1].classList.remove('menu_active');
        list[3].classList.remove('menu_active');
        list2[0].classList.remove("menu_active");//
        list2[1].classList.remove("menu_active");//
        list2[3].classList.remove("menu_active");//
        if (Day_Night === 1) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #bbb804d3';
            }
        }
        else if (Day_Night === 2) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #3769d4';
            }
        }
        
    }
    else if (list[3] === currentMenu )    {
        console.log('menu44444');
        // introduce.innerHTML = str3;
        about_1.style.display = 'none';
        about_2.style.display = 'none';
        about_3.style.display = 'none';
        about_4.style.display = 'block';
        currentMenu.classList.add('menu_active');
        for (let i = 0; i < list.length-1; ++i) {
            list[i].classList.remove('menu_active');
            list2[i].classList.remove("menu_active");//
        }
        if (Day_Night === 1) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #bbb804d3';
            }
        }
        else if (Day_Night === 2) {
            for (var i = 0; i < about_spans.length; ++i) {
                about_spans[i].style.borderBottom = '3px solid #3769d4';
            }
        }
    }
}
menu.addEventListener('click', clickHandler);
