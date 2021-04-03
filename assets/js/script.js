// Needed Variables

var searchButton = $('.searchButton');
var apiKey = "0e5c724f73721354b141f5525b352662";


// Function to run on search button click
searchButton.on('click', function() {

    // Grabs search input value
    var searchInput = $('.searchInput').val();
    // URL for today's forecast and concatinating search input into text box and my api key
    urlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
    // URL for 5 day forecast and concatinating search input into text box and my api key
    urlFive = "api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey + "&units=imperial";
})