<!-- @format -->

<template>
  <!-- container style="overflow: auto; min-height: 1000px; max-height: 1000px"-->

  <div class="row justify-between">
    <!-- style="width: 1400px" -->
    <!-- sub-container1 -->
    <div class="col-md-8 col-sm-12 col-sx-12 q-pa-sm">
      <q-card>
        <q-card
          flat
          bordered
          class="q-pt-md my-card"
          style="overflow-y: scroll; max-height: 75vh"
        >
          <q-card-section
            v-for="testimony in testimonies"
            :name="testimony.name"
            :key="testimony.id"
          >
            <p class="q-pt-md">"{{ testimony.msg }}"</p>
            <p class="text-right">~{{ testimony.name }}</p>
          </q-card-section>
        </q-card>
      </q-card>
    </div>
    <!-- <div class="flex-break"></div> -->

    <!-- container2-->
    <div class="col-md-4 col-sm-12 col-sx-12 q-pa-sm">
      <!-- style="width: 400px" -->
      <q-card bordered class="bg-greeen-6 my-card">
        <q-card-section align="center">
          <div class="text-h6 text-light-green-10">Post a Public Testimony</div>
          <span class="text-light-green-10">Share your experience with us</span>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
            <div>
              <q-input
                class="q-ma-sm"
                filled
                v-model="name"
                label="Name/Organization"
                hint="e.g. (Mr. Juan Dela Cruz, CEO of Dela Cruz Corp.)"
              />
              <!-- lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]" -->
              <q-input
                class="q-ma-sm"
                filled
                v-model="msg"
                label="Message"
                type="textarea"
                style="max-heigth: 200px"
                hint="Could be your personal experience"
              />
              <!--lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your message',
                ]"  -->
              <p class="q-pa-sm text-light-green-10">
                Note: Submitted testimonies will be verified by the
                administrator before posting publicly.
              </p>
              <div align="right">
                <q-btn
                  label="Submit"
                  type="submit"
                  color="positive"
                  @click="onSubmit"
                />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="white"
                  text-color="light-green-10"
                  class="q-ml-sm"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div></div>
</template>
<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { api } from "../../boot/axios.js";

const $q = useQuasar();

const name = ref(null);
const msg = ref(null);
const testimonies = ref([]);
const tab = ref();
const accept = ref(false);

//post testimony
function onSubmit() {
  const data = {
    name: name.value,
    msg: msg.value,
  };
  if (accept.value !== true) {
    api.post("/testimonials", data).catch((err) => {
      console.log("api call error");
      console.log(err);
    });
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
}

//get testimonies
api
  .get("/testimonials")
  .then((response) => {
    if (response.data.length > 0) {
      const data = response.data;
      let i = 1;
      console.log(data);
      data.forEach((index) => {
        if (i == 1) tab.value = convertToSlug(index.name);
        testimonies.value.push({
          // id: index.id,
          name: index.name,

          // name: convertToSlug(index.name),
          msg: index.msg,
        });
        i++;
      });
      console.log(testimonies);
    }
  })
  .catch((err) => {
    console.log("Error: (api call; get)", err);
    // console.log(err);
  });

const convertToSlug = (string) => {
  let slug = "";
  slug = string.toLowerCase();
  slug = slug.replace(/\s*$/g, "");

  // Change whitespace to "-"
  slug = slug.replace(/\s+/g, "-");
  return slug;
};

function onReset() {
  name.value = null;
  msg.value = null;
  accept.value = false;
}

const myname = "Rae";
const motto =
  "Quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra orci et sagittis luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In augue nunc, placerat in arcu in, interdum facilisis ligula. Aenean convallis mollis ex, a convallis enim condimentum eu. Fusce molestie erat at purus facilisis, eu imperdiet orci elementum. Duis sed diam vel ipsum imperdiet vehicula in et purus. Etiam tincidunt justo nunc, quis congue nibh tempus et. Proin elementum turpis eu malesuada porta. Vivamus sodales metus arcu, eu cursus metus sodales id. Sed sodales tortor et libero tristique, eu varius dui aliquet. Vivamus a eros ut turpis feugiat elementum. Integer facilisis libero a egestas rutrum. Etiam finibus finibus metus a volutpat.";
</script>
<style></style>
