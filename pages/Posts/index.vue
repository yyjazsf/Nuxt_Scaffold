<script setup lang="ts">
const { data } = await useFetch('/mock/posts')
</script>

<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <ul>
      <li v-for="post in data" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

