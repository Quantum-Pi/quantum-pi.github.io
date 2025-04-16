<script lang="ts">

    let {
        version = $bindable('1.0')
    }: {version: string} = $props();
</script>

<div class="hidden md:block absolute top-1/2 left-[calc(5vw-2.75rem)] w-22 bg-gray-900 py-4 px-2 rounded">
    <label class="label">
        <span class="label-text">Jump to</span>
        <select class="select" bind:value={version}>
            <option value="1.0">1.0</option>
            <option value="1.1">1.1</option>
            <option value="1.2">1.2</option>
            <option value="1.3">1.3</option>
            <option value="1.4">1.4</option>
            <option value="1.5">1.5</option>
            <option value="1.6">1.6</option>
            <option value="2.0">2.0</option>
        </select>
    </label>
</div>

<style>

</style>