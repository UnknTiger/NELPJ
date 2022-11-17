<template>
  <h1>be part of us page</h1>
  <!-- Foundation Message -->
  {{ getA() }}
  {{ getB() }}
  <!-- Membership apaplication form for admin -->
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TestComponent",
  data() {
    const a = "1";

    return { a };
  },
  methods: {
    getA() {
      return this.a;
    },
  },
  computed() {},
  setup() {
    const b = ref(1);

    const getB = () => {
      return b;
    };

    return { b, getB };
  },
});
</script>
<style></style>
