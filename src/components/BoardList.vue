<template>
  <v-card class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in paginatedItems">
        <v-list-item :key="item.title">
          <!-- <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar> -->

          <v-list-item-content>
            <router-link :to="`/view/${item.id}`">
              <v-list-item-title v-html="item.title"></v-list-item-title>
            </router-link>
            <v-list-item-subtitle v-html="item.contents"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="index" :inset="item.inset"></v-divider>
      </template>
      <template>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="pageCount"
            circle
          ></v-pagination>
        </div>
      </template>
      <router-link style="text-decoration: none" to="Create">
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </router-link>
    </v-list>
  </v-card>
</template>

<script>
import { fetchBoardList } from "@/api/index";
import EventBus from "@/utils/EventBus";

export default {
  data() {
    return {
      items: [],
      page: 1,
      pageSize: 5,
      search: "",
      searchedData: [],
    };
  },
  created() {
    fetchBoardList()
      .then((response) => (this.items = response.data))
      .catch((error) => console.log(error));

    EventBus.$on("searchData", (res) => {
      this.search = res;
    });
  },
  methods: {},
  computed: {
    rows() {
      return this.items.length;
    },
    pageCount() {
      let listLeng = this.items.length,
        listSize = this.pageSize,
        totalpage = Math.ceil(listLeng / listSize);
      return totalpage;
    },

    paginatedItems: function () {
      const start = (this.page - 1) * this.pageSize,
        end = start + this.pageSize;
      if (this.search) {
        return this.items
          .filter((data) => {
            return data.title.toLowerCase().includes(this.search.toLowerCase());
          })
          .slice(start, end);
      } else {
        return this.items.slice(start, end);
      }
    },
  },
};
</script>

<style scope>
.mx-2 {
  margin: 10px 0 0 93%;
}
</style>
