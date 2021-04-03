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

        // Todays forecast start
        // Created a new div and class for the div, then appended to the id today.
        var todayFore = $('#today').append('<div>').addClass('todayForecast');

        // Created a p tag and appended to the div created.
        var todayName = todayFore.append('<p>');
        todayFore.append(todayName);

        // Place the name input into the p tag created
        todayName.append(response.name);

        // Creating today's temperature with a p tag and appending below the name
        var todayTemp = todayName.append('<p>');
        // Creating a p tag inside of todays temp and filling with the responses temperature
        todayName.append(todayTemp);
        todayTemp.append('<p>' + 'Temperature is: ' + response.main.temp + '℉' + '</p>');

        todayTemp.append('<p>' + 'Humidity: ' + response.main.humidity + '%' + '</p>');

        todayTemp.append('<p>' + 'Wind Speed: ' + response.wind.speed + '</p>');

        // Create second api for UV? Then request and append the response to todayTemp


        // Begin 5 day forecast
    })
})