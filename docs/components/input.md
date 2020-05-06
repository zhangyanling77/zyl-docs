# Input 输入框
通过鼠标或键盘输入字符

> Input为受控组件，它总会显示Vue绑定值。通常情况下，应当处理 `input`事件，并更新组件的绑定值（或使用 `v-model`）。否则，输入框内显示的值将不会改变。不支持 `v-model`修饰符。

## 基础用法
<demo-block>
:::slot source
<input-test1></input-test1>
:::

:::slot highlight
```html
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
    >
    </zyl-input>
    {{value}}
  </div>

  <script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
  </script>
```
:::
</demo-block>

## 禁用状态
<demo-block>
:::slot source
<input-test2></input-test2>
:::

通过 `disabled` 属性指定是否禁用input组件

:::slot highlight
```html
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      :disabled="true"
      placeholder="请输入内容" 
      name="username"
    >
    </zyl-input>
    {{value}}
  </div>

  <script>
  export default {
    data() {
      return {
        value: 'zhangyanling'
      }
    }
  }
  </script>
```
:::
</demo-block>

## 可清空
<demo-block>
:::slot source
<input-test3></input-test3>
:::

使用 `clearable` 属性即可得到一个可清空的输入框

:::slot highlight
```html
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      clearable
    >
    </zyl-input>
  </div>

  <script>
    export default {
      data() {
        return {
          value: ''
        }
      }
    }
  </script>
```
:::
</demo-block>

## 密码框
<demo-block>
:::slot source
<input-test4></input-test4>
:::

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

:::slot highlight
```html
  <div>
    <zyl-input 
      v-model="value"
      type="password"
      placeholder="请输入内容" 
      name="password"
    >
    </zyl-input>
    <zyl-input 
      v-model="value"
      type="password"
      placeholder="请输入内容" 
      name="password"
      show-password
    >
    </zyl-input>
  </div>

  <script>
    export default {
      data() {
        return {
          value: ''
        }
      }
    }
  </script>
```
:::
</demo-block>

## 带icon的输入框
带有图标标记输入类型

<demo-block>
:::slot source
<input-test5></input-test5>
:::

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标。

:::slot highlight
```html
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      prefix-icon="edit"
    >
    </zyl-input>
    
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      suffix-icon="edit"
    >
    </zyl-input>
  </div>

  <script>
    export default {
      data() {
        return {
          value: ''
        }
      }
    }
  </script>
```
:::
</demo-block>

## Input Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type | 类型 | string | text、password等 | text
name | 原生属性 | string | - | -
placeholder | 输入框占位文本 | string | - | - 
value | 绑定值 | string/number | - | -
disabled | 禁用 | boolean | - | false
clearable | 是否可清空 | boolean | - | false
show-password | 是否显示切换密码图标 | boolean | - | false
prefix-icon | 输入框前置图标 | string | - | -
suffix-icon | 输入框后置图标 | string | - | -

## Input Events
事件名称|说明|回调参数
:-|:-|:-
input | 在input值改变时触发 | (value: string|number)
focus | 在input获得焦点时触发 | (event: Event)
blur | 在input失去焦点时触发 | (event: Event)
change | 在input的值发生改变时触发 | (value: string|number)
