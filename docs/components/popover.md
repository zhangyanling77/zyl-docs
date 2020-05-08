# Popover 弹出框

## 基础用法
<demo-block>
:::slot source
<popover-test1></popover-test1>
:::

:::slot highlight
```html
<div>
  <zyl-popover
    v-model="popVal1"
    width="200px"
    title="标题"
    content="内容，这是一个popover"
    trigger="click"
    placement="bottom"
  >
    <zyl-button slot="reference" type="primary">click激活</zyl-button>
  </zyl-popover>

  <zyl-popover
    v-model="popVal2"
    width="200px"
    title="标题"
    content="内容，这是一个popover"
    trigger="hover"
    placement="top"
  >
    <zyl-button slot="reference" type="primary">hover激活</zyl-button>
  </zyl-popover>
</div>

<script>
export default {
  data() {
    return {
      popVal1: false,
      popVal2: false
    }
  }
}
</script>

```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
trigger | 触发方式 | string | `click/hover` | click
width | 宽度 | string | - | - 
title | 标题 | string | - | -
content | 显示的内容，也可通过 `slot` 传入DOM | string | - | -
placement | 出现的位置 | string | `top/bottom/left/right` | bottom
value/v-model | 状态是否可见 | boolean | - | false

