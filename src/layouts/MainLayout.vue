<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Game</q-toolbar-title>

        <div>Star Craft</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="left-sidebar"
    >
      <q-list>
        <q-item-section header>
          <div class="flex justify-end q-pa-sm">
            <q-btn flat round icon="close" @click="toggleLeftDrawer" />
          </div>
        </q-item-section>
        <q-item-section>
          <q-item class="flex justify-end">
            <q-toggle
              label="Sound"
              v-model="toggleMusic"
              @update:model-value="setMusic"
            />
          </q-item>
          <q-item>
            <q-btn
              label="Start"
              align="left"
              icon="play_arrow"
              color="blue"
              class="full-width"
              @click="$router.push({ name: 'Home' })"
            />
          </q-item>
          <q-item>
            <q-btn
              label="Achievements"
              align="left"
              icon="emoji_events"
              color="blue"
              class="full-width"
              @click="$router.push({ name: 'Achievements' })"
            />
          </q-item>
          <q-item>
            <q-btn
              v-if="resultRace"
              label="results"
              align="left"
              icon="person"
              color="blue"
              class="full-width"
              @click="$router.push({ name: 'ResultsPage', query: { race: 'zerg' } })"
            />
          </q-item>

        </q-item-section>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

defineOptions({
  name: 'MainLayout'
});

const leftDrawerOpen = ref(false);
const toggleMusic = ref(false);

const resultRace = computed(() => !!localStorage.getItem('sr2ResultRace'));

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// const audio = new Audio();
// audio.src = 'src/assets/audio/soundtrack.mp3';
// audio.loop = true;
// audio.volume = 0.5;
//
// audio.onloadeddata = () => {
//   audio.currentTime = Math.random() * (audio.duration + 1);
// };
//
// const setMusic = () => {
//   if (toggleMusic.value) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// };
</script>

<style lang="sass">
.left-sidebar
  background: url('src/assets/logo.png') no-repeat center center / 70%
</style>
