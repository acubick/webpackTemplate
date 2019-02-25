const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
    // const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/',
}

module.exports = {
    externals: {
        paths: PATHS
    },
    mode: 'development',
    entry: {
        app: PATHS.src,
        test: './src/test.js',
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },

    module: {
        rules: [{
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.src}/js/postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 sourceMap: true,
            //                 config: {
            //                     path: `${PATHS.src}/js/postcss.config.js`
            //                 }
            //             }
            //         },
            //     ]
            // },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: `${PATHS.assets}img`,
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {

                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `${PATHS.assets}fonts`
                    }
                }]
            },
        ]
    },

    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            hash: false,
            title: 'my index page!',
            myPageHeader: 'Hello INDEX',
            chunks: ['vendor', 'app'],
            template: `${PATHS.src}/index.html`,
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            hash: false,
            title: 'my test page!',
            myPageHeader: 'Hello TEST',
            template: `${PATHS.src}/test.html`,
            chunks: ['vendor', 'test'],
            filename: 'test.html' //relative to root of the application
        }),
        // new HtmlWebpackPlugin({


        // }),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CleanWebpackPlugin(['./dist/**/*.*']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        // DISABLE SOURCEMAPS BUGS!!!
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorPluginOptions: {
        //         preset: ['default',
        //             {
        //                 discardComments: {
        //                     removeAll: true
        //                 }
        //             }
        //         ],
        //     },
        //     canPrint: true
        // }),
        new CopyWebpackPlugin([
            // {
            //       from: `${PATHS.src}/img`,
            //       to: `${PATHS.assets}img`
            //   },
            // {
            //     from: `${PATHS.src}/fonts`,
            //     to: `${PATHS.assets}fonts`
            // },
            {
                from: `${PATHS.src}/static`,
                to: ``
            },
        ])
    ]
}