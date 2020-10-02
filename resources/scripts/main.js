; (function () {

	'use strict';

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};

	var navActive = function (section) {

		var $el = $('#navbarResponsive > ul');
		$el.find('li').removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});

	};
	var clickMenu = function () {

		$('#navbarResponsive a:not([class="external"])').click(function (event) {
			var section = $(this).data('nav-section'),
				navbar = $('#navbarResponsive');

			if ($('[data-section="' + section + '"]').length) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top - 55
				}, 500);
			}

			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.js-colorlib-nav-toggle').removeClass('active');
			}

			event.preventDefault();
			return false;
		});


	};
	var navigationSection = function () {

		var $section = $('section[data-section]');

		$section.waypoint(function (direction) {

			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
				offset: '150px'
			});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
				offset: function () { return -$(this.element).height() + 155; }
			});

	};


	var navbars = function () {
		$('.navbar').addClass('animated fadeInLeft');
	};


	// Document on load.
	$(function () {
		contentWayPoint();
		navigationSection();
		clickMenu();
	});


}());