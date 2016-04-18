import send from 'koa-send'

async function distribution(context, next){
  if (context.path.startsWith('/distribution/')){
    await send(
      context,
      context.path
    )
  }
  else{
    await next()
  }
}

export default distribution
