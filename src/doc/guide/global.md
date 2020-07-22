---
title: 全局视野
type: guide
order: 3
---

为了让您更加深入的理解mypUI，以及更加高效的使用，我们特意从设计者的角度来解读mypUI。或者您也可以把这篇全局视野当作是我们建议的最佳实践。希望对您有用。祝您使用愉快。

<p class="tip">为了更加高效与统一的开发，我们的UI示范，以及我本人所开发的所有uniapp应用，都去除掉了系统自带的 <strong>navbar</strong> 以及 <strong>tabbar</strong> 。并且禁用了外层自动包裹的 <strong>scroll-view</strong> 。</p>

我们的 `pages.json` 的配置如下：

```json
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index",
			"style": {
				"disableScroll": true
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "",
		"navigationBarBackgroundColor": "#FFFFFF",
		"navigationStyle": "custom"
	},
	"easycom": {
	  "autoscan": true,
	  "custom": {
	    "myp-(.*)": "@/mypUI/myp-$1/myp-$1.vue" // 匹配mypUI内的vue文件
	  }
	}
}
```

移除掉 `navbar` 以及 `tabbar`，我们主要出于以下考虑：

> - 统一的样式：一个应用难免会自定义 `navbar`；
> - 减少独立的配置，或者说各端差异化的适配。开发方式更加统一与高效：`pages.json`里面的配置其实比较繁琐，过多的配置，反而适得其反，对开发不友好；
> - 更加灵活的页面与元素处理：可以自由的控制 `navbar`的层次以及页面其它元素的层次；
> - 全屏元素可控，可全屏遮挡；
> - 某些业务逻辑使得必须使用自定义的`tabbar`：比如一个应用根据用户不同身份进入加载不同个数的`tabbar`；

<p class="tip">当然，是否启用完全自定义页面内容，取决于您自己。不过，我建议您别太纠结这些方面，马上去做，去实现，去完成，去赚钱，这些才是最重要的。</p>

为什么我们要禁用掉最外层的 `scroll-view` ？

> 我们做页面的内容，难免会自己使用`scroll-view`，比如利用 `scroll-view` 做自定义的 `下拉刷新` 以及 `上提加载`，而且 `nvue` 页面，app端的 `scroll-view` 本来就是手动加上去的。为了统一的开发与处理下拉上提，我们直接自己决定滚动层，封装更加便捷高效的 `list`。

`mypUI` 内几乎所有的设计都是考虑过自定义`navbar`以及`tabbar`的开发方式的。并且提供了非常便捷和灵活的页面内容以及高度的管理方式。下面我们将具体说明如何利用`mypUI`快速构建一个页面。

## 快速构建页面

一个页面，其实就是 `导航`，`内容`，再加上 `交互`。

非常简单，我们利用 `mypUI` 提供的组件，以及便捷开发的 `mixin`，很快就可以构建一个自动铺满且带返回操作的页面。

代码如下：

```html
<template>
	<view>
		<myp-navbar title="导航栏标题" :lefts="leftIcons" @leftAction="navLeftAction"></myp-navbar>
		<myp-list-simple>
			<myp-list-cell>
				<text>...</text>
			</myp-list-cell>
		</myp-list-simple>
		<myp-loadinng ref="myp-loading"></myp-loadinng>
		<myp-toast ref="myp-toast"></myp-toast>
	</view>
</template>

<script>
	import navHelper from '@/router/navHelper.js'
	import toastMixin from '@/mypUI/myp-mixin/toastMixin.js'
	import loadingMixin from '@/mypUI/myp-mixin/loadingMixin.js'
	
	export default {
		mixins: [navHelper, toastMixin, loadingMixin],
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	
</style>

```

以上代码就完全撑起了一个页面，她具备以下特点：

- 内容区自动铺满整个页面高度，而且可以直接设置内容区的背景色；
- 内容区自动处理安全区；
- 包含了navbar的返回按钮以及返回动作等；
- 包含了toast/loading等交互组件，可以直接使用快捷的toast与loading。

一切都是那么的简单干脆。我们不需要关注太多的各端差异配置，也不需要处理一堆安全区的适配。我们只管处理好我们自己的内容组件与业务逻辑即可。

然后，在此基础上，我们配合list组件的刷新与加载，搭配上接口，就已经是一个非常完整的内容展示页面了。

甚至，我们可以通过 `几句简短的描述`，就能够自动生成一个 `带接口和数据交互` 的常规页面(当然，这还需要我们更多有关自动生成页面的支持，或许我们可以考虑一个 `mypUI` 的自动生成页面的 `HBX` 插件)。

比如，我们定义以下内容，就自动生成一个`我的帖子`列表页面：

```json
{
	"navbar": "我的帖子",
	"list": {
		"refresh": true,
		"load": true,
		"cell": "rich-album"
	},
	"api": {
		"name": "getMineAlbums",
		"from": "album.js"
	}
}
```

实际上，一切都很简单。

我们只需要熟练以下两个方面：

- 灵活的运用 `页面元素的层级`：比如`navbar`的层级，`popup`等的层级，就可以决定`popup`是遮挡住`navbar`还是不遮挡`navbar`；

- `内容区`与`绝对/固定定位元素`的管理；

掌握这两个方面，就能随心所欲的利用 `mypUI` 开发出自己想要的页面了。

下面我们将重点介绍 `层级控制`与 `内容定位`。

## 层级控制


## 内容与定位


## 提示与弹层


## 兼容安全区


## navbar的定位


## 灵活的定位管理

