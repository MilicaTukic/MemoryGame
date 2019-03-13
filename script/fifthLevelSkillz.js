var listOfQuestions = ['Porodicno uredjenje kada zena ima vise muzeva?',
                       'Porodicno uredjenje kada muskarac ima vise zena?',
                       'Kako se prenosi rec bratstbo kada se nalazi na kraju reda?',
                       'Koja je druga najveca parija u Nemackoj?',
                       'Sta od navedenog nije hartija od vrednosti?',
                       'Na kom poluostrvu se nalazi Italija?',
                       'Kostana srz proizvodi?',
                       'U kojoj bajci se spominje vreteno?',
                       'Perfidna osoba je?',
                       'U sastavu koje zemlje se nalayila Finska u XVIII veku?',
                       'Kada je neki slucaj AD ACTA to znaci da je?',
                       'Koji od datih procesa pretstavlja fizicku promenu?',
                       'Ahilova peta je simbol za?',
                       'Agnostik je?',
                       'Ko je rezirao film Let iznad kukavicjeg gnezda?',
                       'Koja je najmanja planeta Suncevog sistema?',
                       'Koje mediteransko ostrvo je izvor sukoba Grcke i Turske?',
                       'Koji organ u Ljudskom organizmu preciscava krv?',
                       'Ko je osnivac visokoskolskog obrazovanja u Srbiji?',
                       'Do kog poena se igra peti set u odbojci?',
                       'Kad kazemo Veciti grad mislimo na?',
                       'Koja figura je najaca u sahu?',
                       'Ko je bio na celu Drugog srpskog ustanka?',
                       'Koja boja se dobije mesanjem crvene i plave?',
                       'Konstantinopolj je stari naziv za?',
                       'Oskar Kokoska je?',
                       'Koja zivotinja je zastitni znak Linux operativnog sistema?',
                       'Ko je bio svedok Isusovog preobrazenja?',
                       'Crkva Santa Maria della Salute nalazi se u?',
                       'Ko se smatrao zacetnikom Renesanse u slikarstvu?',
                       'Prema narodnom verovanju onaj ko zna nemusti jezik razume?',
                       'Zena sa povezom oko ociju i vagom u ruci je simbol?',
                       'Sta je oboa?',
                       'Koji je najveci most u Evropi?',
                       'U kom gradu se nalazi sediste Ujedinjenih nacija?',
                       'U grckoj mitologiji Artemida je bila boginja?',
                       'Kako se naziva neformalni govor jedne drustvene grupe?',
                       'Koja je vrednost broja PI?',
                       'Oziris je u egipatskoj mitologiji bio Bog?',
                       'Koji stari narod je uveo nulu?',
                       'Mesing je legura?'];
var listOfAnswers = ['Poliandrija/Poligamija/Monogamija',
                     'Poliginija/Poligamija/Poliandrija',
                     'brat-stvo/bra-tstvo/brats-tvo',
                     'Socijaldemokrate/Liberali/Naprednjaci',
                     'Platne kartice/Menice/Deonice',
                     'Apeninskom/Pirinejskom/Balkanskom',
                     'Krvna zrnca/Hormone/Nervne celije',
                     'Uspavana Lepotica/Pepeljuga/Snezana i sedam patuljaka',
                     'Podmukla/Prefrigana/Proracunata',
                     'Svedske/Rusije/Danske',
                     'Okoncan/Odlozen/Zakazan',
                     'Dehidratacija/Fermentacija/Hidroliza',
                     'Ranjivost/Sporost/Tromost',
                     'Skeptik/Nevernik/Lakomislen covek',
                     'Milos Forman/Stiven Spilberg/Kventin Tarantino',
                     'Pluton/Venera/Neptun',
                     'Kipar/Krit/Rodos',
                     'Bubrezi/Jetra/Pluca',
                     'Dositej/Sterija/Nusic',
                     '15-og/20-og/25-og',
                     'Rim/Pariz/London',
                     'Kralj/Kraljica/Lovac',
                     'Milos Obrenovic/Stanoje Glavas/Karadjordje',
                     'Ljubicasta/Narandzasta/Zelena',
                     'Istambul/Atina/Ankara',
                     'Slikar/Pesnik/Filozof',
                     'Foka/Pingvin/Pas',
                     'Jakov,Petar,Jovan/Petar,Pavle/Svi apostoli',
                     'Veneciji/Firenci/Rimu',
                     'Da Vinci/Mikelandjelo/Djoto',
                     'Zivotinje/Pleme Bahua/Staroslovenski jezik',
                     'Pravde/Borbe/Mudrosti',
                     'Duvacki instrument/Reka/Oblast u Meksiku?',
                     'Vasko da Gama/Bosforski most/Most 25. april',
                     'Njujork/Brisel/Pariz',
                     'Lova/Mudrosti/Nauke',
                     'Zargon/Likalitet/Dijalekt',
                     '3,14/0,14/1',
                     'Podzemlja/Sunca/Mora',
                     'Indijci/Egipcani/Arapi?',
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
            document.location.reload() = "../view/level-five-first.html";
        }
    }

    //ukoliko je pogodjeno 5 tacnih rezultata prikazi poruku o tome i predji na sledeci nivo
    if (QACount == 5) {
        calculateResult('lvlFiveResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlFiveResult'))) {
            document.location = "../view/secondLevelThirdPage.html";
        }
    } else {
        //ukoliko je pogodjen tacan rezultat ali nije 5 po redu generisi view za sledeci korak racunanja
        generateFifthLevelView();
    }
}

var timeleft = 15;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 15 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location.reload() = "../view/level-five-first.html";
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