import React, { useEffect, useState } from "react";
import {auth,provider} from "../firebase";
import {signInWithPopup} from "firebase/auth";
import Header from "./Header";

function Login(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
      <Header></Header>
      <h1>Hey {value}!</h1>
      <div className="login-outercontainer">
        <div className="login-innercontainer">
          <div className="login-container">
            <div className="login-container_item">
                <a href="#feed"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg><button className="buttonnostyle" onClick={handleClick}>Inloggen met Google</button></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
export default Login;