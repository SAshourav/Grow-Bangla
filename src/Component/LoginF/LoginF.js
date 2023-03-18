import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const LoginF = () => {
    const [user , setUser] = useState({});
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/homeF');
    }
    const signupHandler = () =>{
      navigate('/signupF')
    }
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
        .then(result => {
          const user = result.user;
          setUser(user);
          navigate('/homeF');
        })
        .catch(error => {
          console.error(error);
        })
    }
    return (
        <div>
            <div className="login-container">
                <h3>Welcome Back To Grow Bangla Sir!</h3>
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Farmer-ID</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button onClick={loginHandler} type="submit">Login</button>
                    <p onClick={handleGoogleSignIn} className='button-icon'>Google</p>
                    <Link className='forgot' to='/forgotPage'>Forgot Password ?</Link>
                    <p>Or , Create An Account</p>
                    <button onClick={signupHandler}>SignUp</button>
                </form>
            </div>
        </div>
    );
};

export default LoginF;