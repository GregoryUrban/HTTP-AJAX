import React from 'react';

const FriendsList = props => (
    <div className="list">
        {props.friends.map(friends => (
            <div key={friends.id}>
                <p><span>Name:</span> {friends.name}</p>
                <p><span>Age:</span> {friends.age}</p>
                <p><span>Email:</span> {friends.email}</p>
                <span onClick={() => props.deleteFriend(friends.id)}>X</span>
            </div>
        ))}
    </div>
);
export default FriendsList;