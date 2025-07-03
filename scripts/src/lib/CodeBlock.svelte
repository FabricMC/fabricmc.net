<script lang="ts">
	import { type CodeBlock } from "./CodeBlock";

	export let codeBlock: CodeBlock;
	const timeoutMs = 2500;
	let copied = false;
	let timeout: ReturnType<typeof setTimeout>;

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(() => {
			copied = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				copied = false;
			}, timeoutMs);
		});
	}
</script>

<div class="code-container">
	<button
		class:copied
		class="copy-button"
		on:click={() => copyToClipboard(codeBlock.code)}
		>{copied ? "COPIED ✔" : "COPY"}
	</button>
	<pre><code>{codeBlock.code}</code></pre>
</div>

<style>
	.code-container {
		position: relative;
	}

	.copy-button {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		background-color: #22262b;
		border: 1px solid #555;
		border-radius: 4px;
		font-size: 0.8rem;
		padding: 0.2rem 0.5rem;
		cursor: pointer;
		transition: background-color 0.2s ease;
		z-index: 10;
	}

	.copy-button:hover {
		background-color: #2d3136;
	}
	.copy-button.copied {
		background-color: #3b3;
	}
</style>
