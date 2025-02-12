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

function isSafe(board, row, col, n) {
    for (let i = 0; i < col; i++) {
        if (board[row][i] === '#') return false;
    }
    
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === '#') return false;
    }
    
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] === '#') return false;
    }
    
    return true;
}

function solveNQueens(n) {
    const results = [];
        
    function solve(board, col) {
        if (col >= n) {
            const solution = board.map(row => row.join(''));
            results.push(solution);
            return;
        }
        
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col, n)) {
                board[i][col] = '#';
                solve(board, col + 1);
                board[i][col] = 'O';
            }
        }
    }
    
    const board = new Array(n).fill().map(() => new Array(n).fill('O'));
    
    solve(board, 0);
    return results;
}


const solutions = solveNQueens(4);
console.log(solutions);

module.exports = getNeighbourCases;
module.exports = solveNQueens;
