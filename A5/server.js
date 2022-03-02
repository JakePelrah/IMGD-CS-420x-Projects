
const WebSocket = require('ws')
const wsPort =  8181


//Create webserver
const wss = new WebSocket.Server({port: wsPort});

//Register client
wss.on('connection', (ws, req) => {

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Patch connected at:${ip}`)

    ws.on('message', (message) => {

        wss.clients.forEach((client) => {
            if (client !==ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(JSON.parse(message)))
            }
        })
    })
})
