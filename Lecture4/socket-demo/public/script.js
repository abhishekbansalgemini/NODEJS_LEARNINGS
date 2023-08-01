const socket = io();

$('#chat-box').hide();

$('#send-btn').click(()=>{
   const msgtext =  $("#inp").val();

   socket.emit('send-msg',  {
       msg : msgtext
   })
   $("#inp").val("");
})

socket.on("recieved-msg", (data)=>{
   $('#chat').append(`<li class="border p-2 ms-0 rounded-pill mb-2"><span class="fw-bold">${data.name} : </span> - <span>${data.msg}</span></li>`);
})

$('#login-btn').click(()=>{
   const name = $('#name').val();

   socket.emit('login', {
       name: name
   })

   $("#login").hide();
   $("#chat-box").show();

   $('#name').val("");
})