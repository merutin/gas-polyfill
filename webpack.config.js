const path = require('path');

module.exports = {
	mode: "development",
  entry: './src/index.js',
	target: ['web', 'es5'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};