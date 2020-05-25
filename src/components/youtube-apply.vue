<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <!-- or with a custom component identifier -->
    <youtube-media :video-id="videoId"></youtube-media>

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
