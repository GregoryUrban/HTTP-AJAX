import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = props => (

    <div className="list-container">
    <Link to="/friend-form" className="add-button">Add Yo Friend</Link>
    <div className="list">
        {props.friends.map(friend => (
            <div key={friend.id}>
                <p><span>Name:</span> {friend.name}</p>
                <p><span>Age:</span> {friend.age}</p>
                <p><span>Email:</span> {friend.email}</p>
                <span onClick={() => props.deleteFriend(friend.id)}>Delete Friend</span>
                <Link to={`/edit/${friend.id}`}>Edit Friend</Link>

            </div>
        ))}
    </div>
</div>
);
export default FriendsList;