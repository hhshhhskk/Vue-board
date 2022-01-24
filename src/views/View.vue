<template>
  <div class="contents">
    <h1>글 상세</h1>
    <div class="form-wrapper">
      <form class="form">
        <label for="title">제목 </label>
        <div>{{ title }}</div>
        <label for="contents">내용 </label>
        <div class="con">{{ contents }}</div>
      </form>
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab"> mdi-close </v-icon>
            <v-icon v-else> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-btn to="/" fab dark small color="indigo">
          <i class="fas fa-list"></i>
        </v-btn>
        <v-btn :to="`/update/${id}`" fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="remove" fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </div>
  </div>
</template>

<script>
import { fetchView, fetchDelete } from "@/api/index";

export default {
  data() {
    return {
      id: "",
      title: "",
      contents: "",
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: false,
      bottom: true,
      left: true,
      transition: "slide-x-transition",
    };
  },
  async created() {
    try {
      this.id = this.$route.params.id;
      const response = await fetchView(this.id);
      if (response.status === 200) {
        this.title = response.data.title;
        this.contents = response.data.contents;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async remove() {
      if (confirm("정말 삭제하시겠습니까??") === true) {
        const response = await fetchDelete(this.id);
        if (response.status === 200) {
          await this.$router.push("/");
        }
      } else {
        return false;
      }
    },
  },
};
</script>

<style scope>
.form-wrapper {
  background: white;
  box-shadow: 0 20px rgba(0, 0, 0, 0.615);
  border-radius: 3px;
  padding: 15px 15px;
}
.form {
  width: 760px;
  height: 100%;
}
.form div {
  font-family: inherit;
  font-size: 100%;
  width: 100%;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 2rem;
}
.con {
  height: 300px;
  overflow: scroll;
}
</style>
