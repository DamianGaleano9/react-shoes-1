import React, { useState } from "react";
import { Axios } from "axios";



function Login() {

    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [resgisterStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:4000/register", {
            email: email,
            userName: userName,
            password: password,

        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
            }
        })

    }

        const login = (e) => {

        }

        return (
            <div className="wrapper-form">
                <div className="login-form">
                    <form>
                        <h3>LOGIN</h3>
                        <label htmlFor="username">Username*</label>
                        <input className="textInput" type="text" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholer="Enter Your name" required />
                        <label htmlFor="password">Password</label>
                        <input className="textInput" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required />
                        <input className="button" type="submit" onClick={register} value="login" />
                    </form>

                </div>

                <div className="login-form">
                    <form>
                        <h3>REGISTER</h3>
                        <label htmlFor="email">Email Address*</label>
                        <input className="textInput" type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholer="Enter Your email" required />
                        <label htmlFor="username">Username</label>
                        <input className="textInput" type="username" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholer="Enter Your Username" required />
                        <label htmlFor="password">Password</label>
                        <input className="textInput" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required />
                        <input className="button" type="submit" onClick={register} value="Create an account" />
                    </form>

                </div>

            </div>
        )
    }

export default Login;