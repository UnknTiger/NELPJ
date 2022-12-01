<template>
  <div id="top" />

  <div class="row justify-between">
    <!-- style="width: 1400px" -->
    <!-- sub-container1 -->
    <div class="col-md-8 col-sm-12 col-sx-12 q-pa-sm" id="testimonial">
      <q-card>
        <q-card
          flat
          bordered
          class="q-pt-md my-card bg-light-green-10 text-white"
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

    <!-- container2-->
    <Teleport to="#top" :disabled="$q.screen.gt.sm" v-if="isMounted">
      <div class="col-md-4 col-sm-12 col-sx-12 q-pa-sm">
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
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || 'Please type your message',
                  ]"
                />
                <!--lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your message',
                ]"  -->
                <p class="q-pa-sm text-light-green-10">
                  Note: Submitted testimonies will be verified by the administrator before
                  posting publicly.
                </p>
                <div align="right">
                  <q-btn label="Submit" type="submit" color="positive" />
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
    </Teleport>
  </div>

  <div></div>
</template>
<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref, Teleport } from "vue";
import { api } from "../../boot/axios.js";

const $q = useQuasar();

const name = ref(null);
const msg = ref(null);
const testimonies = ref([]);
const tab = ref();
const accept = ref(false);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
  getTestimonials();
  // console.log("mounted");
});

//post testimony
function onSubmit() {
  const data = {
    name: name.value,
    msg: msg.value,
  };
  if (accept.value !== true) {
    api
      .post("/testimonials", data)
      .then((response) => {
        getTestimonials();
        onReset();
      })
      .catch((err) => {
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
const getTestimonials = async () => {
  await api
    .get("/testimonials")
    .then((response) => {
      if (response.data.length > 0) {
        const data = response.data;
        testimonies.value = [];
        let i = 1;
        // console.log(data);
        data.forEach((index) => {
          if (i == 1) tab.value = convertToSlug(index.name);
          testimonies.value.push({
            // id: index.id,
            name: index.name,

            msg: index.msg,
          });
          i++;
        });
        // console.log(testimonies);
      }
    })
    .catch((err) => {
      console.log("Error: (api call; get)", err);
    });
};

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
</script>
<style scoped>
#testimonial {
  font-size: medium;
}
</style>
