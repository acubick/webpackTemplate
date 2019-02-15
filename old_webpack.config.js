const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
        mode: 'development',
        entry: {
            app: './src/index.js',
            test: './src/test.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            port: '8081'
        },
        module: {
            rules: [{
                    test: /\.(sa|sc)ss$/,
                    // test: /\.scss$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
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
                                    path: 'src/js/postcss.config.js'
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
                {
                    test: /\.css$/,
                    // test: /\.scss$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
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
                                    path: 'src/js/postcss.config.js'
                                }
                            }
                        },
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/g,
                    use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './',
                                useRelativePAth: true
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
                // 	{
                //     test: /\.css$/,
                //     use: [{
                //             loader: MiniCssExtractPlugin.loader,

                //         },
                //         'css-loader',
                //     ]
                // },

            ]
        },

        plugins: [
            new WebpackBar(),
            new HtmlWebpackPlugin({
                title: 'my index page!',
                myPageHeader: 'Hello INDEX',
                chunks: ['vendor', 'app'],
                template: './src/index.html',
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                title: 'my test page!',
                myPageHeader: 'Hello TEST',
                template: './src/test.html',
                chunks: ['vendor', 'test'],
                filename: 'test.html' //relative to root of the application
            }),
            // new HtmlWebpackPlugin({


            // }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            new CleanWebpackPlugin(['./dist/*.*']),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ],
                },
                canPrint: true
            })
        ]
    }
    // TODO: autoprefixer + babel