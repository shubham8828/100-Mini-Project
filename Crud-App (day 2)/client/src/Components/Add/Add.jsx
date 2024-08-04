import React, { useState } from "react";
import "./Add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import { TiArrowBack } from "react-icons/ti";



const Add = () => {

    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user,setUser]=useState(users);
    const navigate=useNavigate();
    
    const inputHandler=(e)=>{

        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }

    const submitForm=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user)
        .then(()=>{
          toast.success('User Created Successfully',{position:"top-right"})
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        });
            } 
  return (
    <div className="addUser">
      <Link to={"/"}>
      <button ><TiArrowBack  style={{fontSize:'20px'}}/></button>
      
      </Link><Link to={"/"}>
      <button ><TiArrowBack  style={{fontSize:'20px'}}/></button>
      
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroups">
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            id="fname"
            onChange={inputHandler}
            name="fname"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>
        <div className="inputGroups">
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            onChange={inputHandler}
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>
        <div className="inputGroups">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroups">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={inputHandler}
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="inputGroups">
            <button>Add User</button>
        </div>
      </form>
    </div>
  );
    }


export default Add
