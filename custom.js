/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDIT US AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
	"use strict";
	var mainApp = {

		main_fun: function () {
			/*====================================
			   SLIDER SCRIPTS
			   ======================================*/
			$('#carousel-slider').carousel({
				interval: 3000 //TIME IN MILLI SECONDS
			});
			/*====================================
			    SCROLLING SCRIPTS
			======================================*/

			$(function () {
				$('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
					var $anchor = $(this);
					if ($anchor.attr('href').substr(0, 1) === ("#")) {
						//计算移动位置yoho
						var yohowinheight = $(window).height();
						var yohoelementheight = $("#" + $anchor.attr('href').substr(1, $anchor.attr('href').length-1)).outerHeight();
						var yohopos;
						if (yohowinheight < yohoelementheight) {
							yohopos = $($anchor.attr('href')).offset().top;
						} else {
							yohopos = $($anchor.attr('href')).offset().top - (yohowinheight - yohoelementheight) / 2;
						}
						//计算移动位置end
						$('html, body').stop().animate({
							scrollTop: yohopos
						}, 1200, 'easeInOutExpo');
						event.preventDefault();
					}
				});
			});
			/*====================================
			VAGAS SLIDESHOW SCRIPTS
			======================================*/
			$(function () {
				$.vegas('slideshow', {
					backgrounds: [
						{
							src: 'https://www.z4a.net/images/2018/10/21/a01.jpg',
							fade: 1000,
							delay: 10000
						},{
							src: 'https://www.z4a.net/images/2018/10/21/a06.jpg',
							fade: 1000,
							delay: 10000
						},
						{
							src: 'https://www.z4a.net/images/2018/10/21/a03.jpg',
							fade: 1000,
							delay: 10000
						},
						{
							src: 'https://www.z4a.net/images/2018/10/21/6004817.jpg',
							fade: 1000,
							delay: 10000
						},
						{
							src: 'https://www.z4a.net/images/2018/10/21/a05.jpg',
							fade: 1000,
							delay: 10000
						},


					]
				})('overlay', {
					/** SLIDESHOW OVERLAY IMAGE **/
					src: 'http://47.107.32.211/boruto/overlay.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
				});

			});
			
			/*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/
		},

		initialization: function () {
			mainApp.main_fun();

		}

	};
	// Initializing ///

	$(document).ready(function () {
		mainApp.main_fun();
	});

}(jQuery));