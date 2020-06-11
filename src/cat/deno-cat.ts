/**
 * Installation:
 *  deno install deno-cat.ts --allow-read
 */

if (0 === Deno.args.length) {
    console.log('deno-cat <file-path> [...<file-path>]');
    Deno.exit();
}

const file2stdout = async (filename: string) => {
    const file = await Deno.open(filename);
    await Deno.copy(file, Deno.stdout);
    file.close();
}

await Promise.all(Deno.args.map(file2stdout));

