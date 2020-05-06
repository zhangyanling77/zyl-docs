# Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本解构：

`<zyl-container>`：外层容器。当子元素中包含`<zyl-header>`或`<zyl-footer>`时，全部子元素会垂直上下排列，否则会水平左右排列。

`<zyl-header>`：顶栏容器。

`<zyl-aside>`：侧边栏容器。

`<zyl-main>`：主要区域容器。

`<zyl-footer>`：底栏容器。


> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<zyl-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<zyl-container>`。

## 常见页面布局
<demo-block>
:::slot source
<container-test1></container-test1>
:::

:::slot highlight
```html
  <div>
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-main>Main</zyl-main>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-main>Main</zyl-main>
      <zyl-footer>Footer</zyl-footer>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-main>Main</zyl-main>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-container>
        <zyl-aside width="200px">Aside</zyl-aside>
        <zyl-main>Main</zyl-main>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-container>
        <zyl-aside width="200px">Aside</zyl-aside>
        <zyl-container>
          <zyl-main>Main</zyl-main>
          <zyl-footer>Footer</zyl-footer>
        </zyl-container>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-container>
        <zyl-header>Header</zyl-header>
        <zyl-main>Main</zyl-main>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-container>
        <zyl-header>Header</zyl-header>
        <zyl-main>Main</zyl-main>
        <zyl-footer>Footer</zyl-footer>
      </zyl-container>
    </zyl-container>
  </div>

  <style>
 .zyl-header, .zyl-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .zyl-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .zyl-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .zyl-container {
    margin-bottom: 40px;
  }
  
  .zyl-container:nth-child(5) .zyl-aside,
  .zyl-container:nth-child(6) .zyl-aside {
    line-height: 260px;
  }
  
  .zyl-container:nth-child(7) .zyl-aside {
    line-height: 320px;
  }
</style>
```
:::
</demo-block>

## Aside Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
width | 侧边栏宽度 | string | - | 300px
