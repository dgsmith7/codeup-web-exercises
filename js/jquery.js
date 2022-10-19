"use strict";

(function () {
    let konamiCode = "";
    $(document).keyup(function (event) {
        konamiCode += event.keyCode;
        console.log(konamiCode);
        if (konamiCode === "3838404037393739666513") {
            addReward();
        }
        ;
        console.log(typeof event.keyCode);
    });

    function addReward() {
        $('.animated').css('visibility', 'visible');
        $('.animated').css('animation-name', 'text-color-flash');
    }
}());