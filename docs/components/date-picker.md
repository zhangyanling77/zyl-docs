# DatePicker 日期选择器
用于选择或输入日期

## 基础用法
<demo-block>
:::slot source
<date-picker-test1></date-picker-test1>
:::

:::slot highlight
```html
  <div>
    <zyl-date-picker v-model="value"></zyl-date-picker>
  </div>

  <script>
  export default {
    data() {
      return {
        value: new Date()
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
value | 绑定值 | date | - | -
