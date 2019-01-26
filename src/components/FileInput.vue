<template>
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img :src="src" class="preImg" >
        <input type="file" class="fileInput1" id="uploader" @change="tirggerFile()" ref="file">
        <div class="caption">
          <h1 style="display: none">{{postUrl}}</h1>
          <p><a href="#" class="btn btn-default" role="button" @click="onUpload1()">点击上传</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.thumbnail{
  min-width: 120px;
  width: 200px;
  max-width: 210px;
}
.preImg{
  margin-top :3%;
  width: 150px;
  min-width: 70px;
  max-width: 200px;
}
.fileInput1{
  position: absolute;
  top: 10px;
  left: 15px;
  width: 200px;
  opacity:0;
  height: 60%;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'FileInput',
  data () {
    return {
      // 转base64码后的data字段
      src: require('..\\assets\\images\\addbtn.png')
    }
  },
  methods: {
    tirggerFile () {
      var f = this.$refs.file.files[0]
      var url = window.URL.createObjectURL(f)
      this.src = url
      // do something...
    },
    onUpload1 () {
      alert(this.postUrl)
      if (this.$refs.file.files[0] == null) return
      let formData = new FormData()
      formData.append('file', this.$refs.file.files[0])
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      //   url修改成服务url
      axios.post(this.postUrl, formData, config).then(function (res) {
        if (res.status === 404) {
          alert('无效url')
        }
      })
    }
  },
  props: ['postUrl']
}
</script>
