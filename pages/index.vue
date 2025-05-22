<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
  title: 'home',
  // description: 'seo friendly home page',
})
// const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <!-- <h1>{{ data.message }}</h1> -->
    <h2 class="test-vars">{{ appConfig.title }}</h2>
    <ul>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/1">Post 1</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.test-vars {
  color: $color-secondary;
}
</style>
