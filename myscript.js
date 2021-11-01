// Start at 0
$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    console.log(response);
    $("#ajax-description").text(response.description);
    $("#ajax-image").attr({ src: response.url });
});

setTimeout(function () {
    $.ajax({
        method: "GET",
        url: "game_2.json",
    }).done(function (response) {
        console.log(response);
        $("#ajax-description").text(response.description);
        $("#ajax-image").attr({ src: response.url });
    });
}, 1000);

setTimeout(function () {
    $.ajax({
        method: "GET",
        url: "game_3.json",
    }).done(function (response) {
        console.log(response);
        $("#ajax-description").text(response.description);
        $("#ajax-image").attr({ src: response.url });
    });
}, 2000);

setTimeout(function () {
    $.ajax({
        method: "GET",
        url: "game_4.json",
    }).done(function (response) {
        console.log(response);
        $("#ajax-description").text(response.description);
        $("#ajax-image").attr({ src: response.url });
    });
}, 3000);