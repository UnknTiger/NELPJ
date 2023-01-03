<template>
  <div id="top"></div>

  <div class="q-py-xs bg-light-green-10 text-white">
    <h4 align="center">
      “Each of you should give what you have decided in your heart to give, not
      reluctantly or under compulsion, for God loves a cheerful giver.”
    </h4>
    <h6 class="text-right"><i>~2 Corinthians 9:7~</i></h6>
  </div>

  <div class="">
    <div class="row q-my-md justify-between">
      <q-card class="col-grow q-ma-xs">
        <q-card-section>
          <q-btn
            label="sponsor a member"
            color="pink-14"
            @click="basic = true"
            style="width: 100%"
          />
        </q-card-section>
        <q-card-section>
          <p class="text-center" style="max-width: 600px">
            This form opens up an opportunity for one of our memebers to be
            supported with your giving hands. A help starts within once self, by
            helping one another or passing the blessings that you have, will
            grow and inspire others to do the same.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="col-grow q-ma-xs">
        <q-card-section>
          <q-btn
            label="Sponsor an event/foundation"
            color="red-14"
            @click="basic = true"
            style="width: 100%"
          />
        </q-card-section>
        <q-card-section>
          <p class="text-center" style="max-width: 600px">
            This form offers a help to our foundation. By sponsoring an
            event/foundation, your helping us to collect amounts for the success
            of our endevours and for future projects of the foundation.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
//ref for freactivity
import { ref } from "vue";
import { api } from "../../boot/axios.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const step = ref(1);
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

const gender = ref(null),
  options = ref(["Male", "Female"]);
const consecration = ref(null),
  consecrationOption = ref(["Yes", "No"]);

function onReset() {
  step.value = 1;

  fname.value = null;
  lname.value = null;
  mi.value = null;
  address.value = null;
  gender.value = null;
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

const stepperMethod = ({ action, ev }) => {
  if (action === "go") ev.stepper.next();
  else ev.stepper.previous();
};

const userRegister = async () => {
  Load.value = true;
  //getting values from form & storing it to js variable
  const data = {
    fname: fname.value,
    lname: lname.value,
    mi: mi.value,
    address: address.value,
    gender: gender.value,
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

  await api
    .post("/bePartOfUs", data)
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
        step.value = 1;
        onReset();
      }
    })
    .catch((err) => {
      console.log("api call error");
      console.log(err);
    });
};

const basic = ref(false);
// const fixed = ref(false);
</script>
<style scoped>
/* .buttons {
  margin-top: 170px;
} */
</style>
