# Upload 文件上传
通过点击或者拖拽上传文件

## 点击上传
<demo-block>
:::slot source
<upload-test1></upload-test1>
:::

通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。可通过设置 `before-upload` 来阻止文件上传操作。

:::slot highlight
```html
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
```
:::
</demo-block>

## 拖拽上传
<demo-block>
:::slot source
<upload-test2></upload-test2>
:::

通过设置 `drag` 属性展示拖拽上传。

:::slot highlight
```html
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
    :drag="true"
  >
    <zyl-button icon="upload" type="primary" icon-position="right">上传文件</zyl-button>
    <div slot="tip">只能上传jpeg、png文件，且大小不超过500kb</div>
  </zyl-upload>
</div>

<script>
export default {
  data() {
    return {
      fileList: [],
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
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
action | 必选参数，上传的地址 | string | - | -
name | 上传文件的字段名 | string | - | file
accept | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | string | - | -
multiple | 是否支持多选文件 | boolean | - | -
file-list | 上传的文件列表，例如：`[{name:'food.jpg',url:'https://xxx.cdn.com/xxx.jpg'}]` | array | - | []
limit | 最大允许上传的文件个数 | number | - | -
drag | 是否启用推拽上传模式 | boolean | - | false
on-exceed | 文件超出个数限制时的钩子 | function(files, fileList) | - | -
before-upload | 上传文件之前的钩子， 参数为上传的文件，若返回false或者返回Promise且被reject，则停止上传 | function(file, fileList) | - | -
on-change | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList) | - | -
on-success | 文件上传成功时的钩子 | function(response, file) | - | -
on-error | 文件失败时的钩子 | function(error, file) | - | -
on-progress | 文件上传时的钩子 | function(event, file) | - | -
