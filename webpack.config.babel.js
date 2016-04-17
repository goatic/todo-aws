import {
    join
} from 'path'

const babelLoader = {
    test: /.jsx?$/,
    loaders: ['react-hot', 'babel'],
    exclude: /node_modules/
}

const cssLoader = {
    test: /.css?$/,
    loaders: ['style', 'css?modules'],
    include: join(__dirname, '/source/client')
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
        '/api': {target: 'http://loacalhost:3001'}
    }
}

const config = {
    devtool: 'eval',
    entry: {
        client: join(__dirname, '/source/client/entry.jsx'),
        graphiql: join(__dirname, '/source/graphiql/entry.jsx')
    },
    output:{
        path: join(__dirname, '/distribution'),
        filename: '[name].js',
        publicPath: '/distribution/'
    },
    modules: {
        loaders: [babelLoader, cssLoader]
    },
    devServer
}

export default config
