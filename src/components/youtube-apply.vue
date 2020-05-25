<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <!-- or with a custom component identifier -->
    <youtube-media :video-id="videoId" 
    :player-width="(640/2).toString()" :player-height="(360/2).toString()"
    ></youtube-media>

    <h3>{{videoId}}</h3>
    <h3>{{startTime}}</h3>
  </div>
</template>

<script>
import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      youtubeUrl: "https://youtu.be/3fZuR3GUL2I?t=15"
    };
  },
  computed: {
    videoId() {
      return getIdFromURL(this.youtubeUrl);
    },
    startTime() {
      return getTimeFromURL(this.youtubeUrl);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
