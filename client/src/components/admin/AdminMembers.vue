<template>
  <!-- ---------- -->

  <div class="q-pa-md">
    <q-card
      ><q-card-section
        class="text-center text-h6 text-bold"
        style="color: #1e4620"
        >Manage Members</q-card-section
      ></q-card
    >
    <q-markup-table dark class="bg-light-green-10">
      <thead class="bg-pink-13">
        <tr>
          <!-- <th class="text-center">id</th> -->
          <th class="text-center">Last Name</th>
          <th class="text-center">First Name</th>
          <th class="text-center">Middle Initial</th>
          <th class="text-center">Gender</th>
          <th class="text-center">Address</th>
          <th class="text-center">Age</th>
          <th class="text-center">Birthdate</th>
          <th class="text-center">Contact</th>
          <th class="text-center">Email</th>
          <th class="text-center">Job</th>
          <th class="text-center">Job Position</th>
          <th class="text-center">Job Address</th>
          <th class="text-center">Affiliates</th>
          <th class="text-center">Done in Consecration</th>
          <th class="text-center">Member Type</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-pink-11">
        <tr v-for="member in members" :key="member.id">
          <!-- <td class="text-center">
            {{ member.id }}
          </td> -->
          <td class="text-center">{{ member.lname }}</td>
          <td class="text-center">{{ member.fname }}</td>
          <td class="text-center">{{ member.mi }}</td>
          <td class="text-center">{{ member.gender }}</td>
          <td class="text-center">{{ member.address }}</td>
          <td class="text-center">{{ member.age }}</td>
          <td class="text-center">{{ member.birthday }}</td>
          <td class="text-center">{{ member.contact }}</td>
          <td class="text-center">{{ member.email }}</td>
          <td class="text-center">{{ member.job }}</td>
          <td class="text-center">{{ member.job_position }}</td>
          <td class="text-center">{{ member.job_address }}</td>
          <td class="text-center">{{ member.affiliates }}</td>
          <td class="text-center">{{ member.consecration }}</td>
          <td class="text-center">{{ member.member_type }}</td>
          <td class="text-center">
            <q-btn
              class="bg-warning text-dark q-ma-xs"
              @click="editAct(member.id)"
              >Edit</q-btn
            ><q-btn class="bg-negative q-ma-xs" @click="deleteAct(member.id)"
              >Delete</q-btn
            >
          </td>
          <!-- <td class="text-right">text here</td> -->
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

const members = ref([]);
const tab = ref();

const actSave = async () => {
  Load.value = true;
  const actData = {
    actTitle: actTitle.value,
    actDesc: actDesc.value,
    actLocation: actLocation.value,
    actSched: actSched.value,
  };
  api.post("/admin/members", actData).then((response) => {
    // getmembers();
    if (response.data.length > 0) {
      console.log(response.data);
    } else {
      const notif = $q.notify({
        type: "ongoing",
        message: "Saving member",
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

// get members

api.get("/admin/members").then((response) => {
  if (response.data.length > 0) {
    const data = response.data;
    members.value = [];
    let i = 1;
    console.log(data);
    data.forEach((index) => {
      if (i == 1) tab.value = index.title;
      members.value.push({
        id: index.id,
        lname: index.lname,
        fname: index.fname,
        mi: index.mi,
        gender: index.gender,
        address: index.address,
        age: index.age,
        birthday: index.birthday,
        contact: index.contact,
        email: index.email,
        job: index.job,
        job_position: index.job_position,
        job_address: index.job_address,
        affiliates: index.affiliates,
        consecration: index.consecration,
        member_type: index.member_type,
      });
      i++;
    });
    console.log(members);
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

const deleteAct = (id) => {
  api.delete("/admin/members/" + id).then((response) => {
    console.log(response.data);
    console.log(id);
  });
};
</script>

<style>
th {
  font-weight: bolder;
  font-size: 10px;
}
</style>
