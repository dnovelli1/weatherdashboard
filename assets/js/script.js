// Needed Variables

var searchButton = $('.searchButton');
var apiKey = "0e5c724f73721354b141f5525b352662";
// Set keys to 0 for local storage count
var keys = 0;


// Function to run on search button click
searchButton.on('click', function() {

    // Grabs search input value
    var searchInput = $('.searchInput').val();
    // URL for today's forecast and concatinating search input into text box and my api key
    urlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
    // URL for 5 day forecast and concatinating search input into text box and my api key
    urlFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
    // WILL NEED SEPERATE URL FOR UV OF LOCATION
    $.ajax({
        url: urlToday,
        method: "GET"
    }).then(function(response){
        console.log(urlToday);
        // Both console logs, log the correct url and the input name
        console.log(response.name);
        // Append the city name to the list of recent searches
        var cityName = $('.list-group').addClass('.list-group-item');
        // Create city names <li> and append to the city name var
        cityName.append('<li>' + response.name + '</li>');
        // Create local storage
        var localStore = localStorage.setItem(keys, response.name);
        keys = keys + 1;
    })
})