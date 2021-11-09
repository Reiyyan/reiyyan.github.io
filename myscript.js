$.ajax({
    method: "GET",
    url: "data.json",
}).done(function (response) {
    console.log(response);
    $("#ajax-image").attr({ src: response.imageURL });
    $("#ajax-name").text(response.name);
    $("#ajax-year").text(response.year);
    $("#ajax-engine-type").text(response.engine.type);
    $("#ajax-engine-size").text(response.engine.size);
    $("#ajax-engine-configuration").text(response.engine.configuration);
    $("#ajax-brake-front").text(response.brakes.front);
    $("#ajax-brake-back").text(response.brakes.back);
});

