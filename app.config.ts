export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  },
  // 自定义 NuxtLink 的默认行为
  link: {
    // 自动添加语言前缀
    prefix: (locale: string) => `/${locale}`,
    // 排除不需要添加语言前缀的路径
    exclude: ['/api', '/_nuxt', '/__nuxt', '/__i18n']
  },
})
