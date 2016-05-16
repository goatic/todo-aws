import {
  graphql
} from 'graphql'

import schema from '../api/schema'

import {
  isApiQuery,
  parseApiQuery
} from '../utilities'

async function api (context, next) {
  if (isApiQuery(context.request)) {
    const query = (await parseApiQuery(context.request)).query
    const result = await graphql(schema, query)

    context.body = result
  } else {
    await next()
  }
}

export default api
