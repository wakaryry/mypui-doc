---
title: weex中animation模块
type: cookbook
order: 22
---

weex中的animation模块分开属性设置时，在Android和iOS存在差异。

至少现在在设置 opacity 的时候，会导致上次设置的 transform 属性清空。

代码如下：

```html
<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view ref="bbb">
			<view style="width: 200rpx; height: 100rpx; background-color: #007AFF;"></view>
		</view>
		<button @tap="toRotate">旋转</button>
		<button @tap="toOpacity">透明度</button>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const animation = uni.requireNativePlugin('animation') // weex.requireModule('animation');
	// #endif
	
	export default {
		data() {
			return {
				title: 'Hello',
				deg: 0,
				opacity: false
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.toInit()
			}, 0)
		},
		methods: {
			toInit() {
				const el = this.$refs['bbb']
				animation.transition(el, {
					styles: {
						opacity: 0
					}
				})
			},
			toRotate() {
				const el = this.$refs['bbb']
				const that = this
				animation.transition(el, {
					styles: {
						transform: `rotate(${this.deg+45}deg)`
					}
				}, ()=>{
					that.deg = that.deg + 45
				})
			},
			toOpacity() {
				this.opacity = !this.opacity
				const el = this.$refs['bbb']
				// 如果不加 transform: `rotate(${this.deg}deg)` 在Android下，rotate状态会被清空，不被保持
				animation.transition(el, {
					styles: {
						opacity: this.opacity ? 1 : 0,
						transform: `rotate(${this.deg}deg)` // 不加该属性会导致 切换opacity时，rotate状态会被清空
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		flex-direction: row;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

```
