$.ajax({
    method: "GET",
    url: "game-1.txt",
}).done(function (response) {
    $("#ajax-description").text(response);
});

$.ajax({
    method: "GET",
    url: "./images/kh3.jpg",
    // success: 
}).done(function (response) {
    // $("#ajax-image").attr('src', response);
    $("#ajax-image").attr('src', 'data:image/png;base64,' + response);
});