import { readdir, stat } from "node:fs/promises";

export async function pathExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

export async function isDirEmpty(outputDir: string): Promise<boolean> {
  return (await readdir(outputDir)).length === 0;
}
