<template>
  <!-- holy rosary in q-tabs -->
  <div class="col-grow q-my-md" style="max-width: 2000px">
    <q-card class="q-pa-none">
      <h6 class="text-light-green-10 text-center q-pt-sm">
        Papal Reflections of the Mystery
      </h6>

      <div>
        <q-splitter v-model="splitterModel" class="q-pa-sm">
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
    <q-separator inset />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const dialog = ref(false);
const maximizedToggle = ref(true);
const tab = ref();
const splitterModel = ref(20);

const mysteries = ref([]);
//communitcating with the server
// console.log(data);

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
        if (i == 1) tab.value = index.mystery;
        mysteries.value.push({
          // id: index.id,
          mystery: index.mystery,
          name: index.mystery,
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

// const convertToSlug = (string) => {
//   let slug = "";
//   slug = string.toLowerCase();
//   slug = slug.replace(/\s*$/g, "");

//   // Change whitespace to "-"
//   slug = slug.replace(/\s+/g, "-");
//   return slug;
// };
</script>
<style lang="scss"></style>
