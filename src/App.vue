<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="huts"
  >
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <p><strong>{{ item.name }}</strong></p>
        <div>Member: {{ item.member_name }} ({{ item.member_acronym }})</div>
        <a :href="'https://'+item.url" target="_blank">Link</a>
      </template>
    </ais-hits>
    <ais-pagination />
  </ais-instant-search>
</template>

<script setup>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";

const env = import.meta.env;

const searchClient = instantMeiliSearch(
  env.VITE_MEILISEARCH_URL,
  env.VITE_MEILISEARCH_API_KEY,
  {
    finitePagination: true,
  }
)
</script>