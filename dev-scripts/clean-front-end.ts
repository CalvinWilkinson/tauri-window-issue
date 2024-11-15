import { join } from "@std/path";
import { existsSync } from "@std/fs";

const cwd = Deno.cwd();
const nextDirPath = join(cwd, ".next");
	
if (existsSync(nextDirPath, { isDirectory: true})) {
	console.log("%cCleaning front end directory '.next' . . .", "color: cyan");
	Deno.removeSync(nextDirPath, { recursive: true });
} else {
	console.log(`%cThe directory '${nextDirPath}' has been removed.`, "color: green");
	console.log(`%cThe directory '${nextDirPath}' does not exist.`, "color: gray");
}

const nodeModulesDirPath = join(cwd, "node_modules");
if (existsSync(nodeModulesDirPath, { isDirectory: true})) {
	console.log("%cCleaning front end directory 'node_modules' . . .", "color: cyan");
	Deno.removeSync(nodeModulesDirPath, { recursive: true });
	console.log(`%cThe directory "${nodeModulesDirPath}" has been removed.`, "color: green");
} else {
	console.log(`%cThe directory '${nodeModulesDirPath}' does not exist.`, "color: gray");
}
