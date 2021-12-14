const path = require('path');
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    const OfflinePlugin = require('offline-plugin');
    const webpack = require('webpack');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const WebpackChunkHash = require('webpack-chunk-hash');
    const CompressionPlugin = require('compression-webpack-plugin');

    if (process.env.NODE_ENV === 'production') {
        module.exports.plugins = (module.exports.plugins || []).concat([
            // or use push because it's faster
            new webpack.DefinePlugin({
                'process.env': {
                    'process.env.NODE_ENV': '"production"',
                },
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                compress: {
                    warnings: false, // Suppress uglification warnings
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    screw_ie8: true,
                },
                output: {
                    comments: false,
                },
                exclude: [/\.min\.js$/gi], // skip pre-minified libs
            }),
            new webpack.HashedModuleIdsPlugin(),
            new WebpackChunkHash(),
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0,
            }),
        ]);
    }

    const config = (module.exports = {
        mode: 'production',
        devtool: '', // Removed dev-tools mapping
        entry: [
            './src/app.js',
            {
                vendor: ['offline-plugin/runtime'],
            },
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'build/client'),
            publicPath: 'build/client',
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                vue$: 'vue/dist/vue.esm.js', // Use the full build
            },
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath: '../',
                            },
                        },
                        'vue-loader',
                    ],
                },
            ],
        },
        optimization: {
            runtimeChunk: {
                name: 'runtime',
            },
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|zh-tw)$/),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new BundleAnalyzerPlugin(),
            new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
            new OfflinePlugin({
                AppCache: false,
                // important for working 200 respons => index.html ./
                externals: ['./'],
                ServiceWorker: {
                    events: true,
                },
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                },
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
        });

        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 
          'test') 
         {
          config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];
         }