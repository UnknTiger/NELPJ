<template>
  <div>
    <!-- <input v-model="username" placeholder="username" />
    <input v-model="password" placeholder="password" /> -->
    <q-input
      v-model="username"
      :loading="Load"
      :disable="Load"
      label="username"
      name="username"
    />
    <q-input
      v-model="password"
      :loading="Load"
      :disable="Load"
      label="password"
      name="pass"
    />
    <q-btn @click="userOnlogin" :loading="Load" :disable="Load">Login</q-btn>

    <!-- <div>
      {{ counterStore.counter }}
      <q-btn @click="counterStore.increment()">+</q-btn>
      <q-btn @click="counterStore.decrement()">-</q-btn>
    </div> -->
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
// setTimeout(() => {
//   $q.localStorage.remove("user");
// }, 3000);

const routes = useRoute();
const router = useRouter();
const UserStore = useUserStore();

// console.log(counterStore.counter);

//variable declaration
const username = ref(null);
const password = ref(null);
const Load = ref(false);

// //onclick function
// const increment = () => {
//   counterStore.counter++;
// };
// const decrement = () => {
//   counterStore.counter--;
// };
const userOnlogin = () => {
  //getting values from form & storing it to js variable
  Load.value = true;

  const data = {
    username: username.value,
    password: password.value,
  };
  //communitcating with the server
  // console.log(data);

  // api.get("/member", data).then((response) => {
  //   console.log(response.data);
  //   router.push("/member");
  // });

  // export var isAuthenticated = false;

  api
    .post("/VisitorLogin", data)
    .then((response) => {
      if (response.data.length > 0) {
        console.log(response.data);
        $q.localStorage.set("user", {
          // "user" key from UserStore
          role: response.data[0].role,
          loginStatus: true,
        });
        console.log(response.data[0].role);

        // UserStore.loginStatus = true;
        // UserStore.role = response.data[0].role;

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
      console.log("error");
      console.log(err);
    });
};
</script>
<style></style>
