 "use strict";

// out only goes to console
    console.log("Hello from external JavaScript");
    alert("Welcome to my website!");
    let favCol = prompt("Please enter your favorite color");
    console.log("Great, " + favCol + " is my favorite color too!");

    let lmTime = Number(prompt("How many days do you want to rent 'The Little Mermaid'?"));
    let bbTime = Number(prompt("How many days do you want to rent 'Brother Bear'?"));
    let hercTime = Number(prompt("How many days do you want to rent 'Hercules'?"));
    let dailyPrice = 3.0;
    alert("Your charges will be $" + (dailyPrice * (lmTime + bbTime + hercTime)).toFixed(2));

    let gRate = 400;
    let aRate = 380;
    let fRate = 350;
    let gTime = Number(prompt("How many hours did you work for Google?"));
    let aTime = Number(prompt("How many hours did you work for Amazon?"));
    let fTime = Number(prompt("How many hours did you work for Facebook?"));
    let pay = ((gRate * gTime) + (aRate * aTime) + (fRate * fTime));
    alert("Your pay will be $" + pay.toFixed(2));

    let notFull = confirm("Please click OK if there is room in the class, CANCEL if class is full.");
    let noConflict = confirm("Please click OK if there is no conflict with your schedule, CANCEL is there is a conflict.");
    alert("Room in class?: " + notFull + "\nNo conflict?: " + noConflict + "\nBased on those answers, it is " + (notFull && noConflict) + " that you can enroll.");

    let enoughItems = confirm("Please click OK if you have 2 or more items, CANCEL if less than 2.");
    let notExpired = confirm("Please click OK if the offer is not expired, CANCEL if it is expired.");
    let premiumMember = confirm("Please click OK if you are a premium member, CANCEL if not.");
    alert("Enough items?: " + enoughItems + "\nOffer valid?: " + notExpired + "\nPremium member?: " + premiumMember + "\nBased on those answers, it is " + (notExpired && (premiumMember || enoughItems)) + " that the offer can be applied.");




