# Pagination 分页
当数据量过多时，使用分页分解数据。

## 基础用法
<demo-block>
:::slot source
<pagination-test1></pagination-test1>
:::

:::slot highlight
```html
<div>
  <zyl-pagination
    :total="10"
    :pager-count="7"
    :current-page.sync="currentPage"
  >
  </zyl-pagination>
</div>

<script>
export default {
  data() {
    return {
      currentPage: 5
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
total | 总条目数 | number | - | 1
pager-count | 页码按钮的数量，当总页数超过该值时会折叠 |  number | 大于等于 5 且小于等于 21 的奇数 | 7
current-page | 当前页数，支持 .sync 修饰符 | number | - | 1

