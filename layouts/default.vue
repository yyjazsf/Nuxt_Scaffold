<script setup lang="ts">
const route = useRoute()

useHead({
  title: `App Name - ${route.meta.title}`,
})
</script>

<template>
  <main>
    <slot />
  </main>
</template>
