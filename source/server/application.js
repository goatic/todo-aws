import Koa from 'koa'

import api from './middleware/api'
import distribution from './middleware/distribution'

const app = new Koa()
const PORT = process.env.PORT || 3001

app
  .use(api)
  .use(distribution)
  .listen(PORT, () => console.log(`Listening on port ${PORT}`))
