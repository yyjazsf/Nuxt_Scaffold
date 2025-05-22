import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return {
    code: 200,
    message: '登录成功',
    data: {
      token: '1234567890',
      user: {
        id: 1,
        email: body.email,
        password: body.password,
      }
    }
  }
})
