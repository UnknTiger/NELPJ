<template>
  <div><h6>Materials page</h6></div>
  <div class="q-pa-md">
    <!-- ^^^ style="max-width: 350px" -->
    <q-list bordered class="rounded-borders">
      <q-item class="bg-light-green-10 text-white">
        <q-item-section> <q-icon name="book" /></q-item-section>
        <q-item-section>Prayer of the Rosary</q-item-section>
      </q-item>

      <q-expansion-item
        class="row justify-around"
        v-for="prayer in prayer4rosary"
        :name="prayer.name"
        :key="prayer.id"
        :label="prayer.title"
        expand-separator
        icon="description"
        header-class="text-light-green-10 bg-white"
      >
        <q-card>
          <q-card-section>
            {{ prayer.desc }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <q-card class="my-card">
      <q-img
        @click="showDesc"
        v-for="prayer in prayer4rosary"
        :name="prayer.name"
        :key="prayer.id"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ prayer.title }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const tab = ref();
let prayer4rosary = ref([]);
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

// tabs
const qtab = ref("mails");

function showDesc() {
  $q.dialog({
    // prayer4rosary: this.prayer4rosary,

    title: "some random message",
    message: "Some message",
  });
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
