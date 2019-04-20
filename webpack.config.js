const path = require('path')

module.exports = {
	devServer: {
		port: 9876,
		contentBase: path.resolve(__dirname, 'dist'),
		watchContentBase: true
	}
}