<!-- @format -->

<template>
  <!-- container style="overflow: auto; min-height: 1000px; max-height: 1000px"-->

  <div class="row inline">
    <!-- sub-container1 -->
    <div class="col-8 q-pa-none q-ma-sm">
      <q-card class="q-pa-md">
        <q-card
          flat
          bordered
          class="q-pt-md my-card"
          style="overflow-y: scroll; height: 446px"
        >
          <!-- <q-card-section class="q-pa-sm"> -->
          <q-card-section class="q-pt-md"> {{ motto }}</q-card-section>
          <q-card-section class="text-right"> ~{{ myname }} </q-card-section>
          <q-separator dark inset />

          <q-card-section class="q-pt-sm"> {{ motto }}</q-card-section>
          <q-card-section class="text-right">~{{ myname }} </q-card-section>
          <q-separator dark inset />

          <q-card-section class="q-pt-sm"> {{ motto }}</q-card-section>
          <q-card-section class="text-right"> ~{{ myname }} </q-card-section>
          <q-separator dark inset />

          <!-- </q-card-section> -->
        </q-card>
      </q-card>
    </div>
    <div class="flex-break"></div>

    <!-- container2-->
    <div class="col-4 q-pa-none q-pa-sm" style="max-width: 400px">
      <q-card bordered class="bg-greeen-6 my-card" style="height: 478px">
        <q-card-section align="center">
          <div class="text-h6">Post a Public Testimony</div>
          <div class="text-subtitle6">To be approved by the administrator</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
            <q-input
              filled
              v-model="name"
              label="Your full name here"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />

            <div>
              <q-input
                filled
                v-model="msg"
                label="Message"
                type="textarea"
                lazy-rules
                :rules="[
                  (val) => (val !== null && val !== '') || 'Please type your message',
                ]"
              />

              <q-btn label="Submit" type="submit" color="positive" />
              <q-btn
                label="Reset"
                type="reset"
                color="white"
                text-color="light-green-10"
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
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
const msg = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
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
  msg.value = null;
  accept.value = false;
}

const myname = "Rae";
const motto =
  "Quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra orci et sagittis luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In augue nunc, placerat in arcu in, interdum facilisis ligula. Aenean convallis mollis ex, a convallis enim condimentum eu. Fusce molestie erat at purus facilisis, eu imperdiet orci elementum. Duis sed diam vel ipsum imperdiet vehicula in et purus. Etiam tincidunt justo nunc, quis congue nibh tempus et. Proin elementum turpis eu malesuada porta. Vivamus sodales metus arcu, eu cursus metus sodales id. Sed sodales tortor et libero tristique, eu varius dui aliquet. Vivamus a eros ut turpis feugiat elementum. Integer facilisis libero a egestas rutrum. Etiam finibus finibus metus a volutpat.";
</script>
<style>
#container {
}
</style>
