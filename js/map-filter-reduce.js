"use strict";

(function () {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    /*
       Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
*/
    let threeLang = users.filter(n => n.languages.length >= 3);
    console.log(...threeLang);

    /*
        Use .map to create an array of strings where each element is a user's email address
    */
    let emails = users.filter(n => n.email);
    console.log(...emails);
    /*   Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    */
    let yrsExpTotal = users.reduce((total, exp) => {
        return total + exp.yearsOfExperience;
    }, 0);
    console.log(yrsExpTotal / users.length);
    /*    Use .reduce to get the longest email from the list of users.
    */
    let longestEmail = users.reduce((longest, user) => {
        if (longest.length < user.email.length) {
            longest = user.email;
        }
        return longest;
    }, users[0].email);
    console.log(longestEmail);

    /*    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    */
    let userListStr = users.reduce((listStr, user, index) => {
        listStr += user.name;
        index++;
        if (index === users.length) {
            listStr += ".";
        } else {
            listStr += ", "
        }
        return listStr;
    }, "Your instructors are ");
    console.log(userListStr);

    /*    Use .reduce to get the unique list of languages from the list of users.
    */
    let buildUniqueLangs = users.reduce((langs, user) => {
        user.languages.forEach((element) => {
                if ((langs[element]) === undefined) {
                    langs[element] = "yes"
                }
            }
        )
        return langs;
    }, {});
    console.log(buildUniqueLangs)

}());
