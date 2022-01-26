<template>
  <div>
    <v-toolbar color="cyan" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link class="main" to="/">
        <v-toolbar-title>
          <span class="group pa-2">
            <i class="fas fa-home"></i>
          </span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <form @submit.prevent="searchBtn">
        <input class="input" type="text" v-model="searchData" />
        <v-btn icon type="submit">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </form>
    </v-toolbar>
  </div>
</template>

<script>
import EventBus from "@/utils/EventBus";

export default {
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    searchBtn() {
      EventBus.$emit("searchData", this.searchData);
    },
  },
};
</script>

<style scope>
.main {
  text-decoration: none;
  color: white;
}
.input {
  background: white;
}
</style>
