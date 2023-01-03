<template>
  <q-separator inset />
  <h4 class="text-white" align="center" style="text-shadow: black 1px 0 10px">
    <i>Heavens mesages</i>
  </h4>

  <div class="q-ma-md q-pa-md">
    <q-img
      v-for="letter in letters"
      :key="letter.id"
      @click="showDialog(letter.id)"
      class="shadow-12 q-ma-sm"
      src="../../../assets/hompageImages/envelope.png"
      style="height: 110px; width: 190px; border-radius: 10px"
    >
      <div class="absolute-bottom text-subtitle2 text-center">
        <i>A letter for you</i>
      </div>
    </q-img>

    <q-dialog
      v-model="isShown"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-img
        src="../../../assets/hompageImages/oldpaper.png"
        style="width: 2000px"
      >
        <p
          class="q-mt-lg text-h6 text-dark"
          style="width: 400px; margin-left: 80px"
          align="center"
        >
          <i>"{{ targetMsg[0].msg }}"</i>
        </p>
        <p
          class="q-mt-lg text-subtitle1 text-dark"
          style="width: 400px; margin-left: 80px"
          align="right"
        >
          <i>- {{ targetMsg[0].author }}</i>
        </p>
        <q-card-actions align="right" class="absolute-bottom text-beige">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-img>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const letters = [
  {
    id: 1,
    msg: "towards the end of time God will raise up great men full of the Holy Spirit and imbued with the spirit of Mary. Thru them, Mary Queen most powerful will work great wonders in the world, destroying sin and setting up the kingdom of Jesus her Son upon the ruins of the corrupt kingdom of the world. These holy men will accomplish this by means of the [Total Consecration].",
    author: "St. Louie de Montfort",
  },
  {
    id: 2,
    msg: "They will know the grandeurs of that Queen, and will consecrate themselves entirely to her service as subjects and slaves of love. They shall be the true apostles of the latter times.",
    author: "St. Louie de Montfort",
  },
  {
    id: 3,
    msg: "Dear people of God in the Philippines, go forth in the power of the Holy Spirit to renew the face of the earth- your own world first…your families, your communities, your nation... and the wider world of Asia, toward which the church in the Philippines has a special responsibility before the Lord; and the world beyond, working through faith for the renewal of God's whole creation.",
    author: "Blessed Pope John Paul II, Jan. 15, 1995",
  },
  {
    id: 4,
    msg: "Through these messages, we are hoping to enlighten the mind of our brothers and sisters about the crucial and exciting times that we are in and to prepare us for the Second Coming of our Lord Jesus Christ and the New Era of Peace. (Rev. 20-22). But before that, as foretold in the Bible and in the writings of saints, there will be chastisements/ tribulations which are actually 'purification' to make us worthy to enter the Reign of Peace.",
    author: "(Read Matthew 24- Signs of the End times)",
  },
  {
    id: 5,
    msg: "Extinguish not the spirit. Despise not prophecies.  But prove all things; hold fast that which is good",
    author: "1 Thess 5: 19",
  },
  {
    id: 6,
    msg: "ApIn cases which concern private revelations, it is better to believe than not believe, for if you believe, and it is proven true, you will be happy that you have believed, because our Holy Mother asked it. If you believe and it shall be proven false, you will receive all blessings as if it had been true, because you believed it to be true.ple",
    author: "Pope Urban VIII, 1623-1644",
  },
];

let targetMsg = ref([]);

// console.log(letters);
const isShown = ref(false);
const showDialog = (id) => {
  targetMsg.value = letters.filter((i) => {
    return i.id == id;
  });

  console.log(targetMsg);
  isShown.value = true;
};
</script>
