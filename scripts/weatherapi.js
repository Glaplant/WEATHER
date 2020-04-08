let townRequest = new XMLHttpRequest();
let prestonURLstring = 'https://byui-cit230.github.io/weather/data/towndata.json';
townRequest.open('GET' , prestonURLstring, true);
townRequest.send();




    townRequest.onload = function() {
    let townData = JSON.parse(townRequest.responseText);
    console.log(townData);


  

    
    document.getElementById("prestonP").innerHTML= townData.towns[4].name ;
    document.getElementById("mottoP").innerHTML= townData.towns[4].motto ;
    document.getElementById("yearfoundedP").innerHTML= "Year Founded:" + townData.towns[4].yearFounded ;
    document.getElementById("populationP").innerHTML= "Population:" + townData.towns[4].currentPopulation ;
    document.getElementById("rainP").innerHTML="Average Rainfall:" + townData.towns[4].averageRainfall ;



    document.getElementById("sodaspringsS").innerHTML= townData.towns[5].name ;
    document.getElementById("mottoS").innerHTML= townData.towns[5].motto ;
    document.getElementById("yearfoundedS").innerHTML= "Year Founded:" + townData.towns[5].yearFounded ;
    document.getElementById("populationS").innerHTML= "Population:" + townData.towns[5].currentPopulation ;
    document.getElementById("rainS").innerHTML="Average Rainfall:" + townData.towns[5].averageRainfall ;




    document.getElementById("fishhavenF").innerHTML= townData.towns[1].name ;
    document.getElementById("mottoF").innerHTML= townData.towns[1].motto ;
    document.getElementById("yearfoundedF").innerHTML= "Year Founded:" + townData.towns[1].yearFounded ;
    document.getElementById("populationF").innerHTML= "Population:" + townData.towns[1].currentPopulation ;
    document.getElementById("rainF").innerHTML="Average Rainfall:" + townData.towns[1].averageRainfall ;
    
}