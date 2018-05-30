import React, {Component} from 'react'; 
import './App.css'; 
import SendHello from './SendHello/SendHello'
import ReceiveWorld from './ReceiveWorld/ReceiveWorld'


class App extends Component {
 
  constructor(){
    super()
    this.sendHelloHandler = this.sendHelloHandler.bind(this);
  }

  sendHelloHandler = (event) => {
    fetch('http://172.16.10.40/sendhello')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.text();
    }).then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult);
    })
  }

  receiveWorldHandler = (event) => {
 
  }
 
  getClientIP = (req, res, next) => {
    try {
        var IPs = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        if (IPs.indexOf(":") !== -1) {
            IPs = IPs.split(":")[IPs.split(":").length - 1]
        }

        return res.json({ IP: IPs.split(",")[0] });
    } catch (err) {
        return res.json({ message: 'got error' });
    }
  }

  render() { 

    const styles = {
      baseText: {
        fontFamily: 'Cochin',
      },
      titleText: {
        fontSize: 50,
        fontWeight: 'bold',
      },
      buttonStyle: {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid white',
        padding: '8px',
      }
    };
 
    return (
      <div className="App"> 
     <style>{'body { background-color: black; }'}</style>
     <baseText style={{fontWeight:'bold',  float: 'none', margin: 10 }}>
        <titleText style={{color: 'green'}}>
          <h1>Onda Hello World</h1>
        </titleText>
      </baseText>
        <button style ={{color: 'blue',float: 'none', height: 30, margin: 10}} 
          className='button'
          onClick={this.sendHelloHandler}>SEND HELLO</button>
      <view>
        <text>Hello World!</text>
      </view>
      </div>
    );
  }

 
}

export default App;
