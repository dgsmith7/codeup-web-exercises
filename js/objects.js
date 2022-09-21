(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "David",
        lastName: "Smith"
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
         return "Hello from " + person.firstName + " "  + person.lastName;
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    let discount = 0;
    for (let i = 0; i < shoppers.length; i ++) {
        if (shoppers[i].amount > 200) {
            discount = shoppers[i].amount *0.12;
        }
        console.log(shoppers[i].name + ": Before discount - $" + shoppers[i].amount + ", Discount - $" + discount + ", After $"+(shoppers[i].amount - discount));
        }
    
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // original solution
    // let books = [
    //     {title: "The Catcher in the Rye", author: {firstName: "J.D.", lastName: "Salinger"}},
    //     {title: "The Hunt for the Red October", author: {firstName: "Tom", lastName: "Clancy"}},
    //     {title: "The Outsiders", author: {firstName: "S.E.", lastName: "Hinton"}},
    //     {title: "Killer Angels", author: {firstName: "Michael", lastName:  "Shaara"}},
    //     {title: "Gates of Fire", author: {firstName: "Steven", lastName:  "Pressfield"}}
    // ];

    // refactored with function
    let books = [];
    books.push(createBook("The Catcher in the Rye", "J.D. Salinger") );
    books.push(createBook("The Hunt for the Red October", "Tom Clancy") );
    books.push(createBook("The Outsiders", "S.E. Hinton") );
    books.push(createBook("Killer Angels", "Michael Shaara") );
    books.push(createBook("Gates of Fire", "Steven Pressfield") );

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // original solution
    // books.forEach(function(book, index) {
    //     console.log("Book # " + (index + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---");
    // })
    // console.log("...");

    // refactored with function
    books.forEach(function(book, index) {
        showBookInfo(book);
    })
    console.log("...");

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(titleName, authName) {
        return {title: titleName, author: {firstName: authName.split(" ")[0], lastName: authName.split(" ")[1]}}
    }

    function showBookInfo(bookObject) {
        console.log("Book # " + (books.indexOf(bookObject) + 1));
        console.log("Title: " + bookObject.title);
        console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName);
        console.log("---");
    }

})();
