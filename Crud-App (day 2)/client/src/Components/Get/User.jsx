import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import "./User.css";
import toast from 'react-hot-toast'
const User = () => {
  const [users, setUesrs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUesrs(response.data);
    };

    fetchData();
  }, []);

  const deleteUser=async(userID)=>{
    await  axios.delete(`http://localhost:8000/api/delete/${userID}`)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"});
      setUesrs((prevUser)=>prevUser.filter((user)=>user._id!==userID))
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  
  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>User Name</th>
            <th> User Email </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td className="actionButton">
                  <button onClick={()=>deleteUser(user._id)}>
                    <MdDelete />
                  </button>
                  <Link to={`/edit/`+user._id}>
                    <FaEdit />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
