<template>
  <div class="q-pa-md">
    <q-carousel arrows animated v-model="slide" height="400px">
      <q-carousel-slide
        class="custom-caption"
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-white">First stop</div>
          <div class="text-subtitle6">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Second stop</div>
          <div class="text-subtitle6">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Third stop</div>
          <div class="text-subtitle6">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div>
    <h1>Landing page</h1>
    <p class="">
      "In cases which concern private revelations, it is better to believe than not
      believe, for if you believe, and it is proven true, you will be happy that you have
      believed, because our Holy Mother asked it. If you believe and it shall be proven
      false, you will receive all blessings as if it had been true, because you believed
      it to be true." <br />
    </p>
    <p class="fst-italic">Pope Urban VIII, 1623-1644:</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref("first");
</script>
<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
