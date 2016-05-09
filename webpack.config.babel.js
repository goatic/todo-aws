import { join } from 'path'

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
  host: process.env.HOST,
  port: process.env.PORT,
  contentBase: join(__dirname, '/distribution'),
  publicPath: '/distribution/',
  historyApiFallback: {
    index: 'client.html'
  },
  proxy: {
    '/api': {target: 'http://localhost:3001'}
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
