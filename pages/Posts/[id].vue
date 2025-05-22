<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const { id } = useRoute().params
const { status, data } = useFetch(`/mock/posts/${id}`, {
  lazy: true,
  transform: (data) => {
    return data.map(item => item)
  }
})

</script>

<template>
  <div>
    <p>{{ data }}</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
