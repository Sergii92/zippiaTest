module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},

	resolve: {
		extensions: [ '.js', '.less' ]
	}
};
