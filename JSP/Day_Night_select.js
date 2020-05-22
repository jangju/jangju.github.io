Day_img = document.querySelector('#img_backcolor');

Night_img = document.querySelector('#img_backcolor_2');
Menus=document.querySelectorAll('.menu-link');
Introduce=document.querySelector('.introduce');
about_1 = document.querySelector('.about_1');
about_2 = document.querySelector('.about_2');
about_3 = document.querySelector('.about_3');
about_4 = document.querySelector('.about_4');
function Day_select(){
    Day_img.style.display = 'block';
    Night_img.style.display = 'none';
}
function Night_select() {
    Day_img.style.display = 'none';
    Night_img.style.display = 'block';
    for(let i=0; i<4; ++i)
    {
    Menus[i].classList.add('Night_color');
    }
    Introduce.classList.add('Night_color');
    about_1.classList.add('Night_color');
    about_2.classList.add('Night_color');
    about_3.classList.add('Night_color');
    about_4.classList.add('Night_color');
}