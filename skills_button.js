'use strict';//정확히 고려되지 않은 기능들을 방지
var skills_button = document.querySelector('.skills_button');
var skills_skillbox_all=document.querySelectorAll('.skills_skillbox_all');
var key = 1;
function event_button() {
    switch (key) {
        case 0://두번째 시작
            skills_button.innerHTML = '스킬 더보기 ↓';
            for (var i = 0; i < skills_skillbox_all.length; i++) {
            skills_skillbox_all[i].style.animation = 'skills_skillbox 1s';
            }
            setTimeout(function () {//3초있다가 실행
            for (var i = 0; i < skills_skillbox_all.length; i++) {
            skills_skillbox_all[i].style.display = 'none';
            }
        },500);
        
            break;
        case 1: //먼저시작
            skills_button.innerHTML = '스킬 접기 ↑';
            
            for(var i=0; i<skills_skillbox_all.length;i++)
            {
            skills_skillbox_all[i].style.display = 'flex';
            skills_skillbox_all[i].style.animation = 'skills_skillbox_all 1s'
            // skills_skillbox_all[i].style.transform='translateY(20px)'
            }
        
            break;
    }
    key = (++key % 2);//반복 되게하는 코드


}



