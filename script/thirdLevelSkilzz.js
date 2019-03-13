// Third level //
var resultCounter = 0;

var defaultFLPath = './../memoryFLImages/';
var defaultPath = './../memoryImages/';
var defaultIcon = 'question-mark.png';

var tableFLValues = [ defaultFLPath + 'air-freight.png',
defaultFLPath + 'air-freight.png',
defaultFLPath + 'camera.png',
defaultFLPath + 'camera.png',
defaultFLPath + 'coconut.png',
defaultFLPath + 'coconut.png',
defaultFLPath + 'compass.png',
defaultFLPath + 'compass.png',
defaultFLPath + 'landmark.png',
defaultFLPath + 'landmark.png',
defaultFLPath + 'location.png',
defaultFLPath + 'location.png',
defaultFLPath + 'suitcase.png',
defaultFLPath + 'suitcase.png',
defaultFLPath + 'summer.png',
defaultFLPath + 'summer.png',
defaultFLPath + 'sunglasses.png',
defaultFLPath + 'sunglasses.png',
defaultFLPath + 'wallet.png',
defaultFLPath + 'wallet.png'];

var tableValues = [defaultPath + 'portugal-mnm.png',
defaultPath + 'portugal-flg.png',
defaultPath + 'spain-mnm.png',
defaultPath + 'spain-flg.png',
defaultPath + 'italy-mnm.png',
defaultPath + 'italy-flg.png',
defaultPath + 'russia-mnm.png',
defaultPath + 'russia-flg.png',
defaultPath + 'germany-mnm.png',
defaultPath + 'germany-flg.png',
defaultPath + 'china-mnm.png',
defaultPath + 'china-flg.png',
defaultPath + 'france-mnm.png',
defaultPath + 'france-flg.png',
defaultPath + 'uk-mnm.png',
defaultPath + 'uk-flg.png',
defaultPath + 'egypt-mnm.png',
defaultPath + 'egypt-flg.png',
defaultPath + 'india-mnm.png',
defaultPath + 'india-flg.png'];

function generateThirdLvlView() {
    tableFLValues = shuffle(tableFLValues);

    var html = '<table>';
    for (var i = 0; i < tableFLValues.length; i++) {
        if (i % 4 == 0) {
            html += "<tr>";
        }
        html += `<td><input id='${i}' type='image' src='${defaultPath + defaultIcon}' onclick='thirdLevelFPageTest(this);' /></td>`;

        if (i % 4 == 3) {

            html += "</tr>";
        }

    }
    html += '</table>';


    if (document.getElementById("memoryGameFLTable") != null) {
        document.getElementById("memoryGameFLTable").innerHTML = html;
    }
}

generateThirdLvlView();

var firstSelectedImage = "";
var firstSelectedImageId;
var secondSelectedImage = "";
var secondSelectedImageId;
function thirdLevelFPageTest(event) {

    if (firstSelectedImage == '') {
        firstSelectedImageId = event.id;
        event.src = tableFLValues[firstSelectedImageId];
        firstSelectedImage = event.src;
    } else {
        secondSelectedImageId = event.id;
        event.src = tableFLValues[secondSelectedImageId];
        secondSelectedImage = event.src;

        if (firstSelectedImage == secondSelectedImage) {
            document.getElementById(firstSelectedImageId).setAttribute("disabled", "disabled");
            document.getElementById(secondSelectedImageId).setAttribute("disabled", "disabled");
            resultCounter++;
            if(resultCounter == 10) {
                calculateResult('lvlThree1stResult');
                if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlThree1stResult'))) {
                    document.location = "../view/level-three-second.html";
                }
            }
        } else {
            setTimeout(() => {
                document.getElementById(firstSelectedImageId).src = defaultPath + defaultIcon;
                document.getElementById(secondSelectedImageId).src = defaultPath + defaultIcon;
            }, 1000);
        }


        firstSelectedImage = "";
        firstSelectedImageId;
        secondSelectedImage = "";
        secondSelectedImageId;
    }
}

function thirdLevelPageTable() {
    tableValues = shuffle(tableValues);

    var html = '<table>';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 4 == 0) {
            html += "<tr>";
        }
        html += `<td><input id='${i}' type='image' src='${defaultPath + defaultIcon}' onclick='thirdLevelPageTest(this);' /></td>`;

        if (i % 4 == 3) {

            html += "</tr>";
        }

    }
    html += '</table>';


    if (document.getElementById("memoryGameTable") != null) {
        document.getElementById("memoryGameTable").innerHTML = html;
    }

}

thirdLevelPageTable();

function thirdLevelPageTest(event) {

    if (firstSelectedImage == '') {
        firstSelectedImageId = event.id;
        event.src = tableValues[firstSelectedImageId];
        firstSelectedImage = event.src;
    } else {
        secondSelectedImageId = event.id;
        event.src = tableValues[secondSelectedImageId];
        secondSelectedImage = event.src;

        if (firstSelectedImage.split('-')[0] == secondSelectedImage.split('-')[0]) {
            document.getElementById(firstSelectedImageId).setAttribute("disabled", "disabled");
            document.getElementById(secondSelectedImageId).setAttribute("disabled", "disabled");
            resultCounter++;
            if(resultCounter == 10) {
                calculateResult('lvlThree2ndResult');
                if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlThree2ndResult'))) {
                    document.location = "../view/level-four-first.html";
                }
            }
        } else {
            setTimeout(() => {
                document.getElementById(firstSelectedImageId).src = defaultPath + defaultIcon;
                document.getElementById(secondSelectedImageId).src = defaultPath + defaultIcon;
            }, 1000);
        }


        firstSelectedImage = "";
        firstSelectedImageId;
        secondSelectedImage = "";
        secondSelectedImageId;
    }
}

var timeleft = 90;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 90 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location = "../view/level-three-first.html";
            clearInterval(downloadTimer);
        }
    }

}, 1000);

function calculateResult(levelId) {
    if(timeleft <= 90 && timeleft >= 70) {
        localStorage.setItem(levelId, 5);
    } else if(timeleft < 70 && timeleft >= 45) {
        localStorage.setItem(levelId, 4);
    } else if(timeleft < 45 && timeleft >= 25) {
        localStorage.setItem(levelId, 3);
    } else if(timeleft < 25 && timeleft >= 7) {
        localStorage.setItem(levelId, 2);
    } else if(timeleft < 7) {
        localStorage.setItem(levelId, 1);
    }
}