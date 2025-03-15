# StartupEvents.modifyCreativeTab

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [CreativeTabEvent](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/item/creativetab/CreativeTabEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| tab | CreativeModeTab | ✘ |
| showRestrictedItems | boolean | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| addBefore | ItemStack, ItemStack[] |  | void | ✘ |
| addBefore | ItemStack, ItemStack[], CreativeModeTab$TabVisibility |  | void | ✘ |
| addAfter | ItemStack, ItemStack[], CreativeModeTab$TabVisibility |  | void | ✘ |
| addAfter | ItemStack, ItemStack[] |  | void | ✘ |
| setDisplayName | Component |  | void | ✘ |
| removeDisplay | Ingredient |  | void | ✘ |
| removeSearch | Ingredient |  | void | ✘ |
| setIcon | ItemStack |  | void | ✘ |
| add | ItemStack[] |  | void | ✘ |
| add | ItemStack[], CreativeModeTab$TabVisibility |  | void | ✘ |
| remove | Ingredient |  | void | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
StartupEvents.modifyCreativeTab(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

