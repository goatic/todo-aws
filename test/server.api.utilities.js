import {
  describe,
  it,
  beforeEach
} from 'mocha'
import { expect } from 'chai'
import {
  isGraphQLPost,
  getGraphQLBody
} from '../source/server/api/utilities.js'

describe('server/api/utilities.js', () => {
  describe('isGraphQLPost', () => {
    let request

    beforeEach(() => {
      request = {
        method: undefined,
        header: {
          'content-type': undefined
        }
      }
    })

    it('should reject "GET" requests', () => {
      request.method = 'GET'
      request.header['content-type'] = 'application/json'
      expect(isGraphQLPost(request)).to.equal(false)
    })

    it('should accept "POST" requests with "JSON" content', () => {
      request.method = 'POST'
      request.header['content-type'] = 'application/json'
      expect(isGraphQLPost(request)).to.equal(true)
    })

    it('should reject "POST" requests with "XML" content', () => {
      request.method = 'POST'
      request.header['content-type'] = 'application/xml'
      expect(isGraphQLPost(request)).to.equal(false)
    })
  })
})
