var animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
  ];


function populate() {
    $("#animal-buttons").empty();
    for (i = 0; i < animals.length; i++) {
        var a = $('<button>')
        a.addClass('gif-button').attr('value', animals[i]).text(animals[i])
        $('#animal-buttons').append(a)
    }
}

$(document).on('click', '.gif-button', function() {
    var word = $(this).val();
    var queryG = "http://api.giphy.com/v1/gifs/search?q="+word+"&api_key=iW6zcFyodktoXL6Acp1g33YjlpOcEdjh&limit=50"

$.ajax({
    url: queryG,
    method: "GET",

}).then(function(response) {
    var results = response.data
    console.log(results);
    $("#animals").empty();
    for (i = 0; i < results.length; i++) {
        var animal = $("<div class=\"animal-item\">")
        var image = $("<img>");
        image.attr("src", results[i].images.fixed_height.url)
        animal.append(image)
        $("#animals").append(animal);
    }
})
})
$("#add-animal").on("click", function(event){
    event.preventDefault()
    val = $("#animal-input").val();
    console.log(val)
    animals.push(val);
    populate()
})

populate()


// console.log(queryG)
