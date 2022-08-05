let chat = new EventSource("/chat");

chat.addEventListener("chat", event => {
  console.log(event.data);
});
