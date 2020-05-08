# Progress 进度条
用于展示操作进度，告知用户当前状态和预期。

<demo-block>
:::slot source
<progress-test1></progress-test1>
:::

通过设置percentage属性，表示进度条对应的百分比，必填，必须在 0-100。

:::slot highlight
```html
<div>
  <zyl-progress 
    :strokeWidth="10"
    :percentage="percent"
    color="lightblue"
  ></zyl-progress>
  <div>
    当前进度：{{percent}}
  </div>
</div>

<script>
export default {
  data() {
    return {
      percent: 50
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
percentage | 百分比（必填）| number | 0-100 | 0
strokeWidth | 进度条的宽度，单位px | number | - | 6
color | 进度条背景色 | string | - | `lightgreen`
