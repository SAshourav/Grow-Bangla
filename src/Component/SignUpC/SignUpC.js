import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from "firebase/auth";
import './SignUpC.css';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const SignUpC = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleRegistration = (event) => {
        event.preventDefault();
        
        setSuccess(false);

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //Validating password

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please Provide at least two upper case characters');
            return;
        }
        if(password.length < 8){
            setPasswordError('Password must be at least 8 characters');
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result)=> {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail();
                updateUserName(name)
            })
            .catch((error) => {
                console.error(error);
                setPasswordError(error.message);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Please Check your email and verify");
            })
            .catch((error) => {
                console.error(error);
            })
    }
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log("name updated");
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div className='body'>
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegistration} className='signUpForm'>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    {success && <p className='text-success'>User Created Successfully !!</p>}
                    <p className='text-danger'>{passwordError}</p>
                    <button type="submit">Sign Up</button>
                </form>
                </div>
        </div>
    );
};

export default SignUpC;