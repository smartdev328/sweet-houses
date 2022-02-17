const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// Test From Adam   2
// Test From Zak 2

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)