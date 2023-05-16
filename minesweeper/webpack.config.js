module.export = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    mode: 'development',
    devServer: {
        port: 8000,
        compress: true,
    },
}