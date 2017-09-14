import sum from 'lib/sum'

describe('lib/sum', () => {
  it('exists', () => {
    expect(sum).toBeDefined()
  })

  it('exports a function', () => {
    expect(typeof sum).toBe('function')
  })

  it('throws an error if two numbers are not provided', () => {
    expect(() => {
      sum('octopus')
    }).toThrow()

    expect(() => {
      sum(1)
    }).toThrow()

    expect(() => {
      sum()
    }).toThrow();

    expect(() => {
      sum(1, 'octupus')
    }).toThrow();
  })

  it('adds two numbers together', () => {
    let x = 10
    let y = 20
    let total = sum(x, y)
    expect(total).toBe(30)
  })
  
})