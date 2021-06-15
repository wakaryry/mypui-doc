---
title: scroll的问题
type: cookbook
order: 11
---

`scroll-view`在`scroll-x`的时候，`app-nvue`需要在`scroll`上面设置`flex-direction:row;`.

app-android端内容需要在被包裹一层才能滚动。

flex布局下mp/h5，需要加一层来加上flex布局。vue页面模式下最新版有问题，nvue没有问题。

Android端不能设置`scroll-y`（`false`也不可以），否则无法横向滚动

app-nvue 无法使用 white-space inline-block等非flex布局；

测试：

- nvue页面下，scroll-view 的横向滚动各写法不同端的兼容问题；
- vue页面下，scroll-view 的横向滚动各写法不同端的兼容问题；

最新版编译器，纯flex布局在vue页面实现横向滚动，目前必须加宽度限定，nvue页面模式不需要。
