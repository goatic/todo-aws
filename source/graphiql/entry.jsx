import React from 'react'
import {render} from 'react-dom'
import Graphiql from 'graphiql'
import fetch from 'isomorphic-fetch'
import 'graphiql/graphiql.css'
import './styles.css'

function fetcher (params) {
  return fetch(`${window.location.origin}/api`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((response) => response.json())
}

render(
  <Graphiql
    fetcher={fetcher}
  />,
  document.getElementById('root')
)
