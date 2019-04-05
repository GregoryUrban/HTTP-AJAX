import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import logo from './logo.svg';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import FriendForm from './Components/FriendForm'
import FriendsList from './Components/FriendsList'
import './App.css';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  updateFriends = newFriends => {
    console.log('updating friends?')
    this.setState({ friends: newFriends })
  }

  handleDeleteFriend = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(err => { throw new Error(err)});
  }


  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(err => {
      console.log('Sum ting wong', err)
    })
  }


  render() {
    // const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
    return (
      <div className="App">
        <h1>List of Friends!</h1>
        {/* {this.state.friends.map(friend => (
          <ul>Name: {friend.name}, Age: {friend.age}, Email: {friend.email}</ul>
        ))
        } */}
        <Route exact path="/" />
        <Route 
        path ="/friends"
        render={props => (
          <FriendsList friends={this.state.friends} deleteFriend={this.handleDeleteFriend} editFriend={this.updateFriends} />
        )}
         />

        <Route
          path="/friend-form"
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
            // ,
            // <FriendsList friends={this.state.friends} deleteFriend={this.handleDeleteFriend} />
          )}
        /> 

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