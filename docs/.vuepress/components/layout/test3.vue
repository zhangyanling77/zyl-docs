<template>
  <div>
    <zyl-row>
      <zyl-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </zyl-col>
      <zyl-col :span="6" :offset="12">
        <div class="grid-content bg-purple"></div>
      </zyl-col>
    </zyl-row>
  </div>
</template>

<style lang="scss">
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
