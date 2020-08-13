const path =require('path')
const HtmlWebPackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }     
            }
            ,{
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  'css-loader'
                ]
              },
              {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 10240,
                  }
                }
              },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
             favicon: "./public/favicon.png",
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }
        ),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ]
    })
    ]
}
