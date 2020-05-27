import websockets
import asyncio
import html


async def clientHandler(websocket, path):
    name = await websocket.recv()
    global clients
    clients.add(websocket)
    for client in clients:
        await client.send("<i>{}</i> à rejoint la conversation.".format(name))

    while True:
        try:
            messageEnCours = await websocket.recv()
           
            messageTosend = "<b>{} :</b> {}".format(name, messageEnCours)
            for client in clients:
                await client.send(messageTosend)
        except:
            clients.remove(websocket)
            for client in clients:
                    await client.send("<i>{}</i> s'est déconnecté".format(name))
        



clients = set()
server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()


# if messageEnCours == "Débutécriture":
#               for client in clients:
#                   await client.send( "<i>{}</i> est en train d'écrire ...".format(name))
#           else:
#              for client in clients:
#                    await client.send("Finécriture")     