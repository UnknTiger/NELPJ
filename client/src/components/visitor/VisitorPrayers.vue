<template>
  <!-- holy rosary in q-tabs -->
  <div id="prayerRosary"></div>

  <q-card class="q-pb-md">
    <h6 class="text-light-green-10 text-center text-bold q-pt-sm">
      Papal Reflections of the Mystery
    </h6>

    <div>
      <q-splitter v-model="splitterModel">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab
              v-for="mystery in mysteries"
              :label="mystery.mystery"
              :name="mystery.name"
              :key="mystery.id"
            />
          </q-tabs>
        </template>
        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel
              v-for="mystery in mysteries"
              :name="mystery.name"
              :key="mystery.id"
            >
              <div class="text-h6 q-mb-md text-light-green-10">
                {{ mystery.mystery }}
              </div>
              <p class="text-light-green-10">{{ mystery.desc }}</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-card>

  <DeliverancePrayerVue />

  <!-- <PrayerRosary /> -->
  <!-- holy rosary in q-tabs -->

  <!-- holy rosary dialog button -->
  <!-- <div class="q-pa-md q-gutter-sm">
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

            <q-card-section>
              <div class="q-pa-sm">
                <div class="q-col-gutter-md row items-start">
                  <div class="col-4">
                    <q-img src="../../assets/prayerImages/rosaryGuide.png" :ratio="1" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div> -->
</template>
<script setup>
import DeliverancePrayerVue from "./PrayerComponents/DeliverancePrayer.vue";
import { ref } from "vue";
import { api } from "../../boot/axios.js";
// import PrayerRosary from "../visitor/PrayerComponents/PrayerRosary.vue";
// import { useRouter, useRoute } from "vue-router";

// const router = useRouter();
// const dialog = ref(false);
// const maximizedToggle = ref(true);
const tab = ref();
const splitterModel = ref(20);

const mysteries = ref([]);
//communitcating with the server

//api call for papal mysteries
api
  .get("/prayer")
  .then((response) => {
    if (response.data.length > 0) {
      const data = response.data;
      let i = 1;
      console.log(data);
      // mysteries.value = data;
      data.forEach((index) => {
        if (i == 1) tab.value = convertToSlug(index.mystery);
        mysteries.value.push({
          // id: index.id,
          mystery: index.mystery,
          name: convertToSlug(index.mystery),
          desc: index.description,
        });
        i++;
      });
      console.log(mysteries);
    }
  })
  .catch((err) => {
    console.log("Error: (api cath)");
    console.log(err);
  });

const prayer4rosary = ref([]);
// const tab2 = ref();

const convertToSlug = (string) => {
  let slug = "";
  slug = string.toLowerCase();
  slug = slug.replace(/\s*$/g, "");

  // Change whitespace to "-"
  slug = slug.replace(/\s+/g, "-");
  return slug;
};
</script>
<style lang="scss"></style>
