<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {};
  },
};
</script>
<style>
h1 {
  font-size: 45px;
  font-weight: 600;
  color: gray;
  margin-left: 20px;
  padding: 30px 5px 15px;
}
</style>
