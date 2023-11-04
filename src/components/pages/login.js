import React, { useState} from "react";
import { Axios } from "axios";



function Login() {
    return(
        <div className="wrapper-form">
            <div className="login-form">
                <form>
                    <h3>LOGIN</h3>
                    <label htmlFor="username">Username</label>
                    <input className="textInput" type="text"name="username" placeholer="Enter Your name" required/>
                    <label htmlFor="password">Password</label>
                    <input className="textInput" name="password" placeholder="Enter your password" required/>
                    <input className="button" type="submit" value="login"/>
                </form>
                
            </div>

            <div className="login-form">
                <form>
                    <h3>REGISTER</h3>
                    <label htmlFor="email">Email Address</label>
                    <input className="textInput" type="text" name="email" placeholer="Enter Your email" required/>
                    <label htmlFor="username">Username</label>
                    <input className="textInput" type="username" name="username" placeholer="Enter Your Username" required/>
                    <label htmlFor="password">Password</label>
                    <input className="textInput" name="password" placeholder="Enter your password" required/>
                    <input className="button" type="submit" value="Create an account"/>
                </form>
                
            </div>
            
        </div>
    )
}

export default Login;