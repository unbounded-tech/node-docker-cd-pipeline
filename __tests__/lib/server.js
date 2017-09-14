import server from 'lib/server'

jest.mock('fastify', () => {
  return jest.fn(() => {
    return {
      get: jest.fn(),
      listen: jest.fn()
    }
  })
})

describe('lib/server', () => {
  let fastify

  beforeEach(() => {
    fastify = require('fastify')
  })

  it('exists', () => {
    expect(server).toBeDefined()
  })

  it('fastify instantiated', () => {
    expect(fastify).toBeCalled()
  })

  it('exports instantiated fastify server', () => {
    expect(typeof server).toBe('object')
    expect(typeof server.get).toBe('function')
    expect(typeof server.listen).toBe('function')
  })
})
