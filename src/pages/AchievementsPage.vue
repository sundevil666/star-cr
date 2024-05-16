<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { Results } from 'src/moc/const';
import { TResults } from 'components/models';

const results: TResults = Results

interface IAchievement {
  id: number;
  title: string;
  count: number | string | undefined;
  icon: string;
}
interface IRace {
  id: number | string
  title: string
  resultCount: number
  amountCount: number
}
const stringToArray = computed(() => {
  return  Object.values(resultRaceStore.value) as number[];
})
const totalResult = computed(() => {
  return stringToArray.value.reduce((sum, value) => sum + value, 0) || 0;
});

const countOpenedRace = computed(() => {
  return stringToArray.value.filter(value => value > 0).length;
})

const fieldWithMaxValue = computed(() => {
  let maxKey: keyof TResults | null = null;
  let maxValue = -Infinity;

  for (const [key, value] of Object.entries(resultRaceStore.value) as [string, number][]) {
    if (value > maxValue) {
      maxValue = value;
      if (key in results) {
        maxKey = key as keyof TResults;
      }
    }
  }

  return maxKey !== null ? results[maxKey]?.name || '' : '';
});

const achievementsList: ComputedRef<IAchievement[]> = computed(() => {
  return [
    {id: 1, title: 'Result', count: totalResult.value, icon: 'wb_sunny'},
    {id: 2, title: 'Opened race', count: countOpenedRace.value + ' / ' + stringToArray.value.length, icon: 'open_in_new'},
    {
      id: 3,
      title: 'Total games',
      count: sr2TotalGames.value,
      icon: 'gamepad'
    },
    {id: 4, title: 'Favorite race', count: fieldWithMaxValue.value, icon: 'favorite'},
  ]
})
const sr2TotalGames = computed<number | undefined>(() => {
  const value = localStorage.getItem('sr2TotalGames');
  return value ? Number(value) : undefined;
});

const resultRaceStore = computed(() =>  {
  const data = localStorage.getItem('sr2TotalGame')
  return JSON.parse(data as string)
})

const racesList: ComputedRef<IRace[]> = computed(() => {
  const completeData: IRace[] = [];

  for (const [key, value] of Object.entries(resultRaceStore.value)) {
    const race: IRace = {
      id: key,
      title: key,
      resultCount: value as number,
      amountCount: Number(results[key as keyof TResults].points) as number,
    };
    console.log();
    completeData.push(race);
  }

  console.log(completeData);
  return completeData;
});


</script>

<template>
  <q-page class="row achievements-page q-pa-md">
    <q-item-section header top>
      <h1 class="text-center"><q-icon color="blue" name="emoji_events" /> Achievements</h1>

      <q-list bordered padding class="rounded-borders q-mb-md text-primary">
        <div
          v-for="(item, i) in achievementsList"
          :key="item.id"
        >
          <q-item>
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section>{{ item.title }}</q-item-section>

            <q-item-section side>
              <q-badge :label="item.count" />
            </q-item-section>
          </q-item>

          <q-separator v-if="i < achievementsList.length - 1" spaced />
        </div>
      </q-list>
      <q-list bordered padding class="rounded-borders text-primary">
        <div
          v-for="(item, i) in racesList"
          :key="item.id"
        >
          <q-item>

            <q-item-section avatar>
              <q-icon name="star" />
              <q-badge :label="item.amountCount" />
            </q-item-section>
            <q-item-section>{{ item.title }}</q-item-section>

            <q-item-section side>
              <q-badge :label="item.resultCount" />
            </q-item-section>
          </q-item>

          <q-separator v-if="i < racesList.length - 1" spaced />
        </div>
      </q-list>
    </q-item-section>


  </q-page>
</template>

