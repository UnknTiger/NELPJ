<template>
  <HMessages />
  <q-separator inset />
  <div class="q-pa-lg" style="width: 100%">
    <q-carousel arrows animated v-model="slide" height="400px" class="">
      <q-carousel-slide
        class="custom-caption"
        name="first"
        img-src="http://www.newearthoflovepeaceandjoy.com/images/PHOTOSET5.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-white">
            NATIONWIDE TOTAL CONSECRATION LAUNCHING
          </div>
          <div class="text-subtitle6">12/10/11</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="http://www.newearthoflovepeaceandjoy.com/images/Malaybalay.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Malaybalay</div>
          <div class="text-subtitle6">12/17/11</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Third stop</div>
          <div class="text-subtitle6">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <q-separator inset />
  <FndMessagesVue />
</template>

<script setup>
import HMessages from "./HompageComponents/HMessages.vue";
import FndMessagesVue from "./HompageComponents/FndMessages.vue";
import { ref } from "vue";

const slide = ref("first");
</script>
<style scoped>
.custom-caption {
  text-align: center;
  padding: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
