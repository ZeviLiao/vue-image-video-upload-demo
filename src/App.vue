<template>
  <div id="app">
    <!-- <image-upload msg="images" />
    <video-upload msg="vides" />
    <youtube-apply msg="youtube" />-->
    <!-- <in-scroll msg="zevi"></in-scroll> -->
    <render-test msg="zevi"></render-test>
  </div>
</template>

<script>
// import ImageUpload from "./components/imageUpload";
// import VideoUpload from "./components/videoUpload";
// import YoutubeApply from "./components/youtube-apply";
// import InScroll from "./components/infinite-scroll";
import RenderTest from "./components/render-test";

export default {
  name: "app",
  components: {
    // ImageUpload,
    // VideoUpload,
    // YoutubeApply
    // InScroll
    RenderTest
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
