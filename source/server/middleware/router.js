import send from 'koa-send'

const routes = {
  '*': '/distribution/client.html',
  '/api': '/distribution/graphiql.html'
}

async function router(context, next){
  if (routes[context.path]){
    await send(
      context,
      routes[context.path]
    )
  }
  else{
    await next()
    await send(context, routes['*'])
  }
}

export default router
