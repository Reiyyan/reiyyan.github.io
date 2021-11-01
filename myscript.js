$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    $("#ajax-description").text(response.description);
    $("#ajax-image").src = response.url
});
