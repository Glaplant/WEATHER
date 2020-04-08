
var today = new Date();


var months = ["January","Febuary","March","April","May",
"June","July","August","September","October","November",
"December"];


var weekday = new Array (7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[today.getDay()];
var month= months[today.getMonth()];
var date = today.getDate();
var year = today.getFullYear();

var currentdate =  day  + " , " + date + " " + month + " " + year ;



document.getElementById("currentdate").innerHTML = currentdate;

