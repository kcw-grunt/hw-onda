const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const ax25 = require('./src/ax25');
const tnc = new ax25.kissTNC({ serialPort : "/dev/ttyUSB0", baudRate : 9600 } );
tnc.on('frame', (frame) => { let packet = new ax25.Packet({ frame : frame }); console.log(`src : ${packet.sourceCallsign}, dst : ${packet.destinationCallsign}, inf : ${packet.infoString}`; });
tnc.on('error', (err) => console.log('error' + err));

app.get('/api/hello', (req, res) => {
  res.send({ response: 'World' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));