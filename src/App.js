import React, {Component} from 'react'; 
import './App.css'; 
 

class App extends Component {
 
  // constructor(){
  //   super()
  //   this.sendHelloHandler = this.sendHelloHandler.bind(this);
  // }


  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello', {mode:'no-cors'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  connectTNC = async () => {
      var ax25 = require("ax25");

      var tnc = new ax25.kissTNC(
        {	serialPort : "COM3",	// Serial device, eg. "COM3" or "/dev/ttyUSB0"
          baudRate : 9600			// Serial comms rate between computer and TNC
        }
      );

      tnc.on(
        "frame",
        function(frame) {
          console.log("Here's an array of bytes representing an AX.25 frame: " + frame);
        }
      );

      tnc.on(
        "error",
        function(err) {
          console.log("HURRRRR! I DONE BORKED!" + err);
        }
      );
    
  }

  // sendHelloHandler = (ipadd, event) => {
  //   fetch('http://172.16.10.40:3001/api/hello', {mode: 'no-cors'})
  //   .then((result) => {
  //     // Get the result
  //     // If we want text, call result.text()
  //     return result.text();

  //   }).then((jsonResult) => {
  //     // Do something with the result
  //     console.log(jsonResult);
  //   })
  // }

  // receiveWorldHandler = (event) => {
 
  // }
 
  // getClientIP = (req, res, next) => {
  //   try {
  //       var IPs = req.headers['x-forwarded-for'] ||
  //           req.connection.remoteAddress ||
  //           req.socket.remoteAddress ||
  //           req.connection.socket.remoteAddress;

  //       if (IPs.indexOf(":") !== -1) {
  //           IPs = IPs.split(":")[IPs.split(":").length - 1]
  //       }

  //       return res.json({ IP: IPs.split(",")[0] });
  //   } catch (err) {
  //       return res.json({ message: 'got error' });
  //   }
  // }

  render() { 
 
    return (
    <div className="App"> 
    <style>{'body { background-color: black; }'}</style>
    <p style={{fontWeight:'bold', color: 'green',  float: 'none', margin: 10 }}>
          Onda Hello World </p> 
    <button  className='button' style ={{color: 'black', height: 30, margin: 0}} onClick={this.callApi}>SEND HELLO</button>
    <p className="remoteResponse">{this.state.response}</p>

    <button  className='button' style ={{color: 'black', height: 30, margin: 0}} onClick={this.connectTNC}>Connect</button>
    </div>
    );
  }

 
}

export default App;
