import { Board } from './board.js';

const board = new Board();
board.printBoard();
console.log(board.checkPlaceable('I', 0));
console.log(board.checkPlaceable('I', 7));
console.log(board.checkPlaceable('O', 0));
console.log(board.checkPlaceable('O', 8));