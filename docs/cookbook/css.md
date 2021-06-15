---
title: css
type: cookbook
order: 4
---

H5下，nvue页面，由于部分样式会被默认样式覆盖，所以我们的全局样式，要么加 important，要么不写。

为此，我们只加了border相关的。其它的不写入全局样式，比如 flex-direction/justify-content/align-items 等。他们在H5上面会被覆盖掉，如果加 important 的话，我们想要修改的时候也需要加 important。

`text-overflow`实际上是作用在`text`标签的，我们需要为`text`标签设置宽度，以及把该属性设置在`text`标签上面，而不是在他的父组件上面.

单行省略：

```css
.ellipsis {
	width: 100rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap; /* no-app-nvue */
	lines: 1; /* app-nvue */
}
```

多行省略：

app-nvue

```css
.ellipsis {
	width: 100rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	lines: 2; /* app-nvue */
}
```

no-app-nvue

```css
.ellipsis {
	width: 100rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
```

nvue下如果存在全局css的话（app.vue里)，在app端只会在page的js文件里面出现一次，但是若是不使用全局文件，而是每次都在组件里面引入的话，页面的js里面会出现多次这些css。
app端使用全局css，可以大量减少页面js的css量，减少包体积，加快js内查询速度。

对于非app端来说，一定程度上也可以减少代码量。
非app下，全局和非全局css都是只会出现一次，不过，非全局的情况下，每一个组件里面都会出现这个css。使用全局css文件，可以减少组件下的css量，从而减少包体积。并且页面下也不会再出现这个全局css文件的内容。虽然app端nvue页面是会出现的（因为所有依赖需要的东西都会进入一个js里面）。

另外对于scss/less来说，引入全局scss变量是不起作用的。组件或者页面里面对于变量的使用会报错：不存在该变量。

所以对于变量，依然需要单独引入。变量的引入不会增加css量，所以没有关系。

最佳的办法就是 变量和css分开文件，不要放在一个文件里面。我们在需要用变量的地方引入变量。而其它css都是直接公用。
