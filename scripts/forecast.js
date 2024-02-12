let weatherPreston = new XMLHttpRequest();
let apiPreston =
	"http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9";
weatherPreston.open("GET", apiPreston, true);
weatherPreston.send();

weatherPreston.onload = function () {
	let weatherData = JSON.parse(weatherPreston.responseText);
	console.log(weatherData);

	for (i = 0; i < 40; i++) {
		/*var image = list[i].weather[0].icon;
    let icon = 'http://openweathermap.org/img/wn/' + [image] + '@2x.png'; 
    list[""].main.temp
    let src = weatherData.weather;*/
		var time = weatherData.list[i].dt_txt;
		time.sort();
		console.log(`time = ${time}`);

		// if (time = "18:00:00" ){
		// console.log(time);
	}
}; /*
//     }

/*----Day 1--*/
/* document.getElementById('day1').innerHTML=weatherData.object.list[3].weather.;
    document.getElementById('day1f').innerHTML=weatherData.object.list[3].main.temp;
    document.getElementById('icon1').innerHTML=weatherData.object.list[3].weather[0].icon;
    
    /*---Day 2----*/
    document.getElementById('day2').innerHTML= weatherData.weather;
    document.getElementById('day2f').innerHTML= weatherData.main[8].temp;
    document.getElementById('icon2').innerHTML= weatherData.weather[0].icon;

    /*---Day 3 ----*/ /*
    document.getElementById('day3').innerHTML=weatherData.weather.;
    document.getElementById('day3f').innerHTML=weatherData.main[16].temp;
    document.getElementById('icon3').innerHTML=weatherData.weather[0].icon;

    /*---Day 4 ---*/ /*
    document.getElementById('day4').innerHTML=weatherData.weather.;
    document.getElementById('day4f').innerHTML=weatherData.main[24].temp;
    document.getElementById('icon4').innerHTML=weatherData.weather[0].icon;

    /*---Day 5 ---*/ /*
    document.getElementById('day5').innerHTML=weatherData.weather.;
    document.getElementById('day5f').innerHTML=weatherData.main[32].temp;
    document.getElementById('icon5').innerHTML=weatherData.weather[0].icon;
    }*/
