$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    console.log(response);
    $("#ajax-description").text(response.description);
    $("#ajax-image").src = response.url
    console.log($("#ajax-image"));
});
