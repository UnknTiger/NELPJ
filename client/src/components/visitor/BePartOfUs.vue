<template>
  <div class="col-8 q-pa-sm">
    <q-card align="center" bordered class="bg-greeen-6 my-card">
      <q-card-section>
        <h4 class="text-h6 text-light-green-10" align="center">
          NELPJ Membership Application form
        </h4>
      </q-card-section>

      <!-- <q-separator dark inset /> -->

      <q-card-section class="q-gutter-sm">
        <q-form @submit="userRegister" @reset="onReset" class="q-gutter-sm">
          <div calss="q-gutter-sm">
            <q-card-section class="col-5">
              <p>User details</p>
              <q-input
                v-model="lname"
                :loading="Load"
                :disable="Load"
                label="Last name"
                name="lname"
                filled
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type a valid surname',
                ]"
              />
              <q-input
                v-model="fname"
                :loading="Load"
                :disable="Load"
                label="First name"
                name="fname"
                filled
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type a valid name']"
              />

              <q-input
                v-model="mi"
                :loading="Load"
                :disable="Load"
                label="Middle Initial"
                name="mi"
                filled
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type a valid name',
                ]"
              />
              <q-input
                v-model="address"
                :loading="Load"
                :disable="Load"
                label="Address"
                name="address"
                filled
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type a valid address',
                ]"
              />
              <q-select
                filled
                v-model="gender"
                :options="options"
                label="Select gender"
              />
              <br />

              <q-input
                v-model="age"
                :loading="Load"
                :disable="Load"
                label="Age"
                name="age"
                type="number"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '' && val < 100) ||
                    'Please type your age correctly',
                ]"
              />
              <q-input
                v-model="bday"
                :loading="Load"
                :disable="Load"
                label="Birth Date"
                name="dday"
                type="date"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type a valid birth date',
                ]"
              />
              <q-input
                v-model="contact"
                :loading="Load"
                :disable="Load"
                label="Contact number"
                name="contact"
                type="number"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type a valid contact number',
                ]"
              />
              <q-input
                v-model="email"
                :loading="Load"
                :disable="Load"
                label="Email address"
                name="email"
                type="email"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type a valid email address',
                ]"
              />
              <q-select
                filled
                v-model="consecration"
                :options="consecrationOption"
                label="Have you done the 33 days preparation for total consecration?"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please answer the question yes or no',
                ]"
              />
            </q-card-section>

            <q-card-section class="">
              <p>Career details</p>
              <q-input
                v-model="job"
                :loading="Load"
                :disable="Load"
                label="Occupation"
                name="job"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type a valid occupation',
                ]"
              />
              <q-input
                v-model="jobPostion"
                :loading="Load"
                :disable="Load"
                label="Occupation position"
                name="jobPostion"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please type a valid occupation position',
                ]"
              />
              <q-input
                v-model="jobAddress"
                :loading="Load"
                :disable="Load"
                label="Occupation address"
                name="jobAddress"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please type a valid address of occupation',
                ]"
              />
              <q-input
                v-model="org"
                :loading="Load"
                :disable="Load"
                label="Organization/Affilliation"
                name="org"
                hint="If you dont belong to any organization/affilliation please type n/a"
                filled
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please enter a valid organization/affilliation.',
                ]"
              />
            </q-card-section>
            <!-- <q-card-section>
              <q-select
                filled
                v-model="consecration"
                :options="consecrationOption"
                label="Have you done the 33 days preparation for total consecration?"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please answer the question yes or no',
                ]"
              />
            </q-card-section> -->
            <q-card-section>
              <p>NELPJ user credentials</p>
              <q-input
                v-model="username"
                :loading="Load"
                :disable="Load"
                label="Username"
                name="username"
                filled
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type a valid username',
                ]"
              />
              <q-input
                v-model="password"
                :loading="Load"
                :disable="Load"
                label="Password"
                name="password"
                type="password"
                filled
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type a valid password',
                ]"
              />
            </q-card-section>
          </div>

          <div class="buttons">
            <q-btn
              label="Submit"
              type="submit"
              color="positive"
              @click="userOnlogin"
              :loading="Load"
              :disable="Load"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="white"
              text-color="light-green-10"
              class="q-ml-sm"
              @click="onReset"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
//ref for freactivity
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../../stores/UserStore.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const routes = useRoute();
const router = useRouter();
const UserStore = useUserStore();
//variable declaration
const fname = ref(null);
const lname = ref(null);
const mi = ref(null);
const address = ref(null);
const age = ref(null);
const bday = ref(null);
const contact = ref(null);
const email = ref(null);
const job = ref(null);
const jobAddress = ref(null);
const jobPostion = ref(null);
const org = ref(null);
// const consecration = ref(null);
const username = ref(null);
const password = ref(null);
const Load = ref(false);

function onReset() {
  fname.value = null;
  lname.value = null;
  mi.value = null;
  address.value = null;
  age.value = null;
  bday.value = null;
  contact.value = null;
  email.value = null;
  job.value = null;
  jobPostion.value = null;
  jobAddress.value = null;
  org.value = null;
  consecration.value = null;
  username.value = null;
  password.value = null;
}
const userRegister = () => {
  //getting values from form & storing it to js variable
  Load.value = true;

  const data = {
    fname: fname.value,
    lname: lname.value,
    mi: mi.value,
    address: address.value,
    age: age.value,
    bday: bday.value,
    contact: contact.value,
    email: email.value,
    job: job.value,
    jobPosition: jobPostion.value,
    jobAddress: jobAddress.value,
    org: org.value,
    consecration: consecration.value,
    username: username.value,
    password: password.value,
  };
  api
    .post("/bePartUs", data)
    .then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
      } else {
        Load.value = false;
        fname.value = null;
        lname.value = null;
        mi.value = null;
        address.value = null;
        age.value = null;
        bday.value = null;
        contact.value = null;
        email.value = null;
        job.value = null;
        jobPostion.value = null;
        jobAddress.value = null;
        org.value = null;
        consecration.value = null;
        username.value = null;
        password.value = null;
      }
    })
    .catch((err) => {
      console.log("api call error");
      console.log(err);
    });
};

const gender = ref(null),
  options = ref(["Male", "Female"]);
const consecration = ref(null),
  consecrationOption = ref(["Yes", "No"]);
</script>
<style scoped>
.buttons {
  margin-top: 170px;
}
</style>
