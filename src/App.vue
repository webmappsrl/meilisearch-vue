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

<script>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";


export default {
  data() {
    return {
      searchClient: instantMeiliSearch(
        "http://meilisearch.local",
        "masterKey"
      ),
    };
  },
};
</script>


<style>
  pre {
    background-color: white;
  }
</style>