"use strict";

(function () {
    $('h1').click(function () {
        $(this).css('background-color', '#FF0');
    });
    $('p').dblclick(function (e) {
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function () {
            $(this).css('color', '#F00');
        },
        function () {
            $(this).css('color', '#000');
        }
    );
}());