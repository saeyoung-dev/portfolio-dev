$(window).load(function () {
    contentSlide();
})

function contentSlide() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $('.slider').slick({
        slide: 'li',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: false,
        pauseOnHover: true,
        vertical: false,
        //        prevArrow: "<button type='button' class='slick-prev'></button>",
        //        nextArrow: "<button type='button' class='slick-next'></button>",
        draggable: true,

        autoplay: true,
        autoplaySpeed: 3500,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
					},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
					}
				]

    });
}