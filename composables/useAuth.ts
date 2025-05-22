export const useAuth = () => {
  const authState = useState('auth', () => ({
    isAuthenticated: false,
    token: null as string | null
  }))

  const setAuthState = (token: string) => {
    authState.value = {
      isAuthenticated: true,
      token
    }
  }

  const clearAuthState = () => {
    authState.value = {
      isAuthenticated: false,
      token: null
    }
  }

  const isAuthenticated = () => {
    return authState.value.isAuthenticated
  }

  return {
    authState,
    setAuthState,
    clearAuthState,
    isAuthenticated
  }
} 
