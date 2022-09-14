(function() {

    let iter = 1;
    while (iter < 17) {
        console.log(Math.pow(2, iter));
        iter ++;
    }

    let numCones = Math.floor(Math.random() * 50) + 50;
    do {
        let bought = Math.floor(Math.random() * 5) + 1;
        if (bought <= numCones) {
            console.log(bought + " cones sold...");
            numCones -= bought;
        } else {
            console.log("Cannot sell you " + bought + " cones I only have " + numCones + "...");
        }
    } while (numCones >= 1);
    console.log("Ysy!  I sold them all!");

}());