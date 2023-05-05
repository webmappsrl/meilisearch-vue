<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="huts"
  >
    <div class="search-panel">
      <div class="filter-panel">
        <h2>Members</h2>
        <ais-refinement-list attribute="member_name" />
      </div>
      <div class="result-panel">
        <ais-search-box />
        <ais-hits>
          <template v-slot:item="{ item }">
            <p><strong>{{ item.name }}</strong></p>
            <div>Elevation: {{ item.elevation }} m</div>
            <div>Member: {{ item.member_name }} ({{ item.member_acronym }})</div>
            <a :href="item.url" target="_blank">Link</a>
          </template>
        </ais-hits>
      </div>
    </div>
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