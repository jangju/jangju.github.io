var Day_img = document.querySelector('#img_backcolor');

var ul_navis = document.querySelector('.ul_navis');
var Night_img = document.querySelector('#img_backcolor_2');
var juyoung_information = document.querySelectorAll('.juyoung_information');
var skills_title = document.querySelectorAll('.skills_title');
var skills_button = document.querySelector('.skills_button');
var project_intro_button = document.querySelectorAll('.project_intro_button');
var up_button = document.querySelector('.up_button');
var fontello = document.querySelectorAll('.fontello2 a i');

var Night;
function Day_select(){
    Day_img.style.display = 'block';
    Night_img.style.display = 'none';
    
}
function Night_select() {
    Night = 2;
    Day_img.style.display = 'none';
    Night_img.style.display = 'block';
    
    ul_navis.style.borderBottom = '5px solid #3769d4';
    for(let i =0; i<juyoung_information.length; ++i){
        juyoung_information[i].style.background = '#6099ee';
    }
    for (var i = 0; i < about_spans.length; ++i) {
        about_spans[i].style.borderBottom = '5px solid #3769d4';
    }
    for(let i=0; i<7;++i){
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
    pos_color[0].style.background = '#3769d4';
}