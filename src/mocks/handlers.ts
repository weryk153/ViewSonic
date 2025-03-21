import { http, HttpResponse } from 'msw'

export const handlers = [
  // 模擬獲取學生列表的 API
  http.get('/api/students', () => {
    return HttpResponse.json([
      { id: 1, name: 'Alice', isOnline: true },
      { id: 2, name: 'Bob', isOnline: false },
      { id: 3, name: 'Charlie', isOnline: true },
    ])
  }),

  // 可擴充其他 API，例如：
  http.post('/api/students', async ({ request }) => {
    const newStudent = await request.json()
    return HttpResponse.json(newStudent, { status: 201 })
  }),

  http.get('/api/error', () => {
    return new HttpResponse(null, { status: 500 })
  }),
]
