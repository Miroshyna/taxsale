/**
 * Created by mac on 03.01.2017.
 */

$(document).ready(function() {

   $('.dropdown-menu1 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group1').find('.dropdown-toggle1').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu2 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group2').find('.dropdown-toggle2').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu3 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group3').find('.dropdown-toggle3').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu4 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group4').find('.dropdown-toggle4').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu5 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group5').find('.dropdown-toggle5').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu6 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group6').find('.dropdown-toggle6').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu7 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group7').find('.dropdown-toggle7').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu8 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group8').find('.dropdown-toggle8').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu9 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group9').find('.dropdown-toggle9').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu10 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group10').find('.dropdown-toggle10').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

    $('.dropdown-menu11 li a').click(function(event) {
        var option = $(event.target).text();
        $(event.target).parents('.btn-group11').find('.dropdown-toggle11').html(option+' <img class="caret-icon" src="img/caret.svg">');
    });

});