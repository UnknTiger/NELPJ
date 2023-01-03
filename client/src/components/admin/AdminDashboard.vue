<template>
  <div class="q-mt-lg" style="height: auto">
    <q-card>
      <h4 class="q-ma-sm q-pa-sm" align="center">Admin Dashboard</h4>
    </q-card>
    <q-card class="row">
      <q-card-section class="col-grow"
        ><div class="q-gutter-md">
          <q-card v-for="n in dashboard" :key="n.id" style="float: left"
            ><q-card-section
              ><q-btn color="brown" :label="`${n.menu}`" /> </q-card-section
          ></q-card>
        </div>
      </q-card-section>
      <q-separator inset />
    </q-card>
  </div>
</template>
<script setup>
const dashboard = [
  {
    id: 1,
    menu: "edit foundations info",
  },
  {
    id: 2,
    menu: "post testimonies",
  },
  {
    id: 3,
    menu: "member request form",
  },
  {
    id: 4,
    menu: "member messages",
  },
  {
    id: 5,
    menu: "sponsorship application",
  },
  {
    id: 6,
    menu: "manage members",
  },
  {
    id: 7,
    menu: "manange stocks",
  },
  {
    id: 8,
    menu: "mamange articles",
  },
  {
    id: 9,
    menu: "manage request for sponsorship",
  },
];
</script>
<style>
h1 {
  display: flex;
}
</style>
