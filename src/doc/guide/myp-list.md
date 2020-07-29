---
title: 列表：myp-list
type: guide
order: 100
---

<p class="tip">在nvue页面开发中，list组件可以说是最常用的，也是最重要的组件之一。nvue页面中，页面不会自己有滚动效果，内容必须包裹在scroll/list中才会实现 页面/内容 的滚动。uniapp的处理是默认给所有的页面最外层包裹一个scroll，从而使页面具备滚动的能力。</p>

<p class="tip">但是考虑到，我们一般会自己自定义各种刷新，以及页面内部会再次使用到scroll/list，我们给所有页面禁用了uniapp自动添加的外层scroll。</p>

<p class="tip">禁用uniapp自动包裹的scroll之后，我们发现页面的高度需要我们自己管理，根view（root view）的高度需要自己设置。在root view上面设置flex:1是会铺满高度，但是很多时候，我们依然需要为里面的子组件设置明确的高度，而且很多时候不太方便一直flex:1下去。所以我们大多数时候都是使用具备明确高度的list或者其它盒子来撑开页面。</p>

<p class="tip">使用 mypUI 其实最应该熟练的就是页面内容的管理，如何管理高度，如何管理层级。熟悉之后，你会发现做起事来干脆直接、得心应手。</p>

`myp-list` 在是 weex的 list 组件与 其它端的 scroll-view 封装而成。

> 主要功能如下：

- 高度控制；
- 可开可关闭的 下拉刷新 与 上提加载；
- 可以设置 是使用 loader 组件来实现 上提加载，还是使用 loadMore 事件来实现上提加载；
- 自动兼容 安全区 xBar；
- ...

如果您只是纯粹的想使用一个不带刷新和加载的列表，请使用 `myp-list-simple`，其文档见 [myp-list-simple](/doc/guide/myp-list-simple.html)

## 快速使用

```html
<template>
  <myp-list ref="myp-list" :autoUpdate="true" @down="toLoadData" @up="toLoadData">
    <myp-list-cell v-for="(item,idx) in items" :key="idx">
      <!-- 您的具体内容
      <item-cell :item="item"></item-cell>
	  -->
    </myp-list-cell>
  </myp-list>
</template>

<script>
  export default {
	data() {
	  return {
		items: []
	  }
	},
	methods: {
	  toLoadData() {
		const ins = this.$refs['myp-list']
		const cp = ins.mypCurrentPage
		requestApi({page: cp}).then(response => {
		  if (cp === 1) {
			this.items = response.results || []
		  } else {
			this.items = this.items.concat(response.results || [])
		  }
		  // true or false means if having a next page
		  ins.mypEndSuccess(true)
		}).catch(err => {
		  ins.mypEndError()
		})
	  }
	}
  }
</script>
```

以上代码就会实现一个 自动铺满屏幕（不包含status和navbar）的list组件，而且不需要您额外考虑 xbar 以及遮挡问题，他会自动处理，保证list的元素全部可见。

`myp-list` 默认插槽 的子组件必须是 `myp-list-cell`。（因为weex端，list下只能是cell组件）

`autoUpdate` 可以决定是否自动加载数据（也就是拉取第一页的数据），下拉和上提对应 `down` 和 `up` 事件。

在 `loadData` 方法中，我们不需要自己去管理当前的页面等状态，`myp-list` 会自己管理，你只需要调用 成功或者失败 的回掉即可。

## 高度控制

`myp-list` 默认是 占满剩余屏幕（也就是不包含 status和navbar，占满其它剩余空间）。您可以设置 `includeStatus` `includeNav` `tabHeight` `extra` `height` 来决定她的最终高度。

### includeStatus

是否包含status，也就是是否包含顶部的状态栏。默认是 `false`，不包含。一般与 `includeNav` 搭配使用。

### includeNav

是否包含 navbar，也就是是否包含导航栏。默认是 `false`，不包含。该导航栏的高度默认是 `44px`，您可以根据需要在 `myp-mixin/windowMixin.js` 中查看以及设置 导航栏的高度。

### tabHeight

tabbar 的高度，默认是 `0` ，也就是 当前页面没有 tabbar，`Number` 类型，对应的单位是 `px` （我们不建议使用 rpx 作为 tabbar 的高度）。uniapp 的 tabbar 高度默认是 `50px`。

### extra

需要排除掉的额外高度，作为辅助与补充。比如list上面有一个高度为 `80rpx` 的 tabs 组件。这个时候我们需要额外减去这个高度，我们就设置 `extra="80rpx"`。可以是 `String`，可以是 `Number`，可以带 `rpx` 或者 `px` 单位，不带单位默认为 `rpx`。允许拼接写法：`80-40px-100rpx` （表示 80rpx + 40px + 100rpx）。

### height

height默认是 0。也就是 list 的高度通过计算而来，不是 height 直接控制。如果设置了大于 0 的高度，会直接使用 height的高度，不再考虑别的高度决定元素。height 可以是 `String`，可以是 `Number`，可以带 `rpx` 或者 `px` 单位，不带单位默认为 `rpx`。不支持拼接写法。

## 刷新与加载


## 底部固定的元素


## 事件全览


## props全览


## TODO
