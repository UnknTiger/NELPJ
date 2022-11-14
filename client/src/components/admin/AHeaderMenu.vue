<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-light-green-10 text-white" height-hint="98">
      <div
        class="row col-xs-12 items-center justify-center q-pa-none q-ma-none"
        v-if="$q.screen.lt.md"
      >
        <div class="col-xs-2">
          <q-toolbar>
            <q-btn dense flat round icon="menu" size="xl" @click="toggleLeftDrawer" />
          </q-toolbar>
        </div>
        <div class="col-xs-10" style="margin-bottom: -10px">
          <RouterLink class="navbar-brand" to="/">
            <img :src="imgPath" style="max-width: 100%; height: auto" />
          </RouterLink>
        </div>
      </div>
      <div class="row inline" v-if="$q.screen.gt.sm">
        <RouterLink class="navbar-brand" to="/">
          <img :src="imgPath" style="max-width: 100%; height: auto" />
        </RouterLink>
        <div class="col-md-12" style="display: flex; justify-content: space-evenly">
          <q-toolbar v-for="link in links" :key="link.name">
            <RouterLink class="nav-link" :to="{ name: link.name }">
              {{ link.name }}
            </RouterLink>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
      class="bg-light-green-10 text-white"
    >
      <!-- drawer content -->
      <q-list bordered padding v-for="link in links" :key="link.name">
        <q-item clickable v-ripple align="center" class="text-white">
          <!-- <q-btn > -->
          <RouterLink class="nav-link" :to="link.to">
            {{ link.name }}
          </RouterLink>
          <!-- </q-btn> -->
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
//imports your routes from folder router/routes.
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "../../stores/example-store.js";
import UserLogout from "../generals/UserLogout.vue";

const router = useRouter();
const links = [];
const routes = router.getRoutes();

//loops all routes
routes.forEach((r) => {
  //if routes has meta of adminOnly
  if (r.meta.adminOnly) {
    //loops children having meta of adminOnly
    r.children.forEach((child) => {
      //if child path is equals to /admin
      if (child.path == "/admin") {
        links.push({
          to: "/",
          name: child.name,
        });
        console.log(links);
        // const text = "if result";
        // console.log(text.concat(links));
      } else {
        links.push({
          to: child.path,
          name: child.name,
        });
      }
    });
  }
});

//for image header
const imgPath = ref("");
const data = ref(window.innerWidth);

onBeforeMount(() => {
  imgPath.value = getImgPath();
});

const resizeEvent = (e) => {
  // data.value = window.innerWidth
  imgPath.value = getImgPath();
};

const getImgPath = () => {
  return window.innerWidth >= 1024
    ? "./src/assets/nelpj1920x150.png"
    : "./src/assets/nelpj.png";
};

window.addEventListener("resize", resizeEvent);

//side drawer
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
li {
  list-style-type: none;
  font-weight: bolder;
  margin: 10px;
  color: black;
  float: left;
}
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
