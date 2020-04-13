// function fadeinout($obj) {
//     //console.log($obj)
//     $obj.fadeIn(3000, function () {
//         $(this).fadeOut(1000)
//         fadeinout($obj)
//     })
// }

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeinleft').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left' : '200px' }, 1000);
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
                $(this).animate({ 'opacity': '1', 'margin': '50px' }, 1000);
            }

        });
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $('.article_project').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin': '100px' }, 1000);
            }

        });
    });
});

function fnMove(num) {//원하는 좌표로 이동
    var offset = $(num).offset();
    $('html, body').animate({ scrollTop: offset.top }, 900);
}

$(window).scroll(function () {//ABOUT 
    if ($(window).scrollTop() < 600) {
        $('#HOME_NAV').addClass('scroll_top');
    }
})

$(window).scroll(function(){//SKILLS
    if($(window).scrollTop()>600){
        $('#ABOUT_NAV').addClass('scroll_top');
        $('#HOME_NAV').removeClass('scroll_top');

    }else{
        $('#ABOUT_NAV').removeClass('scroll_top');
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
        $('#SKILLS_NAV').addClass('scroll_top');
        $('#ABOUT_NAV').removeClass('scroll_top');
    } else {
        $('#SKILLS_NAV').removeClass('scroll_top');
    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 1750) {
        $('#PROJECT_NAV').addClass('scroll_top');
        $('#SKILLS_NAV').removeClass('scroll_top');
    } else {
        $('#PROJECT_NAV').removeClass('scroll_top');
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 2200) {
        $('#CONTANT_NAV').addClass('scroll_top');
        $('#PROJECT_NAV').removeClass('scroll_top');
    } else {
        $('#CONTANT_NAV').removeClass('scroll_top');
    }
})