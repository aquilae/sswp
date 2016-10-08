const path = require('path')
const webpack = require('webpack')

switch (process.argv[2]) {
    case 'build':
        webpack([
            {
                bail: true,
                target: 'node',
                // force webpack to leave node env constants as is
                node: {
                    __dirname: false,
                    __filename: false
                },
                entry: path.join(__dirname, 'src', 'server', 'index.js'),
                output: {
                    path: path.join(__dirname, 'build', 'server'),
                    filename: 'index.js'
                },
                devtool: 'inline-source-map',
                resolve: {
                    extensions: [
                        '',
                        '.js',
                        '.jsx'
                    ]
                },
                module: {
                    loaders: [
                        {
                            enforce: 'pre',
                            test: /(\.jsx?|\.css)$/i,
                            loader: 'source-map-loader'
                        },
                        {
                            test: /\.jsx?$/i,
                            loader: 'babel'
                        },
                        {
                            test: /\.html$/i,
                            loader: 'raw'
                        },
                        {
                            test: /\.css$/i,
                            loader: 'style!css'
                        }
                    ]
                },
                externals: (context, request, callback) => {
                    // webpack passes absolute path for entry
                    if (request === path.join(__dirname, 'src', 'server', 'index.js')) {
                        return callback(null, false)
                    }

                    if (/^[a-z\-0-9]+(\/[a-z\-0-9.]+)*$/i.test(request)) {
                        console.log(`%s [%s] -> external`, request, context)
                        callback(null, `require(${JSON.stringify(request)})`)
                    }
                    else {
                        console.log(`%s [%s] -> internal`, request, context)
                        callback(null, false)
                    }
                }
            },
            {
                bail: true,
                target: 'web',
                entry: path.join(__dirname, 'src', 'public', 'app.js'),
                output: {
                    path: path.join(__dirname, 'build', 'public'),
                    filename: 'app.js'
                },
                devtool: 'inline-source-map',
                resolve: {
                    extensions: [
                        '',
                        '.js',
                        '.jsx'
                    ]
                },
                module: {
                    loaders: [
                        {
                            enforce: 'pre',
                            test: /(\.jsx?|\.css)$/i,
                            loader: 'source-map-loader'
                        },
                        {
                            test: /\.jsx?$/i,
                            loader: 'babel'
                        },
                        {
                            test: /\.html$/i,
                            loader: 'raw'
                        },
                        {
                            test: /\.css$/i,
                            loader: 'style-loader!css-loader?modules'
                        }
                    ]
                },
                externals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        ]).run((err, stats) => {
            if (err) {
                console.error(err.stack || err)
            }
            else {
                console.log(stats.toString('verbose'))
            }
        })
        break
    case 'start':
        require('./build/server')
        break
}
