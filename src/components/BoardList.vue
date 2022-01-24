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
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="fas fa-arrow-left"></i>
        </button>
        &nbsp;
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        &nbsp;
        <button
          :disabled="pageNum >= pageCount - 1"
          @click="nextPage"
          class="page-btn"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
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

export default {
  data() {
    return {
      items: [],
      pageNum: 0,
      pageSize: 5,
    };
  },
  created() {
    fetchBoardList()
      .then((response) => (this.items = response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },
  computed: {
    pageCount() {
      let listLeng = this.items.length,
        listSize = this.pageSize,
        page = Math.ceil(listLeng / listSize);
      // if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedItems: function () {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.items.slice(start, end);
    },
  },
};
</script>

<style scope>
.mx-2 {
  margin: 10px 0 0 93%;
}
.btn-cover {
  text-align: center;
}
</style>
