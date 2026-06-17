type PieceType = "I" | "O" | "T" | "S" | "Z" | "J" | "L";
type Cell = PieceType | null;
type Point = { x: number; y: number };
const PIECES: Record<PieceType, Point[]> = {
    I: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 }
    ],
    O: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 }
    ],
    T: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 1 }
    ],
    S: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 }
    ],
    Z: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 0 }
    ],
    L: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 1 }
    ],
    J: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 0 }
    ]
};

function findPieceGroundWidth(piece: PieceType): number {
    const shape = PIECES[piece];
    let values = []
    for (const block of shape) {
        if (block.y === 0) {
            values.push(block.x);
        }
    }
    const maxX = Math.max(...values);
    const minX = Math.min(...values);
    return maxX - minX + 1;
}

function findPieceWidth(piece: PieceType): number {
    const shape = PIECES[piece];
    let values = shape.map(block => block.x);
    const maxX = Math.max(...values);
    return maxX + 1;
}

class Board {
    private grid: Cell[][];

    constructor() {
        this.grid = Array.from({ length: 20 }, () => Array<Cell>(10).fill(null));
    }

    printBoard(): void {
        console.log(
            [...this.grid].reverse().map(row => row.map(cell => cell || "0")
                .join(" ")).join("\n")
        );
        console.log("\n");
    }

    getBoard(): string {
        return [...this.grid].reverse().map(row => row.map(cell => cell || "0").join(" ")).join("\n");
    }

    checkPlaceable(piece: PieceType, Xposition: number): boolean {
        const width = findPieceWidth(piece);
        return Xposition >= 0 && 10 >= Xposition + width;
    }

    findLowestEmptyRow(piece: PieceType, Xposition: number): number {
        const shape = PIECES[piece];
        for (let y = 19; y >= 0; y--) {
            let canPlace = true;
            for (const block of shape) {
                const boardX = Xposition + block.x;
                const boardY = y - block.y;
                if (boardY < 0 || this.grid[boardY]![boardX] !== null) {
                    canPlace = false;
                    break;
                }
            }
            if (!canPlace) {
                return y;
            }
        }
        return 0
    }

    placePiece(piece: PieceType, position: number): void {
        if (!this.checkPlaceable(piece, position)) {
            throw new Error("Piece cannot be placed at the given position/index.");
        }
        const shape = PIECES[piece];
        const y = this.findLowestEmptyRow(piece, position);
        for (const block of shape) {
            const boardX = position + block.x;
            const boardY = y - block.y;
            this.grid[boardY]![boardX] = piece;
        }
    }
}

export { Board };
export type { PieceType };
