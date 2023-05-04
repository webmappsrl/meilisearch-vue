<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="huts"
  >
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <pre>{{ item.official_name }}</pre>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script setup>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";

const env = import.meta.env;

const searchClient = instantMeiliSearch(
  env.VITE_MEILISEARCH_URL,
  env.VITE_MEILISEARCH_API_KEY
)

</script>


<style>
  * {
    color: white;
  }
</style>