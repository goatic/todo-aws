import {
  graphql
} from 'graphql'

import schema from '../api/schema'

import {
  isGraphQLPost,
  getGraphQLBody
} from '../api/utilities'

async function api (context, next){
  if(isGraphQLPost(context.request)){
    const   query = (await getGraphQLBody(context.request)).query
    const   result = await graphql(schema, query)

    context.body = result
  } else {
    await next()
  }
}

export default api
