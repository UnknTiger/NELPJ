<template>
  <!-- Members Profile -->
  <div>
    <q-card class="q-py-md" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar style="height: 150px; width: 150px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section align="center">
          <q-item-label class="text-h3">Jhon Doe</q-item-label>
          <q-item-label class="text-subtitle1">
            johnDoe@gmail.com
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <div class="q-ma-sm" align="left">
          <div class="q-gutter-xs">
            <q-btn class="q-ma-sm" color="amber" label="Edit information" />
          </div>
          <div class="q-gutter-xs">
            <q-btn class="q-ma-sm" color="negative" label="Delete account" />
          </div>
        </div>
        <q-separator vertical />
        <q-card-section class="text-body1">
          {{ lorem }}
          {{ lorem }}
          {{ lorem }}
          {{ lorem }}
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  <q-separator inset spaced />

  <div>
    <h1>hi there</h1>
  </div>
  <q-separator inset />
</template>
<script setup>
import { ref } from "vue";
import { api } from "../../boot/axios.js";

const memberInfo = ref([]);
const tab = ref();

api.get("/member").then((response) => {
  if (response.data.length > 0) {
    const data = response.data;
    memberInfo.value = [];
    let i = 1;
    console.log(data);
    data.forEach((index) => {
      if (i == 1) tab.value = index.title;
      memberInfo.value.push({
        id: index.id,
        fname: index.fname,
        mi: index.mi,
        lname: index.lname,
        gender: index.gender,
        age: index.age,
        address: index.address,
        birthday: index.birthday,
        contact: index.contact,
        email: index.email,
        job: index.job,
        job_position: index.job_position,
        job_address: index.job_address,
        affiliates: index.affiliates,
        consecration: index.consecration,
      });
      i++;
    });
    console.log(memberInfo);
  }
});

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
</script>
<style></style>
