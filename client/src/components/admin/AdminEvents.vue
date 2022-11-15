<template>
  <q-btn label="Prompt" color="positive" @click="prompt" />
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        type="text"
        v-model="eTitle"
        label="Event Title "
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        type="text"
        v-model="eDescription"
        label="Event Description"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" />

        <q-date v-model="date" minimal />
      </div>
      <q-input
        filled
        v-model="eLocation"
        label="Event Location"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-uploader
        url="http://localhost:90001/upload"
        label="Event image"
        single
        v-model="eImg"
        style="max-width: 300px"
      />

      <div>
        <q-btn label="Submit" type="submit" color="positive" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>

  <h1>Events page here...</h1>

  <div class="q-pa-md">
    <q-markup-table dark class="bg-light-green-10">
      <thead class="bg-pink-13">
        <tr>
          <th class="text-left">Event Name</th>
          <th class="text-right">Description</th>
          <th class="text-right">Date</th>
          <th class="text-right">Location</th>
          <!-- <th class="text-right">Event Code </th> -->
          <th class="text-right">Image</th>
          <th class="text-right">Status</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-pink-11">
        <tr>
          <td class="text-left">Sample event</td>
          <td class="text-right">text here</td>
          <td class="text-right">text here</td>
          <td class="text-right">text here</td>
          <td class="text-right">text here</td>
          <td class="text-right">text here</td>
          <td class="text-right">text here</td>
          <!-- <td class="text-right">text here</td> -->
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useDialogPluginComponent } from "quasar";

// const $q = useQuasar();
// const dialog = useDialogPluginComponent();

// function prompt() {
//   $q.dialog({
//     title: "New Event",
//     message: "Event name",
//     prompt: {
//       model: "",
//       isValid: (val) => val.length > 2, // << here is the magic
//       type: "text", // optional
//     },

//     cancel: true,
//     persistent: true,
//   }).onOk((data) => {
//     // console.log('>>>> OK, received', data)
//   });
// }
</script>

<style>
th {
  font-weight: bolder;
  font-size: 10px;
}
</style>
