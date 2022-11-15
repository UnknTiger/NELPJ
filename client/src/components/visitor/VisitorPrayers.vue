<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Holly Rosary" color="positive" @click="dialog = true" />

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-positive text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Holy Rosary</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Holy Rosary</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Holy Rosary</div>
        </q-card-section>

        <!-- dialog content -->

        <q-card-section>
          <div class="q-pa-sm">
            <div class="q-col-gutter-md row items-start">
              <div class="col-4">
                <q-img src="../../assets/prayerImages/rosaryGuide.png" :ratio="1" />
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <p>Quick brown fox jumps over the lazy dog</p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dialog = ref(false);
const maximizedToggle = ref(true);
</script>
<style lang="scss"></style>
