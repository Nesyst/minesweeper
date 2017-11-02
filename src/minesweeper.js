let generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for(let nrows = 0; nrows < numberOfRows; nrows++){
    let row = [];
    for (let ncolumns = 0; ncolumns < numberOfColumns; ncolumns++){
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

let generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let nrows = 0; nrows < numberOfRows; nrows++){
    let row = [];
    for (let ncolumns = 0; ncolumns < numberOfColumns; ncolumns++){
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    //The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
