<script lang="ts">
	type Piece = keyof typeof pieces;
	type Placement = {
		piece: Piece;
		rotation: number;
		position: [number, number];
	};

	type Solution = Placement[];

	const MAX_ITERATIONS = 10000000;
	const MAX_SOL = 90;
	let itr = $state(0);
	let board = $state([
		[false, true, true, true, false, false, false],
		[false, true, true, true, false, false, false],
		[false, true, false, true, false, false, false],
		[true, true, true, true, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false]
	]);

	$effect(() => {
		board;
		piecesInUse;
		solutionsToCheck = getAllPlacements(true).length;
	});
	let solutions: Solution[] | null = $state(null);
	let solutionsToCheck = $state(0);

	const updateBoard = (r: number, c: number) => {
		board[r][c] = !board[r][c];
		board = [...board];
	};

	const generateGrid = (solution: Solution): (string | null)[][] => {
		const grid: (string | null)[][] = Array.from({ length: 7 }, () => Array(7).fill(null));

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

	const pieceToStat: Record<string, string> = {
		I: 'Gold',
		O: 'Crit DMG',
		T: 'HP Recovery',
		L: 'ATK',
		J: 'HP',
		S: 'Accuracy',
		Z: 'Dodge'
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

	let piecesInUse: Record<Piece, boolean> = $state({
		I: true,
		O: true,
		T: true,
		L: true,
		J: true,
		S: true,
		Z: true
	});

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

	const getAllPlacements = (filter: boolean = false) => {
		const allPlacements: { piece: Piece; rotation: number; position: [number, number] }[] = [];

		for (const [pieceName, rotations] of Object.entries(pieces)) {
			const placements = generatePlacements(board, rotations).map((placement) => ({
				piece: pieceName as Piece,
				...placement
			}));
			allPlacements.push(...placements);
		}

		return !filter ? allPlacements : allPlacements.filter(({ piece }) => piecesInUse[piece]);
	};

	const bruteForceSolutions = (
		board: boolean[][],
		pieces: Record<Piece, number[][][]>
	): Solution[] => {
		const allPlacements = getAllPlacements(false);
		console.log('Number of placements: ', allPlacements.length);

		const uniqueCombinations: Set<string> = new Set();
		const solutions: Solution[] = [];
		const combine = (
			currentSolution: Solution,
			covered: boolean[][],
			recursive: boolean = false
		) => {
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

			const filteredPlacements = recursive
				? allPlacements
				: allPlacements.filter(({ piece }) => piecesInUse[piece]);

			for (const placement of filteredPlacements) {
				if (itr > MAX_ITERATIONS) {
					console.log('Iteration limit reached');
					return;
				}
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
						itr = itr + 1;
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
				combine(currentSolution, newCovered, true);
				currentSolution.pop();
			}
		};

		const initialCovered = board.map((row) => row.map(() => false));
		combine([], initialCovered);
		return solutions;
	};

	const optimize = () => {
		itr = 0;
		const localBoard = $state.snapshot(board).map((row) => [...row]);
		solutions = bruteForceSolutions(localBoard, pieces);
		console.log('Unique Solutions:', $state.snapshot(solutions));
		console.log('Iterations:', itr);
	};
</script>

<div class="p-8">
	<div>
		Soul weapon engravement optimimzer for <a
			class="text-blue-500"
			href="https://www.reddit.com/r/SlayerLegend/">Slayer Legends</a
		>
	</div>
	<div class="my-4">
		<div>If you have any comments/requests you can reach out to me via:</div>
		<div class="ml-3">Discord: quantumpie</div>
		<div class="ml-3">Reddit: u/QuantumPie_</div>
	</div>
	<span class="h4">How to use:</span>
	<div class="flex flex-col gap-y-2 mb-4">
		<span class="ml-4"
			>1. Select which pieces you want to be included in the solved pattern (for example, if CRIT &
			ATK are selected, the solutions must include at least one of those pieces)</span
		>
		<span class="ml-4"
			>2. Check the boxes to match the pattern for your soul weapon. The current example is for a
			4x4 weapon (note: it doesn't matter where the 4x4 region is centered)</span
		>
		<span class="ml-4"
			>3. Click the "Start" button to find all possible solutions with the given constraints</span
		>
		<span
			>Note: There are <span
				class={`${solutionsToCheck >= MAX_SOL ? 'text-red-500' : 'text-green-500'}`}
				>{solutionsToCheck}</span
			>
			initial solutions to check. If this number is over {MAX_SOL}, there will likely be to many
			solutions to check and it will stop after checking {MAX_ITERATIONS.toLocaleString()} scenarios</span
		>
	</div>
	<div>
		{#each Object.entries(pieces) as [piece, _rotations]}
			<div class="flex items-center space-x-2">
				<label class="flex items-center space-x-2">
					<input
						class="checkbox"
						type="checkbox"
						checked={$state.snapshot(piecesInUse)[piece as Piece]}
						onchange={() => {
							piecesInUse[piece as Piece] = !piecesInUse[piece as Piece];
							piecesInUse = { ...piecesInUse };
						}}
					/>
				</label>
				<div
					class="w-8 h-8 border border-gray-300"
					style="background-color: {pieceToColor[piece]}"
				></div>
				<span>{pieceToStat[piece]}</span>
			</div>
		{/each}
	</div>
	<div class="mt-8 flex flex-col justify-center w-min">
		<div class="space-y-2 mb-4">
			{#each [0, 1, 2, 3, 4, 5, 6] as r}
				<div class="flex items-center space-x-2">
					{#each [0, 1, 2, 3, 4, 5, 6] as c}
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
	<div class="w-screen">
		{#if solutions}
			<div class="mx-8 mt-4">
				{#if itr >= MAX_ITERATIONS - 1}
					<p class="text-red-500">
						Iteration limit reached. Please try to reduce the number of pieces or the size of the
						board.
					</p>
				{:else}
					<p class="text-green-500">
						Checked {itr.toLocaleString()} possible combinations.
					</p>
				{/if}
			</div>
			{#if solutions.length > 0}
				<div class="m-8 flex flex-col justify-center w-min">
					<h2 class="text-2xl font-bold mb-4">Solutions</h2>
					{#each solutions as solution, solutionIndex}
						<div class="mb-8 w-screen">
							<h3 class="text-xl font-semibold mb-4">Solution {solutionIndex + 1}:</h3>
							<div class="mb-2">
								<strong>Stats</strong>: {solution.map(({ piece }) => pieceToStat[piece]).join(', ')}
							</div>
							<div class="grid grid-cols-7 gap-1 w-fit">
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
