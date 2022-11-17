<template>
  <div class="text-center">
    <h1>ERROR 404</h1>
    <p class="text-center">Page not found</p>

    <div class="q-pa-md q-gutter-sm">
      <q-btn @click="home" color="secondary" label="Go back home" />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const routes = router.getRoutes();
function home() {
  router.push("/");
}
</script>
