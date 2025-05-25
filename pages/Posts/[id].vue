<script setup lang="ts">
definePageMeta({
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

// watchEffect(() => {
//   if (data.value) {
//     useSeoMeta({
//       title: data.value.title,
//       description: data.value.content,
//     })
//   }
// })
</script>

<template>
  <article class="post-detail">
    <template v-if="data">
      <h3 class="text-2xl font-bold">{{ data.title }}</h3>
      <p class="">{{ data.content }}</p>
      <p class="text-gray-500">{{ data.author }}</p>
      <p class="text-gray-500">{{ data.created_at }}</p>
      <AppLink to="/">Home</AppLink>
    </template>
  </article>
</template>
