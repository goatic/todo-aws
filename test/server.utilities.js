import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha'

import {
  expect
} from 'chai'

import fetch from 'isomorphic-fetch'
import http from 'http'
import Koa from 'koa'

import {
  APP_URL,
  PORT
} from '../environment.config.js'

import {
  isApiQuery,
  parseApiQuery
} from '../source/server/utilities.js'

describe('server/api/utilities.js', () => {
  describe('isApiQuery', () => {
    let request

    beforeEach(() => {
      request = {
        method: undefined,
        header: {
          'content-type': undefined
        }
      }
    })

    it('should reject GET requests', () => {
      request.method = 'GET'
      request.header['content-type'] = 'application/json'
      expect(isApiQuery(request)).to.equal(false)
    })

    it('should accept POST requests with JSON content', () => {
      request.method = 'POST'
      request.header['content-type'] = 'application/json'
      expect(isApiQuery(request)).to.equal(true)
    })

    it('should reject POST requests with XML content', () => {
      request.method = 'POST'
      request.header['content-type'] = 'application/xml'
      expect(isApiQuery(request)).to.equal(false)
    })
  })

  describe('parseApiQuery', () => {
    let application
    let response

    async function middleware (context) {
      context.body = await parseApiQuery(context.request)
    }

    beforeEach(() => {
      application = http
        .createServer(
          new Koa()
            .use(middleware)
            .callback()
        )
        .listen(PORT)
    })

    afterEach(() => {
      application.close()
      application = undefined
      response = undefined
    })

    it('should parse a request body into JSON', async function (done) {
      response = await fetch(`${APP_URL}/`, {
        method: 'POST',
        body: JSON.stringify({more: {like: 'you'}})
      })

      const result = await response.json()

      expect(result).to.have.deep.property('more.like', 'you')
      done()
    })
  })
})
