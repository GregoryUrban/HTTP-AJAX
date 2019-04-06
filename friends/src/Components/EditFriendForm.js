import React from "react";
import axios from "axios"

class EditFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
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
        
          handleSubmitEdit = id => {
            const {name, age, email} = this.state.friends
            console.log(name,age,email)
            axios
            .put(`http://localhost:5000/friends/${id}`, {name, age, email})
            .then(response => {
                console.log('put!',response);
                this.props.history.push('/');
            })
            .catch(err => { throw new Error(err) });
          }

            render() {
                return(
                    <div>
                    <h2>Edit Friend</h2>
                    <form onSubmit={() => this.handleSubmitEdit(this.state.id)}>
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
                      
                      <button>Edit Friend</button>
                    </form>
                    </div>
                )
            }


    }



export default EditFriendForm;