<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const { locale } = useI18n()

// 检查路径是否需要添加语言前缀
const shouldAddPrefix = (path: string) => {
  const excludePaths = ['/api', '/_nuxt', '/__nuxt', '/__i18n']
  return !excludePaths.some(excludePath => path.startsWith(excludePath))
}

// 计算最终的路径
const finalPath = computed(() => {
  if (shouldAddPrefix(props.to)) {
    return `/${locale.value}${props.to}`
  }
  return props.to
})
</script>

<template>
  <NuxtLink :to="finalPath">
    <slot />
  </NuxtLink>
</template> 
