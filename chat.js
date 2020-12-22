var socket = io.connect("http://localhost:2828");

var message=document.getElementById("message");
var button=document.getElementById("send");
var username=document.getElementById("username");
var output=document.getElementById("output");

button.addEventListener('click',function(){
    socket.emit('sendingmessage',{
        'message':message.value,
        'username':username.value,
    });
});

socket.on("broadcastingmessage",function(data){
    output.innerHTML += "<p><strong>"+data.username+":</strong>"+data.message+"</p>";
});