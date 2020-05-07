<template>
  <div>
    <zyl-date-picker v-model="value"></zyl-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    }
  }
}
</script>
