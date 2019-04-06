import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import logo from './logo.svg';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import FriendForm from './Components/FriendForm'
import FriendsList from './Components/FriendsList'
import EditFriendForm from './Components/EditFriendForm'
import './App.css';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  handleUpdateFriendsList = newFriends => {
    console.log('updating friends?')
    this.setState({ friends: newFriends })
  }

  handleEditFriend = (id, name, age, email) => {
    console.log('Click')
    axios
    .put(`http://localhost:5000/friends/${id}`, {
      // define changes before sending to function
      name,
      age,
      email
    })
      .then(resolve => this.setState({ friends: resolve.data }) )
      .catch(err => { throw new Error(err) });
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
    .catch(err => { throw new Error(err)});

  }


  render() {
    return (
      <div className="App">
        <h1>List of Friends!</h1>

        <Route 
        exact path ="/"
        render={props => (
          <FriendsList friends={this.state.friends} deleteFriend={this.handleDeleteFriend} editFriend={this.handleEditFriend} />
        )}
         />

        <Route
         path="/friend-form"
          render={props => (
            <FriendForm {...props} handleUpdateFriendsList={this.handleUpdateFriendsList} />
          )}
        /> 

        <Route
        path="/edit/:id"
        render={props => (
          <EditFriendForm {...props} />
        )}
        />
          

      </div>
    );
  }
}


export default App;