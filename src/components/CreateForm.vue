<template>
  <div class="contents">
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <label for="title">제목: </label>
        <input type="text" v-model="title" />
        <br />
        <label for="contents">내용: </label>
        <textarea name="contents" rows="20px" v-model="contents"></textarea>
        <v-btn depressed type="submit"> 완 료 </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchCreate } from "@/api/index";

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.title === "" || this.contents === "") {
          alert("제목 혹은 글을 작성해주세요.");
        } else {
          const response = await fetchCreate({
            title: this.title,
            contents: this.contents,
          });
          if (response.status === 201) {
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
