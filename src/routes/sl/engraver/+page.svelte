<script lang="ts">
	let board = $state([
		[false, false, false, false],
		[false, false, false, false],
		[false, false, false, false],
		[false, false, false, false]
	]);

	const pieces = {
		L: [
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 0, 0]
		],
		BW_L: [
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0]
		],
		Rod: [
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0]
		],
		Hitchhiker: [
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0]
		],
		Harrypotter: [
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0]
		],
		BW_Harrypotter: [
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0]
		],
		Square: [
			[1, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	};

	const updateBoard = (r: number, c: number) => {
		board[r][c] = !board[r][c];
		board = [...board];
	};

	const optimize = () => {
		console.log(board);
	};
</script>

<div class="p-8 flex flex-col justify-center w-min">
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
	<button type="button" class="btn preset-filled-primary-500" onclick={optimize}>Go brrrr</button>
</div>
