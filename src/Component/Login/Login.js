import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [user , setUser] = useState({});
    const navigate = useNavigate();
    const signupHandler = () =>{
      navigate('/signupC')
    }
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
        .then(result => {
          const user = result.user;
          setUser(user);
          navigate('/home');
        })
        .catch(error => {
          console.error(error);
        })
    }
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleLogin = (event) => {
      event.preventDefault();
      setSuccess(false);
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setSuccess(true);
        })
        .catch(error => {
          console.error(error);
        })
    }
    const handleEmailBlur = (event) => {
      const email = event.target.value;
      setUserEmail(email);
      console.log(email);
    }
    const handleForgotPassword = () => {
      if(!userEmail){
        alert("Please enter your email");
        return;
      }
      sendPasswordResetEmail(auth, userEmail)
        .then( () => {
          alert('Password reset email sent successfully');
        })
        .catch(error => {
          console.error(error);
        })
    }
  return (
    <div className="login-container">
      <h3>Welcome Back To Grow Bangla !</h3>
      <h2>Login</h2>
        <form onSubmit={handleLogin} className='signUpForm'>
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign-In</button>
            <p>Sign-in with Other Services</p>
            <p onClick={handleGoogleSignIn} className='button-icon'>Google</p>
            <button onClick={handleForgotPassword} type='button' className='btn link-btn'>Forgot Password?</button>
            <p>Or , Create An Account</p>
            <button onClick={signupHandler}>SignUp</button>
          </form>
      
    </div>
  );
}

export default Login;
