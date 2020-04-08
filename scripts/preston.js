var header = document.querySelector('header')
var section = document.querrySelector('section')

var townRequest = new XMLHttpRequest();
var prestonURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;
townRequest.open('GET' , prestonURL);
request.responseType='text';
townRequest.send();




    townRequest.onload = function() {
    var townDatatext = request.response;
    var townData = JSON.parse(townDatatext);
    populateTown(townData);
    
    }

    function populateTown(jsonObj){
        var name = document.createElement('h2');
        var motto = document.createElement('p');
        var population = document.createElement('p');
        var yearfounded = document.createElement('p');
        var rainfall = document.createElement('p');
        name.textContent = jsonObj['name'];
        header.appendChild(myH1);

        var MayPara = document.createElement('p');
        myPara.textContent = 'Year Founded:' + jsonObj['yearFounded'] + 'Population' + jsonObj['currentPopulation'];
        header.appendChild(myPara);
    }


    function showData(jsonObj){
        var towns = jsonObj[''];


        for(var i= 0; i< towns.length; i++){
            var myArticle = document.createElement('article');
            var myh2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myList = document.createElement('ul');
    

    
    myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for(var j = 0; j < superPowers.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
      }