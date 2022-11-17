<!-- @format -->

<template>
  <h1>testimonial page</h1>
  <!-- Public display of testimonials posted by admin -->
  <div fit row wrap justify-start items-start content-start>
    <div overflow: auto class="col-8 q-pa-none q-ma-sm" style="max-width: 800px">
      <q-card class="q-pa-none">
        <q-card flat bordered class="my-card">
          <q-card-section class="q-pa-sm">
            <q-card-section class="q-pt-sm"> {{ motto }}</q-card-section>

            <q-separator inset />

            <q-card-section class="text-right"> {{ myname }} </q-card-section>
            <q-card-section class="q-pt-sm"> {{ motto }}</q-card-section>

            <q-separator inset />

            <q-card-section class="text-right"> {{ myname }} </q-card-section>
            <q-card-section class="q-pt-sm"> {{ motto }}</q-card-section>

            <q-separator inset />

            <q-card-section class="text-right"> {{ myname }} </q-card-section>
          </q-card-section>
        </q-card>
      </q-card>
    </div>

    <!-- Post a testimony; display right -->
    <div overflow: auto  align="right" class="col-4 q-pa-none q-ma-sm" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

      <q-field
        standout="bg-teal text-white"
        label="Custom standout"
        stack-label
        :dense="dense"
      >
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            {{ text }}
          </div>
        </template>
      </q-field>
    </div>
  </div>
  <!-- Random foundations articles (as advertisment); display right below tesminoies-->
  <div></div>
</template>
<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
}

function onReset() {
  name.value = null;
  age.value = null;
  accept.value = false;
}

const myname = "rae";
const motto = "quick brown fox jumps over the lazy dog";
</script>
<style></style>
