import {
    graphql
} from 'graphql'

import schema from '../api/schema'

import {
    isGraphQLPost,
    getGraphQLBody,
    getGraphQLUrl
} from '../api/utilities'

async function api (context, next){
    if(context.path === '/api'){
        const   query = isGraphQLPost(context.request)
                ? (await getGraphQLBody(context.request))
                : getGraphQLUrl(context.request)
        const   result = await graphql(schema, query)

        if(result.errors)
        {
            result.errors = result.errors.map(error => error.toString())
        }

        context.body = result
    } else {
        await next()
    }
}

export default api
