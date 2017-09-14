import onServerListen from 'lib/onServerListen'

jest.mock('llog')

describe('lib/onServerListen', () => {
  let log

  beforeEach(() => {
    log = require('llog')
  })

  it('exports a function', () => {
    expect(typeof onServerListen).toBe('function')
  })

  it('logs when server starts successfully', () => {
    onServerListen()
    expect(log.info).toBeCalled()
  })

  it('throws an err if given one as first argument', () => {
    expect(() => {
      onServerListen('error')
    }).toThrowError('error')
  })
})