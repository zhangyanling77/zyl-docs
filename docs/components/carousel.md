# Carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法
<demo-block>
:::slot source
<carousel-test1></carousel-test1>
:::

:::slot highlight
```html
<div>
  <zyl-carousel
    height="240px"
    :autoplay="true"
    :delay="2000"
    :initial-index="0"
    :loop="true"
    @change="change"
  >
    <zyl-carousel-item>
      <div class="content bg-purple-dark">
        内容1
      </div>
    </zyl-carousel-item>
    <zyl-carousel-item>
      <div class="content bg-purple">
        内容2
      </div>
    </zyl-carousel-item>
    <zyl-carousel-item>
      <div class="content bg-purple-dark">
        内容3
      </div>
    </zyl-carousel-item>
  </zyl-carousel>
</div>

<script>
export default {
  methods: {
    change(index) {
      console.log(index)
    },
  }
}
</script>

<style lang="scss">
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .content {
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>

```
:::
</demo-block>

## Carousel Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
height | 走马灯的高度 | string | - | 200px
autoplay | 是否自动切换 | boolean | - | true
delay | 自动切换的时间间隔，单位为毫秒 | number | - | 3000
initialIndex | 初始状态激活的幻灯片的索引，从 0 开始 | number | - | 0
loop | 是否循环显示 | boolean | - | true

## Carousel Events
事件名称|说明|回调参数
:-|:-|:-
change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 （index）
