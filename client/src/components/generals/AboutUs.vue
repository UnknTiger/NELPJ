<template>
  <div>
    {{ editorAboutus }}
  </div>
  <q-btn
    label="Director's Corner"
    color="light-green-10"
    align="center"
    style="width: 100%"
    @click="dialog = true"
  />

  <!-- CAROUSEL -->
  <div v-for="info in fndInfo" :key="info.id">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        padding
        arrows
        height="400px"
        class="q-my-lg bg-light-green-9 text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <h3>Our Vision</h3>
          <div class="text-subtitle1 text-center">
            {{ info.vision }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="q-my-lg column no-wrap flex-center">
          <h3>Our Mission</h3>
          <div class="text-subtitle1 text-center">
            {{ info.mission }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <q-separator inset spaced />
    <!-- **************************************************************** -->
    <q-card class="q-my-lg">
      <q-card-section class="text-green-10 text-center text-h3 text-bold"
        >Our History</q-card-section
      >
      <q-card-section class="text-green-10 text-body1">{{
        info.history
      }}</q-card-section>
    </q-card>
    <!-- *************************************************************************** -->
    <!-- DIRECTOR'S CORNER CONTENT -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-light-green-10 text-white">
          <q-bar>
            <q-space />

            <q-btn
              dense
              flat
              icon="minimize"
              @click="maximizedToggle = false"
              :disable="!maximizedToggle"
            >
              <q-tooltip v-if="maximizedToggle" class="bg-white text-dark"
                >Minimize</q-tooltip
              >
            </q-btn>
            <q-btn
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = true"
              :disable="maximizedToggle"
            >
              <q-tooltip v-if="!maximizedToggle" class="bg-white text-dark"
                >Maximize</q-tooltip
              >
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-dark">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <div class="text-h4 text-center">Director's Corner</div>
          </q-card-section>
          <div class="row">
            <q-card-section class="col-5"
              ><q-img
                class="col-4"
                src="http://www.newearthoflovepeaceandjoy.com/images/Fr_Polinar2.jpg"
                no-native-menu
              >
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ info.directors_name }}
                </div>
              </q-img></q-card-section
            >
            <div class="col-7">
              <q-card-section class="text-bold text-subtitle1">{{
                info.directors_name
              }}</q-card-section>
              <q-card-section class="text-body1">{{
                info.directors_corner
              }}</q-card-section>
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

const editor = props.editor;

const fndInfo = ref([]);
const tab = ref();

api.get("/aboutUs").then((response) => {
  if (response.data.length > 0) {
    const data = response.data;
    console.log(data);
    fndInfo.value = [];
    let i = 1;
    console.log(data);
    data.forEach((index) => {
      if (i == 1) tab.value = index.title;
      fndInfo.value.push({
        id: index.id,
        vision: index.vision,
        mission: index.mission,
        history: index.history,
        directors_name: index.directors_name,
        directors_corner: index.directors_corner,
        directors_image: index.directors_image,
      });
      i++;
    });
    console.log(fndInfo);
  }
});

// open dialog
const dialog = ref(false);
const maximizedToggle = ref(true);
// carousel
const slide = ref("style");
const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.";
</script>

<style></style>
