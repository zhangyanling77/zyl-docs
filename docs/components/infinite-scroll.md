# InfiniteScroll 无限滚动
滚动至底部时，加载更多数据。

## 基础用法
在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

<demo-block>
:::slot source
<infinite-scroll-test1></infinite-scroll-test1>
:::

:::slot highlight
```html
<div style="overflow-y:scroll;border:1px solid #ddd;" >
  <ul
    v-infinite-scroll="load"
    infinite-scroll-disabled="hasMore"
    infinite-scroll-delay="delay"
    infinite-scroll-distance="distance"
    infinite-scroll-immediate="immediate"
    class="box"
  >
    <li v-for="c in count" :key="c">{{c}}</li>
  </ul>
</div>

<script>
export default {
  data() {
    return {
      count: 0,
      hasMore: false,
      delay: 200,
      distance: 30,
      immediate: true,
    }
  },
  methods: {
    load() {
      this.count += 2
    },
  }
}
</script>

<style lang="scss">
ul {
  list-style: none;
}
.box {
  width: 400px;
  height: 300px;
}
</style>

```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
infinite-scroll-disabled | 是否禁用 | boolean | - | false
infinite-scroll-delay | 节流时延，单位为ms | number | - | 200
infinite-scroll-distance | 触发加载的距离阈值，单位为px | number | - | 10
infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器 | boolean | - | false
