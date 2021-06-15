---
title: app
type: cookbook
order: 21
---

页面与组件的生命周期如何理解？

先组件created，然后页面onload，这些都是同步任务。

父子组件的生命周期先后顺序？

先父组件created，然后子组件created，子组件mounted，然后父组件mounted。都是同步任务。
