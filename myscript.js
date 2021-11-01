$.ajax({
    method: "GET",
    url: "game-1.txt",
    crossDomain: true,
}).done(function (response) {
    $("#ajax-description").innerText(response);
});