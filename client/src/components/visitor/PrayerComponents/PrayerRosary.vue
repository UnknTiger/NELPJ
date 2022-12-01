<template>
  <div><h6>Materials page</h6></div>
  <!-- <teleport to="prayerRosary"> -->
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="prayer in prayer4rosary"
        :name="prayer.name"
        :key="prayer.id"
        expand-separator
        icon="description"
        :label="prayer.title"
        header-class="text-light-green-10 bg-white"
      >
        <q-card>
          <q-card-section>
            {{ prayer.desc }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
  <!-- </teleport> -->
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";

const tab = ref();
const prayer4rosary = ref([]);
//communitcating with the server

//api call for papal prayer4rosary
api
  .get("/materials")
  .then((response) => {
    if (response.data.length > 0) {
      const data = response.data;
      let i = 1;
      console.log(data);

      data.forEach((index) => {
        index.title;
        prayer4rosary.value.push({
          title: index.title,

          desc: index.description,
        });
        i++;
      });
      console.log(prayer4rosary);
    }
  })
  .catch((err) => {
    console.log("Error: (api cath)");
    console.log(err);
  });
</script>

<style lang="scss" scoped></style>
