#  Button 按钮
常用的操作按钮
## 基础用法
基础的按钮用法

<demo-block>
:::slot source
<button-test1></button-test1>
:::

使用type属性来定义 Button 的样式

:::slot highlight
```html
<div>
  <zh-button>默认按钮</zh-button>
  <zh-button type="primary">主要按钮</zh-button>
  <zh-button type="success">成功按钮</zh-button>
  <zh-button type="info">信息按钮</zh-button>
  <zh-button type="warning">警告按钮</zh-button>
  <zh-button type="danger">危险按钮</zh-button>
</div>
```
:::
</demo-block>

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

<demo-block>
:::slot source
<button-test2></button-test2>
:::

设置icon属性即可，icon 的列表可以参考 zyl-ui 的 icon 组件，也可以设置在文字右边的 icon

:::slot highlight
```html
<div>
  <zyl-button icon="edit" type="primary">主要按钮</zyl-button>
  <zyl-button icon="edit" type="success" icon-position="right">危险按钮</zyl-button>
  <zyl-button icon="search" type="danger"></zyl-button>
</div>
```
:::
</demo-block>

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态

<demo-block>
:::slot source
<button-test3></button-test3>
:::

要设置为 loading 状态，只要设置loading属性为true即可

:::slot highlight
```html
<div>
  <zyl-button type="primary" loading>加载中...</zyl-button>
</div>
```
:::
</demo-block>

## 按钮组
以按钮组的方式出现，常用于多项类似操作

<demo-block>
:::slot source
<button-test4></button-test4>
:::

使用`<zyl-button-group>`标签来嵌套你的按钮

:::slot highlight
```html
<div>
  <zyl-button-group>
    <zyl-button type="primary" icon="left" icon-position="left">上一页</zyl-button>
    <zyl-button type="primary" icon="right" icon-position="right">下一页</zyl-button>
  </zyl-button-group>

  <zyl-button-group>
    <zyl-button icon="search"></zyl-button>
    <zyl-button icon="setting"></zyl-button>
    <zyl-button icon="edit"></zyl-button>
  </zyl-button-group>
</div>
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type|类型| string |primary / success / warning / danger / info | default
icon|图标类名| string | - | -
loading|是否加载中状态| boolean | - | false
position|图标位置| string | left / right | left
