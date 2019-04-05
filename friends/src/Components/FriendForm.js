import React from "react";
import axios from "axios"

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }
        }};

        changeHandler = ev => {
            
            ev.persist()
            let value = ev.target.value
            this.setState(prevState => ({
              friends: { ...prevState.friends, [ev.target.name]: value }
            }))
          }
        
          handleSubmit = event => {
            event.preventDefault()
            axios
              .post("http://localhost:5000/friends", this.state.friends)
              .then(response => {
                this.props.updateFriends(response.data)
              })
              .catch(err => console.log(err))
            // axios post
            // clear the state
          }
        

            render() {
                return(
                    <div>
                    <h2>Add New Friend</h2>
                    <form onSubmit={this.handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="name"
                        value={this.state.friends.name}
                      />
                      <div className="baseline" />
                      <input
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="age"
                        value={this.state.friends.age}
                      />
                      <div className="baseline" />
                      <input
                        type="string"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="email"
                        value={this.state.friends.email}
                      />
                      <div className="baseline" />
                      
                      <button type="submit">Add New Friend</button>
                    </form>
                    </div>
                )
            }


    }



export default FriendForm;