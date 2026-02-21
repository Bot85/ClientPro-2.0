import React, { useState } from 'react'
import img from "../assets/avi_banner..png"
import './login.css'

const Logpage = () => {

    const[formdata,setformdata]=useState({
        email:"",
        password:"",
    });

    const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(formdata);
    }

    return (
        <div className="login">
            <img src={img} alt="Avinash Institute Logo" width={300} />
            <h1>AVINASH INSTITUTE OF EDUCATION</h1>

            <form onSubmit={handlesubmit}>
                <input type="email" value={formdata.email} onChange={(e) => setformdata({...formdata,[e.target.name]:e.target.value})} name="email" placeholder="Email" required />
                <input type="password" value={formdata.password} onChange={(e) => setformdata({...formdata,[e.target.name]:e.target.value})} name="password" placeholder="Password" required />

                <div className="login-links">
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <p>
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </form>
        </div>
        // <div className='login'>

        //     <img src={img} width={200} />
        //     <h1>AVINASH INSTITUDE OF EDUCATION</h1>
        // <form action="post">
        //     <input type="text" id="Email" placeholder='Email' /> <br /> <br />
        //     <input type='password' id="password" placeholder='password' />
        //     <a href='#' >Forget Passowrd</a> <br /><br />
        //     <button>Login</button> <br />
        //     don't have an account? <a href='#'>Sign up</a>
        // </form> 

        // </div>


    )
}

export default Logpage
