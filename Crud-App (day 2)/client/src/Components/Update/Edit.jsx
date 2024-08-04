import React ,{useEffect, useState} from 'react'
import '../Add/Add.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { TiArrowBack } from "react-icons/ti";

const Edit = () => {

  
  const users={
    fname:"",
    lname:"",
    email:"",
    password:""
}
const [user,setUser]=useState(users);

  const {id}=useParams();
  const navigate=useNavigate();
      
  const inputHandler=(e)=>{

    const {name,value}=e.target;
    setUser({...user,[name]:value})
    console.log(user)

  }
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>console.log(error));
  },[id])

  
  const submitForm=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"})
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
    </Link>
    <h3>Update User</h3>
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
          value={user.fname}
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
          value={user.lname}

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
          value={user.email}

        />
      </div>
      
      <div className="inputGroups">
          <button>Update User</button>
      </div>
    </form>
  </div>  )
}

export default Edit