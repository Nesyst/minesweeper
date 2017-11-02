'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var nrows = 0; nrows < numberOfRows; nrows++) {
    var row = [];
    for (var ncolumns = 0; ncolumns < numberOfColumns; ncolumns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

//console.log(generatePlayerBoard(3,3));
//console.log(generatePlayerBoard(5,3));
//console.log(generatePlayerBoard(6,6));
//console.log(generatePlayerBoard(2,4));

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var nrows = 0; nrows < numberOfRows; nrows++) {
    var row = [];
    for (var ncolumns = 0; ncolumns < numberOfColumns; ncolumns++) {
      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    //The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);