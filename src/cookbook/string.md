---
title: 空字符串的判定
type: cookbook
order: 13
---

// 需要注意，如果我们在外部设置 `text=""`，mp中会显示true，我们应该设置`:text="null"`。或者 `:text="blankStr" blankStr = ''`.

// 如果在props内部，`default: ""` 会显示空

当然副职null的情况，我们需要自己判断下显示 `text || ''`
