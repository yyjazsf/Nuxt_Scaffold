import Mockjs from 'mockjs'
import { getRouterParam } from 'h3'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const data = Mockjs.mock({
    id: Number(id),
    title: '@ctitle(5, 10)',
    content: '@cparagraph(2, 4)',
    author: '@cname',
    created_at: '@datetime'
  })

  return data
})
