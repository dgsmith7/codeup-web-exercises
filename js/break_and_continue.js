(function() {
    let input;
    let valid = false;
    while (valid == false) {
        input = prompt ("Please enter an odd number between 1 and 50: ");
        console.log(input);
        if (((!isNaN(input)) && (input > 1 && input < 50) && (input % 2 != 0))) {
            break;
        }
    }

    console.log("Number to skip is: " + input);
    for (let i = 1; i < 50; i += 2) {
        if (i == input) {
            console.log("Yikes! Skipping number: " + input);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}())