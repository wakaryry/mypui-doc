---
title: 导航栏：myp-navbar
type: guide
order: 300
---

myp-navbar 是一个通用的自定义导航栏组件。不支持设置背景图片。如果您需要特殊的导航栏，建议您直接 写一个，而不是 去适配 myp-navbar。

## 使用

```html
<myp-navbar title="我是导航栏"></myp-navbar>
```

这就是一个默认 标题栏居中 的导航栏。

myp-navbar 主要的字段就是 `title` `lefts` `rights` `@leftAction` `@rightAction`。一个通用的导航栏，通常就是 中间标题 + 左右按钮。

下面，我们从 中间标题 讲起。

## 中间标题

我们默认采用了 左-中-右 三段式的设计。左右两侧分别是 200rpx，中间是 350rpx。当你需要一些别的 设计的时候，您可能需要修改 这三段各段的宽度。默认他们就是排成一行，不换行。

中间 title，包含了 title 和 icon，也就是允许在文字的右侧设置一个 icon 图标。

### title

中间标题栏，以及它的主题、大小、个性化等设置。

`title` `titleType` `titleSize` `titleStyle`。

- title：导航栏标题，比如：首页；
- titleType：标题的主题色，也就是文字的颜色，比如：nav-title，具体看 `myp-color-` 下可以使用的主题色；
- titleSize：标题的字体大小，也就是 font-size，比如：nav-title，具体看 `myp-size-` 下可以使用的尺寸；
- titleStyle：对标题的style进行设置，比如：颜色、尺寸等；

### icon

标题右侧出现的 图标，以及它的主题、大小、个性化等设置。

`icon` `iconType` `iconSize` `iconStyle`。

- icon：图标的名字，可以是 字体图标的名字，也可以是 图片地址，支持网络图片；
- iconType：图标的主题，也就是图标的颜色；
- iconSize：图标的尺寸，也就是 font-size，支持：ss s base l ll，具体多大得看你的主题配置文件；
- iconStyle：style的个性化设置，图片的话需要在这里设置宽高等信息；

### centerStyle

在 title与icon 的外层，包裹了一个 view，它对外暴露了 style的设置，也就是 centerStyle。我们一般用于修改中间标题区的宽度。

## 左右按钮

左右按钮的设置非常灵活，支持 一次性设置样式，也支持 单独的配置样式。左右按钮支持 图标与文字 的组合。

`lefts` `rights`

`itemTextType` `itemTextSize` `itemTextStyle` `itemIconType` `itemIconSize` `itemIconStyle` 

`leftItemStyle` `leftBgType` `leftStyle`

`rightItemStyle` `rightBgType` `rightStyle`

lefts rights 是一个数组，

### 单独配置

## 样例

