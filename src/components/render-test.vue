
<script>
const child1 = () => import("./child1.vue");

export default {
  components: { Child1: child1 },
  render() {
    return <Child1 level={1}>我是標題</Child1>;
  }
};
</script>