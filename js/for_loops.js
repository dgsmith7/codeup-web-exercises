(function() {

    const showMultiplicationTable = (num) => {
        for (let i = 1; i < 11; i++) {
            console.log(num + " x " + i + " = " + (num*i));
        }
    }

    showMultiplicationTable(7);

    for (let i = 0; i < 10; i ++) {
        let id;
        let randy = (Math.floor(Math.random() * 180) + 20);
        if (randy % 2 == 0) {
            id = "even";
        } else {
            id = "odd";
        }
        console.log(randy + " is " + id);
    }

    // for (let i = 1; i < 10; i ++) {
    //     let str = "";
    //     for (let j = 0; j < i; j++) {
    //         str += i;
    //     }
    //     console.log(str);
    // }

    for (let i = 0; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }

    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }

}());









