$.ajax({
    method: "GET",
    url: "game-1.txt",
}).done(function (response) {
    $("#ajax-description").text(response);
});

$.ajax({
    method: "GET",
    url: "https://www.kingdomhearts.com/img/header/kh_trailer_still_img.jpg",
}).done(function (response) {
    $("#ajax-image").attr(src, response);
});