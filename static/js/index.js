console.log("Server On (Now)");

let socket = io("http://localhost:8080");



$('#b').on('click', function(event){
    event.preventDefault();
    let classname = "blue";
    socket.emit('count', classname);
});

$('#g').on('click', function(event){
    event.preventDefault();
    let classname = "green";
    socket.emit('count', classname);
});

$('#p').on('click', function(event){
    event.preventDefault();
    let classname = "pink";
    socket.emit('count', classname);
});

socket.on('display', function(classname){
    var body = document.getElementById("body");
    body.classList.remove("white");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("pink");
    body.classList.toggle(`${classname}`);
});


