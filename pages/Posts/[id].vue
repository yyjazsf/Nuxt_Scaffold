<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

const { id } = useRoute().params
const { status, data } = useFetch(`/api/mock/posts/${id}`, {
  // lazy: true,
  // transform: (data) => {
  //   return data.map(item => item)
  // }
})
</script>

<template>
  <div v-if="data">
    <h3 class="text-2xl font-bold">{{ data.title }}</h3>
    <p class="">{{ data.content }}</p>
    <p class="text-gray-500">{{ data.author }}</p>
    <p class="text-gray-500">{{ data.createdAt }}</p>
    <p class="text-gray-500">{{ data.updatedAt }}</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
