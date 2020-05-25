<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div class="album albumvideo">
      <div>
        <p class="type_title">
          <span>视频介绍</span>
        </p>
        <div class="pic_img">
          <div class="pic_img_box">
            <el-upload
              class="avatar-uploader"
              action="https://www.mocky.io/v2/5185415ba171ea3a00704eed"
              v-bind:data="{FoldPath:'上传目录',SecretKey:'安全验证'}"
              v-bind:on-progress="uploadVideoProcess"
              v-bind:on-success="handleVideoSuccess"
              v-bind:before-upload="beforeUploadVideo"
              v-bind:show-file-list="false"
            >
              <video
                v-if="videoForm.showVideoPath !='' && !videoFlag"
                v-bind:src="videoForm.showVideoPath"
                class="avatar video-avatar"
                controls="controls"
              >您的浏览器不支持视频播放</video>
              <i
                v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                class="el-icon-plus avatar-uploader-icon"
              ></i>
              <el-progress
                v-if="videoFlag == true"
                type="circle"
                v-bind:percentage="videoUploadPercent"
                style="margin-top:7px;"
              ></el-progress>
            </el-upload>
          </div>
        </div>
      </div>
      <p class="Upload_pictures">
        <span></span>
        <span>最多可以上传1个视频，建议大小50M，推荐格式mp4</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: ""
      },
      fileList: [],
      file: ""
    };
  },
  methods: {
    //上传前回调
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov"
        ].indexOf(file.type) == -1
      ) {
        alert("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        alert("视频大小不能超过50MB");
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.fileList = fileList;
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      this.file = file;

      //前台上传地址
      //if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      //} else {
      //     alert("上传失败，请重新上传");
      //}

      //后台上传地址
      // if (res.Code == 0) {
        let url = 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
        this.videoForm.showVideoPath = url // res.Data;
      // } else {
      //   alert(res.Message);
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
