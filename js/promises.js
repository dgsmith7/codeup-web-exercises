"use strict";

(function () {

    function getMostRecentPush(username) {
        let url = `https://api.github.com/users/${username}/events/public`;
        return fetch(url, {headers: {'Authorization': GITHUB_REPO_KEY}})
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                return data[0].created_at;
            })
    }

    function wait(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`You'll see this after ${num / 1000} seconds`);
                resolve(num);
            }, num)
        })
    }

    const dtg = getMostRecentPush('dgsmith7');
    console.log(dtg);
    console.log(wait(3000));
}());