<style>
nav a {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
</style>
<template>
  <nav>
    <router-link to="/">게시판 목록</router-link> |
    <router-link to="/board/new">글쓰기</router-link>
  </nav>
  <router-view />
</template>
