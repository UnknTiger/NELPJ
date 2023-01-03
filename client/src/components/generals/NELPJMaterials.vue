<template>
  <q-separator inset space />
  <div>
    <h5 class="text-center text-light-green-10 text-shadow-12">
      HELP SPREAD TOTAL CONSECRATION by PROMOTING TC JM BOOKS & GIVING AWAY TC
      JM PAMPHLETS!
    </h5>
  </div>
  <q-separator inset space />

  <div class="text-green-10 text-center"><h5>Materials for view</h5></div>
  <div class="row justify-between q-my-lg">
    <q-card v-for="i in 12" :key="i.id" :name="Book" class="q-ma-xs">
      <q-card-section class="q-ma-xs q-pa-xs">
        <q-img
          class=""
          fit
          style="width: 180px; height: 300px"
          src="http://www.newearthoflovepeaceandjoy.com/images/CM%20Book%20Cover-Front.jpg"
          no-native-menu
        >
          <div
            class="absolute-bottom text-subtitle2 text-center text-shadow-12"
          >
            <span class="text-bold">Book</span> <br />Price
          </div>
        </q-img>
      </q-card-section>
    </q-card>
  </div>

  <q-separator inset space />
  <div class="text-green-10 text-center"><h5>Materials for sale</h5></div>
  <div class="row justify-between q-my-lg">
    <q-card v-for="i in 12" :key="i.id" :name="Book" class="q-ma-xs">
      <q-card-section class="q-ma-xs q-pa-xs">
        <q-img
          class=""
          fit
          style="width: 180px; height: 300px"
          src="http://www.newearthoflovepeaceandjoy.com/images/2016%20Sept%208-%20FRONT%20COVER-%2033%20D.jpg"
          no-native-menu
        >
          <div
            class="absolute-bottom text-subtitle2 text-center text-shadow-12"
          >
            <span class="text-bold">Book</span> <br />Price
          </div>
        </q-img>
      </q-card-section>
    </q-card>
  </div>
  <q-separator inset spaced />
</template>

<script setup></script>
