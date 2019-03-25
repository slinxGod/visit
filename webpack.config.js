var webpack = require('webpack');

var path = require('path');

var argv = require('yargs').argv;

var outputs = [path.join(__dirname, 'assets/style'), path.join(__dirname, 'src/main/resources/html/dist'), path.join(__dirname, 'assets/style')];
var op_index = argv.m || 0; // 0=前端, 1=开发， 2=部署， --m=0

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var SpritesmithPlugin = require('webpack-spritesmith');

var config = {
    context: path.join(__dirname, 'assets'),
    entry: {
        'index': './js/com/index.js',
    },
    output: {
        path: outputs[op_index],
        publicPath: '',
        jsonpFunction: 'MACAU',
        filename: '[name].js?v=[chunkhash]',
        cdns: ['']
    },
    module: {
        loaders: [{
                test: /\.(html|png|gif|jpg|jpeg|eto|eot|woff|ttf|svg|woff2)(\?[^?]+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!px2rem-loader?remUnit=100!less-loader?compress=false")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!px2rem-loader?remUnit=100")
            }
        ]
    },
    postcss: function() {
        return [
            require('precss'),
            require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
        ];
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            'layer': path.join(__dirname, 'javascript/js/lib/layer'), //弹窗
            'fastjson': path.join(__dirname, 'javascript/js/lib/fastjson'), //fastjson取值工具
            'urlparser': path.join(__dirname, 'javascript/js/lib/urlparser'), //
            'date': path.join(__dirname, 'javascript/js/lib/date'), //
            'form.validate': path.join(__dirname, 'javascript/js/lib/form.validate'), //
            'dropload': path.join(__dirname, 'javascript/js/lib/dropload.js'), //
            'rem': path.join(__dirname, 'javascript/js/lib/rem.js'), //
            'me-pageloading': path.join(__dirname, 'javascript/js/lib/pageLoading/me-pageloading.js'), //
            'hostsetter': path.join(__dirname, 'javascript/js/lib/hostsetter.js'), //
            'wechat': path.join(__dirname, 'javascript/js/lib/wechat.js'), //
            'language': path.join(__dirname, 'javascript/js/lib/language.js'), //
            'ckplayer': path.join(__dirname, 'javascript/js/lib/ckplayer.js'), //
            'removable': path.join(__dirname, 'javascript/js/lib/removable.js'), //
        }
    },


    devtool: 'source-map',

    plugins: [new webpack.NoErrorsPlugin(), //
        new ExtractTextPlugin("[name].css"), //
        new webpack.optimize.CommonsChunkPlugin(['common'], 'jquery.js')
    ]
}

// 如果是正式环境下
if (op_index == '2') {
    delete config.devtool;
    config.plugins[config.plugins.length] = new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports']
        },
        comments: false
    })
}
//
module.exports = config;
//