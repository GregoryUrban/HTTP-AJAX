import React from "react";
import axios from "axios"

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }};

        changeHandler = ev => {
            
            ev.persist()
            let value = ev.target.value
            this.setState(prevState => ({
              friend: { ...prevState.friend, [ev.target.name]: value }
            }))
          }
        
          handleSubmit = event => {
            event.preventDefault()
            axios
              .post("http://localhost:5000/friend", this.state.friend)
              .then(response => {
                this.props.updatefriend(response.data)
              })
              .catch(response => console.log(response))
            // axios post
            // clear the state
          }

          handleDeleteFriend = (id) => {
            axios.delete(`http://localhost:5000/friend/${id}`)
              .then(response => this.setState({ friend: response.data }))
              .catch(err => { throw new Error(err)});
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
                        value={this.state.friend.name}
                      />
                      <div className="baseline" />
                      <input
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="age"
                        value={this.state.friend.age}
                      />
                      <div className="baseline" />
                      <input
                        type="string"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="email"
                        value={this.state.friend.email}
                      />
                      <div className="baseline" />
                      
                      <button type="submit">Add New Friend</button>
                    </form>
                    </div>
                )
            }


    }



export default FriendForm;