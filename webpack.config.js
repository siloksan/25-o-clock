const HtmlWebpackPlugin = require('html-webpack-plugin');
//This plugin is convenient to use for the production build of the application
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ];
  };

  const getPlugins = () => {
    let plugins = [
      new HtmlWebpackPlugin({
        title: 'Understanding Typescript',
        buildTime: new Date().toDateString(),
        template: 'public/index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/img'),
            to: path.resolve(__dirname, 'dist/img'),
          },
          {
            from: path.resolve(__dirname, 'src/sound'),
            to: path.resolve(__dirname, 'dist/sound'),
          },
        ],
      }),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css',
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    entry: './src/index.tsx',
    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined,
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        // {
        //   test: /\.(js|jsx)$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //   },
        // },
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        //loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                //All files with the extension .jpg will be moved to the images folder
                outputPath: 'fonts', //These files will be named according to the following scheme
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: getPlugins(),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
    },
  };
};
