import {
    text
} from 'co-body'

function isGraphQLPost(request){
    return request.method === 'POST'
    && request.header['content-type'] === 'application/graphql'
}

async function getGraphQLBody(request){
    return await text(request)
}

function getGraphQLUrl(request){
    return decodeURI(
        request.url.substring(
            request.url.indexOf('?') + 1 || request.url.length
        )
    )
}

export {
    isGraphQLPost,
    getGraphQLBody,
    getGraphQLUrl
}
