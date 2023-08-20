import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.scss";
import { Edit } from "./Edit";
import { Route, Router, useNavigate,Link, Routes } from "react-router-dom";
export const User = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const fetchuser = () => {
    axios
      .get("http://localhost:3030/posts")
      .then((data) => {
        setUser(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  function onDelete(e) {
    navigate('/')
    axios
    .delete(`http://localhost:3030/posts/${e.id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    })
  }
  
  useEffect(() => {
    fetchuser();
  }, []);
  return (
    <div className="user_wrape">
      {loading
        ? setLoading(true)(<h1>Loading....</h1>)
        : user.map((item,index) => {
            return (
              <div className="user_block" key={index}>
                <h4>{item.id}</h4>
                <h4>{item.Name}</h4>
                <h4>{item.Lastname}</h4>
                <h4>{item.email}</h4>
                <div className="user_actions">
                  <button onClick={() => onDelete(item)}>DELETE</button>
                  <Link className="edit_btn" to={'/edit/'+ item.id}>EDIT</Link>
                </div>
              </div>
            );
          })}
    </div>
    
  );
  
};
