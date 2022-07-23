//  Made by Poukam Ngamaleu

const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.export = {
  target: 'node',
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_module/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', 'ts', 'js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new NodePolyfillPlugin()],
}
