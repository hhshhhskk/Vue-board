<template>
  <div class="example-modal-window">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>

    <!-- 컴포넌트 ModalForm -->
    <ModalForm @close="closeModal" v-if="modal">
      <!-- default 슬롯 콘텐츠 -->
      <p>정말 삭제 하시겠습니까??</p>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <button @click="accept">확인</button>
        <button @click="cancle">취소</button>
      </template>
      <!-- /footer -->
    </ModalForm>
  </div>
</template>

<script>
import ModalForm from "@/components/common/ModalForm.vue";
export default {
  components: { ModalForm },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>
