<template>
  <q-page class="row index-page q-pa-md">
    <q-item-section header top class="q-mx-xl">
      <h2 class="text-center text-white">Questions</h2>

      <q-card class="my-card q-mx-xl" style="opacity: .9">
        <q-card-section class="bg-blue-6 text-white">
          <div class="text-h3 text-center"># {{ numberQuestion + 1 }}</div>
          <div class="text-h5 text-center">{{ questions[numberQuestion][0] }}</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn
            v-for="(item, index) in questions[numberQuestion][1]"
            :key="item"
            flat
            size="lg"
            rounded
            no-caps
            class="bg-blue-7 text-white q-my-lg full-width"
            @click="checkAnswer(index)"
          >
            {{ item }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-item-section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import { IScore, IScoreMore, TQuestion } from 'components/models';
import { Questions } from 'src/moc/const';

defineOptions({
  name: 'IndexPage'
});
const router = useRouter();
const numberQuestion = ref<number>(0);
const scores = ref<IScore>({
  zerg: 0,
  primal: 0,
  protoss: 0,
  terran: 0,
  taldarim: 0
});

const totalGame = ref<IScoreMore>(
  localStorage.getItem('sr2TotalGame') ?
    JSON.parse(localStorage.getItem('sr2TotalGame') as string) :
    {
      zerg: 0,
      primal: 0,
      protoss: 0,
      terran: 0,
      taldarim: 0,
      infested: 0,
      hybrid: 0
    })

const totalGames = ref<number>(
  localStorage.getItem('sr2TotalGames') ?
    Number(localStorage.getItem('sr2TotalGames')) : 0)

const resultRace = ref<keyof IScoreMore>('infested');

const questions: TQuestion[]  = Questions

const checkAnswer = (index: number) => {
  if(numberQuestion.value < questions.length - 1) {
    const act = questions[numberQuestion.value][2][index]
    updateScores(act)
    numberQuestion.value++
  } else {
    numberQuestion.value = 0
    endGames()
  }
}
function endGames() {
  totalGames.value++
  localStorage.setItem('sr2TotalGames', totalGames.value.toString())
  if(scores.value.zerg > scores.value.protoss &&
    scores.value.zerg > scores.value.terran &&
    scores.value.primal < 8 &&
  Math.abs(scores.value.protoss - scores.value.zerg) > 3) {
    resultRace.value = 'zerg'
    totalGame.value.zerg++
  } else if (scores.value.primal > scores.value.protoss &&
    scores.value.primal > scores.value.terran &&
  scores.value.primal === 8) {
    resultRace.value = 'primal'
    totalGame.value.primal++
  } else if (scores.value.protoss > scores.value.zerg &&
  scores.value.protoss > scores.value.terran &&
  scores.value.taldarim < 5 &&
  Math.abs(scores.value.protoss - scores.value.zerg) > 3) {
    resultRace.value = 'protoss'
    totalGame.value.protoss++
  } else if (scores.value.protoss > scores.value.zerg &&
  scores.value.protoss > scores.value.terran &&
  scores.value.taldarim === 5) {
    resultRace.value = 'taldarim'
    totalGame.value.taldarim++
  } else if (Math.abs(scores.value.protoss - scores.value.zerg) <= 3) {
    resultRace.value = 'hybrid'
    totalGame.value.hybrid++
  } else {
    resultRace.value = 'infested'
    totalGame.value.infested++
  }
  localStorage.setItem('sr2TotalGame', JSON.stringify(totalGame.value))
  localStorage.setItem('sr2ResultRace', resultRace.value)
  router.push({ name: 'ResultsPage', query: { race: resultRace.value } })
}
function updateScores(command: string) {
  const commands = command.split(';');
  commands.forEach(cmd => {
    const faction = cmd.trim().slice(0, -2) as keyof IScore;
    const operation = cmd.trim().endsWith('++') ? '++' : '--';
    if (operation === '++') {
      scores.value[faction] += 1;
    } else if (operation === '--') {
      scores.value[faction] -= 1;
    }
  });
}
</script>

<style lang="sass">
.index-page
  background: url('src/assets/background__main.jpg') no-repeat center center / cover
  animation: slide 85s infinite

@keyframes slide
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%
</style>
