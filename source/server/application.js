import Koa from 'koa'

import api from './middleware/api'
import router from './middleware/router'
import distribution from './middleware/distribution'

const app = new Koa()

app
    .use(api)
    .use(router)
    .use(distribution)
    .listen(3001, () => console.log('listening on port 3001'))
