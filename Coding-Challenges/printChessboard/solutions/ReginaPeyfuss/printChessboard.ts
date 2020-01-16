/**
* prints a chessboard as a string
*/
export class ChessboardPrinting {

    static printChessboard(size: number): string {
        if (size < 0) return '';

        const evenRowStr = this.evenRowStr(size);
        const oddRowStr = this.oddRowStr(size);

        let chessboardStr = "";
        Array.from(Array(size).keys(), n => n + 1).forEach (s => {
            if (s % 2 == 0) {
                chessboardStr += evenRowStr + "\n";
            } else {
                chessboardStr += oddRowStr + "\n";
            }
        })
        return chessboardStr.trim();
    }

    static printChessboardSquared(size: number): string {
        if (size < 0) return '';

        const evenRowStr = this.evenRowStr(size*size);
        const oddRowStr = this.oddRowStr(size*size);

        let chessboardStr = "";
        Array.from(Array(size*size).keys(), n => n + 1).forEach (s => {
            if (s % 2 == 0) {
                chessboardStr += evenRowStr + "\n";
            } else {
                chessboardStr += oddRowStr + "\n";
            }
        })
        return chessboardStr.trim();
    }

    private static evenRowStr(n: number) {
        let str = "";
        Array.from(Array(n).keys(), n => n + 1).forEach ( n => {
            if (n % 2 == 0) str += "x";
            else str += "o"
        });
        return str;
    }

    private static oddRowStr(n: number) {
        let str = "";
        Array.from(Array(n).keys(), n => n + 1).forEach ( n => {
            if (n % 2 === 0) str += "o";
            else str += "x"
        });
        return str;
    }
}