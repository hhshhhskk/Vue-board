<template>
  <div class="contents">
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <label for="title">제목: </label>
        <input type="text" v-model="title" />
        <br />
        <label for="contents">내용: </label>
        <textarea name="contents" rows="20px" v-model="contents"></textarea>
        <v-btn depressed type="submit"> 수 정 </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchView, fetchUpdate } from "@/api/index";

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await fetchView(id);
      if (response.status === 200) {
        this.UpdateView(response.data);
      } else {
        console.log("가져오기실패");
      }
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    UpdateView({ title, contents }) {
      this.title = title;
      this.contents = contents;
    },
    async submitForm() {
      try {
        if (this.title === "" || this.contents === "") {
          alert("제목 혹은 글을 작성해주세요.");
        } else {
          const id = this.$route.params.id;
          const response = await fetchUpdate(id, {
            title: this.title,
            contents: this.contents,
          });
          if (response.status === 200) {
            await this.$router.push("/");
          }
        }
      } catch (error) {
        console.log(error);
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
  width: 460px;
  height: 100%;
}
.form input,
.form textarea {
  font-family: inherit;
  font-size: 100%;
  width: 100%;
  border: 1px solid #dae1e7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
}
</style>
