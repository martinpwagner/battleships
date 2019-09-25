module.rules = [
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
];

module.exports = {
    target: 'node',
    entry: "./bin/battleships.ts",
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};