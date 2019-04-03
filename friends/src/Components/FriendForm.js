import React from "react";

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }
        };
    }



export default FriendForm;