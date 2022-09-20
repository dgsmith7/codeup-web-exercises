class TestObject {
    constructor(_num) {
        this.num=_num;
        this.isOdd = (this.num % 2 == 0);
        this.stars = "*".repeat(_num);;
    }

    buildStars(_num) {
        this.stars="*".repeat(_num);
    }

    showStars() {
        console.log(this.stars);
    }

    setNum(_num) {
        this.num = _num;
        this.buildStars(_num);
    }

    getNum() {
        return this.num;
    }

    static messageFromTheClass() {
        console.log("This is a call to a static method in JS");
    }

    messageFrom3() {
        console.log("You successfully imported the modules from testModule3.js.");

    }
}

export {TestObject};