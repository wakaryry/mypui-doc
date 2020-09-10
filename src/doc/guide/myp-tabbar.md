---
title: tabbar：myp-tabbar
type: guide
order: 101
---

## Props

| Prop name      | Description | Type           | Values | Default                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------- | -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeXBar    |             | boolean        | -      | true                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| overrideXBar   |             | boolean        | -      | true                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| xBarBgType     |             | string         | -      | ''                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| xBarStyle      |             | string         | -      | ''                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| tabs           |             | array          | -      | []                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| tabStyle       |             | object         | -      | {<br> iconStyle: 'font-size: 20px;color: #333232;',<br> selectedIconStyle: 'font-size: 20px;color: #01A9F0;',<br> titleStyle: '',<br> selectedTitleStyle: '',<br> boxStyle: '',<br> itemStyle: '',<br> height: 50, // px<br> badgeStyle: '',<br> badgeTextStyle: '',<br> dotStyle: '',<br> // we use it to help to position the badge or dot<br> iconBoxWidth: '46px',<br> image: null,<br> imageStyle: '',<br> imageBoxStyle: '',<br>} |
| includeStatus  |             | boolean        | -      | true                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| includeNav     |             | boolean        | -      | true                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| duration       |             | number\|string | -      | 300                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| timingFunction |             | string         | -      | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'                                                                                                                                                                                                                                                                                                                                                                                                  |
| top            |             | number\|string | -      | 0                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Events

| Event name | Type      | Description |
| ---------- | --------- | ----------- |
| selected   | undefined |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| tabs    |             |          |

---

myp-tabbar 提供了自定义 tabbar 的UI以及包含子组件与跳转的能力。自定义的 navbar 加上自定义的 tabbar，可以很轻松的实现 popup 类组件全屏遮罩，而不需要考虑使用 页面来做遮罩层，更不需要考虑比较独立的 subnvue 配置。

## 使用

> 以下代码并不是完整的代码。具体使用请看 mypUI 的demo。

```html
<template>
	<view>
		<myp-tabbar ref="tabbar" :tabs="tabs" :tabStyle="tabStyle" @selected="tabbarSwitched">
			<home></home>
			<mine></mine>
		</myp-tabbar>
		<plus :show="plusVisible" @cancel="toHidePlus"></plus>
		<myp-loading ref="myp-loading"></myp-loading>
		<myp-toast ref="myp-toast"></myp-toast>
	</view>
</template>
```

```js
	import home from './home.vue'
	import mine from './mine.vue'
	import plus from './plus.vue'
	
	import navHelper from '@/router/navHelper.js'
	import toastMixin from '@/mypUI/myp-mixin/toastMixin.js'
	import loadingMixin from '@/mypUI/myp-mixin/loadingMixin.js'
	
	export default {
		components: {
			home,
			mine,
			plus
		},
		mixins: [toastMixin, loadingMixin, navHelper],
		provide() {
			return {
				tabRoot: this
			}
		},
		data() {
			return {
				plusVisible: false,
				tabs: [
					{
						icon: '/static/tabs/home.png',
						selectedIcon: '/static/tabs/homeH.png',
						title: '首页',
						selectedTitle: '首页'
					},
					{
						icon: '/static/tabs/plus.png',
						selectedIcon: '/static/tabs/plus.png',
						title: '',
						selectedTitle: '',
						iconBoxWidth: '76px',
						iconStyle: 'width: 60px;height:38px;',
						selectedIconStyle: 'width: 60px;height:38px;',
						noPage: true
					},
					{
						icon: '/static/tabs/mine.png',
						selectedIcon: '/static/tabs/mineH.png',
						title: '我的',
						selectedTitle: '我的'
					}
				],
				tabStyle: {
					iconStyle: 'width:22px;height:22px;',
					selectedIconStyle: 'width:22px;height:22px;',
					titleStyle: 'font-size:12px;color:#999999;',
					selectedTitleStyle: 'font-size:12px;color:#875F3C;',
					boxStyle: 'border-top-width:0.5px;border-top-color:#DDDDDD;border-top-style:solid;'
				}
			}
		},
		onLoad(option) {
			const app = getApp({allowDefault: true})
			if (option.target) {
				const target = option.target
				const toTab = target * 1
				// switch with no animation
				setTimeout(()=>{
					this.$refs.tabbar.setPage(toTab, false)
				}, 50)
			} else {
				app.globalData.currentTab = 0
			}
		},
		methods: {
			tabbarSwitched(val) {
				if (val.page === 1) {
					this.plusVisible = true
					return
				}
				// 记录当前tab
				const app = getApp({allowDefault: true})
				if (!app) return;
				app.globalData.currentTab = val.page * 1
			},
			toHidePlus() {
				this.plusVisible = false
			}
		}
	}

```

以上例子就是一个包含 三个tabItem，其中一个 tabItem 是弹窗形式的 自定义的tabbar。

上面的tabbar包含了两个子组件，分别是 主页和我的。我们的 tabs 设置中设置了 三个tabItem。其中一个是 noPage 形式，也就是不占用子组件。

我们的 plus 组件对应的就是 noPage 设置。plus 组件是一个弹窗。您可以想象一下， 主页/我的，然后中间一个大大的 `+` 号。不管你处在哪个页面，点击这个 `+` 号都会弹出一个全屏的弹层，让您具备其它选择的能力。这是很常用的一种设计。我想你也一定能 get 到这个意思。

myp-tabbar 及其包裹的子组件定义了页面的内容，正如我们所看到的，他们都是在一个页面里面。我们需要管理当前处于哪个tab，又要去往哪个tab。

在 myp-tabbar 外层的组件，一般都是一些 toast/loading/popup 之类等。毕竟 myp-tabbar 会占满全屏。剩下的也只够您 弹出内容了。

使用 myp-tabbar，最重要的就是：tabbar的UI适配，和 tabbar的功能跳转，以及 tab内容与页面之间的通信。讲这些之前，我们先介绍一些 tabbar的内容区高度适配。

## 高度适配

默认情况下，myp-tabbar 组件的高度是占据全屏，它包含了 statusbar/navbar/xbar。实际上，您也无需做额外的设置，除非个别情况，您需要排除掉 statusbar和navbar。当然，也不排除您把 tabbar组件用作他途，比如仅仅当作是一个不支持手势的tabs内容切换组件，不过我们并不建议你这么做，毕竟这是个 tabbar 组件。

myp-tabbar 直接使用了 `position:absolute`，而且它的 tabs 中部分组件不得不使用 `fixed` 定位（比如凸出，特殊的背景bg），所以我们建议您的 弹层类组件，全部放到 页面下，与 myp-tabbar 同为兄弟，而不是放在 内容页这些子组件上。尤其是您发现弹层被遮挡的时候，尤其需要注意是否恰当的处理好了组件层级问题。

myp-tabbar 的高度控制主要有：`includeStatus` `includeNav` `includeXBar`，默认都是包含的，也就是都是 `true`。我们只希望您改变 `includeStatus` `includeNav` 这两个高度属性。

关闭掉 `includeStatus` `includeNav`，顶部会遗留出一个 status/navbar 的高度，这种情况其实就是 各个 tabs 共享一个navbar。有时候我们可能会有这样的需求。

有时候，我们可能不仅仅只是各个 tabs 之间共享 status和navbar，可能还需要共享 一个背景图片，也就是 顶部露出一些高度，以供共享视图使用。
这个高度不一定就是 status和navbar的高度，所以，我们还提供了一个额外的 `top` 属性。

比如，您需要在不包含 status和navbar的基础上，距离屏幕顶部再多个 40px，这个时候你 可以设置 `top="40px"`。top 的设置与 `includeStatus` `includeNav` 是独立的，可以互相配合使用。

如果您不是非常清楚地知道您在做什么，请不要关闭 `includeXBar`。默认tabbar的tabs会在最底部，而且会自动处理好xbar的。

## UI适配

对于 tabs的设置，我们提供了 `tabStyle` 这个全局的样式设置，也允许您在 `tabs` 中为某个tab做个性化的配置。

### tabStyle

统一样式配置入口。可配置的属性如下：

```js
{
	iconStyle: 'font-size: 20px;color: #333232;',  // 图标样式，是icon字体的话，可以设置字体大小和颜色。一般我们用图片
	selectedIconStyle: 'font-size: 20px;color: #01A9F0;', // 选中时的icon样式，字体的话是大小和颜色
	titleStyle: '',  // tabitem的文字样式
	selectedTitleStyle: '',  // 选中是tabitem的文字样式
	boxStyle: '',  // tabs的外层style设置
	itemStyle: '',  // 每个item的外层style
	height: 50,  // tabbar的tabs高度。Number类型。px
	badgeStyle: '',  // badge为text时的外层style
	badgeTextStyle: '', // badge text的样式
	dotStyle: '',  // badge为dot时的style
	// we use it to help to position the badge or dot
	iconBoxWidth: '46px',  // 我们为图标设置一个盒子宽度，方便定位 badge。您的badge是依据此宽度来定位的
	image: null,  // 背景图片。一般我们只设置最上边的那个特殊弧度的背景
	imageStyle: '',  // 背景图片的样式
	imageBoxStyle: '', // 背景图片外层的样式
}
```

height 以及 iconBoxWidth 不设置的话，默认分别是 `50` `46px`。没有什么是必须要设置的，您根据需要设置显示的内容。

### tabs

tabs 是一个数组，决策了 有多少个 tabs，以及他们各自的功能、定制化的样式。每个tabitem的具体配置如下：

```js
{
	icon: '',  // 图标，一般是图片，可以是字体图标
	selectedIcon: '', // 选中时icon
	title: '',  // 文字
	selectedTitle: '',  // 选中时文字。为空表示选中时不显示文字
	badge: 0,  // badge 的数字
	dot: false,  // 是否显示成 dot 圆点
	isHump: false,  // 是否凸出。默认是 false
	noPage: false,  // 是否不在切换页面之中。默认是false
	humpStyle: '',  // 凸出的style。设置凸起宽高
	humpBottom: '',  // 凸起距离底部的距离，设置凸起偏移量
	iconStyle: '',  // 图标样式
	selectedIconStyle: '',  // 图标样式
	titleStyle: '',  // 文字样式
	selectedTitleStyle: '',  // 文字样式
	badgeStyle: '',  // badge外层样式
	badgeTextStyle: '',  // badge文字样式
	dotStyle: '',  // dot样式
	iconBoxWidth: ''  // 图标外层宽度，方便定位 badge/dot
}
```

除开显示元素 图标/文字，没有什么是必须要配置的。根据您的需要设置。

myp-tabbar 可以适配出很多样式。下面列出了几个样式以及配置，全面的代码请看 demo。

### 普通图标与文字
![普通图标与文字](/images/doc/tabbar-normal.jpg)

```js
{
	tabs: [
		{
			icon: '/static/tabs/home.png',
			selectedIcon: '/static/tabs/homeH.png',
			title: '首页',
			selectedTitle: '首页',
			badge: '12'
		},
		{
			icon: '/static/tabs/discovery.png',
			selectedIcon: '/static/tabs/discoveryH.png',
			title: '发现',
			selectedTitle: '发现',
			badge: '8',
			noPage: true
		},
		{
			icon: '/static/tabs/mine.png',
			selectedIcon: '/static/tabs/mineH.png',
			title: '我的',
			selectedTitle: '我的',
			dot: true
		}
	],
	tabStyle: {
		iconStyle: 'width:22px;height:22px;',
		selectedIconStyle: 'width:22px;height:22px;',
		titleStyle: 'font-size:12px;color:#888888;',
		selectedTitleStyle: 'font-size:12px;color:#108EE9;',
		boxStyle: 'background-color: #FFFFFF;'
	}
}
```

### icon不带文字
![中间icon](/images/doc/tabbar-icon.jpg)

```js
{
	tabs: [
		// ...
		{
			icon: '/static/tabs/bg-plus.png',
			selectedIcon: '/static/tabs/bg-plus.png',
			title: '',
			noPage: true,
			iconStyle: 'width: 60px;height:38px;',
			selectedIconStyle: 'width: 60px;height:38px;'
		}
		// ...
	]
}
```

### 中间凸出
![中间凸出](/images/doc/tabbar-hump.jpg)

```js
	// tabs 的中间凸出设置
	{
		icon: '/static/tabs/plus.png',
		selectedIcon: '/static/tabs/plus.png',
		title: '',
		badge: '8',
		isHump: true,
		noPage: true,
		humpBottom: 12,
		iconStyle: 'width:62px;height:62px;',
		selectedIconStyle: 'width:62px;height:62px;',
		iconBoxWidth: '72px',
		badgeStyle: 'top: 2px;'
	}
```

### 中间凸出带文字
![中间凸出带文字](/images/doc/tabbar-hump-text.jpg)

```js
// tabs 的中间凸出设置
{
	icon: '/static/tabs/plus.png',
	selectedIcon: '/static/tabs/plus.png',
	title: '发现',
	selectedTitle: '发现',
	badge: '8',
	isHump: true,
	noPage: true,
	humpBottom: 5,
	iconStyle: 'width:52px;height:52px;',
	selectedIconStyle: 'width:52px;height:52px;',
	iconBoxWidth: '62px',
	badgeStyle: 'top: 2px;',
	titleStyle: 'margin-top:3px;',
	selectedTitleStyle: 'margin-top:3px;'
}
```

### 特殊外观
![特殊外观](/images/doc/tabbar-bg.jpg)

我们有个时候看到别人的tabbar有一个独特的外观，比如一条具备特殊弧度的border，看上去很顺滑，很有感觉。这种怎么做？

不需要多么费事，也不需要什么花里胡翘，直接使用带这种特殊border或者样式的背景图片即可。

当然，由于背景图片使用的是 fixed 定位，您也需要 更改 tabs的 boxStyle 的定位，否则层级会有问题，具体 tabStyle 配置如下：

```js
tabStyle: {
	iconStyle: 'width:22px;height:22px;',
	selectedIconStyle: 'width:22px;height:22px;',
	titleStyle: 'font-size:12px;color:#888888;',
	selectedTitleStyle: 'font-size:12px;color:#108EE9;',
	boxStyle: 'background-color: #FFFFFF;position:fixed;left:0;width:750rpx;bottom:0;', // 更改定位
	image: '/static/tabs/tab-bg.png',  // 背景图片
	imageStyle: 'width:750rpx;height:72px;',  // 图片尺寸
	imageBoxStyle: 'bottom: 5px;' // 图片定位
}
```

## 事件跳转

我们对外提供了，`next` `prev` `setPage` 三个 `ref method`，用于您做程序内跳转。

next 与 prev 是 setPage 的便捷方法，我们一般不使用，主要还是使用 setPage。

### setPage

`setPage(page, animated = true)`

点击 tabitem，自动调用了该方法，该方法会帮您处理 内容子组件的切换，同时给您一个 `selected` 通知。

您需要监听该通知 `@selected`，来记录您的当前 tab number，以便实现更多的业务逻辑。该通知携带参数格式为：`{page: 1}`。

### @selected

点击 tabitem，以及调用 `setPage` 都会触发 `selected` 通知。该通知携带参数格式为：`{page: 1}`。

### 程序跳转

`setPage(page, animated = true)`

外部API接口跳转，请直接跳用该ref method。

- page 为当前的页码，从 0 开始，hump/noPage 也是计数的；
- animated 为是否需要动画效果，默认是开启的。

> 一般在哪里用到api跳转？

onLoad 里面，我们可能需要一个app打开，默认就处在 第二个 tabitem，这需要我们自己调用接口设置。

## 动态内容

动态内容，主要是指 tabitem 的动态，其中包括，tabitem的设置动态，以及 tabitem的数量动态。

### 动态tab内容

我们的 badge/dot 之类的东西，一般都是 动态的，您只需要恰当的处理好数据的变化就行。

您肯定有一些机制来让自己知道 badge/dot 改变了，随即去更新 tabs 的内容即可。

关于 tabitem 的样式动态，实际上也是可以的。您完全可以动态的改变样式属性配置，来实现动态的样式。

### 动态tab数量

有些人可能想实现，三个 tabitem 的页面，执行某个操作之后，页面变成 2个tabitem，比如 切换用户身份后，或者进入新的使用模式。

这也是可以的。不过我们并不建议在该 tabbar 页面直接改变，我们希望您 直接relaunch跳转到另一个具备不同 tabbar 的页面。

## 通信

由于 tabbar 是一个组件，各个页面的内容其实是 tabbar 的子组件，几个 tabitem 的内容其实都在 一个页面里面。也就是就只具备一个 onLoad onShow 等页面的生命周期，其它的的内容都是组件生命周期。

很多业务的处理可能都需要 移交到 具备页面生命周期的 那个承载页面 来做处理。

这就需要用到很多的通信或者通知监听。

常用的 父子组件通信/页面通信/全局变量 等方法都可以使用。

### 组件级emit/on

有个时候，层次不是很高，我们可以直接使用 emit/on 进行父子组件事件通知与监听。

### provide/inject

使用 provide/inject 避开深层次的 emit/on。

### watch/vuex

有时候业务复杂，比如，用户登陆之后，各个 tabitem的内容都需要刷新，怎么办？

各自 watch vuex 中的同一个值，执行相应的业务逻辑。

### 全局 emit/on

比如，我在某一个 发帖的页面，首页是一个帖子列表，我发帖之后需要刷新首页，怎么办？

可以使用 全局的 `uni.$emit` `uni.$on`。当然，记得在必要的时候 `uni.$off`。

## 其它设置

### duration

tab内容切换的动画周期，默认 300ms。

### timingFunction

tab内容切换的动画曲线，默认 `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

