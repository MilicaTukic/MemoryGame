var resultCount = 0;

function generateFourthLevelView() {

    if (document.getElementById("lvlFourResult") != null) {
        document.getElementById("lvlFourResult").innerHTML = localStorage.getItem('lvlFourResult');
    }

    var operations = ['+', '-', '*']; //kreiranje liste operacija
    var operation = operations[Math.floor(Math.random() * operations.length)]; //iz liste operacija se izvlaci random operacija
    var firstValue = Math.floor(Math.random() * 100); //generisanje random vrijednosti
    var secondValue = Math.floor(Math.random() * 100); //generisanje druge random vrijednosti

    //petlja za provjeru ukoliko je operacija '-' i da li je prva vrijednost manja od druge
    //ukoluko je uslov zadovoljen generisati ponovo drugu vrijednost kako rezultat ne bi bio
    //negativan
    while (operation == '-' && firstValue < secondValue) {
        secondValue = Math.floor(Math.random() * 100);
    }

    //postavljanje vrijednosti u HTML-u
    if (document.getElementById('firstValue') != null) {
        document.getElementById('firstValue').innerHTML = firstValue;
    }
    if (document.getElementById('operation') != null) {
        document.getElementById('operation').innerHTML = operation;
    }

    if (document.getElementById('secondValue') != null) {
        document.getElementById('secondValue').innerHTML = secondValue;
    }

    //generisanje ispravnog rezultata
    var result;
    if (operation == '+') {
        result = firstValue + secondValue;
    } else if (operation == '-') {
        result = firstValue - secondValue;
    } else if (operation == '*') {
        result = firstValue * secondValue;
    }

    var resultList = []; //kreiranje liste rezultata
    resultList.push(result); //ubacivanje pravog rezultata u niz
    resultList.push(result + 11); //ubacivanje pravog rezultata + 11 kako bi se predstavile dodatne vrijednosti na tabeli
    resultList.push(result * 2); //ubacivanje pravog rezultata * 2 kako bi se predstavile dodatne vrijednosti na tabeli
    resultList.push(Math.floor(Math.random() * 20)); //ubacivanje random broja od 0-20 u listu rezultata
    resultList = shuffle(resultList); //shuffle rezultata

    //prikazivanja rezultata na stranici
    var html = '';
    for (var i = 0; i < resultList.length; i++) {
        html += `<button onclick='fourthLevelTest(this);'>${resultList[i]}</button>`;
    }

    if (document.getElementById("results") != null) {
        document.getElementById("results").innerHTML = html;
    }
}

generateFourthLevelView();

function fourthLevelTest(event) {
    //dohvatanje vrijednosti sa UI-a
    var firstValue = parseInt(document.getElementById('firstValue').innerHTML);
    var operation = document.getElementById('operation').innerHTML;
    var secondValue = parseInt(document.getElementById('secondValue').innerHTML);

    //racunanje ispravnog rezultata
    var result;
    if (operation == '+') {
        result = firstValue + secondValue;
    } else if (operation == '-') {
        result = firstValue - secondValue;
    } else if (operation == '*') {
        result = firstValue * secondValue;
    }

    //ukoliko se poklapaju vrijednosti izracunatog rezutata i vrijednost dugeta na UI-u povecaj counter za 1
    if (result == event.innerHTML) {
        resultCount++;
    } else {
        //ukoliko je odabran pogresan rezultat, postavi counter na 0 i vratiracunanje na pocetak
        //resultCount = 0;
        if (!alert('You made mistake')) {
            resultCount = 0;
            document.location = "../view/level-four-first.html";
        }
    }

    //ukoliko je pogodjeno 5 tacnih rezultata prikazi poruku o tome i predji na sledeci nivo
    if (resultCount == 5) {
        calculateResult('lvlFourResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlFourResult'))) {
            document.location = "../view/level-five-first.html";
        }
    } else {
        //ukoliko je pogodjen tacan rezultat ali nije 5 po redu generisi view za sledeci korak racunanja
        generateFourthLevelView();
    }
}

var timeleft = 15;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 15 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location.reload();
            clearInterval(downloadTimer);
        }
    }

}, 1000);

function calculateResult(levelId) {
    if(timeleft <= 15 && timeleft >= 12) {
        localStorage.setItem(levelId, 5);
    } else if(timeleft < 12 && timeleft >= 9) {
        localStorage.setItem(levelId, 4);
    } else if(timeleft < 9 && timeleft >= 6) {
        localStorage.setItem(levelId, 3);
    } else if(timeleft < 6 && timeleft >= 3) {
        localStorage.setItem(levelId, 2);
    } else if(timeleft < 3) {
        localStorage.setItem(levelId, 1);
    }
}