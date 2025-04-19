<script lang="ts">
	type Piece = keyof typeof pieces;
	type Placement = {
		piece: Piece;
		rotation: number;
		position: [number, number];
	};

	type Solution = Placement[];

	let board = $state([
		[false, true, true, true],
		[false, true, true, true],
		[false, true, false, true],
		[true, true, true, true]
	]);
	let solutions: Solution[] | null = $state(null);

	const updateBoard = (r: number, c: number) => {
		board[r][c] = !board[r][c];
		board = [...board];
	};

	const generateGrid = (solution: Solution): (string | null)[][] => {
		const grid: (string | null)[][] = Array.from({ length: 4 }, () => Array(4).fill(null));

		for (const { piece, rotation, position } of solution) {
			const shape = pieces[piece][rotation];
			const [row, col] = position;

			for (let r = 0; r < shape.length; r++) {
				for (let c = 0; c < shape[r].length; c++) {
					if (shape[r][c] === 1) {
						grid[row + r][col + c] = piece;
					}
				}
			}
		}

		return grid;
	};

	const pieceToColor: Record<string, string> = {
		I: '#FF0000',
		O: '#00FF00',
		T: '#0000FF',
		L: '#FF00FF',
		J: '#00FFFF',
		S: '#FFFF00',
		Z: '#FFFFFF'
	};

	const pieces = {
		I: [
			[[1, 1, 1, 1]], // Horizontal
			[[1], [1], [1], [1]] // Vertical
		],
		O: [
			[
				[1, 1],
				[1, 1]
			]
		],
		T: [
			[
				[0, 1, 0],
				[1, 1, 1]
			],
			[
				[1, 0],
				[1, 1],
				[1, 0]
			],
			[
				[1, 1, 1],
				[0, 1, 0]
			],
			[
				[0, 1],
				[1, 1],
				[0, 1]
			]
		],
		L: [
			[
				[1, 0],
				[1, 0],
				[1, 1]
			],
			[
				[1, 1, 1],
				[1, 0, 0]
			],
			[
				[1, 1],
				[0, 1],
				[0, 1]
			],
			[
				[0, 0, 1],
				[1, 1, 1]
			]
		],
		J: [
			[
				[0, 1],
				[0, 1],
				[1, 1]
			],
			[
				[1, 0, 0],
				[1, 1, 1]
			],
			[
				[1, 1],
				[1, 0],
				[1, 0]
			],
			[
				[1, 1, 1],
				[0, 0, 1]
			]
		],
		S: [
			[
				[0, 1, 1],
				[1, 1, 0]
			],
			[
				[1, 0],
				[1, 1],
				[0, 1]
			]
		],
		Z: [
			[
				[1, 1, 0],
				[0, 1, 1]
			],
			[
				[0, 1],
				[1, 1],
				[1, 0]
			]
		]
	};

	const generatePlacements = (
		board: boolean[][],
		piece: number[][][]
	): { rotation: number; position: [number, number] }[] => {
		const placements: { rotation: number; position: [number, number] }[] = [];
		for (let rotation = 0; rotation < piece.length; rotation++) {
			const shape = piece[rotation];
			for (let row = 0; row <= board.length - shape.length; row++) {
				for (let col = 0; col <= board[0].length - shape[0].length; col++) {
					if (canPlacePiece(board, shape, row, col)) {
						placements.push({ rotation, position: [row, col] });
					}
				}
			}
		}
		return placements;
	};

	const canPlacePiece = (
		board: boolean[][],
		piece: number[][],
		row: number,
		col: number
	): boolean => {
		for (let r = 0; r < piece.length; r++) {
			for (let c = 0; c < piece[r].length; c++) {
				if (piece[r][c] === 1) {
					const boardRow = row + r;
					const boardCol = col + c;
					if (
						boardRow >= board.length || // Out of bounds (row)
						boardCol >= board[0].length || // Out of bounds (col)
						!board[boardRow][boardCol] // Cell is not `true` (already covered or invalid)
					) {
						return false;
					}
				}
			}
		}
		return true;
	};

	const isValidSolution = (board: boolean[][], solution: Solution): boolean => {
		const covered = board.map((row) => row.map(() => false));

		for (const { rotation, position, piece } of solution) {
			const shape = pieces[piece][rotation];
			const [row, col] = position;

			for (let r = 0; r < shape.length; r++) {
				for (let c = 0; c < shape[r].length; c++) {
					if (shape[r][c] === 1) {
						if (covered[row + r][col + c] || !board[row + r][col + c]) {
							return false; // Overlap or invalid placement
						}
						covered[row + r][col + c] = true;
					}
				}
			}
		}

		// Check if all `true` cells are covered
		return board.every((row, r) => row.every((cell, c) => !cell || covered[r][c]));
	};

	const bruteForceSolutions = (
		board: boolean[][],
		pieces: Record<Piece, number[][][]>
	): Solution[] => {
		const allPlacements: { piece: Piece; rotation: number; position: [number, number] }[] = [];

		for (const [pieceName, rotations] of Object.entries(pieces)) {
			const placements = generatePlacements(board, rotations).map((placement) => ({
				piece: pieceName as Piece,
				...placement
			}));
			allPlacements.push(...placements);
		}

		const uniqueCombinations: Set<string> = new Set();
		const solutions: Solution[] = [];

		const combine = (currentSolution: Solution, covered: boolean[][]) => {
			if (isValidSolution(board, currentSolution)) {
				const pieceCombination = currentSolution
					.map(({ piece }) => piece)
					.sort()
					.join(',');

				if (!uniqueCombinations.has(pieceCombination)) {
					uniqueCombinations.add(pieceCombination);
					solutions.push([...currentSolution]);
				}
				return;
			}

			for (const placement of allPlacements) {
				const { piece, rotation, position } = placement;
				const shape = pieces[piece][rotation];
				const [row, col] = position;

				let valid = true;
				for (let r = 0; r < shape.length; r++) {
					for (let c = 0; c < shape[r].length; c++) {
						if (shape[r][c] === 1) {
							const boardRow = row + r;
							const boardCol = col + c;
							if (covered[boardRow][boardCol]) {
								valid = false;
								break;
							}
						}
					}
					if (!valid) break;
				}

				if (!valid) continue;

				const newCovered = covered.map((row) => [...row]);
				for (let r = 0; r < shape.length; r++) {
					for (let c = 0; c < shape[r].length; c++) {
						if (shape[r][c] === 1) {
							newCovered[row + r][col + c] = true;
						}
					}
				}

				currentSolution.push(placement);
				combine(currentSolution, newCovered);
				currentSolution.pop();
			}
		};

		const initialCovered = board.map((row) => row.map(() => false));
		combine([], initialCovered);
		return solutions;
	};

	const optimize = () => {
		const localBoard = $state.snapshot(board).map((row) => [...row]);
		solutions = bruteForceSolutions(localBoard, pieces);
		console.log('Unique Solutions:', $state.snapshot(solutions));
	};
</script>

<div class="p-8">
	<div>WIP, may be jank</div>
	<div class="mt-8 flex flex-col justify-center w-min">
		<div class="space-y-2 mb-4">
			{#each [0, 1, 2, 3] as r}
				<div class="flex items-center space-x-2">
					{#each [0, 1, 2, 3] as c}
						<label class="flex items-center space-x-2">
							<input
								class="checkbox"
								type="checkbox"
								checked={$state.snapshot(board)[r][c]}
								onchange={() => updateBoard(r, c)}
							/>
						</label>
					{/each}
				</div>
			{/each}
		</div>
		<button type="button" class="btn preset-filled-primary-500" onclick={optimize}>Start</button>
	</div>
	<div>
		{#if solutions}
			{#if solutions.length > 0}
				<div class="p-8 flex flex-col justify-center w-min">
					<h2 class="text-2xl font-bold mb-4">Solutions</h2>
					{#each solutions as solution, solutionIndex}
						<div class="mb-8">
							<h3 class="text-xl font-semibold mb-4">Solution {solutionIndex + 1}:</h3>
							<div class="grid grid-cols-4 gap-1">
								{#each generateGrid(solution) as row, rowIndex}
									{#each row as cell, colIndex}
										<div
											class="w-8 h-8 border border-gray-300"
											style="background-color: {cell ? pieceToColor[cell] : 'transparent'}"
											title={cell ? `Piece: ${cell}` : ''}
										></div>
									{/each}
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p>No solutions found.</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	.grid {
		display: grid;
	}
</style>
