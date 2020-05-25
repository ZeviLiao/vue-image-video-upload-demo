<template>
  <div id="app">
    <image-upload msg="images" />
    <video-upload msg="vides" />
    <youtube-apply msg="youtube" />
  </div>
</template>

<script>
import ImageUpload from "./components/imageUpload";
import VideoUpload from "./components/videoUpload";
import YoutubeApply from "./components/youtube-apply";

export default {
  name: "app",
  components: {
    ImageUpload,
    VideoUpload,
    YoutubeApply
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
