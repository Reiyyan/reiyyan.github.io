$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    game = JSON.parse(response);
    $("#ajax-description").text(game.description);
    $("#ajax-images").attr(src, game.url);
});
