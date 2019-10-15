# breadcrumb 面包屑

面包屑用于当前页面到主页的路径导航。

例子代码：

![](res/1.png)

```html
<div class="si-breadcrumb">
    <span class="si-breadcrumb-link">主页</span>
    <span class="si-breadcrumb-separator">&gt;</span>
    <span class="si-breadcrumb-link">编程语言</span>
    <span class="si-breadcrumb-separator">&gt;</span>
    <span class="si-breadcrumb-text">Java</span>
</div>
```

* `si-breadcrumb`：指定到包裹面包屑的`<div>`上
* `si-breadcrumb-link`：指定到那些有链接功能的面包屑元素上
* `si-breadcrumb-text`：指定到没有链接功能的面包屑元素上
* `si-breadcrumb-separator`：指定到面包屑分隔符上
