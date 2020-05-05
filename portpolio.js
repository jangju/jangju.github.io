var article_project_1 = document.querySelector('#article_project_1');
var article_project_2 = document.querySelector('.article_project_2');
var pos_checked = document.querySelectorAll('.cursor');
////////////////포트폴리오 왼,우 화살표 처리///////////
var key = 1;
function project_left(){
    switch (key) {
        case 0://두번째 시작
            article_project_1.style.display = 'flex';
            article_project_2.classList.remove('article_project_2_open');
            article_project_animation();
            zero_checked();
            
            break;
        case 1: //먼저시작
            article_project_1.style.display = 'none';
            article_project_2.classList.add('article_project_2_open');
            article_project_animation();
            one_cheked();

            break;
    }
    key = (++key % 2);//반복 되게하는 코드
}
function project_rights(){
    switch (key) {
        case 0://두번째 시작
            article_project_1.style.display = 'flex';
            article_project_2.classList.remove('article_project_2_open');
            article_project_animation();
            zero_checked();
            break;
        case 1: //먼저시작
            article_project_1.style.display = 'none';
            article_project_2.classList.add('article_project_2_open');
            article_project_animation();
            

            one_cheked();

            break;
    }
    key = (++key % 2);//반복 되게하는 코드
    
}
function zero_checked(){
    pos_checked[0].checked = true;
    pos_checked[1].checked = false;
}
function one_cheked(){
    pos_checked[0].checked = false;
    pos_checked[1].checked = true;
}
////////////////포트폴리오 라디오 체크버튼 처리///////////

function project_zero_button(){
    project_left();
}
function project_one_button() {
    project_rights();
}
////////////////포트폴리오 프로젝트 애니메이션 기능/////////
function article_project_animation(){
    article_project_1.style.animation = 'article_project_1 1s'
    article_project_2.style.animation = 'article_project_2 1s'
}