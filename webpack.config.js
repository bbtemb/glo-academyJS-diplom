const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    admin: './admin.js',
    auth: './auth.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    liveReload: true,
    static: {
      directory: './dist',
      watch: true,
    },
  },
};
