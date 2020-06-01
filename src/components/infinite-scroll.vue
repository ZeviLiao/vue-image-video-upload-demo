<template>
  <div style="margin:60px;padding:60px;background:yellow">
    <div
      class="infinite-list-wrapper"
      ref="project_card_list"
      :style="`height:${height}px;overflow:auto;margin-top:100px`"
    >
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
      </ul>
      <p v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$once("hook:mounted", async () => {
      this.height =
        document.documentElement.clientHeight -
        this.$refs.project_card_list.getBoundingClientRect().top;
      window.addEventListener("resize", this.resize);
      this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("resize", this.resize);
      });
    });
  },
  data() {
    return {
      count: 10,
      loading: false,
      height: 300
    };
  },
  computed: {
    noMore() {
      return this.count >= 200;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 50);
    },
    resize() {
      this.height =
        document.documentElement.clientHeight -
        this.$refs.project_card_list.getBoundingClientRect().top;

      console.log({
        clientHeight: document.documentElement.clientHeight,
        getBoundingClientRect_top: this.$refs.project_card_list.getBoundingClientRect()
          .top,
        height: this.height
      });
    }
  }
};
</script>

<style>
.infinite-list-wrapper {
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  /* margin: 10px; */
  color: #7dbcfc;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #fff6f6;
  color: #ff8484;
  /* margin: 5px; */
}

.list{
  display: flex;
  flex-wrap: wrap;
  
}

.list-item {
  width: 100px;
  height: 100px;
  margin:15px;
}

body {
  margin: 0;
}
</style>