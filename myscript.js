$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    $("#ajax-description").text(response.description);
    $("#ajax-images").attr(src, response.url);
});
