interface MappingIoWasm {
	readTinyV2(mappings: string) : WasmMappingView;
}

interface WasmMappingView {
	getSrcNamespace(): string;
	getDstNamespaces(): string[];
	getNamespaceId(namespace: string): number;
	getClasses(): WasmClassViewWasm[];
	getClass(srcName: string): WasmClassViewWasm | undefined;
	getClass(srcName: string, namespaceId: number): WasmClassViewWasm | undefined;
	getMethod(srcClsName: string, srcName: string, srcDesc: string | null): WasmMethodViewWasm | undefined;
	getMethod(srcClsName: string, srcName: string, srcDesc: string | undefined, namespaceId: number): WasmMethodViewWasm | undefined;
	mapClassName(name: string, namespaceId: number): string;
	mapClassName(name: string, namespaceId: number, dstNamespace: number): string;
	mapMethodName(name: string, srcNamespace: number, dstNamespace: number): string;
}

interface WasmElementView {
	getSrcName(): string;
	getDstName(namespaceId: number): string;
	getComments(): string | undefined;
}

interface WasmClassViewWasm extends WasmElementView {
	getMethods(): WasmMethodViewWasm[];
}

interface WasmMethodViewWasm extends WasmElementView {
}