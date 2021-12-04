// активная ссылка меню
$('.list-language li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.home-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    dots: true
});

$('.sales-leaders-slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.recommended-slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    arrows: false,
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.close-dropdown-menu').on('click', function(e){
    e.preventDefault();
    $(this).classList.remove('show');
});