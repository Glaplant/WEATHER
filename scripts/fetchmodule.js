async function getWeatherData(id) {
	// preston id = 5604473//https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9"async function getWeatherData(id = "5604473") {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9`
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();
		console.log(" Weather Data = ", data);
		// Return the weather data
		return data;
	} catch (error) {
		// Handle errors here
		console.error("There was a problem with the fetch operation:", error);
		// You might want to throw the error again or handle it in a different way based on your requirements
		throw error;
	}
}

async function getForecastData(id) {
	// preston id = 5604473//https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9"async function getWeatherData(id = "5604473") {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9`
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();
		console.log(" Forecast Data = ", data);
		// Return the weather data
		return data;
	} catch (error) {
		// Handle errors here
		console.error("There was a problem with the fetch operation:", error);
		// You might want to throw the error again or handle it in a different way based on your requirements
		throw error;
	}
}

async function fetchForecastData(id) {
	const forecastData = await getForecastData(id);
	console.log(forecastData);

	let listArray = [...forecastData.list];
	console.log("Array = ", listArray);

	const weekArray = [];

	for (let listItem of listArray) {
		//console.log("date time =", listItem.dt_txt.split(" ").pop(""));
		const time = listItem.dt_txt.split(" ").pop("");

		if (time === "06:00:00") {
			weekArray.push(listItem);
		}
	}

	weekArray.sort();
	console.log(weekArray);

	const dayOneIcon = weekArray[0].weather[0].icon;
	const dayTwoIcon = weekArray[1].weather[0].icon;
	const dayThreeIcon = weekArray[2].weather[0].icon;
	const dayFourIcon = weekArray[3].weather[0].icon;
	const dayFiveIcon = weekArray[4].weather[0].icon;
	/*----Day 1--*/
	console.log(dayOneIcon);

	const dayOne = document.querySelector("#day1");
	const paragraphOne = createElement(p);
	const dateOne = new Date().parse(weekArray[0].dt_txt);
	console.log(dateOne);
	paragraphOne.innerText = dateOne;
	dayOne.appendChild(paragraphOne);

	document.querySelector("#day2").innerText = weekArray[1].dt_txt;
	document.querySelector("#day3").innerText = weekArray[2].dt_txt;
	document.querySelector("#day4").innerText = weekArray[3].dt_txt;
	document.querySelector("#day5").innerText = weekArray[4].dt_txt;
	//document.querySelector("#day1f").innerText = listArray.list[3].main.temp;
	document.querySelector(
		"#icon1"
	).src = `http://openweathermap.org/img/w/${dayOneIcon}.png`;
	document.querySelector(
		"#icon2"
	).src = `http://openweathermap.org/img/w/${dayTwoIcon}.png`;
	document.querySelector(
		"#icon3"
	).src = `http://openweathermap.org/img/w/${dayThreeIcon}.png`;
	document.querySelector(
		"#icon4"
	).src = `http://openweathermap.org/img/w/${dayFourIcon}.png`;
	document.querySelector(
		"#icon5"
	).src = `http://openweathermap.org/img/w/${dayFiveIcon}.png`;
}

//7,14,21,28,35
// Call the async function and use the returned data
async function fetchWeatherData(id) {
	try {
		let weatherData = await getWeatherData(id);
		console.log("WeatherData =", weatherData);

		let maxtemp = weatherData.main.temp_max;
		let mintemp = weatherData.main.temp_min;
		let avgtemp = (maxtemp + mintemp) / 2;
		let airspeed = weatherData.wind.speed;

		let t = avgtemp;
		let s = airspeed;

		let f =
			35.74 +
			0.6215 * t -
			35.75 * Math.pow(s, 0.16) +
			0.4275 * t * Math.pow(s, 0.16);
		let fround = Math.round(f * 100) / 100;

		document.querySelector(
			"#currently"
		).innerHTML = ` ${weatherData.main.temp} &deg;F `;
		document.querySelector(
			"#high"
		).innerHTML = ` ${weatherData.main.temp_max} &deg; F `;
		document.querySelector("#windchill").innerHTML = ` ${fround} &deg; F `;
		document.querySelector(
			"#humidity"
		).innerText = ` ${weatherData.main.humidity} % `;
		document.querySelector(
			"#windspeed"
		).innerText = ` ${weatherData.wind.speed} mph `;
	} catch (error) {
		console.error("Error fetching weather data:", error);
	}
}

// Call the async function

export { fetchWeatherData, fetchForecastData };
