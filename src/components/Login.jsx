import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { loginUser, reset} from "../features/authSlice";
import logo from "../logo.png"

const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(loginUser({email, password}));
    };

  return (
    
    <section className="hero has-background-grey-light is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-black">Login</h3>
                    <hr className="login-hr"/>
                    <p className="subtitle has-text-black">Please login to proceed.</p>
                    <div className="box">
                        <figure className="avatar">
                            <img src={logo} width="110" height="32" alt='logo'/>
                        </figure>
                        <form onSubmit={Auth}>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input is-medium" 
                                        type="email" 
                                        placeholder="Your Email"
                                        value={email} 
                                        onChange={(e)=>setEmail(e.target.value)} 
                                        autoFocus=""
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input 
                                        className="input is-medium" 
                                        type="password" 
                                        value={password} 
                                        onChange={(e)=>setPassword(e.target.value)} 
                                        placeholder="Your Password"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="checkbox">
                  <input type="checkbox"/> 
                  Remember me
                </label>
                            </div>
                            <button 
                                className="button is-block is-info is-medium is-fullwidth"
                                type='submit'
                            >
                                {isLoading ? "Loading..":"Login"} 
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                    <p className="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                       {isError && <p className='has-text-centered'>{message}</p>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login