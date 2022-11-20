<template>
  <div
    class="q-pa-none q-pa-sm justify-content-center"
    style="max-width: 400px"
  >
    <q-card
      align="center"
      bordered
      class="bg-greeen-6 my-card"
      style="height: 478px"
    >
      <q-card-section class="q-ma-none q-pa-none">
        <h4 class="text-h6 text-light-green-10" align="center">
          NELPJ User Login
        </h4>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
          <div calss="q-ma-md">
            <q-input
              v-model="username"
              :loading="Load"
              :disable="Load"
              label="Enter Username"
              name="username"
              filled
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              v-model="password"
              :loading="Load"
              :disable="Load"
              label="Enter Password"
              name="pass"
              filled
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Please type your password correctly',
              ]"
            />
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
//ref for reactivity
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
const username = ref(null);
const password = ref(null);
const Load = ref(false);

function onReset() {
  username.value = null;
  password.value = null;
}
const userOnlogin = () => {
  //getting values from form & storing it to js variable
  Load.value = true;

  const data = {
    username: username.value,
    password: password.value,
  };
  api
    .post("/UserLogin", data)
    .then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
        $q.localStorage.set("user", {
          // "user" key from UserStore
          role: response.data[0].role,
          loginStatus: true,
        });
        console.log(response.data[0].role);

        UserStore.setUser({ role: response.data[0].role, status: true });

        if (response.data[0].role == 1) {
          router.push("/admin");
        } else if (response.data[0].role == 0) {
          router.push("/member");
        }
      } else {
        Load.value = false;
        username.value = null;
        password.value = null;
      }
    })
    .catch((err) => {
      console.log("api call error");
      console.log(err);
    });
};
</script>
<style scoped>
.buttons {
  margin-top: 170px;
}
</style>
