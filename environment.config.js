
const PROTOCOL = process.env.HTTPS ? 'https' : 'http'
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000
const APP_URL = `${PROTOCOL}://${HOST}:${PORT}`

const MONGO_URL = process.env.MONGO_URL || `mongodb://${HOST}:${PORT + 2}/todos`

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const IS_DEVELOPMENT = !IS_PRODUCTION

export {
  PROTOCOL,
  HOST,
  PORT,
  APP_URL,
  MONGO_URL,
  IS_PRODUCTION,
  IS_DEVELOPMENT
}
