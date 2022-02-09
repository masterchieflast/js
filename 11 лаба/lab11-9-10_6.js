"use strict"

$(document).ready(function(){
    $('.menu-item1').mouseout(function(){$(".submenu1").fadeOut(10)});
    $(".menu-item1").mouseover(function(){$(".submenu1").fadeIn(10)});

    $('.menu-item2').mouseout(function(){$(".submenu2").fadeOut(10)});
    $(".menu-item2").mouseover(function(){$(".submenu2").fadeIn(10)});

    $('.menu-item3').mouseout(function(){$(".submenu3").fadeOut(10)});
    $(".menu-item3").mouseover(function(){$(".submenu3").fadeIn(10)});
})