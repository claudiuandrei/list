import { build, emptyDir } from "https://deno.land/x/dnt@0.31.0/mod.ts";

await emptyDir("./npm");

await build({
	entryPoints: ["./mod.ts"],
	outDir: "./npm",
	shims: {
		// see JS docs for overview and more options
		deno: {
			test: "dev",
		},
	},
	compilerOptions: {
		lib: ["es2021", "dom"],
	},
	package: {
		// package.json properties
		name: "@denox/list",
		version: Deno.args[0],
		description: "Circular Singly Linked List.",
		license: "MIT",
		keywords: ["lru", "cache", "store"],
		repository: {
			type: "git",
			url: "git+https://github.com/claudiuandrei/list.git",
		},
		bugs: {
			url: "https://github.com/claudiuandrei/list/issues",
		},
		engines: {
			node: ">=11.0.0",
		},
	},
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
