<script lang="ts">
	import { getYarnMappings } from "./mappings/yarn"

	var text = "";
	let mappings = getYarnMappings()

	async function remapLog() {
		const mappingTree = await mappings;
		const intermediary = mappingTree.getNamespaceId("intermediary");
		const named = mappingTree.getNamespaceId("named");

		const exp = /(net\.minecraft\.)?class_(?<classId>\d+)(.method_(?<methodId>\d+))?/g;

		text = text.replaceAll(exp, (match, ...args) => {
			const groups = args[args.length - 1];
			const srcClassName = `net/minecraft/class_${groups.classId}`;
			const className = mappingTree.mapClassName(srcClassName, intermediary, named);

			var formattedName = match.startsWith("net.minecraft.") ? className.replaceAll("\/", ".") : className.substring(className.lastIndexOf("/") + 1);

			if (groups.methodId) {
				const srcMethodName = `method_${groups.methodId}`;
				formattedName += "." + mappingTree.getMethod(srcClassName, srcMethodName, null)?.getDstName(named) ?? srcMethodName;
			}

			return formattedName;
		});
	}
</script>

<textarea
	id="large-textarea"
	bind:value={text}
	class="textarea"
	placeholder="Paste crash report here..."
	on:input={remapLog}
	wrap="off"
></textarea>

<style>
	.textarea {
		flex-grow: 1;
		resize: none;
		font-size: 1rem;
		padding: 10px;
		width: 100%;
		height: 70vh;
		overflow: auto;
	}
</style>
