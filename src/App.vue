<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="index"
  >
  <div v-if="index === 'huts'">
    <HutsComponent :item="item"/>
  </div>
  <div v-else-if="index === 'trails'">
    <TrailsComponent :item="item"/>
  </div>
  <div v-else-if="index === 'climbing_rock_areas'">
    <CragsComponent :item="item"/>
  </div>
 </ais-instant-search>
</template>

<script setup>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";
import HutsComponent from "./components/HutsComponent.vue";
import TrailsComponent from "./components/TrailsComponent.vue";
import CragsComponent from "./components/CragsComponent.vue";

const env = import.meta.env;
const index = document.getElementById('app').dataset.index;

const searchClient = instantMeiliSearch(
  env.VITE_MEILISEARCH_URL,
  env.VITE_MEILISEARCH_API_KEY,
  {
    finitePagination: true,
  }
)
</script>