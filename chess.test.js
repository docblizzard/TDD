const getNeighbourCases = require('./index.js');
const solveNQueens = require('./index.js');


test('get chessboard from n1', () => {
    expect(solveNQueens(1)).toEqual([["#"]]);
});

test('get chessboard from n4', () => {
    const solutions = solveNQueens(4);
    expect(solutions).toContainEqual(["O#OO", "OOO#", "#OOO", "OO#O"], ["OO#O", "#OOO", "OOO#", "O#OO"]);
});

test('get chessboard from n2', () => {
    const solutions = solveNQueens(2);
    expect(solutions).toEqual([]);
});

test('solutions for negative n', () => {
    expect(solveNQueens(-1)).toEqual([]);
});

test('solutions for non-integer n', () => {
    expect(solveNQueens(2.5)).toEqual([]);
});