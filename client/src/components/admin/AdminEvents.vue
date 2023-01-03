<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      align="right"
      label="Add New Event"
      color="positive"
      @click="prompt = true"
    />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">Add New Event</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="eName"
            :loading="Load"
            label="Event Name"
            dense
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Event name cannot be empty',
            ]"
          />
          <!-- lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Event name cannot be empty',
            ]" -->
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            v-model="eDesc"
            :loading="Load"
            type="text-area"
            label="Event Description"
            dense
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Event description cannot be empty',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="eDate"
            :loading="Load"
            type="date"
            label="Event Date"
            dense
            filled
            stack-label
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Event date cannot be empty',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="eLocation"
            :loading="Load"
            icon="location"
            label="Event Location"
            dense
            autofocus
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Event location cannot be empty',
            ]"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            :loading="Load"
            label="Event Code"
            dense
            v-model="eCode"
            autofocus
          />
          <!-- @keyup.enter="prompt = false" -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-file
            v-model="eImg"
            :loading="Load"
            label="Event image"
            single
            type="file"
            name="file"
            clearable
            style="max-width: 300px"
            accept=".jpg, image/*"
            @rejected="onRejected"
            @update:model-value="handleUpload()"
            ><template v-slot:prepend> <q-icon name="attach_file" /> </template
          ></q-file>
          <!-- <input type="file" @change="onFileChange" /> -->
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
            @click="eventReset"
          />
          <q-btn
            label="Save Event"
            color="white"
            text-color="positive"
            @click="saveEvent"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  <!-- ---------- -->

  <div class="q-pa-md">
    <q-markup-table dark class="bg-light-green-10">
      <thead class="bg-pink-13 text-bold text-h6">
        <tr>
          <th class="text-center">Event Name</th>
          <th class="text-center">Description</th>
          <th class="text-center">Event Date (y-m-d)</th>
          <th class="text-center">Location</th>
          <!-- <th class="text-center">Event Code </th> -->
          <th class="text-center">Image</th>
          <th class="text-center">Code</th>
          <th class="text-center">Status</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-pink-11">
        <tr v-for="event in events" :key="event.id">
          <td class="text-center">{{ event.name }}</td>
          <td>{{ event.desc }}</td>
          <td class="text-center">{{ event.date }}</td>
          <td>{{ event.location }}</td>
          <td class="text-center">{{ event.name }}</td>
          <td class="text-center">{{ event.code }}</td>
          <td class="text-center">{{ event.status }}</td>
          <td class="text-center">
            <q-btn class="bg-warning text-dark q-ma-xs">Edit</q-btn
            ><q-btn class="bg-negative q-ma-xs">Delete</q-btn>
          </td>
          <!-- <td class="text-right">text here</td> -->
        </tr>
      </tbody>
    </q-markup-table>
    <h1>hi there again</h1>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useQuasar } from "quasar";
import { api } from "src/boot/axios";
import { onMounted } from "vue";
// import { appendFile } from "fs";

const alert = ref(false);
const confirm = ref(false);
const prompt = ref(false);
const address = ref("");

const $q = useQuasar();
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  getEvents();
  // console.log("mounted");
});

const eName = ref(null);
const eDesc = ref(null);
const eDate = ref(null);
const eLocation = ref(null);
const eImg = ref(null);
const imageUrl = ref("");
const Load = ref(false);
const eCode = ref(null);

// console.log("selected file", eImg.value.files);

const handleUpload = () => {
  console.log("handleUpload is triggered");
  if (eImg.value) {
    imageUrl.value = URL.createObjectURL(eImg.value);
  }
  console.log(eImg.value);
};
const saveEvent = async () => {
  const eData = new FormData();
  eData.append("eName", eName.value);
  eData.append("eDesc", eDesc.value);
  eData.append("eDate", eDate.value);
  eData.append("eLocation", eLocation.value);
  eData.append("eImg", eImg.value);
  eData.append("eCode", eCode.value);
  // eData.append("file", input.file[0]);
  console.log(eData);

  api
    .post("/admin/events", eData)
    .then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
      } else {
        const notif = $q.notify({
          type: "ongoing",
          message: "Saving information",
        });
        notif({
          type: "positive",
          message: "Saved succesfully",
          timeout: 1000,
        });

        Load.value = false;
        eName.value = null;
        eDesc.value = null;
        eDate.value = null;
        eLocation.value = null;
        eImg.value = null;
        eCode.value = null;
        eventReset();
        getEvents();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// const saveEvent = async () => {
//   Load.value = true;
//   const eData = {
//     eName: eName.value,
//     eDesc: eDesc.value,
//     eDate: eDate.value,
//     eLocation: eLocation.value,
//     // eImg: eImg.file[0],
//     eCode: eCode.value,
//   };
//   console.log(eData);
//   api
//     .post("/admin/events", eData)
//     .then((response) => {
//       if (response.data.length > 0) {
//         console.log(response.data);
//       } else {
//         const notif = $q.notify({
//           type: "ongoing",
//           message: "Saving information",
//         });
//         notif({
//           type: "positive",
//           message: "Saved succesfully",
//           timeout: 1000,
//         });

//         Load.value = false;
//         eName.value = null;
//         eDesc.value = null;
//         eDate.value = null;
//         eLocation.value = null;
//         eImg.value = null;
//         eCode.value = null;
//         eventReset();
//         getEvents();
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const eventReset = () => {
  eName.value = null;
  eDesc.value = null;
  eDate.value = null;
  eLocation.value = null;
  eImg.value = null;
  eCode.value = null;
  Load.value = false;
};

function onRejected(rejectedEntries) {
  $q.notify({
    type: "negative",
    message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
  });
}

const events = ref([]);
const tab = ref();

const getEvents = async () => {
  await api.get("/admin/events").then((response) => {
    if (response.data.length > 0) {
      const data = response.data;
      events.value = [];
      let i = 1;
      console.log(data);
      data.forEach((index) => {
        if (i == 1) tab.value = index.name;
        events.value.push({
          id: index.id,
          name: index.e_name,
          desc: index.e_description,
          date: new Date(index.e_date)
            .toISOString()
            .slice(0, 10)
            .replace("T", " "),
          location: index.e_location,
          code: index.e_code,
          status: index.e_status,
        });
        i++;
      });
      console.log(events);
    }
  });
};
</script>

<style scoped>
td {
  white-space: normal !important;
}
th {
  font-weight: bolder;
  font-size: 15px;
}
table {
  width: 20vw;
}
</style>
