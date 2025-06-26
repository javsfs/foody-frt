<template>
  <div class="board-container">
    <h2>{{ isEdit ? '✏️ 게시글 수정' : '📝 게시글 등록' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="form.title" placeholder="제목을 입력하세요" />
      <textarea v-model="form.content" placeholder="내용을 입력하세요" rows="8" />
      <div class="board-buttons">
        <button type="submit">{{ isEdit ? '수정하기' : '등록하기' }}</button>
        <button type="button" @click="cancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'], // edit/:id 경로일 경우
  data() {
    return {
      isEdit: false,
      form: {
        title: '',
        content: ''
      }
    };
  },
  mounted() {
    // 수정일 경우 데이터 미리 불러오기
    if (this.id) {
      this.isEdit = true;
      axios.get(`http://localhost:8080/board/${this.id}`)
        .then(res => {
          this.form.title = res.data.title;
          this.form.content = res.data.content;
        })
        .catch(() => {
          alert('게시글 정보를 불러올 수 없습니다.');
          this.$router.push('/');
        });
    }
  },
  methods: {
    handleSubmit() {
      if (!this.form.title || !this.form.content) {
        alert('제목과 내용을 모두 입력하세요.');
        return;
      }

      if (this.isEdit) {
        // 수정
        axios.put(`http://localhost:8080/board/${this.id}`, this.form)
          .then(() => {
            alert('수정 완료!');
            this.$router.push(`/board/${this.id}`);
          })
          .catch(() => alert('수정 실패'));
      } else {
        // 등록
        axios.post('http://localhost:8080/board', this.form)
          .then(() => {
            alert('등록 완료!');
            this.$router.push('/');
          })
          .catch(() => alert('등록 실패'));
      }
    },
    cancel() {
      if (this.isEdit) {
        this.$router.push(`/board/${this.id}`);
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>
