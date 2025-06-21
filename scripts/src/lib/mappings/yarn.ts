import JSZip from "jszip";
import { TeaVM } from "./mapping-io.wasm-runtime.js";
import mappingIoWasm from './mapping-io.wasm?url'


export async function getYarnMappings(): Promise<WasmMappingView> {
  const data = await fetchData("https://maven.fabricmc.net/net/fabricmc/yarn/1.21.4%2Bbuild.8/yarn-1.21.4%2Bbuild.8-v2.jar");
  const mapping = await extractMappings(data);
  return await openMappings(mapping);
}

async function fetchData(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  return await response.arrayBuffer();
}

async function extractMappings(data: ArrayBuffer): Promise<string> {
  const zip = await JSZip.loadAsync(data);
  const file = zip.file('mappings/mappings.tiny')
  if (file === null) {
	throw new Error('Mappings file not found');
  }
  return await file.async('string');
}

async function openMappings(mapping: string): Promise<WasmMappingView> {
  const teavm = await TeaVM.wasmGC.load(mappingIoWasm);
  const mappingio = teavm.exports as MappingIoWasm;
	return mappingio.readTinyV2(mapping);
}