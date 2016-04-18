import {
    json
} from 'co-body'

function isGraphQLPost(request){
    return request.method === 'POST'
    && request.header['content-type'] === 'application/json'
}

async function getGraphQLBody(request){
    return await json(request)
}

export {
    isGraphQLPost,
    getGraphQLBody
}
