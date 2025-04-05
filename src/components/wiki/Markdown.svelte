<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

    type Props = {
        urlSource?: boolean;
        markdown: string;
    }

    let { markdown, urlSource = false }: Props = $props();

    const convertMarkdown = async () => {
        if (urlSource) {
            const text = await (await fetch(markdown)).text()
            return marked(text, {
                async: true
            }); 
        } else {
            return marked(markdown, {
                async: true
            });
        }
    }
</script>

<div>
	{#await convertMarkdown()}
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
