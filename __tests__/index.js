import index from 'index'

jest.mock('lib/server', () => {
  return {
    get: jest.fn(),
    listen: jest.fn()
  }
})

describe('index', () => {
  let server

  beforeEach(() => {
    server = require('lib/server')
  })
  
  it('exists', () => {
    expect(index).toBeDefined()
  })

  it('server listens on ports 3000', () => {
    expect(server.listen)
      .toBeCalledWith(
        3000, 
        expect.any(Function)
      )
  })

  it('get /', () => {
    expect(server.get)
      .toBeCalledWith(
        '/', 
        expect.any(Function)
      )
  })

})
