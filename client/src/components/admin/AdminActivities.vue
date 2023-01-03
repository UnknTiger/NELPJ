<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      align="right"
      label="Post another activity"
      color="positive"
      @click="prompt = true"
    />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section class="bg-green-10">
          <div class="text-h6 text-center text-white">Activity</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="actTitle"
            :loading="Load"
            label="Activity Title"
            hint="(Bbrning bush)"
            dense
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Activity name cannot be empty',
            ]"
          />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            v-model="actDesc"
            :loading="Load"
            type="text-area"
            label="Activity Description"
            hint="(could be anthing)"
            dense
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Activity description cannot be empty',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="actLocation"
            :loading="Load"
            icon="location"
            label="Activity Location"
            dense
            hint="(Tindahan ni shaning)"
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Activity location cannot be empty',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            hint="(every monday/MWF)"
            label="Schedule"
            dense
            v-model="actSched"
            autofocus
          />
          <!-- @keyup.enter="prompt = false" -->
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            label="Cancel"
            color="white"
            text-color="primary"
            v-close-popup
          />
          <q-btn
            label="Reset"
            type="reset"
            color="white"
            text-color="dark"
            @click="actReset"
          />
          <q-btn
            label="Save Activity"
            color="white"
            text-color="green-10"
            @click="actSave"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  <!-- ---------- -->

  <div class="q-pa-md">
    <q-card
      ><q-card-section
        class="text-center text-h6 text-bold"
        style="color: #1e4620"
        >Manage Foundation's Activities</q-card-section
      ></q-card
    >
    <q-markup-table dark class="bg-light-green-10">
      <thead class="bg-pink-13 text-center text-bold text-h6">
        <tr>
          <!-- <th >id</th> -->
          <th>Activity Title</th>
          <th>Description</th>
          <th>Date Posted (y-m-d)</th>
          <th>Location</th>
          <th>Schedule</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="bg-pink-11">
        <tr v-for="activity in activities" :key="activity.id" class="text-body">
          <!-- <td class="text-center">
            {{ activity.id }}
          </td> -->
          <td class="text-center">
            {{ activity.title }}
          </td>
          <td>
            {{ activity.desc }}
          </td>
          <td class="text-center">{{ activity.date }}</td>
          <td>{{ activity.location }}</td>
          <td>{{ activity.sched }}</td>
          <td class="text-center">
            <q-btn
              class="bg-warning text-dark q-ma-xs"
              @click="editAct(activity.id)"
              >Edit</q-btn
            ><q-btn class="bg-negative q-ma-xs" @click="deleteAct(activity.id)"
              >Delete</q-btn
            >
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-separetor inset />
    <div><h1>hello there im here</h1></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import { useDialogPluginComponent } from "quasar";
// import { appendFile } from "fs";

const alert = ref(false);
const confirm = ref(false);
const prompt = ref(false);
const address = ref("");
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  getActivities();
  // console.log("mounted");
});

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
      getActivities();
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

const getActivities = async () => {
  await api.get("/admin/activities").then((response) => {
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
          date: new Date(index.date)
            .toISOString()
            .slice(0, 10)
            .replace("T", " "),
          location: index.location,
          sched: index.sched,
        });
        i++;
      });
      console.log(activities);
    }
  });
};

const editTitle = ref();

const editAct = (id) => {
  prompt.value = true;
  const editData = {
    editTitle: editTitle.value,
  };
  console.log(editData);
};

const deleteAct = (id) => {
  api.delete("/admin/activities/" + id).then((response) => {
    console.log(response.data);
    console.log(id);
    getActivities();
  });
};
</script>

<style scoped>
td {
  white-space: normal !important;
}
tbody {
  max-height: 1000px;
}
</style>
