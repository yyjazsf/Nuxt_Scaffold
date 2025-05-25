<script setup lang="ts">
const { data } = await useFetch('/api/mock/posts')
</script>

<template>
  <div>
    <AppLink to="/">Home page</AppLink>
    <ul>
      <li v-for="post in data?.list" :key="post.id">
        {{ post.id }}
        <AppLink :to="`/posts/${post.id}`">{{ post.title }}</AppLink>
      </li>
    </ul>
  </div>
</template>

