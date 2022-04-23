const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts'
  },

  // バンドルされた本番環境用のファイルをどこに書き出すか
  output: {
    // '__dirname'はこのファイルが存在するディレクトリのパス
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  // importの際に拡張子を省略できるように
  resolve: {
    extensions: ['.ts', '.js']
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },

  // モジュールに適用するルールとその対象を指定
  module: {
    rules: [
      // 拡張子'.ts'のファイルにTypescriptコンパイラを適用
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}