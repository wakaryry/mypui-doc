---
title: 宫格：myp-grid
type: guide
order: 200
---

## Props

| Prop name    | Description                                               | Type    | Values | Default   |
| ------------ | --------------------------------------------------------- | ------- | ------ | --------- |
| items        | 数据源                                                    | array   | -      | []        |
| flex         | 布局方式，除开 grid 值外，还可以选择 justify-content 的值 | string  | -      | 'grid'    |
| itemWidth    | item 的宽度，只有当 flex 不是 grid 的时候起效             | string  | -      | ''        |
| itemSpace    | item 之间的间隙，只有当 flex 不是 grid 的时候有效         | string  | -      | ''        |
| mode         | grid-item 的布局方式                                      | string  | -      | 'top'     |
| columns      | 每一行的数量                                              | number  | -      | 4         |
| itemHeight   | 自定义的高度                                              | string  | -      | ''        |
| hasLine      | 是否带有分割线                                            | boolean | -      | true      |
| space        | grid-item 的 space                                        | string  | -      | '12rpx'   |
| textType     | item 的文字颜色主题                                       | string  | -      | ''        |
| textSize     | item 的文字尺寸主题                                       | string  | -      | ''        |
| iconType     | item 的图标颜色主题                                       | string  | -      | ''        |
| iconSize     | item 的图标尺寸主题                                       | string  | -      | 'll'      |
| border       | 边框主题                                                  | string  | -      | 'all'     |
| radius       | 圆角主题                                                  | string  | -      | 'base'    |
| hover        | hover 主题                                                | string  | -      | 'opacity' |
| iconLabel    | item 的 icon 字段                                         | string  | -      | 'icon'    |
| textLabel    | item 的 text 字段                                         | string  | -      | 'text'    |
| isIcon       | item 的 icon 是否是图标                                   | boolean | -      | true      |
| badgeConfig  | badge 样式的全局配置                                      | object  | -      | {}        |
| boxStyle     | 外层样式                                                  | string  | -      | ''        |
| itemBoxStyle | item 的外层样式                                           | string  | -      | ''        |
| iconStyle    | 图标样式                                                  | string  | -      | ''        |
| iconBoxStyle | 图标的外层样式                                            | string  | -      | ''        |
| textStyle    | 文字样式                                                  | string  | -      | ''        |

## Events

| Event name  | Type      | Description |
| ----------- | --------- | ----------- |
| itemClicked | undefined |

---

