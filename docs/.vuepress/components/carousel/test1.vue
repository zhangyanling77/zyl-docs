<template>
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
</template>

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

