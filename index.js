var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


var fs = require( 'fs' );
var input = "index.html";
var buf = new Buffer( fs.readFileSync( input ) ); 
var output = buf.toString( 'utf8' );

app.get('/', function(request, response) {
  /*response.send('Hello World 2!')*/   
  response.send( output );
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  console.log(output); 
})
