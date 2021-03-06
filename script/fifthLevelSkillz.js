var listOfQuestions = ['Porodično uređenje kada žena ima vise muževa?',
                       'Porodično uređenje kada muškarac ima vise žena?',
                       'Kako se prenosi reč bratstbo kada se nalazi na kraju reda?',
                       'Koja je druga najveća partija u Nemačkoj?',
                       'Šta od navedenog nije hartija od vrednosti?',
                       'Na kom poluostrvu se nalazi Italija?',
                       'Koštana srž proizvodi?',
                       'U kojoj bajci se spominje vreteno?',
                       'Perfidna osoba je?',
                       'U sastavu koje zemlje se nalazila Finska u XVIII veku?',
                       'Kada je neki slučaj AD ACTA to znači da je?',
                       'Koji od datih procesa pretstavlja fizičku promenu?',
                       'Ahilova peta je simbol za?',
                       'Agnostik je?',
                       'Ko je režirao film Let iznad kukavičjeg gnezda?',
                       'Koja je najmanja planeta Sunčevog sistema?',
                       'Koje mediteransko ostrvo je izvor sukoba Grčke i Turske?',
                       'Koji organ u ljudskom organizmu prečišćava krv?',
                       'Ko je osnivač visokoškolskog obrazovanja u Srbiji?',
                       'Do kog poena se igra peti set u odbojci?',
                       'Kad kažemo Večiti grad mislimo na?',
                       'Koja figura je najača u šahu?',
                       'Ko je bio na čelu Drugog srpskog ustanka?',
                       'Koja boja se dobije mešanjem crvene i plave?',
                       'Konstantinopolj je stari naziv za?',
                       'Oskar Kokoška je?',
                       'Koja životinja je zaštitni znak Linux operativnog sistema?',
                       'Ko je bio svedok Isusovog preobraženja?',
                       'Crkva Santa Maria della Salute nalazi se u?',
                       'Ko se smatrao začetnikom Renesanse u slikarstvu?',
                       'Prema narodnom verovanju onaj ko zna nemušti jezik razume?',
                       'Žena sa povezom oko očiju i vagom u ruci je simbol?',
                       'Šta je oboa?',
                       'Koji je najveći most u Evropi?',
                       'U kom gradu se nalazi sedište Ujedinjenih nacija?',
                       'U grčkoj mitologiji Artemida je bila boginja?',
                       'Kako se naziva neformalni govor jedne društvene grupe?',
                       'Koja je vrednost broja Pi?',
                       'Oziris je u egipatskoj mitologiji bio Bog?',
                       'Koji stari narod je uveo nulu?',
                       'Mesing je legura?'];
var listOfAnswers = ['Poliandrija/Poligamija/Monogamija',
                     'Poliginija/Poligamija/Poliandrija',
                     'brat-stvo/bra-tstvo/brats-tvo',
                     'Socijaldemokrate/Liberali/Naprednjaci',
                     'Platne kartice/Menice/Deonice',
                     'Apeninskom/Pirinejskom/Balkanskom',
                     'Krvna zrnca/Hormone/Nervne ćelije',
                     'Uspavana Lepotica/Pepeljuga/Lepotica i zver',
                     'Podmukla/Prefrigana/Proračunata',
                     'Švedske/Rusije/Danske',
                     'Okončan/Odložen/Zakazan',
                     'Dehidratacija/Fermentacija/Hidroliza',
                     'Ranjivost/Sporost/Tromost',
                     'Skeptik/Nevernik/Lakomislen čovek',
                     'Miloš Forman/Stiven Spilberg/Kventin Tarantino',
                     'Pluton/Venera/Neptun',
                     'Kipar/Krit/Rodos',
                     'Bubrezi/Jetra/Pluća',
                     'Dositej/Sterija/Nusić',
                     '15-og/20-og/25-og',
                     'Rim/Pariz/London',
                     'Kralj/Kraljica/Lovac',
                     'Miloš Obrenović/Stanoje Glavaš/Karađorđe',
                     'Ljubičasta/Narandžasta/Zelena',
                     'Istambul/Atina/Ankara',
                     'Slikar/Pesnik/Filozof',
                     'Foka/Pingvin/Pas',
                     'Jakov,Petar,Jovan/Petar,Pavle/Svi apostoli',
                     'Veneciji/Firenci/Rimu',
                     'Da Vinči/Mikelanđelo/Đoto',
                     'Životinje/Pleme Bahua/Staroslovenski jezik',
                     'Pravde/Borbe/Mudrosti',
                     'Duvački instrument/Reka/Oblast u Meksiku?',
                     'Vasko da Gama/Bosforski most/Most 25. april',
                     'Njujork/Brisel/Pariz',
                     'Lova/Mudrosti/Nauke',
                     'Žargon/Lokalitet/Dijalekt',
                     '3,14/0,14/1',
                     'Podzemlja/Sunca/Mora',
                     'Indijci/Egipcani/Arapi',
                     'Bakra i cinka/Kalaja i bakra/Aluminijuma i cinka'];
var correctAnswer = '';
var QACount = 0;

function generateFifthLevelView() {

    if (document.getElementById("lvlFiveResult") != null) {
        document.getElementById("lvlFiveResult").innerHTML = localStorage.getItem('lvlFiveResult');
    }

    if (listOfQuestions.length == listOfAnswers.length) {
        var QAIndex = Math.floor(Math.random() * listOfQuestions.length);
        if (document.getElementById('question') != null) {
            document.getElementById('question').innerHTML = listOfQuestions[QAIndex];
        }

        var answersForQuestions = listOfAnswers[QAIndex].split('/')
        correctAnswer = answersForQuestions[0];
        answersForQuestions = shuffle(answersForQuestions);

        var html = '';
        for (var i = 0; i < answersForQuestions.length; i++) {
            html += `<button onclick='fourthLevelTest(this);'>${answersForQuestions[i]}</button>`;
        }

        if (document.getElementById("givenAnswers") != null) {
            document.getElementById("givenAnswers").innerHTML = html;
        }

    } else {
        alert('Lista pitanja i odgovora moraju biti jednake duzine!');
    }
}

generateFifthLevelView();

function fourthLevelTest(event) {
    //ukoliko se poklapaju vrijednosti izracunatog rezutata i vrijednost dugmeta na UI-u povecaj counter za 1
    if (correctAnswer == event.innerHTML) {
        QACount++;
    } else {
        //ukoliko je odabran pogresan rezultat, postavi counter na 0 i vratiracunanje na pocetak
        //resultCount = 0;
        if (!alert('You made mistake')) {
            QACount = 0;
            document.location.reload();
        }
    }

    //ukoliko je pogodjeno 5 tacnih rezultata prikazi poruku o tome i predji na sledeci nivo
    if (QACount == 5) {
        calculateResult('lvlFiveResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlFiveResult'))) {
            document.location = "../view/index.html";
        }
    } else {
        //ukoliko je pogodjen tacan rezultat ali nije 5 po redu generisi view za sledeci korak racunanja
        generateFifthLevelView();
    }
}

var timeleft = 18;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 18 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location.reload();
            clearInterval(downloadTimer);
        }
    }

}, 1000);

function calculateResult(levelId) {
    if(timeleft <= 18 && timeleft >= 12) {
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