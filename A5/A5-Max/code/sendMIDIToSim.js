const Max = require('max-api')
const WebSocket = require('ws')

const serverUrl = 'ws://localhost:8181'


let ws
let clientName = ''

//////////////////////////// Max Handlers ////////////////////////////
Max.addHandler('connect', () =>
{

    //Connect to the server
    ws = new WebSocket(serverUrl);


	//Register a new user
    ws.onopen = (event) =>
	{
    	console.log(`Connected to ${serverUrl}`)
	}

    //Close connection
    ws.onclose = (event) =>
	{
        console.log(`Disconnected from ${serverUrl}`)
    }

    //Output message from the server
    ws.onmessage = (event) =>
	{
        ws.send(event.data)
    }
})


//Send message to remove user from server and close connection
Max.addHandler('disconnect', () =>
{
    ws.close()
})


Max.addHandler('sendMIDI', (data) =>
{
	
    ws.send(data)
})



