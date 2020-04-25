let windChillRequest = new XMLHttpRequest();
let windChillapiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
windChillRequest.open('GET' , windChillapiURLstring, true);
windChillRequest.send();




    windChillRequest.onload = function() {
    let weatherData = JSON.parse(windChillRequest.responseText);
    console.log(weatherData);


    document.getElementById("windspeed").innerHTML= weatherData.wind.speed;
    document.getElementById("currently").innerHTML= weatherData.main.temp;
    


var t = weatherData.main.temp;
var s = weatherData.wind.speed;

/*t=(air average temperature)*/
/*s= windspeed in mph*/
var f=35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow( s,0.16));



    }
