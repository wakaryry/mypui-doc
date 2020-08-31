---
title: app
type: cookbook
order: 19
---

在 app.vue 里面，条件编译 APP-NVUE 似乎存在问题，请使用 APP-PLUS. (在加载字体的时候发现的问题)

computed的属性，如果在外部进行修改了，可能在app端无法同步。

比如：

```js
computed: {
	hi() {
		return {a: true}
	}
}
```

我们在外面改变hi的a，发现UI不会跟随变化。

app端应该注意这种写法。
