

var login;
var websocket;
document.getElementById("buttonSend").addEventListener("click", sendMessage);

document.getElementById("message_input").addEventListener("click", messageWhile);


function Login(){
    login= prompt("pseudo");
    console.log(login);
}


function createWebsocket(){

    websocket = new WebSocket('ws://localhost:12345');
    websocket.onopen = function(event){
        console.log('connexion établie');
        websocket.send(login);
    }

    var chat_window = document.getElementById("chat");
    websocket.onmessage = function(message){
        if (message.data == "Finécriture")
        {
            chat_window.removeChild(chat_window.lastChild);
        }
        else{
            chat_window.innerHTML += '<p>' + message.data + '</p>';
            chat_window.scrollTop = chat_window.scrollHeight;
        }
        
    }
}

Login();
createWebsocket();


function sendMessage(){
    
    var message_input = document.getElementById("message_input");
    websocket.send(message_input.value);
    message_input.value = "";
}


function messageWhile(){
   
    //websocket.send("Débutécriture");
    
}
