import send from 'koa-send'

async function distribution (context) {
  await send(
    context,
    context.path.startsWith('/distribution/')
    ? context.path
    : context.path === '/api'
    ? '/distribution/graphiql.html'
    : '/distribution/client.html'
  )
}

export default distribution
