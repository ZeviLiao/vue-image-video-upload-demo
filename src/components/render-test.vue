
<template>
  <div>
    <child1 :level="level">我是标题</child1>
  </div>
</template>
<script>

const child1 = () => import("./child1.vue");

export default {
  components: { child1 },
  data() {
    return {
      level: 1
    };
  }
};
</script>