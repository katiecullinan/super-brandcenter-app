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



});

	

