import Koa from 'koa'

import api from './middleware/api'
import distribution from './middleware/distribution'

const app = new Koa()

app
    .use(api)
    .use(distribution)
    .listen(3001, () => console.log('listening on port 3001'))
