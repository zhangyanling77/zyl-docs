<template>
  <div>
    <zyl-pagination
      :total="10"
      :pager-count="7"
      :current-page.sync="currentPage"
    ></zyl-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 5
    }
  }
}
</script>
