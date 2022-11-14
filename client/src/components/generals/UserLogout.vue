<template>
  <q-toolbar @click="logout()" color="positive" class="text-white">Logout</q-toolbar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  router.push("/");
}
</script>

<style></style>
