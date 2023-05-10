import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const handleAddUser = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
  
    fetch('http://localhost:5000/users',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('User Added Successfully')
        form.reset()
      }
    })

  }

  return (
    <>
    <Link to="/users">Users</Link>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="Add user" />
      </form>
      
    </>
  )
}

export default App
