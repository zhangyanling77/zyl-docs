<template>
  <div>
    <zyl-upload
      name="avatar"
      action="http://localhost:3000/upload"
      accept="image/jpeg,image/png"
      :file-list="fileList"
      :limit="3"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :before-upload="handleBeforeUpload"
      :drag="false"
    >
      <zyl-button icon="upload" type="primary" icon-position="right">上传文件</zyl-button>
      <div slot="tip">只能上传jpeg、png文件，且大小不超过500kb</div>
    </zyl-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          url: '1.jpg',
          name: 'avatar.jpg'
        },
      ],
    }
  },
  methods: {
     handleExceed(files, fileList) {
      // 超过限制后的处理
      console.log('您已经超过文件上传个数限制了！')
    },
    handleChange(file) {
      console.log('当前选择了文件', file)
    },
    handleSuccess() {

    },
    handleError() {

    },
    handleProgress() {

    },
    handleBeforeUpload(file) {
      const limitSize = file.size / 1024 < 500; // 500Kb限制
      const allowImage = file.name.includes('.jpg') || file.name.includes('.jpeg') || file.name.includes('.png')

      if (!allowImage) {
        console.log('上传图片只能是 JPG 或 PNG 格式!')
      }
      if (!limitSize) {
        console.log('上传图片大小不能超过 500kb!')
      }
      return allowImage && limitSize;
    },
  }
}
</script>

