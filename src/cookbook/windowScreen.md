---
title: window
type: cookbook
order: 16
---

在头条小程序里面，window的高度不会包含navbar和statusbar的高度，不管是否设置了navbar。总是会比screenHeight少个64px=44px+20px

在其它地方，windowHeight会随着是否有statusBar和navbar而变化。screenHeight是整个屏幕的高度，总是大于或者等于windowHeight.

我们发现，在关闭了navbar的时候，windowHeight和screenHeight是一样的高度。不过头条小程序依然少64px
