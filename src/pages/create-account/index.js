import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import data from '../../components/utils/data';
import { useNavigate } from "react-router-dom";
import './create.css'

function CreateAccount() {
    //hooks
    let navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState(false);
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [isLoading, setisLoading] = useState(false)

    //functions
    const createAccount = (e) => {
        e.preventDefault();
        setisLoading(true)
        seterror(false);
        setnameError("");
        setemailError("");
        setpasswordError("");
        
        
        validate()

        if(validate()) {
            const obj = {
                name,
                email,
                password
            }
            data.push(obj)
            navigate('/data')
        }
        setisLoading(false)
        
    }
    
    const validate = () => {
        let isValid = true;
        let nameExp = /^[a-zA-Z\s]+$/;
        let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!name || !email || !password) {
            isValid = false;
            seterror(true)
        }

        if(!nameExp.test(name)) {
            isValid = false;
            setnameError("Invalid name given.")
        } 
        if(!emailExp.test(email)) {
            isValid = false;
            setemailError("Invalid email given.")
        } 
        if(password.length < 6 ) {
            isValid = false;
            setpasswordError("Password must be at least 6 characters")
        }

        return isValid;
    }



  return (
    <div>
         <Navbar />
         <div className="main">

           <form className="form" onSubmit={createAccount}>
                <div>
                    <h1>Create Account</h1>
                    {error && (
                        <p className="error">Incomplete/Invalid Credentials</p>
                    )}
                </div>
                <div>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="input" placeholder="Name"/>
                    <p className="error">{nameError !== "" ? nameError : ""}</p>
                </div>
                <div>
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)}className="input" placeholder="Email"/>
                    <p className="error">{emailError ? emailError : ""}</p>
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="Password"/>
                    <p className="error">{passwordError ? passwordError : ""}</p>
                </div>

               <div>
                   <button className="btn btn-primary" type="submit">{isLoading ? "Loading..." : "Create Account"}</button>
               </div>
           </form>
         </div>
    </div>
  )
}

export default CreateAccount