import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import './SignUpC.css';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const SignUpC = () => {
    const handleRegistration = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result)=> {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className='body'>
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegistration} className='signUpForm'>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Sign Up</button>
                </form>
                </div>
        </div>
    );
};

export default SignUpC;