import { createRouter, createWebHistory } from 'vue-router';
import Board from '../components/board/Board.vue';
import BoardDetail from '../components/board/BoardDetail.vue';
import BoardForm from '../components/board/BoardForm.vue';

const routes = [
  { path: '/', component: Board },
  { path: '/board/new', component: BoardForm },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/edit/:id', component: BoardForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
