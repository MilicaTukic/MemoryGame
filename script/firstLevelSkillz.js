// First Level //

function firstLevelTable() {

    if (document.getElementById("lvlOne1stResult") != null) {
        document.getElementById("lvlOne1stResult").innerHTML = localStorage.getItem('lvlOne1stResult');
    }

    var tableValues = ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8",
        "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "&", "8", "8", "8", "8"];
    tableValues = shuffle(tableValues);

    var html = '<table id="sahTabla">';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 6 == 0) {
            html += "<tr>";
        }
        html += `<td><button id='polje_${i}' onclick='fLTest(this);'>${tableValues[i]}</button</td>`;

        if (i % 6 == 5) {
            html += "</tr>";
        }
    }
    html += '</table>';
    if (document.getElementById("table") != null) {
        document.getElementById("table").innerHTML = html;
    }

}

firstLevelTable();

function fLTest(event) {
    if (event.innerText == "&") {
        calculateResult('lvlOne1stResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlOne1stResult'))) {
            document.location = "../view/level-one-second.html";
        }
    }
}
// First Sublevel //

function firstSubLevelTable() {

    if (document.getElementById("lvlOne2ndResult") != null) {
        document.getElementById("lvlOne2ndResult").innerHTML = localStorage.getItem('lvlOne2ndResult');
    }

    var tableValues = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",
        "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "乂", "X", "X", "X", "X"];
    tableValues = shuffle(tableValues);

    var html = '<table id="sahTabla">';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 6 == 0) {
            html += "<tr>";
        }
        html += `<td><button id='polje_${i}' onclick='subLTest(this);'>${tableValues[i]}</button</td>`;

        if (i % 6 == 5) {
            html += "</tr>";
        }
    }
    html += '</table>';
    if (document.getElementById("fSLTable") != null) {
        document.getElementById("fSLTable").innerHTML = html;
    }

}

firstSubLevelTable();

function subLTest(event) {
    if (event.innerText == "乂") {
        calculateResult('lvlOne2ndResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlOne2ndResult'))) {
            document.location = "../view/level-one-third.html";
        }
    }
}

// Second Sublevel //

function secondSubLevelTable() {

    if (document.getElementById("lvlOne3rdResult") != null) {
        document.getElementById("lvlOne3rdResult").innerHTML = localStorage.getItem('lvlOne3rdResult');
    }

    var tableValues = ["p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p",
        "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "q", "p", "p", "p", "p"];
    tableValues = shuffle(tableValues);

    var html = '<table id="sahTabla">';
    for (var i = 0; i < tableValues.length; i++) {
        if (i % 6 == 0) {
            html += "<tr>";
        }
        html += `<td><button id='polje_${i}' onclick='secSubLTest(this);'>${tableValues[i]}</button</td>`;

        if (i % 6 == 5) {
            html += "</tr>";
        }
    }
    html += '</table>';
    if (document.getElementById("tSLtable") != null) {
        document.getElementById("tSLtable").innerHTML = html;
    }

}

secondSubLevelTable();

function secSubLTest(event) {
    if (event.innerText == "q") {
        calculateResult('lvlOne3rdResult');
        if (!alert('You successfully pass this level. Score: ' + localStorage.getItem('lvlOne3rdResult'))) {
            document.location = "../view/greeting.html";
        }
    }
}

var timeleft = 15;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("progressBar").value = 15 - timeleft;
    if (timeleft <= 0) {
        if (!alert('Time is up! Play again')) {
            QACount = 0;
            document.location = "../view/level-one-first.html";
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

