import fetch from 'isomorphic-fetch'

function queryApi(query, callback) {
  return async function (dispatch) {
    try {

      const response = await fetch(`${window.location.origin}/api`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({query})
      })

      if(!response.ok) {
        throw Error('network error! response not ok')
      }

      const result = await response.json()

      if(result.errors) {
        throw Error('there was API errors')
      }

      callback(undefined, result.data, dispatch)

    } catch (error) {
      callback(error, undefined, dispatch)
    }
  }
}

export {queryApi}
