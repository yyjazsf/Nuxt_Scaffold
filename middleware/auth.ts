export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
}) 
