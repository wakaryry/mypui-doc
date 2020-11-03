---
title: 自定义icon
type: cookbook
order: 6
---

# 总结
- 设置一个独特的 fontFamily；
- 更改icons数据之后，如果icons出不来，删除基座重新编译；
- 直接写到页面用`&#xe6b1;`，使用变量的时候用`\ue6b1`；

比如：`'link': "&#xe6b1;"` 要变成 `'link': "\ue6b1"`

直接写到页面用`&#xe6b1;`，使用变量的时候用`\ue6b1`

# 注意
如果icons的 base64 数据 有变化，或者更换了fontFamily的名字，需要 删除 基座，重新编译 才能有效。
