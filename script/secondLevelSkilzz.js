// Second Level //
var valueCheck = [];

function secondLevelTable() {

    if (document.getElementById("lvlTwo1stResult") != null) {
        document.getElementById("lvlTwo1stResult").innerHTML = localStorage.getItem('lvlTwo1stResult');
    }

    var tableValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
        "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    tableValues = shuffle(tableValues);

    var html = '<table>';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 4 == 0) {
            html += "<tr>";
        }
        html += `<td><button id='polje_${i}' onclick='secLevelTest(this);'>${tableValues[i]}</button></td>`;

        if (i % 4 == 3) {
            html += "</tr>";
        }
    }
    html += '</table>';


    if (document.getElementById("ascendingArreyTable") != null) {
        document.getElementById("ascendingArreyTable").innerHTML = html;
    }

}

secondLevelTable();

function secLevelTest(event) {
    if (event.innerText == valueCheck.length + 1) {
        valueCheck.push(event.innerHTML);
        event.style.background = "rgb(255,255,255)";
        event.setAttribute("disabled", "disabled");
        if (valueCheck.length == 24) {
            calculateResult('lvlTwo1stResult');
            if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlTwo1stResult'))) {
                document.location = "../view/level-two-second.html";
            }
        }
    } else {
        if (!alert('You made mistake')) {
            document.location.reload() = "../view/level-two-first.html";
        }

    }
}

// Second level Second page //

var d = 24;

function secondLevelSecondPageTable() {

    if (document.getElementById("lvlTwo2ndResult") != null) {
        document.getElementById("lvlTwo2ndResult").innerHTML = localStorage.getItem('lvlTwo2ndResult');
    }

    var tableValues = ["24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12",
        "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
    tableValues = shuffle(tableValues);

    var html = '<table>';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 4 == 0) {
            html += "<tr>";
        }
        html += `<td><button id='polje_${i}' onclick='secLevelSecPageTest(this);'>${tableValues[i]}</button></td>`;

        if (i % 4 == 3) {

            html += "</tr>";
        }

    }
    html += '</table>';


    if (document.getElementById("descendingArreyTable") != null) {
        document.getElementById("descendingArreyTable").innerHTML = html;
    }

}

secondLevelSecondPageTable();

function secLevelSecPageTest(event) {

    if (event.innerText == d) {
        d--;
        event.style.background = "rgb(255,255,255)";
        event.setAttribute("disabled", "disabled");
        if (d == 0) {
            calculateResult('lvlTwo2ndResult');
            if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlTwo1stResult'))) {
                document.location = "../view/level-three-first.html";
            }
        }
    } else {
        if (!alert('You made mistake')) {
            document.location.reload() = "../view/level-two-second.html.html";
        }

    }
}

var timeleft = 50;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 50 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location = "../view/level-two-first.html";
            clearInterval(downloadTimer);
        }
    }

}, 1000);

function calculateResult(levelId) {
    if(timeleft <= 50 && timeleft >= 20) {
        localStorage.setItem(levelId, 5);
    } else if(timeleft < 20 && timeleft >= 15) {
        localStorage.setItem(levelId, 4);
    } else if(timeleft < 15 && timeleft >= 10) {
        localStorage.setItem(levelId, 3);
    } else if(timeleft < 10 && timeleft >= 3) {
        localStorage.setItem(levelId, 2);
    } else if(timeleft < 3) {
        localStorage.setItem(levelId, 1);
    }
}