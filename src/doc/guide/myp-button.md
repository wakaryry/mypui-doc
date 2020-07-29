---
title: 按钮：myp-button
type: guide
order: 400
---

### 规则

- 支持纯文字
- 支持icon+文字；
- 支持loading+文字
- 布局是icon/loading在左，文字在右；
- icon和loading二选一，loading为true，icon将会隐藏
- 兼容nvue/vue；

## 使用

### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|--------|-----|
| text | String |  | 确定 | 按钮的文字描述。|
| icon | String | 否 | 空 | icon的名字，或者图片地址，图片会自动识别，默认不带icon。 |
| loading | Boolean | 否 | false | 是否显示loading。true时显示loading。 |
| loadingSrc | String | 否 | 空 | loading为true时显示，这时候icon会隐藏。默认gif是：`/static/ui/loading.gif`。|
| bgType | String | 否 | 白色 | 背景色主题配置。可以取`nav`/`primary`/`success`/`warning`/`error`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-bg`。|
| height | String | 否 | 100rpx | 按钮高度，单位rpx。可以取`ss`/`s`/`base`/`l`/`ll`。|
| hover | String | 否 | opacity | 按钮的hover效果，状态为disabled和loading下hover无效。可以取`opacity`/`bg`/`bg-opacity`。|
| radius | String | 否 | base | 按钮圆角设置。可以取`ss`/`s`/`base`/`l`/`ll`，`none`取消圆角。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-radius-base`。|
| border | String | 否 | all | 边框设置。可以取`all-light`/`all-dark`/`all-primary`/`all-success`/`all-warning`/`all-error`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-border-all`。|
| disabled | Boolean | 否 | false | 禁用点击，且会具备`myp-disabled`class的禁用效果 |
| highlight | Boolean | 否 | false | 用于状态标记，是否`hightlight`，方便设置和切换状态使用，为true时，可设置按钮`highlightStyle`/`highlightTextStyle`/`highlightIconStyle`。 |
| space | String | 否 | 12rpx | `loading/icon`与`text`之间`margin-left`的间距。 |
| textType | String | 否 | text | text字体颜色设置。可以取`nav`/`text`/`primary`/`success`/`warning`/`error`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-color`。 |
| textSize | String | 否 | 空 | text字体大小设置。可以取`ss`/`s`/`base`/`l`/`ll`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-size`。 |
| iconType | String | 否 | 空 | icon颜色设置。可以取`nav`/`text`/`primary`/`success`/`warning`/`error`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-color`。 |
| iconSize | String | 否 | `l` | icon大小设置。可以取`ss`/`s`/`base`/`l`/`ll`。更多参数设置查看`base.scss`文件，默认对应的`class`为`myp-size`。 |
| iconMode | String | 否 | aspectFill | 当icon为图片时的mode，更多参数查看uni的image标签mode属性。 |
| boxStyle | String | 否 | 空 | 覆盖组件最外层样式。 |
| disabledStyle | String | 否 | 空 | 覆盖组件为disabled状态时最外层样式。 |
| highlightStyle | String | 否 | 空 | 覆盖组件为highlight状态时最外层样式。 |
| textStyle | String | 否 | 空 | 覆盖组件内text样式。 |
| disabledTextStyle | String | 否 | 空 | 覆盖组件disabled状态时text样式。|
| highlightTextStyle | String | 否 | 空 | 覆盖组件highlight状态时text样式。 |
| iconStyle | String | 否 | 空 | 覆盖组件内icon样式。 |
| disabledIconStyle | String | 否 | 空 | 覆盖组件为disabled时icon样式。 |
| highlightIconStyle | String | 否 | 空 | 覆盖组件为highlight时icon样式。 |
| loadingWidth | String | 否 | 36rpx | 设置loading的宽度。|
| loadingHeight | String | 否 | 36rpx | 设置loading的高度。|

- 默认`button`内是水平垂直居中的，`boxStyle`可以覆盖掉这个设置；
- 其它的`style`设置可以覆盖掉这些快捷设置的效果；
- 既满足一键配置，也满足灵活定义。也就是满足共性，包容特性；
- 具体的`props`取值，应该参考`base.scss`以及`mypui.scss`；

### slot

> 默认slot

### 事件回掉
| Event     | Params   | Description  |
|--------|--------|-----|
| buttonClicked | | 点击触发 |

### 示例与结果

