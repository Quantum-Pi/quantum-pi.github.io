<script lang="ts">
	import {
		marked,
		type RendererObject,
		type TokenizerAndRendererExtension,
		type Tokens
	} from 'marked';
	import DOMPurify from 'dompurify';

	const spoiler: TokenizerAndRendererExtension = {
		name: 'spoiler',
		level: 'inline',
		start(src) {
			return src.match(/||/)?.index;
		},
		tokenizer(src, _) {
			const rule = /(\|\|)([\s\S]*?)(\|\|)/g;
			const match = rule.exec(src);
			if (match) {
				const token: Tokens.Generic = {
					type: 'spoiler',
					raw: match[0],
					text: match[2]
				};
				return token;
			}
		},
		renderer(token) {
			return `<span class="spoiler">${token.text}</span>`;
		}
	};

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
		}
	};

	type Props = {
		urlSource?: boolean;
		markdown: string;
	};

	marked.use({
		renderer,
		extensions: [spoiler],
		hooks: { postprocess: (html) => DOMPurify.sanitize(html) }
	});

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
			{@html markdownHtml}
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

			&:not(:first-of-type) {
				margin-top: 2rem;
			}
		}

		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		h3 {
			font-size: 1.75rem;
			margin: 1rem 0;
		}

		ul {
			margin-left: 32px;
		}

		li {
			list-style: circle;
		}

		.spoiler {
			background-color: #4a4a4a;
			color: #4a4a4a;
			cursor: pointer;
			transition: color 0.3s ease;
			&:hover {
				color: #fff;
			}
		}

		a {
			color: #00bde7;
			text-decoration: underline;
		}

		blockquote {
			margin-top: 8px;
			margin-left: 16px;
			background-color: var(--color-gray-800);
			border-left: 10px solid var(--color-gray-600);
			padding: 8px;

			p {
				margin-bottom: 4px;
				prefix: "\"";
				suffix: "\"";

				&::before {
					content: "> \"";
				}
				&::after {
					content: "\"";
				}
			}
		}
	}
</style>
