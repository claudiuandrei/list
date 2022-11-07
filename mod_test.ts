import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import List from "./mod.ts";

const VALUES: Array<string> = Array.from(Array(10).keys())
	.reverse()
	.map((k) => `v${k}`);

Deno.test("Initialization", async (t) => {
	await t.step("New List with no options should be empty", () => {
		const list = new List();
		assertEquals(list.size, 0);
		assertEquals(Array.from(list.values()), []);
	});
	await t.step(
		"New List from an iterator should be intitialized with the iterator's data",
		() => {
			const list = new List(VALUES);
			assertEquals(list.size, VALUES.length);
			assertEquals(Array.from(list.values()), VALUES);
		}
	);
});

Deno.test("Push", async (t) => {
	await t.step("Push should add a value at the start of the list", () => {
		const list = new List(VALUES);
		const value = "v";
		list.push(value);
		assertEquals(Array.from(list.values()), [value, ...VALUES]);
	});
	await t.step("Push should add a value in an empty list", () => {
		const list = new List();
		const value = "v";
		list.push(value);
		assertEquals(Array.from(list.values()), [value]);
	});
});

Deno.test("Pop", async (t) => {
	await t.step(
		"Pop should retrieve the previously set value and remove it from the list",
		() => {
			const list = new List(VALUES);
			const value = "v";
			list.push(value);
			assertEquals(list.pop(), value);
			assertEquals(Array.from(list.values()), VALUES);
		}
	);
	await t.step("Pop should return 'undefined' when the list is empty", () => {
		const list = new List();
		assertEquals(list.pop(), undefined);
	});
});

Deno.test("Peek", async (t) => {
	await t.step(
		"Peek should retrieve a curent value but not remove it from the list",
		() => {
			const list = new List(VALUES);
			const value = "v";
			list.push(value);
			assertEquals(list.peek(), value);
			assertEquals(Array.from(list.values()), [value, ...VALUES]);
		}
	);
	await t.step(
		"Peek should return 'undefined' if there is no previously set value",
		() => {
			const list = new List();
			assertEquals(list.peek(), undefined);
		}
	);
});

Deno.test("Clear", async (t) => {
	await t.step("Clear should remove all data from the list", () => {
		const list = new List(VALUES);
		list.clear();
		assertEquals(list.size, 0);
		assertEquals(Array.from(list.values()), []);
	});
});

Deno.test("Size", async (t) => {
	await t.step(
		"Size should reflect the number of elements that are currently in the list",
		() => {
			const list = new List(VALUES);
			const value = "v1";
			list.push(value);
			assertEquals(list.size, VALUES.length + 1);
		}
	);
});

Deno.test("Keys", async (t) => {
	await t.step(
		"Keys should return an iterator with the keys (values) in the order of insersion",
		() => {
			const list = new List();
			const value1 = "v1";
			const value2 = "v2";
			const value3 = "v3";
			list.push(value1);
			list.push(value2);
			list.push(value3);
			assertEquals(Array.from(list.keys()), [value3, value2, value1]);
		}
	);
});

Deno.test("Values", async (t) => {
	await t.step(
		"Values should return an iterator with the values in the reverse order of insersion",
		() => {
			const list = new List();
			const value1 = "v1";
			const value2 = "v2";
			const value3 = "v3";
			list.push(value1);
			list.push(value2);
			list.push(value3);
			assertEquals(Array.from(list.values()), [value3, value2, value1]);
		}
	);
});

Deno.test("Entries", async (t) => {
	await t.step(
		"Values should return an iterator with the a pair [value, value] in the reverse order of insersion",
		() => {
			const list = new List();
			const value1 = "v1";
			const value2 = "v2";
			const value3 = "v3";
			list.push(value1);
			list.push(value2);
			list.push(value3);
			assertEquals(Array.from(list.entities()), [
				[value3, value3],
				[value2, value2],
				[value1, value1],
			]);
		}
	);
});

Deno.test("ForEach", async (t) => {
	await t.step(
		"ForEach should iterate over the values in the reverse order of insertion",
		() => {
			const list = new List(VALUES);
			const output: Array<string> = [];
			list.forEach((v) => {
				output.push(v);
			});
			assertEquals(output, VALUES);
		}
	);
});
