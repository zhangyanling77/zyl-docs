# Layout 布局组件
通过基础的24分栏，迅速简便地创建布局。
## 基础布局
使用单一分栏创建基础的栅格布局。

<demo-block>
:::slot source
<layout-test1></layout-test1>
:::

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

:::slot highlight
```html
<div>
    <zyl-row>
      <zyl-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
    </zyl-row>
    <br />
    <zyl-row>
      <zyl-col :span="12">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
      <zyl-col :span="12">
        <div class="grid-content bg-purple"></div>
      </zyl-col>
    </zyl-row>
    <br />
    <zyl-row>
      <zyl-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
      <zyl-col :span="8">
        <div class="grid-content bg-purple"></div>
      </zyl-col>
      <zyl-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
    </zyl-row>
    <br />
    <zyl-row>
      <zyl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
      <zyl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zyl-col>
      <zyl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
      <zyl-col :span="6">
        <div class="grid-content bg-purple"></div>
      </zyl-col>
    </zyl-row>
  </div>

  <style>
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
  </style>
```
:::
</demo-block>

## 分栏间隔
分栏之间存在间隔

<demo-block>
:::slot source
<layout-test2></layout-test2>
:::

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

:::slot highlight
```html
<div>
  <zyl-row :gutter="16">
    <zyl-col :span="6">
      <div class="grid-content bg-purple-dark">col-6</div>
    </zyl-col>
    <zyl-col :span="6">
      <div class="grid-content bg-purple">col-6</div>
    </zyl-col>
    <zyl-col :span="6">
      <div class="grid-content bg-purple-dark">col-6</div>
    </zyl-col>
    <zyl-col :span="6">
      <div class="grid-content bg-purple">col-6</div>
    </zyl-col>
  </zyl-row>
</div>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::
</demo-block>

## 分栏偏移
支持偏移指定的栏数

<demo-block>
:::slot source
<layout-test3></layout-test3>
:::

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

:::slot highlight
```html
<div>
  <zyl-row>
    <zyl-col :span="6">
      <div class="grid-content bg-purple-dark"></div>
    </zyl-col>
    <zyl-col :span="6" :offset="12">
      <div class="grid-content bg-purple"></div>
    </zyl-col>
  </zyl-row>
</div>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::
</demo-block>

## 对齐方式
通过 flex 布局来对分栏进行灵活的对齐

<demo-block>
:::slot source
<layout-test4></layout-test4>
:::

可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式

:::slot highlight
```html
<div>
  <zyl-row justify="center">
    <zyl-col :span="4">
      <div class="grid-content bg-purple-dark"></div>
    </zyl-col>
    <zyl-col :span="4">
      <div class="grid-content bg-purple"></div>
    </zyl-col>
  </zyl-row>
  <br/>
  <zyl-row justify="space-between">
    <zyl-col :span="4">
      <div class="grid-content bg-purple-dark"></div>
    </zyl-col>
    <zyl-col :span="4">
      <div class="grid-content bg-purple"></div>
    </zyl-col>
  </zyl-row>
</div>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::
</demo-block>

## 响应式布局
参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl

<demo-block>
:::slot source
<layout-test5></layout-test5>
:::

:::slot highlight
```html
<div>
  <zyl-row :gutter="10">
    <zyl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-dark"></div>
    </zyl-col>
      <zyl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple"></div>
    </zyl-col>
      <zyl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-dark"></div>
    </zyl-col>
      <zyl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </zyl-col>
  </zyl-row>
</div>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::
</demo-block>

## Row Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
gutter | 栅格间隔 | number | - | 0
justify | flex布局下的水平排列方式 | string | - | start


## Col Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
span | 栅格占据的列数 | number | - | 24
offset | 栅格左侧的间隔格数 | number | 0
xs | `< 768px`响应式栅格数或者栅格属性对象 | number/object (例如：{ span: 4, offset: 4 }) | - | -
sm | `≥ 768px`响应式栅格数或者栅格属性对象 | number/object (例如：{ span: 4, offset: 4 }) | - | -
md | `≥ 992px`响应式栅格数或者栅格属性对象 | number/object (例如：{ span: 4, offset: 4 }) | - | -
lg | `≥ 1200px`响应式栅格数或者栅格属性对象 | number/object (例如：{ span: 4, offset: 4 }) | - | -
xl | `≥ 1920px`响应式栅格数或者栅格属性对象 | number/object (例如：{ span: 4, offset: 4 }) | - | -
