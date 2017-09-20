import indexRoute from 'routes/index'

describe('routes/index', () => {
  it('exports a function', () => {
    expect(typeof indexRoute).toBe('function')
  })

  it('calls reply.send', () => {
    const request = {}
    const reply = {
      send: jest.fn()
    }

    indexRoute(request, reply)

    expect(reply.send).toBeCalled()
  })
})
