"use strict";

(function () {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $.ajax("./data/blog.json").done(function (data, status, jqXhr) {
        //alert("Everything went great! Check out the server's response in the console.");
        // console.log(data);
        appendBlogPosts(data);
    }).fail(function (jqXhr, status, error) {
        // alert("There was an error! Check the console for details");
        // console.log("Response status: " + status);
        // console.log("Error object: " + error);
    }).always(function () {
        // alert("This function always runs!");
    });

    function appendBlogPosts(data) {
//        console.log(data);
        let newHTML = '';
        for (let i = 0; i < data.length; i++) {
            newHTML += `<div class="card m-3">  <img src="http://placekitten.com/750/750" class="card-img-top img-thumbnail" style="max-width: 25vw; height: auto;" alt="A kitten"><div class="card-body"><div><h5 class="card-title">${data[i].title}</h5></div>
                        <div><h6 class="card-subtitle mt-1 text-muted">${data[i].date}</h6></div><div class="row mt-3 mb-3">
                        <div>${data[i].content}</div></div><div><h6 class="card-subtitle mt-1 text-muted">Categories:</h6></div><div class="row m-2"><ul class="list-group list-group-horizontal">`
            for (let j = 0; j < data[i].categories.length; j++) {
                newHTML += '<li class="list-group-item">' + data[i].categories[j] + '</li>';
            }
            newHTML += `</ul></div></div></div>`;
        }
        $('#posts').html(newHTML);
    }
})();