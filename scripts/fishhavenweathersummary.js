


let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest.open('GET' , apiURLstring, true);
weatherRequest.send();




    weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    var maxtemp = weatherData.main.temp_max;
    var mintemp = weatherData.main.temp_min;
    var avgtemp = (maxtemp + mintemp)/2;
    var airspeed = weatherData.wind.speed;
    
    var t= avgtemp;
    var s= airspeed;
    
    
    
    
    /*t=(air average temperature)*/
    /*s= windspeed in mph*/
    var f=35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow( s,0.16));
    var fround= Math.round(f * 100)/100;
    
    
        
        document.getElementById("currently").innerHTML= weatherData.main.temp;
        document.getElementById("high").innerHTML= weatherData.main.temp_max;
        document.getElementById("windchill").innerHTML = fround;
        document.getElementById("humidity").innerHTML= weatherData.main.humidity;
        document.getElementById("windspeed").innerHTML= weatherData.wind.speed;
}