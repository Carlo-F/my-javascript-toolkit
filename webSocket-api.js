let socket = new WebSocket("wss://example.com/service");

//listen
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
});

//send
socket.send('Message from client');

//close connection
socket.close();
