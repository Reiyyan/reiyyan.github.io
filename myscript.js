$.ajax({
    method: "GET",
    url: "game-1.txt",
}).done(function (response) {
    $("#ajax-description").text(response);
});

$.ajax({
    method: "GET",
    url: "./images/kh3.jpg",
}).done(function (response) {
    $("#ajax-image").attr(src, response);
});