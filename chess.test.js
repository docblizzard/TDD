const getNeighbourCases = require('./index.js');
const solveNQueens = require('./index.js');

test('get chessboard from n4', () => {
    const solutions = solveNQueens(4);
    expect(solutions).toContainEqual(["O#OO", "OOO#", "#OOO", "OO#O"], ["OO#O", "#OOO", "OOO#", "O#OO"]);
});

test('get chessboard from n2', () => {
    const solutions = solveNQueens(2);
    expect(solutions).toContainEqual([" "]);
});

