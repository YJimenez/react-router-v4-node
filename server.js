import express from 'express'
const app = express()

import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './views/app.jsx'

app.use( express.static('public') );

app.get('*', function(req, res){
	
	let context={}
	
	var initialState = {
		title: 'Logro desbloqueado'
	}
		
	let htmlBody = renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);
	
	let htmlFrame = `<html>
			<head>
				<title>Server Side Rendering</title>
				<link rel='stylesheet' href='/style.css' />
			</head>
			<body>
				<div id="app">${htmlBody}</div>
				<script src="/bundle.js"></script>
			</body>
		</html>`
		
	if(context.status >= 400) {
		res.status(context.status).send(htmlFrame);
	} else if (context.url) {
		res.redirect(context.status, context.url);
	} else {
		res.send(htmlFrame);
	}
	
})

var PORT = 8080;
app.listen(PORT, () => {
	console.log('http://localhost:' + PORT);
})



/*
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack'); 
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
*/