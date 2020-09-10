---
title: 瀑布流：myp-waterfall
type: guide
order: 63
---

## Props

| Prop name      | Description | Type           | Values | Default                                                                              |
| -------------- | ----------- | -------------- | ------ | ------------------------------------------------------------------------------------ |
| includeXBar    |             | boolean        | -      | true                                                                                 |
| overrideXBar   |             | boolean        | -      | true                                                                                 |
| xBarBgType     |             | string         | -      | ''                                                                                   |
| xBarStyle      |             | string         | -      | ''                                                                                   |
| showScrollbar  |             | boolean        | -      | true                                                                                 |
| includeStatus  |             | boolean        | -      | false                                                                                |
| includeNav     |             | boolean        | -      | false                                                                                |
| tabHeight      |             | number         | -      | 0                                                                                    |
| extra          |             | number\|string | -      | 0                                                                                    |
| height         |             | number\|string | -      | '0'                                                                                  |
| useFlex        |             | boolean        | -      | false                                                                                |
| width          |             | string         | -      | '750rpx'                                                                             |
| footToken      |             | string         | -      | '0px'                                                                                |
| boxStyle       |             | string         | -      | ''                                                                                   |
| scrollStyle    |             | string         | -      | ''                                                                                   |
| bgType         |             | string         | -      | 'page'                                                                               |
| hasFoot        |             | boolean        | -      | false                                                                                |
| footBottom     |             | string         | -      | '0px'                                                                                |
| footStyle      |             | string         | -      | ''                                                                                   |
| columnCount    |             | string\|number | -      | 'auto'                                                                               |
| columnWidth    |             | string\|number | -      | 'auto'                                                                               |
| columnGap      |             | string         | -      | '0'                                                                                  |
| leftGap        |             | string         | -      | '0'                                                                                  |
| rightGap       |             | string         | -      | '0'                                                                                  |
| useLoading     |             | boolean        | -      | false                                                                                |
| loadMoreOffset |             | number         | -      | 60                                                                                   |
| autoUpdate     |             | boolean        | -      | false                                                                                |
| down           |             | object         | -      | {<br> use: true,<br> offset: uni.upx2px(140),<br> inRate: 0.8,<br> outRate: 0.2<br>} |
| up             |             | object         | -      | {<br> use: true,<br> offset: 80<br>}                                                 |

## Events

| Event name | Type      | Description |
| ---------- | --------- | ----------- |
| scroll     | undefined |
| down       |           |
| up         |           |
| inited     |           |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| header  |             |          |
| default |             |          |

---
