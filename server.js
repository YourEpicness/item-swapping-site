const express = require('express')
const path = require('path')
const app = express()
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//node js server
var connection = mysql.createConnection({
	host     : '192.168.33.34',
	user     : 'vagrant',
	password : 'vagrant',
	database : 'iss'
});

// listening on port
app.listen(3000)
