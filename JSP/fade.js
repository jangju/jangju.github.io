// 'use strict';//정확히 고려되지 않은 기능들을 방지
// function fadeinout($obj) {
//     //console.log($obj)
//     $obj.fadeIn(3000, function () {
//         $(this).fadeOut(1000)
//         fadeinout($obj)
//     })
// }
// var Day_number;
// var Night_number;
// function Day_num(){
//     Day_number = 1;
// };
// function Night_num(num){
//     Night_number = num;
//     alert("Night 모드 입니다.");
//     console.log(Night_number);
// };




$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeinleft').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin' : '25px' }, 1000);
            }

        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeinleft_2').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin': '25px' }, 1000);
            }

        });
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $('#article_project_1').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin': '25px' }, 1000);
                
            }
            
        });
    });
});

function fnMove(num) {//원하는 좌표로 이동
    var offset = $(num).offset();
    $('html, body').animate({ scrollTop: offset.top }, 900);
}

var home_nav = document.querySelector('#HOME_NAV');
    $(window).scroll(function () {//ABOUT 
        if ($(window).scrollTop() < 600) {
            home_nav.classList.add('scroll_top');

        }

    })

    $(window).scroll(function () {//SKILLS
        if ($(window).scrollTop() > 600) {
            $('#ABOUT_NAV').addClass('scroll_top');
            $('#HOME_NAV').removeClass('scroll_top');
        } else {
            $('#ABOUT_NAV').removeClass('scroll_top');

        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1300) {
            $('#SKILLS_NAV').addClass('scroll_top');
            $('#ABOUT_NAV').removeClass('scroll_top');
        } else {
            $('#SKILLS_NAV').removeClass('scroll_top');
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1800) {
            $('#PROJECT_NAV').addClass('scroll_top');
            $('#SKILLS_NAV').removeClass('scroll_top');
        } else {
            $('#PROJECT_NAV').removeClass('scroll_top');
        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2420) {
            $('#CONTANT_NAV').addClass('scroll_top');
            $('#PROJECT_NAV').removeClass('scroll_top');
        } else {
            $('#CONTANT_NAV').removeClass('scroll_top');
        }
    })

function Day_num(){
    $('#HOME_NAV').removeClass('Night_color_hover_scroll');
    $('#ABOUT_NAV').removeClass('Night_color_hover_scroll');
    $('#SKILLS_NAV').removeClass('Night_color_hover_scroll');
    $('#PROJECT_NAV').removeClass('Night_color_hover_scroll');
    $('#CONTANT_NAV').removeClass('Night_color_hover_scroll');
    $(window).scroll(function () {//ABOUT 
        if ($(window).scrollTop() < 600) {
            home_nav.classList.add('scroll_top');
            $('#HOME_NAV').removeClass('Night_color');
        }

    })

    $(window).scroll(function () {//SKILLS
        if ($(window).scrollTop() > 600) {
            $('#ABOUT_NAV').addClass('scroll_top');
            $('#HOME_NAV').removeClass('scroll_top');
            $('#ABOUT_NAV').removeClass('Night_color');
        } else {
            $('#ABOUT_NAV').removeClass('scroll_top');
            $('#ABOUT_NAV').removeClass('Night_color');

        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1300) {
            $('#SKILLS_NAV').addClass('scroll_top');
            $('#ABOUT_NAV').removeClass('scroll_top');
            $('#SKILLS_NAV').removeClass('Night_color');
        } else {
            $('#SKILLS_NAV').removeClass('scroll_top');
            $('#SKILLS_NAV').removeClass('Night_color');
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1800) {
            $('#PROJECT_NAV').addClass('scroll_top');
            $('#SKILLS_NAV').removeClass('scroll_top');
            $('#PROJECT_NAV').removeClass('Night_color');
        } else {
            $('#PROJECT_NAV').removeClass('scroll_top');
            $('#PROJECT_NAV').removeClass('Night_color');
        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2420) {
            $('#CONTANT_NAV').addClass('scroll_top');
            $('#PROJECT_NAV').removeClass('scroll_top');
            $('#CONTANT_NAV').removeClass('Night_color');
        } else {
            $('#CONTANT_NAV').removeClass('scroll_top');
            $('#CONTANT_NAV').removeClass('Night_color');
        }
    })
}
function Night_num(){ 
    
    $('#HOME_NAV').addClass('Night_color_hover_scroll');
    $('#ABOUT_NAV').addClass('Night_color_hover_scroll');
    $('#SKILLS_NAV').addClass('Night_color_hover_scroll');
    $('#PROJECT_NAV').addClass('Night_color_hover_scroll');
    $('#CONTANT_NAV').addClass('Night_color_hover_scroll');
        $(window).scroll(function () {//ABOUT 
            
            if ($(window).scrollTop() < 600) {
                
                // $('#HOME_NAV').addClass('Night_color');
                home_nav.classList.add('Night_color');
            }

        })

        $(window).scroll(function () {//SKILLS
            if ($(window).scrollTop() > 600) {
                $('#ABOUT_NAV').addClass('Night_color');
                $('#HOME_NAV').removeClass('Night_color');
            } else {
                $('#ABOUT_NAV').removeClass('Night_color');

            }
        })
        $(window).scroll(function () {
            if ($(window).scrollTop() > 1300) {
                $('#SKILLS_NAV').addClass('Night_color');
                $('#ABOUT_NAV').removeClass('Night_color');
            } else {
                $('#SKILLS_NAV').removeClass('Night_color');
            }
        })

        $(window).scroll(function () {
            if ($(window).scrollTop() > 1800) {
                $('#PROJECT_NAV').addClass('Night_color');
                $('#SKILLS_NAV').removeClass('Night_color');
            } else {
                $('#PROJECT_NAV').removeClass('Night_color');
            }
        })
        $(window).scroll(function () {
            if ($(window).scrollTop() > 2420) {
                $('#CONTANT_NAV').addClass('Night_color');
                $('#PROJECT_NAV').removeClass('Night_color');
            } else {
                $('#CONTANT_NAV').removeClass('Night_color');
            }
        })
    
};