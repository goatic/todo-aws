import Koa from 'koa'

import api from './middleware/api'

const app = new Koa()

app
    .use(api)
    .listen(3001, () => console.log('listening on port 3001'))
