$(function() {
	
	// Menu
	$('.header__burger').click(function() {
		$('.main-menu').addClass('main-menu--show');
		$('body').addClass('no-scroll');
	});
	
	$('.menu-fixed-btn').click(function() {
		$('.main-menu').addClass('main-menu--show');
		$('.menu-fixed-btn').addClass('menu-fixed-btn--hidden');
		$('body').addClass('no-scroll');
	});
	
	$(".main-menu").click(function(e) {
		$('.main-menu.main-menu--show').removeClass('main-menu--show');
		$('body').removeClass('no-scroll');
		if(window.scrollY > 50) {
			$('.menu-fixed-btn').removeClass('menu-fixed-btn--hidden');
		}
	});
	
	$(".main-menu__back").click(function(e) {
		$('.main-menu.main-menu--show').removeClass('main-menu--show');
		$('body').removeClass('no-scroll');
		if(window.scrollY > 50) {
			$('.menu-fixed-btn').removeClass('menu-fixed-btn--hidden');
		}
	});
	
	$('.main-menu__wrap').click(function(e) {
		e.stopPropagation();
	});
	
	// Submenu
	$('.main-menu__link--submenu').click(function() {
		$('.main-submenu').addClass('main-submenu--show');
	});
	
	$(".main-submenu").click(function(e) {
		$('.main-submenu.main-submenu--show').removeClass('main-submenu--show');
	});
	
	$(".main-submenu__back").click(function(e) {
		$('.main-submenu.main-submenu--show').removeClass('main-submenu--show');
	});
	
	$('.main-submenu__wrap').click(function(e) {
		e.stopPropagation();
	});
	
	// Order call popup
	$(".order-call-btn").click(function(e) {
		$('.order-call-popup').addClass('popup--show');
		if($(".main-menu").hasClass('main-menu--show')) {
			$('.main-menu.main-menu--show').removeClass('main-menu--show');
		} else {
			$('body').addClass('no-scroll');
		}
	});
	
	$(".popup").click(function(e) {
		$('.popup.popup--show').removeClass('popup--show');
		$('body').removeClass('no-scroll');
	});
	
	$(".popup__close").click(function(e) {
		$('.popup.popup--show').removeClass('popup--show');
		$('body').removeClass('no-scroll');
	});
	
	$('.popup__wrap').click(function(e) {
		e.stopPropagation();
	});
	
	// Scroll
	window.addEventListener("scroll", fixedOnScroll, false);
	
	function fixedOnScroll() {
		if (window.scrollY > 50) {
			$('.menu-fixed-btn').removeClass('menu-fixed-btn--hidden');
		} else {
			$('.menu-fixed-btn').addClass('menu-fixed-btn--hidden');
		}
		if (window.scrollY > 10) {
			$(".header").addClass("header--scroll");
		} else {
			$(".header").removeClass("header--scroll");
		}
	};

	// Home slider
	if ($(".home-slider").length) {
		var homeSlider = new Swiper(".home-slider", {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			mousewheelControl: true,
			keyboardControl: true,
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: ".home-services-arrow-btn-right",
				prevEl: ".home-services-arrow-btn-left"
			}
		});
	}
	
	if ($(".about-slider").length) {
		var homeSlider = new Swiper(".about-slider", {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			mousewheelControl: true,
			keyboardControl: true,
			slidesPerView: 1,
			spaceBetween: 50,
			navigation: {
				nextEl: ".about-slider-arrows__btn--next",
				prevEl: ".about-slider-arrows__btn--prev"
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				}
			}
		});
	}
	
	if ($(".coming-tours__slider").length) {
		var homeSlider = new Swiper(".coming-tours__slider", {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			mousewheelControl: true,
			keyboardControl: true,
			slidesPerView: 1,
			spaceBetween: 50,
			navigation: {
				nextEl: ".coming-tours-arrows__btn--next",
				prevEl: ".coming-tours-arrows__btn--prev"
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				}
			}
		});
	}
	
	if ($(".reviews__slider").length) {
		var homeSlider = new Swiper(".reviews__slider", {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			mousewheelControl: true,
			keyboardControl: true,
			slidesPerView: 3,
			spaceBetween: 0,
			navigation: {
				nextEl: ".reviews-arrows__btn--next",
				prevEl: ".reviews-arrows__btn--prev"
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				}
			}
		});
	}
	
});
