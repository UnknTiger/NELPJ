<template>
  <div class="row">
    <div class="col-3 q-ma-xs">
      <q-card class="q-pa-sm text-center my-card">
        <h6>Prayers of the Rosary</h6>

        <q-img
          class="q-mb-md myImage"
          v-for="prayer in prayer4rosary"
          :name="prayer.name"
          :key="prayer.id"
          :ratio="4 / 3"
          @click="showDialog(prayer.id)"
          src="../../../assets/prayerImages/HandWRosary.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ prayer.title }}
          </div>
        </q-img>
      </q-card>
    </div>

    <div>
      <q-dialog v-model="isShown" class="row" persistent>
        <q-card class="col-md-8" style="width: 700px">
          <!-- <q-scroll-area style="height: 550px"> -->
          <q-img
            src="../../../assets/prayerImages/PrayTheRosary.png"
            :height="$q.screen.lt.md ? '150px' : '300px'"
          />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div
                class="col text-h6 ellipsis"
                align="center"
                style="font-weight: bold"
              >
                {{ specificPrayer[0].title }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ specificPrayer[0].desc }}</div>
          </q-card-section>
          <!-- </q-scroll-area> -->

          <q-separator />

          <q-card-actions align="right">
            <q-btn v-close-popup flat color="primary" label="Close" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="col-grow q-ma-xs">
      <q-card class="q-pa-md">
        <q-img
          style=""
          bordered
          src="../../../assets/prayerImages/rosaryGuide.png"
        >
        </q-img>
      </q-card>
    </div>
  </div>

  <div></div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "src/boot/axios";

const $q = useQuasar();
const tab = ref();
let prayer4rosary = ref([]);
let specificPrayer = ref([]);
//communitcating with the server

const card = ref(false);
const isShown = ref(false);

const showDialog = (id) => {
  specificPrayer.value = prayer4rosary.value.filter((p) => {
    return p.id == id;
  });
  console.log(specificPrayer);
  isShown.value = true;
};
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
          id: index.id,
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
.card {
  height: 500px;
}
.myImage {
  width: 250;
}
</style>
