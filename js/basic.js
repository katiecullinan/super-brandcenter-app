/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#about-me').click(function (e) {
		$('#about-me-content').modal();

		return false;
	});

	$('#where-lived').click(function (e) {
		$('#where-lived-content').modal();

		return false;
	});

	$('#why-brandcenter').click(function (e) {
		$('#why-brandcenter-content').modal();

		return false;
	});

	$('#who-i-know').click(function (e) {
		$('#who-content').modal();

		return false;
	});

	$('#book-read').click(function (e) {
		$('#book-content').modal();

		return false;
	});

	$('#i-failed').click(function (e) {
		$('#i-failed-content').modal();

		return false;
	});

	$('#love-parents').click(function (e) {
		$('#love-parents-content').modal();

		return false;
	});

	$('#graduates-work').click(function (e) {
		$('#graduates-content').modal();

		return false;
	});

	$('#everyday-product').click(function (e) {
		$('#everyday-product-content').modal();

		return false;
	});
	$('#new-technology').click(function (e) {
		$('#new-tech-content').modal();

		return false;
	});
	$('#my-skills').click(function (e) {
		$('#skills-content').modal();

		return false;
	});
	$('#sample1').click(function (e) {
		$('#sample1-content').modal();

		return false;
	});
	$('#sample2').click(function (e) {
		$('#sample2-content').modal();

		return false;
	});
	$('#sample3').click(function (e) {
		$('#sample3-content').modal();

		return false;
	});




});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});	

