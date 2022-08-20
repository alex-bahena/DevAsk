import React from "react";
import { size, map } from "lodash";
import "./ListUsers.scss";

export default function ListUsers(props) {
    const {users, setShowModal} = props;
    
  return (
    <div className='list-users'>
        {size(users) === 0 ? (
            <p className="list-users__not-users"> No users found</p>
        ) : (
         map(users, (user, index) => (
           <div key={index}>
            <h2>{user.name}</h2>
           </div>
    
     ))
        )}
    </div>
  );
}
