function shuffle(tableValues) {
    var arrayOfEight = tableValues.length;
    var positionX;
    var positionY;

    while (arrayOfEight > 0) {
        positionX = Math.floor(Math.random() * arrayOfEight);
        arrayOfEight--;

        positionY = tableValues[arrayOfEight];
        tableValues[arrayOfEight] = tableValues[positionX];
        tableValues[positionX] = positionY;
    }

    return tableValues;
}

function totalRate() {
    if(document.getElementById('lvlOneResult') != null) {
        var lvlOneTotal = 0;
        lvlOneTotal += parseInt(localStorage.getItem('lvlOne1stResult'));
        lvlOneTotal += parseInt(localStorage.getItem('lvlOne2ndResult'));
        lvlOneTotal += parseInt(localStorage.getItem('lvlOne3rdResult'));
        document.getElementById('lvlOneResult').innerHTML = Math.round(lvlOneTotal/3 * 10)/10 + '/5';
    }
    
    if(document.getElementById('lvlTwoResult') != null) {
        var lvlTwoTotal = 0;
        lvlTwoTotal += parseInt(localStorage.getItem('lvlTwo1stResult'));
        lvlTwoTotal += parseInt(localStorage.getItem('lvlTwo2ndResult'));
        document.getElementById('lvlTwoResult').innerHTML = Math.round(lvlTwoTotal/2 * 10)/10 + '/5';
    }

    if(document.getElementById('lvlThreeResult') != null) {
        var lvlThreeTotal = 0;
        lvlThreeTotal += parseInt(localStorage.getItem('lvlThree1stResult'));
        lvlThreeTotal += parseInt(localStorage.getItem('lvlThree2ndResult'));
        document.getElementById('lvlThreeResult').innerHTML = Math.round(lvlThreeTotal/2 * 10)/10 + '/5';
    }
    
    if(document.getElementById('lvlFourResult') != null) {
        document.getElementById('lvlFourResult').innerHTML = parseInt(localStorage.getItem('lvlFourResult')) + '/5';
    }
    
    if(document.getElementById('lvlFiveResult') != null) {
        document.getElementById('lvlFiveResult').innerHTML = parseInt(localStorage.getItem('lvlFiveResult')) + '/5';
    }
}

totalRate();