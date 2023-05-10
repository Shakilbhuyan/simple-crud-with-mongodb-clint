import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loddedData = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};

        fetch(`http://localhost:5000/update/${loddedData._id}`,{
             method: 'PUT',
             headers: {
                'content-type' : 'application/json'
             },

             body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('updated successfully')
            }
            
        })
        
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Update information of {loddedData.name}</h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loddedData?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loddedData?.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;