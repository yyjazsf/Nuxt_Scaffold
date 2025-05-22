<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useAuth } from '~/composables/useAuth'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>
const toast = useToast()
const { setAuthState } = useAuth()

const state = reactive({
  email: '',
  password: ''
})

async function login(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log('login', event.data)
  const { data: respData } = await useFetch('/api/mock/login', {
    method: 'POST',
    body: event.data
  })
  const { code, data, message } = respData.value
  console.log(data.token)
  // 设置认证状态
  setAuthState(data.token)
  // 登录成功后跳转到首页
  navigateTo('/')
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="login">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
