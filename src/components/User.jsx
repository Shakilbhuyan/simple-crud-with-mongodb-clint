import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const lodedUsers = useLoaderData();
    const [users, setUsers] = useState(lodedUsers);
    const handleDelete = _id =>{
             console.log(_id)
             fetch(`http://localhost:5000/users/${_id}`, {
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining)
                    alert('Deleted Successfully')
                }
             })
    }  
    return (
        <div>
             <Link to="/">Home</Link>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <div key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={ () => handleDelete(user._id)}>X</button></div>)
                }
            </div>
        </div>
    );
};

export default User;