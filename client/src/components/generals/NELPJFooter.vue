<template>
  <q-footer elevated class="bg-grey-12 text-black">
    <q-toolbar>
      <q-toolbar-title class="row justify-between items-center">
        <div class="text-black-h6">
          © Copyright {{ year }} NELPJ. All rights reserved.
          <i class="q-pa-sm text-subtitle6">TOTUS TUUS !</i>
        </div>
        <div>
          <RouterLink to="facebook.com">
            <img
              border="0"
              alt="facebook logo"
              src="src/assets/footerImages/fblogo.png"
              width="40"
              height="40"
            />
          </RouterLink>
          <!-- Twitter -->
          <RouterLink to="twitter.com">
            <img
              border="0"
              alt="twitter logo"
              src="src/assets/footerImages/twitterlogo.png"
              width="40"
              height="40"
            />
          </RouterLink>
          <!-- Google -->
          <RouterLink to="gmail.com">
            <img
              border="0"
              alt="gmail logo"
              src="src/assets/footerImages/gmaillogo.png"
              width="40"
              height="40"
            />
          </RouterLink>
          <!-- Donation -->
          <RouterLink to="gcash.com">
            <img
              border="0"
              alt="donate logo"
              src="src/assets/footerImages/donate.png"
              width="40"
              height="40"
            />
          </RouterLink>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
const year = new Date(Date.now()).getFullYear();
</script>
