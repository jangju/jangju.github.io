Day_img = document.querySelector('#img_backcolor');

Night_img = document.querySelector('#img_backcolor_2');
ul_navis = document.querySelector('.ul_navis');
Menus=document.querySelectorAll('.menu-link');
Introduce=document.querySelector('.introduce');
about_1 = document.querySelector('.about_1');
about_2 = document.querySelector('.about_2');
about_3 = document.querySelector('.about_3');
about_4 = document.querySelector('.about_4');
skills_title = document.querySelectorAll('.skills_title');
skills_button = document.querySelector('.skills_button');
project_intro_button = document.querySelectorAll('.project_intro_button');
up_button = document.querySelector('.up_button');
fontello = document.querySelectorAll('.fontello2 a i');
function Day_select(){
    Day_img.style.display = 'block';
    Night_img.style.display = 'none';
}
function Night_select() {
    Day_img.style.display = 'none';
    Night_img.style.display = 'block';
    for(let i=0; i<4; ++i){
        Menus[i].classList.add('Night_color_background');
    }
    
    Introduce.classList.add('Night_color_background');
    about_1.classList.add('Night_color_background');
    about_2.classList.add('Night_color_background');
    about_3.classList.add('Night_color_background');
    about_4.classList.add('Night_color_background');
    for(let i=0; i<6;++i){
        skills_title[i].classList.add('Night_color_background');
    }
    skills_button.style.border = '3px solid #1243af';
    skills_button.classList.add('Night_color_hover');
    for(let i=0; i<2;++i){
        project_intro_button[i].style.border = '3px solid #1243af';
        project_intro_button[i].classList.add('Night_color_hover');
    }
    up_button.classList.add('Night_color_background');
    for (let i = 0; i < 3; ++i){
        fontello[i].classList.add('fontello_color_js');
    }
    ul_navis.style.borderBottom = '5px solid #3769d4';
}