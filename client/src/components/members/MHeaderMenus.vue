<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-white" height-hint="98">
      <!-- if screen is less than the medium -->
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
              {{ link.navMenu }}
            </RouterLink>
          </q-toolbar>
          <q-toolbar>
            <RouterLink class="nav-link" to="/logout"> Logout </RouterLink>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered class="bg-white">
      <q-list
        bordered
        padding
        class="rounded-borders h-nav"
        v-for="link in links"
        :key="link.name"
      >
        <q-item clickable v-ripple align="center" class="text-white">
          <!-- <RouterLink class="nav-link" :to="link.to"> -->
          <RouterLink class="nav-link" :to="{ name: link.name }">
            {{ link.navMenu }}
          </RouterLink>
        </q-item>
      </q-list>
      <q-item clickable v-ripple>
        <RouterLink class="nav-link" to="/logout"> Logout </RouterLink>
      </q-item>
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

const router = useRouter();
const links = [];
const routes = router.getRoutes();
let memberRoutes = [];

memberRoutes = routes.filter((r) => r.meta.memberOnly);

console.log(router);

memberRoutes[0].children.forEach((child) => {
  if (child.path == "/member") {
    links.push({
      to: "/",
      name: child.name,
      navMenu: child.navMenu,
    });
  } else {
    links.push({
      to: "/member/" + child.path,
      name: child.name,
      navMenu: child.navMenu,
    });
  }
});

// routes.forEach((r) => {
//   console.log(r);
//   if (r.meta.memberOnly) {
//     r.children.forEach((child) => {
//       if (child.path == "/") {
//         links.push({
//           to: "/member",
//           name: child.name,
//         });
//       } else {
//         links.push({
//           to: child.path,
//           name: child.name,
//         });
//       }
//     });
//   }
// });

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
    ? "../src/assets/nelpj1920x150.png"
    : "../src/assets/nelpj.png";
};

window.addEventListener("resize", resizeEvent);

//side drawer
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.nav-link {
  list-style-type: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  margin: 10px;
  color: #4f6228;
  float: left;
  text-decoration: none;
}
.nav-link.a.router-link-active,
.nav-link.router-link-exact-active {
  font-size: larger;
  color: #1e4620;
  font-weight: bolder;
  text-decoration: dotted;
}
.col-xs-2 {
  color: #4f6228;
}
</style>
