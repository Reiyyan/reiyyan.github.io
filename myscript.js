// Start at 0
$.ajax({
    method: "GET",
    url: "game_1.json",
}).done(function (response) {
    console.log(response);
    $("#ajax-description").text(response.description);
    $("#ajax-image").attr({
        src: response.url,
    });
    console.log($("#ajax-image"));
});

setTimeout(function(){
    $.ajax({
        method: "GET",
        url: "game_2.json",
    }).done(function (response) {
        console.log(response);
        $("#ajax-description").text(response.description);
        $("#ajax-image").attr({
            src: response.url,
        });
        console.log($("#ajax-image"));
    });
},5000); 