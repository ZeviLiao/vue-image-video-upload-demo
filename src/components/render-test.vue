<template>
  <div>
    <child1 :name="name" v-model="name"></child1>
    <p>{{name}}</p>
  </div>
</template>
<script>
const child1 = () => import("./child1.vue");
export default {
  components: { child1 },
  data() {
    return {
      name: "Demi"
    };
  }
};
</script>
