import React, { useEffect } from "react";
import "./Edit.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export const Edit = () => {
    const paramId = useParams();
    // console.log(paramId); 
    const [error,setErorr] = useState(false)
    const navigate = useNavigate()
    const [id,setId] = useState(0)
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    // useEffect(() => {
    //     fetch(`http://localhost:3030/posts/${Id}`).then((res) => {
    //         console.log(res)
    //     })
        
    // })
  useEffect(()=> {
    // handleSumbit()
    setId(paramId)   
  })
   function navToHome() {
    navigate('/')
   }
    function handleSumbit(e){
      let status = true
        // e.preventDefault();
        // const emptData = [name,lastName,email]
        navigate('/')
        axios
        .put(`http://localhost:3030/posts/${id.id}`,{
          Name: name,
          Lastname:lastName,
          email:email,
        })
        
        .then((data) => {
            console.log(data);
            // if(data.data.Name.length === 0){
            //   data = error
            //   status = false
            // }
        })
        .catch((e) => {
            toast.error("Error in Edit" + e.message)
            console.log(e);
        })
    }
  return (
    <div>
      <div className="edit_user_wrape">
        <h1>Edit</h1>
        <form onSubmit={handleSumbit}>
          <label>
            id:{id.id}
            <input disabled type="text" onChange={(e) =>  setId(e.target.value)} value={id.id} />
          </label>
          <label>
            Name:
            <input type="text" onChange={(e) => setName(e.target.value)} className={name === "" ? "error_message" : null}/>
          </label>
          <label>
            Lastname:
            <input type="text" onChange={(e) => setLastName(e.target.value)} className={lastName === "" ? "error_message" : null} />
          </label>
          <label>
            Email:
            <input type="text" onChange={(e) => setEmail(e.target.value)} className={email === "" ? "error_message" : null} />
          </label>
        </form>
        <div className="btns_wrape" style={{ display: "flex", gap: "30px" }}>
          <button onClick={handleSumbit} disabled ={name === "" || email === "" || lastName === ""}>Save</button>
          <button className="back_btn" onClick={navToHome}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
