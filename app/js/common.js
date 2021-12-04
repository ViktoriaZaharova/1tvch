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

$('.close-dropdown-menu').on('click', function (e) {
    e.preventDefault();
    $(this).classList.remove('show');
});

$('.product-slider-max').slick({
    slidesToShow: 1,
    fade: true,
    asNavFor: '.product-slider-preview',
    appendArrows: '.slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.product-slider-preview').slick({
    slidesToShow: 6,
    variableWidth: true,
    asNavFor: '.product-slider-max',
    arrows: false
});

$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $(".product-slider-preview.slick-initialized").slick("unslick");
        $(".product-slider-max.slick-initialized").slick("unslick");
    }
});
// slick active