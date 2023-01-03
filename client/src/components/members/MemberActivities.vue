<template>
  <!-- ---------- -->
  <!-- <div> -->
  <div class="row q-ma-lg justify-between">
    <q-card
      dark
      bordered
      class="q-gutter-sm q-ma-sm bg-grey-9 my-card"
      v-for="activity in activities"
      :key="activity.id"
      style="width: 600px"
    >
      <q-card-section>
        <div class="text-h6">{{ activity.title }}</div>
        <div class="text-subtitle2">
          <q-icon name="event_note" /> {{ activity.sched }}
        </div>
        <div class="text-subtitle2">
          <q-icon name="place" /> {{ activity.location }}
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <p>{{ activity.desc }}</p>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="">
        <p>Date posted: <br />{{ activity.date }}</p>
      </q-card-section>
    </q-card>
  </div>
  <q-separator inset spaced />
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useQuasar } from "quasar";
import { useDialogPluginComponent } from "quasar";
// import { appendFile } from "fs";

const alert = ref(false);
const confirm = ref(false);
const prompt = ref(false);
const address = ref("");

const $q = useQuasar();
// const dialog = useDialogPluginComponent();

const actTitle = ref(null);
const actDesc = ref(null);
const actLocation = ref(null);
const actSched = ref(null);
const Load = ref(false);

const activities = ref([]);
const tab = ref();

const actSave = async () => {
  Load.value = true;
  const actData = {
    actTitle: actTitle.value,
    actDesc: actDesc.value,
    actLocation: actLocation.value,
    actSched: actSched.value,
  };
  api.post("/admin/activities", actData).then((response) => {
    // getActivities();
    if (response.data.length > 0) {
      console.log(response.data);
    } else {
      const notif = $q.notify({
        type: "ongoing",
        message: "Saving Activity",
      });
      notif({
        type: "positive",
        message: "Saved succesfully",
        timeout: 1000,
      });

      Load.value = false;
      actTitle.value = null;
      actDesc.value = null;
      actLocation.value = null;
      actSched.value = null;
      actReset();
      prompt.value = false;
    }
  });
};

const actReset = () => {
  actTitle.value = null;
  actDesc.value = null;
  actLocation.value = null;
  actSched.value = null;
};

// get activities

api.get("/admin/activities").then((response) => {
  if (response.data.length > 0) {
    const data = response.data;
    activities.value = [];
    let i = 1;
    console.log(data);
    data.forEach((index) => {
      if (i == 1) tab.value = index.title;
      activities.value.push({
        id: index.id,
        title: index.title,
        desc: index.description,
        date: new Date(index.date),
        location: index.location,
        sched: index.sched,
      });
      i++;
    });
    console.log(activities);
  }
});

const editTitle = ref();

const editAct = (id) => {
  prompt.value = true;
  const editData = {
    editTitle: editTitle.value,
  };
  console.log(editData);
};
</script>

<style>
th {
  font-weight: bolder;
  font-size: 10px;
}
</style>
