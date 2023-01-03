<template>
  <div class="row justify-center">
    <q-card
      class="col-4 q-ma-sm q-pa-md"
      style="max-width: 300px"
      v-for="msg in fndMsg"
      :key="msg.id"
    >
      <q-card-section class="">
        <p class="q-gutter-sm">
          {{ msg.msg }}
          <br />
        </p>
        <p class="fst-italic" align="right">
          <i>{{ msg.author }}</i>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const fndMsg = [
  {
    id: 1,
    msg: "They will be true apostles of the latter times to whom the Lord of Hosts will give eloquence and strength to work wonders and carry off glorious spoils from his enemies. They will sleep without gold or silver and, more important still, without concern in the midst of other priests, ecclesiastics and clerics. Yet they will have the silver wings of the dove enabling them to go wherever the Holy Spirit calls them, filled as they are with the resolve to seek the glory of God and the salvation of souls. Wherever they preach, they will leave behind them nothing but the gold of love, which is the fulfillment of the whole law.",
    author: "True Devotion, 58",
  },
  {
    id: 2,
    msg: "These are the great men who are to come. By the will of God Mary is to prepare them to extend his rule over the impious and unbelievers. But when and how will this come about? Only God knows. For our part we must yearn and wait for it in silence and in prayer: I have waited and waited. ",
    author: "True Devotion, 59",
  },
  {
    id: 3,
    msg: "Let us share the TOTAL CONSECRATION, the TICKET TO THE NEW PARADISE with the whole world before Jesus comes in all His glory to judge the living and the dead. We will make Jesus so happy because He wants everyone to be happy with Him forever. Yet He created us FREE and will not force us. We are all free to choose what we will get, the kingdom of Satan - HELL, or the kingdom of God - the NEW EARTH OF LOVE PEACE & JOY!",
    author: "",
  },
  {
    id: 4,
    msg: "Our DECLARATION OF FAITH:One HEART, One  SOUL…One GOD, One NATION…Fulfilling our destiny to be .....The NEW EARTH OF LOVE, PEACE & JOY !",
    author: "",
  },
];
</script>
