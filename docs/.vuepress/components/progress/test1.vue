<template>
  <div>
    <zyl-progress 
      :strokeWidth="10"
      :percentage="percent"
      color="#409EFF"
    ></zyl-progress>
    <div>
      当前进度：{{percent}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 50
    }
  }
}
</script>
