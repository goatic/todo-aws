import {
    json
} from 'co-body'

function isApiQuery (request) {
  return request.method === 'POST' &&
  request.header['content-type'] === 'application/json'
}

async function parseApiQuery (request) {
  return await json(request)
}

export {
  isApiQuery,
  parseApiQuery
}
