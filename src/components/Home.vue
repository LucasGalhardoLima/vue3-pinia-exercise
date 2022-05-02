<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { planetStore } from '../stores';

const locations = planetStore();
const { planets, loadingPlanets } = storeToRefs(locations);

const listPlanets = async () => {
  await locations.listPlanets();
};
</script>

<template>
  <div>
    <button @click="listPlanets">List Planets</button>
    <p v-if="loadingPlanets">Loading...</p>
    <div v-else style="display: flex; justify-content: center; padding 20px">
      <div v-for="planet in planets" :key="planet.name" style="margin: 5px; border: 1px solid #bdbdbd; padding: 5px;">
        <p> Name: {{ planet.name }}</p>
        <p> Climate: {{ planet.climate }}</p>
        <p> Terrain: {{ planet.terrain }}</p>
        <router-link :to="`/planet/${planet.id}`" style="color: yellow">Details</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
