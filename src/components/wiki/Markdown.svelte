<script lang="ts">
	import { marked, type RendererObject } from 'marked';
	import DOMPurify from 'dompurify';

	const renderer: RendererObject = {
		image({ href, title, text }) {
			return `<img src="${href}" alt="${text}" title="${title}" class="max-w-2/5" />`;
		},
		heading({ text, depth }) {
			const style =
				depth === 1
					? 'text-2xl font-bold border-b-2 w-1/2'
					: depth === 2
						? 'text-xl font-bold mt-2'
						: 'text-lg';
			return `<h${depth} class="${style}">${text}</h${depth}>`;
		},
		// TODO - investigate
		// list({ items, ordered, start }) {
		// 	let body = '';
		// 	for (let j = 0; j < items.length; j++) {
		// 		const item = items[j];
		// 		body += this.listitem(item);
		// 	}
            
        //     console.log(`${start} - ${items.length}`)
		// 	const type = ordered ? 'ol' : 'ul';
		// 	const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : '';
        //     return `<${type}${startAttr} class="list-disc">\n${body}</${type}>\n`;
		// },
		// listitem({ task, checked, tokens, loose }) {
		// 	let itemBody = '';
		// 	if (task) {
		// 		const checkbox = this.checkbox({ checked: !!checked });
		// 		if (loose) {
		// 			if (tokens[0]?.type === 'paragraph') {
		// 				tokens[0].text = checkbox + ' ' + tokens[0].text;
		// 				if (
		// 					tokens[0].tokens &&
		// 					tokens[0].tokens.length > 0 &&
		// 					tokens[0].tokens[0].type === 'text'
		// 				) {
		// 					tokens[0].tokens[0].text = checkbox + ' ' + escape(tokens[0].tokens[0].text);
		// 					tokens[0].tokens[0].escaped = true;
		// 				}
		// 			} else {
		// 				tokens.unshift({
		// 					type: 'text',
		// 					raw: checkbox + ' ',
		// 					text: checkbox + ' ',
		// 					escaped: true
		// 				});
		// 			}
		// 		} else {
		// 			itemBody += checkbox + ' ';
		// 		}
		// 	}

		// 	itemBody += this.parser.parse(tokens, !!loose);

		// 	return `<li>${itemBody}</li>\n`;
		// }
	};

	type Props = {
		urlSource?: boolean;
		markdown: string;
	};

	marked.use({ renderer });

	let { markdown, urlSource = false }: Props = $props();

	const convertMarkdown = async () => {
		if (urlSource) {
			let text = await (await fetch(markdown)).text();
			if (urlSource) {
				text = text.replace(
					/(!\[.*\])\(\.\/(.*)/g,
					`$1(https://raw.githubusercontent.com/Quantum-Pi/genshin-summary/refs/heads/main/$2`
				);
			}
			return marked(text, {
				async: true
			});
		} else {
			return marked(markdown, {
				async: true
			});
		}
	};
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
