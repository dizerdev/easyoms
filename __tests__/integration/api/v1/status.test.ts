import { GET } from '@/app/api/v1/status/route'
import { NextRequest } from 'next/server'

describe('GET /api/status', () => {
  it('retorna status 200 e corpo correto', async () => {
    // cria um NextRequest falso
    const mockRequest = new Request('http://localhost/api/v1/status', {
      method: 'GET',
    }) as unknown as NextRequest

    const response = await GET(mockRequest)

    expect(response.status).toBe(200)

    const json = await response.json()
    expect(json).toEqual({ chave: 'valor' })
  })
})
