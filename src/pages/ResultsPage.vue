<script setup lang="ts">
import { computed } from 'vue';
import { TResults } from 'components/models';
import { Results } from 'src/moc/const';

const results: TResults = Results

const resultRace = computed(() =>  localStorage.getItem('sr2ResultRace') as keyof TResults | null)
const result = computed(() => resultRace.value ? results[resultRace.value] : null)
</script>

<template>
<div class="ResultsPage" :class="`bg-${resultRace}`" >
  <q-page class="row achievements-page q-pa-md">
    <q-item-section header top>
      <div class="text-h4 text-white">
        <q-btn round outline icon="arrow_back"  color="blue" @click="$router.push({ name: 'Home' })">
          <q-tooltip class="bg-blue-6">Go back</q-tooltip>
        </q-btn>
        Results
      </div>
      <div class="column q-gutter-md items-center">
        <div class="row items-center">
          <q-avatar size="100px">
            <img :src='`src/assets/img/${resultRace}_logo.png`'>
          </q-avatar>
          <h2 class="text-white">{{result?.name}}</h2>
        </div>

         <q-card
           class="my-card text-white"
           style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
         >
           <q-card-section>
             <div class="text-h5">{{result?.quote1}}</div>
           </q-card-section>
           <q-card-section v-if="result?.quote2">
             <div class="text-h5">{{result?.quote2}}</div>
           </q-card-section>

           <q-card-section class="q-pt-none text-subtitle1">
             {{result?.description}}
           </q-card-section>
           <q-card-section>
             <div class="text-h5"><strong>Author: </strong>{{result?.author}}</div>
           </q-card-section>
           <q-card-section>
             <div class="text-h5">{{result?.points}}</div>
           </q-card-section>
         </q-card>
      </div>
    </q-item-section>
  </q-page>
</div>
</template>

<style lang="sass">
.bg-zerg
  background: url('src/assets/img/zerg_bg.jpg')
.bg-primali
  background: url('src/assets/img/primal_bg.jpg')
.bg-protoss
  background: url('src/assets/img/protoss_bg.jpg')
.bg-terran
  background: url('src/assets/img/terran_bg.jpg')
.bg-taldarim
  background: url('src/assets/img/taldarim_bg.jpg')
.bg-infested
  background: url('src/assets/img/infested_bg.jpg')
.bg-hybrid
  background: url('src/assets/img/hybrid_bg.jpg')

</style>
