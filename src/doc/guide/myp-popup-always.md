---
title: 弹窗2：myp-popup-always
type: guide
order: 601
---

myp-popup-always 几乎是与 myp-popup 一样的，属性一样，用法一样。

他们之间的区别在于：

- myp-popup-always 里面的内容不受 v-if 控制，会一直存在于 视图 之中，而 myp-popup 的内容区是 受 v-if 控制的；

- myp-popup-always 因为一直存在，所以它支持 standout 属性，允许 不打开的时候还能够 对外露出一小截；

这里只讲差异的内容，其它内容请查阅：[myp-popup](/doc/guide/myp-popup.html)

## standout

允许对外露出一小截内容，standout 就是对外露出的高度。单位随意，默认 rpx。

## 用途

除了实现 standout 外，myp-popup-always 还能有什么用？


