import React, {useEffect, useState} from 'react'
import { Link, resolvePath } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import '../../assets/css/Login.css'


export default function LoginPage( ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState("");


    Axios.defaults.withCredentials  = true;
    let navigate = useNavigate(); 
    const routeChangeToProfile = () =>{ 
      navigate('/profile');
    }

    useEffect(()=>{
        Axios.get("http://localhost:5000/login").then((response)=>{
            if(response.data.loggedIn){
                setLoginState(response.data.userID)
                console.log(response.data.userID);
                routeChangeToProfile();
            }
            else{
                setLoginState("invalid")
            }
        })
    })

    const login= () => {

        console.log("sending to server");
        console.log("username: ", username);
        console.log("password: ", password);
        Axios.post("http://localhost:5000/login", {
            username: username, 
            password: password 
        }).then((response) => {
            console.log(response);
            console.log(response.data.result);
            if(response.data.result === "approved"){
                routeChangeToProfile();
            }
            else{
                setLoginState("Invalid username/password")
            }

        });
    }

    return (    
        <div align = 'center'>   
            <div className='form-div'>
                <h3>Login to UMS</h3>
                <div className="mb-3">
                <label>UserID:</label>
                <input
                    type="username"
                    className="form-control"
                    placeholder="Enter UserID"
                    required onChange={e => setUsername(e.target.value)}
                />
                </div>
                <div className="mb-3">
                <label>Password:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required onChange={e => setPassword(e.target.value)}
                />
                </div>
                <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                    </label>
                </div>
                </div>
                <div className="d-grid">
                <button className="btn btn-primary" onClick={login}>
                    Login
                </button>
                </div>
                <p className="forgot-password text-right">
                {/* Forgot <a href="#">password?</a> */}
                { loginState }
                </p>
                </div>
        </div>
    )
}