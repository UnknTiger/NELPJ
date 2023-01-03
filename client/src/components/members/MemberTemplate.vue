|
<template>
  <q-layout view="hHh lpR fff">
    <!-- Header -->
    <MHeaderMenus />
    <!-- <GeneralMenus /> -->
    <!-- Container -->
    <q-page-container class="q-mx-md q-mt-md">
      <!-- <router-view /> -->
    </q-page-container>

    <!-- Footer -->
    <NELPJFooter />
  </q-layout>
</template>
<script setup>
import MHeaderMenus from "./MHeaderMenus.vue";
import NELPJFooter from "../generals/NELPJFooter.vue";

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6371da18daff0e1306d73ebc/1ghqbnsh4";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
</script>
<style></style>
