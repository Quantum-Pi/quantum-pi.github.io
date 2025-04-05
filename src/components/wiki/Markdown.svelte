<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

    type Props = {
        markdown: string;
    }

    let { markdown }: Props = $props();

	const markdownPromise = marked(markdown, {
		async: true
	});
</script>

<div>
	{#await markdownPromise}
		<div>Loading...</div>
	{:then markdownHtml}
		<div>
			{@html DOMPurify.sanitize(markdownHtml)}
		</div>
	{:catch error}
		<div>Error: {error.message}</div>
	{/await}
</div>

<style>
    :global {
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }
    }
</style>
