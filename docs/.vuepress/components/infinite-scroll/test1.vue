<template>
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
</template>

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
