export interface CodeTab {
	label: string;
	codeBlock: CodeBlock;
}

export interface CodeBlock {
	language: string;
	code: string;
}
