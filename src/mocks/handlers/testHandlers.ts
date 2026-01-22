import { http, HttpResponse } from 'msw'

const getMSWTest = http.get('https://api/test', () => {
  return HttpResponse.json({ message: 'msw is working!' })
})

export const testHandlers = [getMSWTest]
