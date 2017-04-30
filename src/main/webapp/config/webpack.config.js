/* webpack.config.js */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 辅助函数
var utils = require('./utils')
var fullPath = utils.fullPath;
var pickFiles = utils.pickFiles;
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'
// 项目根路径
var ROOT_PATH = fullPath('../');
// 项目源码路径
var SRC_PATH = ROOT_PATH + '/resources';
// 打包路径
var DIST_PATH = ROOT_PATH + '/dist';
// 库路径
var NODE_MODULES_PATH = ROOT_PATH + '/node_modules';

// 是否是开发环境
var __DEV__ = process.env.NODE_ENV !== 'production';

// components
var alias = pickFiles({
	id: /(components\/[^\/]+)/,
	pattern: SRC_PATH + '/js/components/*/index.js'
});

// comtainers
alias = Object.assign(alias, pickFiles({
	id: /(containers\/[^\/]+).js/,
	pattern: SRC_PATH + 'js/containers/*'
}));

// reducers
alias = Object.assign(alias, pickFiles({
	id: /(reducers\/[^\/]+).js/,
	pattern: SRC_PATH + '/js/reducers/*'
}));

// actions
alias = Object.assign(alias, pickFiles({
	id: /(actions\/[^\/]+).js/,
	pattern: SRC_PATH + '/js/actions/*'
}));

// store
alias = Object.assign(alias, pickFiles({
	id: /(store\/[^\/]+).js/,
	pattern: SRC_PATH + '/js/store/*'
}));

var config = {
//	context: SRC_PATH,
	entry: {
		app: [SRC_PATH + '/indexEntry.js'],
		lib: [
			'react', 'react-dom', 'react-router',
			'redux', 'react-redux', 'redux-thunk'
		]
	},
	output: {
		path: DIST_PATH,
		filename: '[name].js'
	},
	module: {
		loaders: [
		      {
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        loader: 'babel-loader',
		        include: SRC_PATH
		      },
		      {
		        test    : /\.scss/,
		        loaders : [
		          'style',
		          BASE_CSS_LOADER,
		          'sass?sourceMap'
		        ]
		      },
		      {
		        test    : /\.css$/,
		        loaders : [
		          'style',
		          BASE_CSS_LOADER
		        ]
		      },
		      {
		          test: /\.(jpg|png|svg)$/,
		          exclude: [
		             path.resolve(__dirname, "../resources/img")
		           ],
		          loader: 'url?limit=8192'
		       },
		       {
		           test: /\.(jpg|png|svg)$/,
		           include: [
		             path.resolve(__dirname, "../resources/img")
		           ],
		           loader: 'file-loader?name=public/[name].[ext]',
		       },
		       {
		        test   : /\.json$/,
		        loader : 'json'
		      }
		    ]
	},
	resolve: {
		alias: alias
	},
	resolveLoader: {
	    moduleExtensions: ['-loader']
	},
	plugins: [
		new webpack.DefinePlugin({
		    'process.env': {
		      'NODE_ENV': JSON.stringify('production')
		    }
		}),
//		new webpack.optimize.CommonsChunkPlugin({
//		     names: ['lib']
//		})
	]
};

// 使用缓存
//var CACHE_PATH = ROOT_PATH + '/cache';
//// 使用 babel编译jsx, es6
//config.module.loaders.push({
//	test: /\.js$/,
//	exclude: /node_modules/,
//	include: SRC_PATH,
//	// 这里使用 loaders, 因为后面还需添加 loader
//	loaders: ['babel?cacheDirectory=' + CACHE_PATH]
//});

// 自动引入静态资源到相应html页面
var HtmlwebpackPlugin = require('html-webpack-plugin');
config.plugins.push(new HtmlwebpackPlugin({
    filename: 'index.html',
    chunks: ['app', 'lib'],
    hash: true,
//    favicon: SRC_PATH + '/img/favicon.ico',
    template: SRC_PATH + '/template/index_template.html',
    inject: 'body'
  }));

module.exports = config;