export async function pathExists(path: string): Promise<boolean> {
  try {
    await Deno.stat(path);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw error;
    }
  }
}

export async function isDirEmpty(outputDir: string): Promise<boolean> {
  const contents = Deno.readDir(outputDir);

  for await (const _ of contents) {
    return false;
  }

  return true;
}
