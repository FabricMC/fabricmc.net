<!-- CodeTabs.svelte -->
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { CodeTab } from "./CodeBlock";
	import CodeBlock from "./CodeBlock.svelte";
	export let tabs: CodeTab[];
	export let selectedTab: string;

	const dispatch = createEventDispatcher<{ selectedTab: string }>();

	function selectTab(tab: string) {
		selectedTab = tab;
		dispatch("selectedTab", tab);
	}
</script>

<div class="code-tabs">
	<div class="tab-buttons">
		{#each tabs as tab}
			<button
				class:selected={tab.label === selectedTab}
				on:click={() => selectTab(tab.label)}
				type="button"
			>
				<span class="tab-label">{tab.label}</span>
			</button>
		{/each}
	</div>

	<div class="tab-content">
		{#each tabs as tab}
			{#if tab.label === selectedTab}
				<CodeBlock codeBlock={tab.codeBlock} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.tab-buttons {
		display: flex;
		margin-bottom: 1px;
	}
	.tab-buttons button {
		padding: 0.25em 1em;
		margin-right: 0.25em;
		cursor: pointer;
		background: #22262b;
		transition: background-color 0.2s ease;
		border: none;
		border-radius: 4px 4px 0 0;
		font-family: monospace;
	}
	.tab-buttons button:hover {
		background-color: #2d3136;
	}
	.tab-buttons button > span.tab-label {
		color: #bbb;
	}
	.tab-buttons button.selected {
		background: #55595e;
	}
	.tab-buttons button.selected > span.tab-label {
		color: #fff;
	}
	.tab-content {
		position: relative;
	}
</style>
