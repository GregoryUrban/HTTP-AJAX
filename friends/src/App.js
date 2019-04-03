import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { resolve } from 'dns';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response.data);
      this.setState({friends: response.data})
    })
    .catch(err => {
      console.log('Sum ting wong', err)
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Get some friends in here!</h1>
      </div>
    );
  }
}

export default App;

// Trashed stuff
{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}