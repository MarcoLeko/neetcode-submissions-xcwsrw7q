class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         const isValidGroup = (cells) => {

        const seen = new Set();

        for (const val of cells) {

            if (val === ".") continue;

            if (seen.has(val)) return false;

            seen.add(val);

        }

        return true;

    };

    // rows

    for (const row of board) {

        if (!isValidGroup(row)) return false;

    }

    // columns

    for (let col = 0; col < 9; col++) {

        const column = [];

        for (let row = 0; row < 9; row++) {

            column.push(board[row][col]);

        }

        if (!isValidGroup(column)) return false;

    }

    // boxes

    for (let boxRow = 0; boxRow < 3; boxRow++) {

        for (let boxCol = 0; boxCol < 3; boxCol++) {

            const seen = new Set();

            for (let i = 0; i < 3; i++) {

                for (let j = 0; j < 3; j++) {

                    const val = board[boxRow * 3 + i][boxCol * 3 + j];

                    if (val === ".") continue;

                    if (seen.has(val)) return false;

                    seen.add(val);

                }

            }

        }

    }

    return true;
    }
}
