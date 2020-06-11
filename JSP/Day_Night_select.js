var Day_img = document.querySelector('#img_backcolor');

var ul_navis = document.querySelector('.ul_navis');
var Night_img = document.querySelector('#img_backcolor_2');
var juyoung_information = document.querySelectorAll('.juyoung_information');
var skills_title = document.querySelectorAll('.skills_title');
var skills_button = document.querySelector('.skills_button');
var project_intro_button = document.querySelectorAll('.project_intro_button');
var project_intro_button_todolist = document.querySelector('.project_intro_button_todolist'); 
var up_button = document.querySelector('.up_button');
var fontello = document.querySelectorAll('.fontello2 a i');
var navi_button_color = document.querySelectorAll('.ul_navis li button');
var footer_span = document.querySelector('.footer_span');
var article_skills = document.querySelector('.article_skills');
var body_tag = document.querySelector('body');
var Day_Night=1;
function Day_select(){
    Day_Night = 1;
    Day_img.style.display = 'block';
    Night_img.style.display = 'none';
    
    ul_navis.style.borderBottom = '5px solid #e7e405d3';
    for (let i = 0; i < juyoung_information.length; ++i) {
        juyoung_information[i].style.background = '#e7e405d3';
    }
    for (var i = 0; i < about_spans.length; ++i) {
        about_spans[i].style.borderBottom = '3px solid #bbb804d3';
    }
    for (let i = 0; i < 7; ++i) {
        skills_title[i].classList.remove('Night_color_background');
    }
    skills_button.style.border = '3px solid #fffb01';
    skills_button.classList.remove('Night_color_hover');
    for (let i = 0; i < project_intro_button.length; ++i) {
        project_intro_button[i].style.border = '3px solid #fffb00';
        project_intro_button[i].classList.remove('Night_color_hover');
    }
    project_intro_button_todolist.style.border = '3px solid #fffb00';
    project_intro_button_todolist.classList.remove('Night_color_hover');
    pos_color[0].style.background = '#fffb00';
    up_button.classList.remove('Night_color_background');
    for (let i = 0; i < fontello.length; ++i) {
        fontello[i].classList.remove('fontello_color_js');
    }
    for (let i = 0; i < navi_button_color.length; ++i) {
        navi_button_color[i].classList.remove('Night_color');
    }
    footer_span.style.color = '#fffb00';
    article_skills.classList.remove('Night_color_backgroud_back')
    body_tag.classList.remove('Night_color_backgroud_back');
}
function Night_select() {
    Day_Night = 2;
    Day_img.style.display = 'none';
    Night_img.style.display = 'block';
    ul_navis.style.borderBottom = '5px solid #3769d4';
    for(let i =0; i<juyoung_information.length; ++i){
        juyoung_information[i].style.background = '#6099ee';
    }
    for (var i = 0; i < about_spans.length; ++i) {
        about_spans[i].style.borderBottom = '5px solid white';
    }
    for(let i=0; i<7;++i){
        skills_title[i].classList.add('Night_color_background');
    }
    skills_button.style.border = '3px solid #1243af';
    skills_button.classList.add('Night_color_hover');
    for(let i=0; i<project_intro_button.length;++i){
        project_intro_button[i].style.border = '3px solid #1243af';
        project_intro_button[i].classList.add('Night_color_hover');
    }
    project_intro_button_todolist.style.border = '3px solid #1243af';
    project_intro_button_todolist.classList.add('Night_color_hover');
    pos_color[0].style.background = '#3769d4';
    up_button.classList.add('Night_color_background');
    for (let i = 0; i < fontello.length; ++i){
        fontello[i].classList.add('fontello_color_js');   
    }
    for (let i = 0; i < navi_button_color.length; ++i) {
        navi_button_color[i].classList.remove('scroll_top');
    }
    footer_span.style.color ='#1a58df';
    article_skills.classList.add('Night_color_backgroud_back')
    body_tag.classList.add('Night_color_backgroud_back');
}