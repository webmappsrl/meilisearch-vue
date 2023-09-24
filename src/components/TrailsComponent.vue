export default {
  template: `
        <template>
          <div class="search-panel">
          <div class="filter-panel">
            <h2>Members</h2>
            <ais-refinement-list attribute="member_name" />
          </div>
          <div class="result-panel">
            <ais-search-box />
            <ais-hits>
              <template v-slot:item="{ item }">
                <p><strong>{{ item.name }} <span v-if="item.ref">(REF: {{ item.ref }})</span></strong></p>
                <div>Member: {{ item.member_name }}</div>
                <a v-if="item.url" :href="item.url" target="_blank">Link</a>
              </template>
            </ais-hits>
          </div>
        </div>
      </template>
  `

  

  props: {
    item
  }
}