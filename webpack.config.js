module.exports = {
	module: {
		loaders: [
			{ test: /\.css/, loader: "style-loader!css-loader" },
			{ test: /\.less/, loader: "style-loader!css-loader!less-loader"},
			{ test: /\.gif/, loader: "url-loader?limit=12000&mimetype=image/gif" },
			{ test: /\.jpg/, loader: "url-loader?limit=12000&mimetype=image/jpg" },
			{ test: /\.png/, loader: "url-loader?limit=12000&mimetype=image/png" },
			{ test: /\.woff/, loader: "url-loader?limit=12000&mimetype=application/font-woff" },
			{ test: /\.ttf/, loader: "url-loader?limit=12000&mimetype=application/font-ttf" },
			{ test: /\.eot/, loader: "url-loader?limit=12000&mimetype=application/font-eot" },
			{ test: /\.svg/, loader: "url-loader?limit=12000&mimetype=image/svg+xml" },
			{ test: /\.json/, loader: "json-loader"},
			{ test: /\.jsx/, loader: "traceur?runtime=true&sourceMaps=true!jshint-loader!jsx-loader" },
			{ test: /\.js$/, loader: "traceur?runtime=true&sourceMaps=true!jshint-loader", exclude: [/node_modules\/(?!MoW-IVD)/, /public/] }
		]
	},
	output: {
		path: __dirname + "/public/build",
		filename: "main.js"
	},
	jshint: {
		// Env
		"browser": true,
		"node": true,
		"jquery": true,

		// Restrictions
		"bitwise": true,
		"newcap": false,
		"noempty": true,
		"esnext": true,
		"globalstrict": true,
		"freeze": true,
		"undef": true,
		"unused": true,
		"maxcomplexity": 25,
		"latedef": true,
		"smarttabs": false,
		"trailing": false,
		"laxbreak": true,

		// Style
		"maxparams": 10,

		// Loder options
		"emitErrors": false,
		"failOnHint": false,

		"globals": {
			"$": true,
			"tinymce": true,
			"Highcharts": true,
		}
	}
}
