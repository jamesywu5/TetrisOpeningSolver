import { Board } from './board.js';

const board = new Board();
board.printBoard();
console.log(board.checkPlaceable('I', 0));
console.log(board.checkPlaceable('I', 7));
console.log(board.checkPlaceable('O', 0));
console.log(board.checkPlaceable('O', 8));

console.log(board.findLowestEmptyRow('I', 0));
board.placePiece('I', 0);
board.placePiece('I', 4);
console.log(board.findLowestEmptyRow('I', 0));
board.placePiece('I', 0);
console.log(board.findLowestEmptyRow('O', 8));
board.placePiece('O', 8);
board.placePiece('I', 4);
board.printBoard();
console.log('Board height: ', board.length());
