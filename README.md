# Circular Linked List

This is a circular singly linked list implementation that follows the itterator interface, being a drop in replacement for iterable structure when you need a list. Technically this behaves like a stack.

## Usage Deno

```ts
import List from "https://deno.land/x/list/mod.ts";
```

## Usage Node

```bash
npm install --save @denox/list
```

```js
import List from "@denox/list";
```

## API

### Initialization

The only argument is `entries` and it is optional, allowing prepopulating the list.

```js
const list = new List(); // Creates an empty list
const listWithData = new List(["value1", "value2"]); // Creates a list with 2 entries
```

### Push

Add a value to begining of the list.

```js
list.push("value");
```

### Pop

Retrieve a value from begining of the list.

```js
list.pop(); // "value"
```

### Peek

Retrieve a value from begining of the list, similar with `pop` but without changing the list.

```js
// Same behavior as get but without moving the key/value to the end of the eviction queue
list.peek("key");
```

### Clear

Clear everything from the list, leaving the list empty.

```js
list.clear();
```

### Size

Get the current size of the list.

```js
list.size; // Number
```

### Keys, Values, Entries

Get the iterators for `keys`, `values` or `entries` reversed order based on the insetion.

```js
Array.from(list.keys()); // [value1, value2, ...]
Array.from(list.values()); // [value1, value2, ...]
Array.from(list.entries()); // [[value1, value1], [value2, value2], ...]
```

### ForEach

Iterate over the values in the reverse insersion order.

```js
list.forEach((value, key, list) => {
	//...
});
```

## License

[MIT](LICENSE)
