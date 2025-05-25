<script setup lang="ts">
const { t, locales, setLocale } = useI18n()
const appConfig = useAppConfig()
useSeoMeta({
  title: 'home',
  // description: 'seo friendly home page',
})
</script>

<template>
  <div>
    <div>
      <button v-for="locale in locales" @click="setLocale(locale.code)">
        {{ locale.name }}
      </button>
    </div>
    <h2 class="test-vars">{{ appConfig.title }}</h2>
    <ul>
      <li>
        <AppLink to="/about">{{ t('about') }}</AppLink>
      </li>
      <li>
        <AppLink to="/login">{{ t('login') }}</AppLink>
      </li>
      <li>
        <AppLink to="/posts">{{ t('post') }}</AppLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.test-vars {
  color: $color-secondary;
}
</style>
