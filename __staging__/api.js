import fetch from 'node-fetch'
import cconfig from 'cconfig'

const config = cconfig({})

const {
  apiUrl
} = config

describe('api', () => {
  it(`/ returns { hello: 'world' } `, async () => {
    let res = await fetch(apiUrl)
    let json = await res.json()
    expect(json).toEqual({hello: 'world'})
  })
})
