const getNeighbourCases = require('./index.js');

test('get chessboard from n4', () => {
    expect(getNeighbourCases(4)).toBe(  [
    "O#OO",
    "OOO#",
    "#OOO",
    "OO#O"]);
});