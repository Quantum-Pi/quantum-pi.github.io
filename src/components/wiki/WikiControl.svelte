<script lang="ts">
	type Props = {
		formState: {
			checkArchonQuests: boolean;
			checkWorldQuests: boolean;
			checkStoryQuests: boolean;
			checkEventQuests: boolean;
		};
	};
	let { formState = $bindable() }: Props = $props();
</script>

<form class="flex gap-8 mb-2 w-full">
    <div class="flex flex-col gap-y-2">
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" bind:checked={formState.checkArchonQuests} />
            <p>Show Archon Quests</p>
        </label>
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" bind:checked={formState.checkStoryQuests} />
            <p>Show Story Quests</p>
        </label>
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" bind:checked={formState.checkWorldQuests} />
            <p>Show World Quests</p>
        </label>
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" bind:checked={formState.checkEventQuests} />
            <p>Show Event Quests</p>
        </label>
    </div>
    <div class="min-w-48">
        <label class="flex flex-col space-x-2">
            <p>Spoiler Level</p>
            <select class="select">
                <option value="1">1.0</option>
                <option value="2">1.2</option>
                <option value="3">1.3</option>
                <option value="4">1.4</option>
              </select>
        </label>
    </div>
</form>
