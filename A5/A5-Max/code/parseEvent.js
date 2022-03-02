
function anything()
{
	const event = arrayfromargs(messagename, arguments)

	//post(event)
	
	var type = event[1]
	var val1 = event[2]
	var val2 = event[3]
	
	switch(type)
	{
		//channel 9 note on 
		case 152:
			outlet(0, 'sendMIDI', JSON.stringify({ type:'note', note:val1, velocity:val2}))
			break
			
		// modulation wheel
		case 184:
			outlet(0, 'sendMIDI', JSON.stringify({ type:'mod', value:val2}))
			break
			
		case 232:
			outlet(0, 'sendMIDI', JSON.stringify({ type:'bend', value:val2}))
			break

	}



	
	
}