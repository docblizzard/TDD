const chessboard = [
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O']
];

function getNeighbourCases( board ) {
    cases = [];
    for (x = 0; x < board.length; x++) {
        for (y = 0; y < board.length; y++) {
            console.log("[",x,"]","[",y,"]")
        }
    }
}

const results = getNeighbourCases( chessboard );
console.log(results);

module.exports = getNeighbourCases;