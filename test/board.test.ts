import {expect, it} from 'vitest';
import {Board} from '../src/board';

it('should create a board', () => {
    const board = new Board();
    expect(board).toBeInstanceOf(Board);
});

it('board is empty and prints 0s', () => {
    const board = new Board();
    const boardString = board.getBoard();
    expect(boardString).toEqual(
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0\n' +
        '0 0 0 0 0 0 0 0 0 0')
});

it('check placeable for I piece at position 0', () => {
    const board = new Board();
    const isPlaceable = board.checkPlaceable('I', 0);
    expect(isPlaceable).toBe(true);
});

it('check placeable for I piece at position 7', () => {
    const board = new Board();
    const isPlaceable = board.checkPlaceable('I', 6);
    expect(isPlaceable).toBe(true);
});

it('check placeable for I piece at position 8, false', () => {
    const board = new Board();
    const isPlaceable = board.checkPlaceable('I', 8);
    expect(isPlaceable).toBe(false);
});