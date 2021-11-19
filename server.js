const { Socket } = require('engine.io');
const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

//----------------------------------------------------------------------------
app.get('/', function( request, response ){
	response.render( 'index' ); 
});
//----------------------------------------------------------------------------
const server = app.listen(8080, function(){
    console.log('Server with socket.io')
})

const io = require('socket.io')(server)

io.on("connection", function (socket) {
    console.log("Someone connected!");
    
    socket.on("count", function (classname) {
        io.sockets.emit('display', classname);
    });
});





