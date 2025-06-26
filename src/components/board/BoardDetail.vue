<template>
  <div class="board-container" v-if="board">
    <h2>📄 게시글 상세</h2>
    <div class="board-detail">
      <label class="label-title">제목</label>
      <h3 class="board-title">{{ board.title }}</h3>

      <label class="label-content">내용</label>
      <div class="board-content">{{ board.content }}</div>
    </div>
    <div class="board-buttons" style="margin-top: 30px;">
      <router-link :to="`/board/edit/${board.id}`">
        <button>✏️ 수정하기</button>
      </router-link>
      <button @click="deleteBoard" style="background-color:#ef4444;">🗑️ 삭제하기</button>
      <button @click="$router.push('/')">목록으로</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { board: null };
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:8080/board/${id}`)
      .then(res => this.board = res.data);
  },
  methods: {
    goEdit() {
      this.$router.push(`/board/edit/${this.board.id}`);
    },
    deleteBoard() {
      if (confirm('삭제할까요?')) {
        axios.delete(`http://localhost:8080/board/${this.board.id}`)
          .then(() => this.$router.push('/'));
      }
    }
  }
}
</script>
