<template>
  <div class="board-container">
    <h2>📋 게시판 목록</h2>
    <ul class="board-list">
      <li v-for="item in boards" :key="item.id">
        <router-link :to="`/board/${item.id}`">
          <h3>{{ item.title }}</h3>
        </router-link>
        <hr />
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';
import '../../assets/css/board.css'

export default {
  data() {
    return {
      boards: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/board')
      .then(response => {
        this.boards = response.data;
      })
      .catch(error => {
        console.error('API 호출 실패:', error);
      });
  }
}
</script>
