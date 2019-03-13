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