

function main(){
    

    let websocket;
    websocket = new WebSocket('ws://localhost:12345');

    websocket.onopen = function(event){
        console.log('connexion établie');
        websocket.send('Hi server');

    }

    websocket.onmessage = function(event){
        console.log('Message reçu : '+ event.data);
    }

    websocket.onclose = function(){
        console.log('Communication terminée');
    }



}
main();
