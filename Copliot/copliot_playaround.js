// Description: Copliot Playaround
// Author: Su Pan
// Date: 2018-03-01
// Version: 1.0
// Based on: https://docs.github.com/en/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code
function calculateDaysBetweenDates(begin, end) {
    // your code here
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var difference = endDate - beginDate;
    var days = difference / (1000 * 60 * 60 * 24);
    return days;
}

function test_calciulateDaysBetweenDates() {
    var begin = new Date(2018, 1, 1);
    var end = new Date(2018, 1, 2);
    var days = calculateDaysBetweenDates(begin, end);
    console.log(days);
}

function calculateSumOfSquares(x, y) {
    // your code here
    var xSquare = x * x;
    var ySquare = y * y;
    return xSquare + ySquare;
}

// create a scrollable table with pop-up window
function createTable() {
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    document.body.appendChild(table);
}

// express server on port 3000
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

