"use strict";

(function () {

    let card1;
    let card2;
    let card3;

    $('dt.i1').on('click', () => {
        $('dd.i1').toggleClass('invisible');
        $('dt.i1').toggleClass('sel');
    })
    $('dt.i2').on('click', () => {
        $('dd.i2').toggleClass('invisible');
        $('dt.i2').toggleClass('sel');
    })
    $('dt.i3').on('click', () => {
        $('dd.i3').toggleClass('invisible');
        $('dt.i3').toggleClass('sel');
    })
    $('dt.i4').on('click', () => {
        $('dd.i4').toggleClass('invisible');
        $('dt.i4').toggleClass('sel');
    })
    $('dt.i5').on('click', () => {
        $('dd.i5').toggleClass('invisible');
        $('dt.i5').toggleClass('sel');
    })
    $('dt.i6').on('click', () => {
        $('dd.i6').toggleClass('invisible');
        $('dt.i6').toggleClass('sel');
    })
    $('dt.i7').on('click', () => {
        $('dd.i7').toggleClass('invisible');
        $('dt.i7').toggleClass('sel');
    })
    $('dt.i8').on('click', () => {
        $('dd.i8').toggleClass('invisible');
        $('dt.i8').toggleClass('sel');
    })
    $('dt.i9').on('click', () => {
        $('dd.i9').toggleClass('invisible');
        $('dt.i9').toggleClass('sel');
    })
    $('dt.i10').on('click', () => {
        $('dd.i10').toggleClass('invisible');
        $('dt.i10').toggleClass('sel');
    })
    $('#hilite-last-li').on('click', function (index) {
        $('ul').each(function () {
            $(this).children().last().toggleClass('sel');
        });
    })
    $('h3').on('click', function (index) {
        $(this).next().toggleClass('li-h3-clicked');
    })
    $('li').on('click', function () {
        $(this).parent().children().first().toggleClass('selected-li');
    })

    function setCardAssignments() {
        card1 = $('#card-1').html();
        card2 = $('#card-2').html();
        card3 = $('#card-3').html();
    }

    function swapLeft() {
        setCardAssignments();
        let temp = card1;
        $('#card-1').html(card2);
        $('#card-2').html(card3);
        $('#card-3').html(temp);
    }

    function swapRight() {
        setCardAssignments();
        let temp = card1;
        $('#card-1').html(card3);
        $('#card-3').html(card2);
        $('#card-2').html(temp);
    }

    $('#card-1').on('click', function () { // The left frame swaps to the right and takes the image from the frame in the center.
        swapLeft();
    });

    $('#card-2').on('click', function () { // The center frame swaps randomly to either the left or right.
        if (Math.random() >= 0.5) {
            swapLeft();
        } else {
            swapRight();
        }
    });

    $('#card-3').on('click', function () {  // The right frame swaps to the left and takes the image from the frame in the center.
        swapRight();
    });
}());