import { fetchWeatherData, fetchForecastData } from "./fetchmodule.js";
fetchWeatherData("5604473");
fetchForecastData("5604473");
 //async function getWeatherData(id = "5604473") {// preston id = 5604473//https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9"async function getWeatherData(id = "5604473") {
// async function getWeatherData(id) {
// 	try {
// 		let cityId = id;
// 		const response = await fetch(
// 			`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9`
// 		);

// 		if (!response.ok) {
// 			throw new Error("Network response was not ok");
// 		}

// 		const data = await response.json();
// 		console.log(" Data = ", data);
// 		// Return the weather data
// 		return data;
// 	} catch (error) {
// 		// Handle errors here
// 		console.error("There was a problem with the fetch operation:", error);
// 		// You might want to throw the error again or handle it in a different way based on your requirements
// 		throw error;
// 	}
// }

// //Call the async function and use the returned data
// async function fetchData(id) {
// 	try {
// 		let weatherData = await getWeatherData(id);
// 		console.log("weatherData =", weatherData);

// 		let maxtemp = weatherData.main.temp_max;
// 		let mintemp = weatherData.main.temp_min;
// 		let avgtemp = (maxtemp + mintemp) / 2;
// 		let airspeed = weatherData.wind.speed;

// 		let t = avgtemp;
// 		let s = airspeed;

// 		let f =
// 			35.74 +
// 			0.6215 * t -
// 			35.75 * Math.pow(s, 0.16) +
// 			0.4275 * t * Math.pow(s, 0.16);
// 		let fround = Math.round(f * 100) / 100;

// 		document.querySelector(
// 			"#currently"
// 		).innerHTML = ` ${weatherData.main.temp} &deg; F `;
// 		document.querySelector(
// 			"#high"
// 		).innerHTML = ` ${weatherData.main.temp_max} &deg; F `;
// 		document.querySelector("#windchill").innerHTML = ` ${fround} &deg; F `;
// 		document.querySelector(
// 			"#humidity"
// 		).innerText = ` ${weatherData.main.humidity} % `;
// 		document.querySelector(
// 			"#windspeed"
// 		).innerHTML = ` ${weatherData.wind.speed} mph `;
// 	} catch (error) {
// 		console.error("Error fetching weather data:", error);
// 	}
// }

// // Call the async function
// fetchData("5604473");
