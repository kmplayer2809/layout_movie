$(document).ready(function () {
   
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#main-nav').addClass('sticky-movie');
        }
        else{
            $('#main-nav').removeClass('sticky-movie');
        }
        
        if($(window).scrollTop()){
            $('#main-body').addClass('ml25');
        }
        else{
            $('#main-body').removeClass('ml25');
        }
      
    })
    $('.nav-link').smoothScroll();
    $('.venobox').venobox({
        autoplay: true
    });
    $('#newIn').slick({
        dots: true,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

if ($(".tabs").length > 0) {
    $('.tabs').tabs();
    $('.tabs.movies').tabs({
        active: 2
    });
}
var $rows = $('.movie-tabs');
jQuery('#search').keyup(function () {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    $rows.show().filter(function () {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
// COMING SOON
$('#comingsoon').not('.slick-initialized').slick({
    autoplay: true,
    slidesToShow: 6,
    centerPadding: '60px',
    prevArrow: '<i class="material-icons left">keyboard_arrow_left</i>',
    nextArrow: '<i class="material-icons right">keyboard_arrow_right</i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }]
});

jQuery('.single-slide').first().css({ opacity: '1', height: 'auto', paddingBottom: '40px' }).siblings('.single-slide').css({ opacity: '0', height: '0', paddingBottom: '0' });
jQuery('#comingsoon div').first().css('opacity', '1').siblings().css('opacity', '.35');
jQuery('#comingsoon div').click(function () {
    var currentClass = $(this).data("dynamicclass");
    $("div." + currentClass).css({ opacity: '1', height: 'auto', paddingBottom: '40px' }).siblings('.single-slide').css({ opacity: '0', height: '0', paddingBottom: '0' });
    $(this).css('opacity', '1').siblings().css('opacity', '.35');
    return false;
});
