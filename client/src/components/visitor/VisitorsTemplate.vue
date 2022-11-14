<template>
  <VHeaderMenu />
  <GeneralFooter />
</template>
<script setup>
import VHeaderMenu from "./VHeaderMenu.vue";
import GeneralFooter from "../generals/NelpjFooter.vue";
import { onBeforeMount, ref } from "vue";

//side drawer
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style></style>
