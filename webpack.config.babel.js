import {
  join
} from 'path'

import {
  PROTOCOL,
  HOST,
  PORT
} from './environment.config.js'

const babelLoader = {
  test: /.jsx?$/,
  loaders: ['react-hot', 'babel'],
  include: [
    join(__dirname, '/source/client'),
    join(__dirname, '/source/graphiql')
  ]
}

const cssLoader = {
  test: /.css?$/,
  loaders: ['style', 'css'],
  include: [
    join(__dirname, '/source/client'),
    join(__dirname, '/source/graphiql'),
    join(__dirname, '/node_modules/graphiql/graphiql.css')
  ]
}

const devServer = {
  progress: true,
  host: HOST,
  port: PORT,
  contentBase: join(__dirname, '/distribution'),
  publicPath: '/distribution/',
  historyApiFallback: {
    index: 'client.html'
  },
  proxy: {
    '/api': {target: `${PROTOCOL}://${HOST}:${PORT + 1}`}
  }
}

const config = {
  devtool: 'eval',
  entry: {
    client: join(__dirname, '/source/client/entry.jsx'),
    graphiql: join(__dirname, '/source/graphiql/entry.jsx')
  },
  output: {
    path: join(__dirname, '/distribution'),
    filename: '[name].js',
    publicPath: '/distribution/'
  },
  module: {
    loaders: [babelLoader, cssLoader]
  },
  devServer
}

export default config
