<template>
  <q-layout view="hHh lpR fff">
    <!-- Header -->
    <VHeaderMenu />
    <!-- <GeneralMenus /> -->
    <!-- Container -->
    <q-page-container class="q-mx-sm q-my-sm">
      <!-- class="q-mx-md q-mt-md" -->
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <GeneralFooter />
  </q-layout>
</template>
<script setup>
// import GeneralMenus from "../generals/GeneralMenus.vue";
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
