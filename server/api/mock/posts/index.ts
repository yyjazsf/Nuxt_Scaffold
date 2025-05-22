import Mockjs from 'mockjs'

export default defineEventHandler((event) => {
  const data = Mockjs.mock({
    count: 10,
    'list|10': [
      {
        'id|+1': 1,
        title: '@ctitle(5, 10)',
        content: '@cparagraph(2, 4)',
        author: '@cname',
        created_at: '@datetime'
      }
    ]
  })

  return data
})
