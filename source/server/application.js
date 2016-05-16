import Koa from 'koa'

import api from './middleware/api'
import distribution from './middleware/distribution'

import {
  PORT,
  APP_URL
} from '../../environment.config.js'

const application = new Koa()

application
  .use(api)
  .use(distribution)
  .listen(PORT, () => console.log(`Listening on ${APP_URL}`))
