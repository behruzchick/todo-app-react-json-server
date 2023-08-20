import React, { useState } from "react";
import "./Create.scss";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export const Create = () => {
    const navigate = useNavigate()
    const [id,setId] = useState([])
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    

    

   function navToHome() {
    navigate('/')
   }
    function handleSumbit(e){
        e.preventDefault();
        const emptData = [name,lastName,email]
        navigate('/')
        axios
        .post("http://localhost:3030/posts",{
            Name: name,
            Lastname:lastName,
            email:email
        })
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        })
    }
  return (
    <div className="create_user_wrape">
      <form onSubmit={handleSumbit}>
        <label>
          id:
          <input disabled type="text" />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={name === "" ? "error_message" : null}/>
        </label>
        <label>
          Lastname:
          <input type="text"onChange={(e) => setLastName(e.target.value)} className={lastName === "" ? "error_message" : null} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} className={email === "" ? "error_message" : null}/>
        </label>
      </form>
      <div className="btns_wrape" style={{display:"flex", gap:"30px"}}>
         <button onClick={handleSumbit}  disabled ={name === "" || email === "" || lastName === ""}>Save</button>
         <button className="back_btn" onClick={navToHome}>Back</button>
      </div>

    </div>
  );
};
