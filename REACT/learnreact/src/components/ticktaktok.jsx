import React, { useState } from 'react';

function ticktaktok() {
    const [grid, setGrid] = useState([
        [".", ".", "."],
        [".", ".", "."],
        [".", ".", "."]
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(0); // 0 for X, 1 for O
    const [winner, setWinner] = useState(null);

    const handleClick = (rowIndex, colIndex) => {
        if (winner !== null) return;
        if (grid[rowIndex][colIndex] === 0 || grid[rowIndex][colIndex] === 1) return;
        const newGrid = grid.map((row, r) =>
            row.map((cell, c) => (r === rowIndex && c === colIndex ? currentPlayer : cell))
        );
        setGrid(newGrid);
        const win = checkPlayerWon(newGrid);
        if (win !== null) {
            setWinner(win);
        } else {
            setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
        }
    };

    function checkPlayerWon(grid) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (
                grid[i][0] === grid[i][1] &&
                grid[i][1] === grid[i][2] &&
                (grid[i][0] === 0 || grid[i][0] === 1)
            ) {
                return grid[i][0];
            }
        }
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (
                grid[0][j] === grid[1][j] &&
                grid[1][j] === grid[2][j] &&
                (grid[0][j] === 0 || grid[0][j] === 1)
            ) {
                return grid[0][j];
            }
        }
        // Check diagonals
        if (
            grid[0][0] === grid[1][1] &&
            grid[1][1] === grid[2][2] &&
            (grid[0][0] === 0 || grid[0][0] === 1)
        ) {
            return grid[0][0];
        }
        if (
            grid[0][2] === grid[1][1] &&
            grid[1][1] === grid[2][0] &&
            (grid[0][2] === 0 || grid[0][2] === 1)
        ) {
            return grid[0][2];
        }
        // Check for draw
        if (grid.flat().every(cell => cell === 0 || cell === 1)) {
            return "draw";
        }
        return null;
    }

    function renderCell(cell) {
        if (cell === 0) return "X";
        if (cell === 1) return "O";
        return "";
    }

    function getCellColor(cell) {
        if (cell === 0) return 'text-red-500';
        if (cell === 1) return 'text-yellow-500';
        return 'text-gray-400';
    }

    function resetGame() {
        setGrid([
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ]);
        setCurrentPlayer(0);
        setWinner(null);
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen min-w-screen '>
            <h1 className='m-5 text-2xl uppercase'>tik tak toi</h1>
            <div className='h-[400px] w-[400px] grid grid-cols-3 grid-rows-3 bg-sky-50  border-black  justify-center rounded-md'>
                {grid.map((row, rowIndex) => {
                    return row.map((cell, colIndex) => {
                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`p-4 border-2 border-grey-100 text-center text-6xl  cursor-pointer select-none flex items-center justify-center ${getCellColor(cell)}`}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            >
                                {renderCell(cell)}
                            </div>
                        );
                    });
                })}
            </div>
            <div className="mt-6 text-xl">
                {winner === 0 && <div className="text-red-500  ">Player X wins!</div>}
                {winner === 1 && <div className="text-yellow-500 ">Player O wins!</div>}
                {winner === "draw" && <div className="text-gray-700 ">It's a draw!</div>}
                {winner === null && (
                    <div>
                        Current Player:{" "}
                        <span className={currentPlayer === 0 ? "text-red-500" : "text-yellow-500"}>
                            {currentPlayer === 0 ? "X" : "O"}
                        </span>
                    </div>
                )}
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
}

export default ticktaktok;