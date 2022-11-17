<template>
  <div class="q-pa-sm q-ma-none" style="max-width: 2000px">
    <q-card class="q-pa-none">
      <h6 class="text-light-green-10 text-center q-pt-sm">Prayers of the rosary</h6>

      <div>
        <q-splitter v-model="splitterModel" class="q-pa-sm">
          <template v-slot:before>
            <q-tabs v-model="tab" vertical class="text-teal">
              <q-tab
                v-for="rosary in PrayerRosary"
                :label="rosary.rosary"
                :name="rosary.name"
                :key="rosary.id"
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
                v-for="rosary in PrayerRosary"
                :name="rosary.name"
                :key="rosary.id"
              >
                <div class="text-h6 q-mb-md">{{ rosary.rosary }}</div>
                <p>{{ rosary.desc }}</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../../boot/axios.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const dialog = ref(false);
const tab = ref();
const splitterModel = ref(20);

const PrayerRosary = ref([]);

api
  .get("/prayer")
  .then((response) => {
    if (response.data.length > 0) {
      const data = response.data;
      let i = 1;
      console.log(data);
      // PrayerRosary.value = data;
      data.forEach((index) => {
        if (i == 1) tab.value = convertToSlug(index.rosary);
        PrayerRosary.value.push({
          // id: index.id,
          rosary: index.rosary,
          name: convertToSlug(index.rosary),
          desc: index.description,
        });
        i++;
      });
      console.log(PrayerRosary);
    }
  })
  .catch((err) => {
    console.log("Error: (api cath)");
    console.log(err);
  });

const convertToSlug = (string) => {
  let slug = "";
  slug = string.toLowerCase();
  slug = slug.replace(/\s*$/g, "");

  // Change whitespace to "-"
  slug = slug.replace(/\s+/g, "-");
  return slug;
};
</script>

<style lang="scss" scoped></style>
