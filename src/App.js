import React, {Component} from 'react'; 
//import './App.css'; 

// class App extends Component {

//   state = {
//     response: ''
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello', {mode:'no-cors'});
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   }
//   render() { 
 
//     return (
//     <div className="App"> 
//     <style>{'body { background-color: black; }'}</style>
//     <p style={{fontWeight:'bold', color: 'green',  float: 'none', margin: 10 }}>
//           Onda Hello World </p> 
//     <button  className='button' style ={{color: 'black', height: 30, margin: 0}} onClick={this.callApi}>SEND HELLO</button>
//     <p className="remoteResponse">{this.state.response}</p>
//     </div>
//     );
//   }

 
// }

// export default App;
